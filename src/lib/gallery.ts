import fs from "node:fs";
import path from "node:path";

export type GalleryCategory =
  | "All"
  | "Living Room"
  | "Full Kitchen"
  | "Dining Area"
  | "Bedroom 1"
  | "Bedroom 2"
  | "Bathroom 1"
  | "Bathroom 2"
  | "Exterior";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  aspect: "portrait" | "landscape" | "wide";
};

type GalleryFolder = {
  category: Exclude<GalleryCategory, "All">;
  folder: string;
};

export const galleryFolders: GalleryFolder[] = [
  { category: "Living Room", folder: "living-room" },
  { category: "Full Kitchen", folder: "kitchen" },
  { category: "Dining Area", folder: "dining" },
  { category: "Bedroom 1", folder: "bedroom-1" },
  { category: "Bedroom 2", folder: "bedroom-2" },
  { category: "Bathroom 1", folder: "bathroom-1" },
  { category: "Bathroom 2", folder: "bathroom-2" },
  { category: "Exterior", folder: "exterior" }
];

export const galleryCategories: GalleryCategory[] = ["All", ...galleryFolders.map((item) => item.category)];

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"]);
const reservedFallbackImages = new Set(["florants-hero-fallback.svg"]);
const aspectCycle: GalleryImage["aspect"][] = ["landscape", "portrait", "wide", "landscape"];

function publicImagesPath(folder: string) {
  return path.join(process.cwd(), "public", "images", folder);
}

function readPublicImages(folder: string) {
  const folderPath = publicImagesPath(folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        imageExtensions.has(path.extname(entry.name).toLowerCase()) &&
        !reservedFallbackImages.has(entry.name)
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function toPublicImageUrl(folder: string, fileName: string) {
  return `/images/${folder}/${fileName
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

export function getHeroImages() {
  const heroImages = readPublicImages("hero").map((fileName, index) => ({
    id: `hero-${fileName}`,
    src: toPublicImageUrl("hero", fileName),
    alt: index === 0 ? "Florants Residence premium living space" : `Florants Residence hero view ${index + 1}`
  }));

  return heroImages.length > 0
    ? heroImages
    : [{ id: "hero-fallback", src: "/images/hero/florants-hero-fallback.svg", alt: "Florants Residence" }];
}

export function getHostImage() {
  const images = readPublicImages("host");
  return images[0] ? toPublicImageUrl("host", images[0]) : "/images/host/aldrin.svg";
}

export function getLogoImage() {
  const images = readPublicImages("logo");
  const transparentMark = images.find((image) => image.toLowerCase() === "florants-mark.svg");
  return transparentMark
    ? toPublicImageUrl("logo", transparentMark)
    : images[0]
      ? toPublicImageUrl("logo", images[0])
      : "/images/logo/florants-mark.svg";
}

export function getGalleryImages(): GalleryImage[] {
  return galleryFolders.flatMap(({ category, folder }, folderIndex) =>
    readPublicImages(folder).map((fileName, imageIndex) => ({
      id: `${folder}-${fileName}`,
      src: toPublicImageUrl(folder, fileName),
      alt: `${category} at Florants Residence`,
      category,
      aspect: aspectCycle[(folderIndex + imageIndex) % aspectCycle.length]
    }))
  );
}
