import apiService from "@/lib/strapi/apiService";

export type StrapiPopulate = string[];
export type StrapiEntity<T> = { id: number } & (T | { attributes: T });

export type StrapiBrand = {
  name: string;
  slug?: string;
  description?: string;
  Hero?: {
    title?: string;
    description?: string;
  };
  section?: {
    title?: string;
    miniTitle?: string;
    description?: string;
    img?: string
    imageScroll?: string[];
    featuredItems?: {
      title?: string;
      link?: string;
      img?: string;
      Body?: string;
      list?: string[];
    }[];
    list?: string[];
    ButtonLinks?: { url?: string; link?: string }[];
  }[];
  
};

export type StrapiBrandResponse = {
  data: Array<StrapiEntity<StrapiBrand>>;
};

export function unwrapAttributes<T>(entity: StrapiEntity<T> | null | undefined): T | null {
  if (!entity) return null;
  const maybe: any = entity;
  return (maybe.attributes ?? maybe) as T;
}

type Options = {
  brandName: string;
  populate?: StrapiPopulate;
  /** Next.js caching controls; default keeps it always fresh for testing */
  revalidate?: number;
};

/**
 * Build Strapi REST params in the "Postman style" you already use:
 * - filters[name][$eq]
 * - populate[0]=Hero, populate[1]=section, ...
 */
function buildBrandQueryParams(brandName: string, populate: StrapiPopulate = ["*"]) {
  const params: Record<string, string> = {
    "filters[name][$eq]": brandName,
  };

  // If user passed ["*"] keep it simple.
  if (populate.length === 1 && populate[0] === "*") {
    params.populate = "*";
    return params;
  }

  populate.forEach((field, idx) => {
    params[`populate[${idx}]`] = field;
  });

  return params;
}

/**
 * Fetch a single Brand by exact name.
 * Returns the first matching item (or null).
 */
export async function getBrandByName({ brandName, populate, revalidate = 0 }: Options) {
  const { data } = await apiService.get<StrapiBrandResponse>(
    "api/brands",
    buildBrandQueryParams(brandName, populate),
    { next: { revalidate } }
  );

  return data?.data?.[0] ?? null;
}
