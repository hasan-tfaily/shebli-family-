export type StrapiFile = {
  url?: string;
  alternativeText?: string | null;
  width?: number | null;
  height?: number | null;
  formats?: unknown;
};

// Supports common Strapi media shapes:
// - string URL (absolute or relative)
// - v4: { data: { attributes: { url } } }
// - v5/flat: { url: "/uploads/..." }
// - array of flat objects: [{ url: "/uploads/..." }]
export type StrapiMediaSingle =
  | string
  | StrapiFile
  | StrapiFile[]
  | {
      data?:
        | {
            attributes?: StrapiFile;
          }
        | Array<{
            attributes?: StrapiFile;
          }>;
    };

export function toAbsoluteStrapiUrl(url: string | undefined | null): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `http://46.62.246.5:1337${url}`;
}

const PLACEHOLDER_IMAGE = "/image/placeholder.jpg";

export function getStrapiMediaUrl(media: StrapiMediaSingle | undefined | null): string {
  if (!media) return PLACEHOLDER_IMAGE;
  if (typeof media === "string") return toAbsoluteStrapiUrl(media) ?? PLACEHOLDER_IMAGE;

  // Array of flat objects (like your debug output)
  if (Array.isArray(media)) {
    return toAbsoluteStrapiUrl(media[0]?.url) ?? PLACEHOLDER_IMAGE;
  }

  // Flat object with url
  const maybeFile = media as any;
  if (typeof maybeFile?.url === "string") {
    return toAbsoluteStrapiUrl(maybeFile.url) ?? PLACEHOLDER_IMAGE;
  }

  // v4 data object or v4 data array
  const data: any = (media as any).data;
  if (Array.isArray(data)) {
    return toAbsoluteStrapiUrl(data[0]?.attributes?.url) ?? PLACEHOLDER_IMAGE;
  }
  return toAbsoluteStrapiUrl(data?.attributes?.url) ?? PLACEHOLDER_IMAGE;
}

export function getStrapiMediaAlt(media: StrapiMediaSingle | undefined | null): string {
  if (!media || typeof media === "string") return "";

  if (Array.isArray(media)) {
    return (media[0]?.alternativeText ?? "") as string;
  }

  const maybeFile = media as any;
  if (maybeFile?.alternativeText) return String(maybeFile.alternativeText);

  const data: any = (media as any).data;
  if (Array.isArray(data)) {
    return (data[0]?.attributes?.alternativeText ?? "") as string;
  }
  return (data?.attributes?.alternativeText ?? "") as string;
}

/**
 * Get Strapi media URL with a fallback for undefined values
 * This version returns a placeholder image if no media is found
 */
export function getStrapiMediaUrlOrFallback(
  media: StrapiMediaSingle | undefined | null,
  fallback: string = "/image/placeholder.jpg"
): string {
  const url = getStrapiMediaUrl(media);
  return url ?? fallback;
}
