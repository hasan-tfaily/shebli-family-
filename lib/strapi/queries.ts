import apiService from "@/lib/strapi/apiService";

export type StrapiPopulate = string[];
export type StrapiEntity<T> = { id: number } & (T | { attributes: T });

export type StrapiPage = {
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

export type StrapiPageResponse = {
  data: Array<StrapiEntity<StrapiPage>>;
};

export function unwrapAttributes<T>(entity: StrapiEntity<T> | null | undefined): T | null {
  if (!entity) return null;
  const maybe: any = entity;
  return (maybe.attributes ?? maybe) as T;
}

type Options = {
  pageName: string;
  populate?: StrapiPopulate;
  /** Next.js caching controls; default keeps it always fresh for testing */
  revalidate?: number;
};

/**
 * Build Strapi REST params in the "Postman style" you already use:
 * - filters[name][$eq]
 * - populate[0]=Hero, populate[1]=section, ...
 */
function buildPageQueryParams(pageName: string, populate: StrapiPopulate = ["*"]) {
  const params: Record<string, string> = {
    "filters[name][$eq]": pageName,
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
 * Fetch a single Page by exact name.
 * Returns the first matching item (or null).
 */
export async function getPageByName({ pageName, populate, revalidate = 0 }: Options) {
  try {
    const { data } = await apiService.get<StrapiPageResponse>(
      "api/brands",
      buildPageQueryParams(pageName, populate),
      { next: { revalidate } }
    );

    return data?.data?.[0] ?? null;
  } catch (error) {
    console.error("❌ Strapi API Error:", error);
    console.log("🔍 Debug Info:");
    console.log("- pageName:", pageName);
    console.log("- populate:", populate);
    console.log("- params:", buildPageQueryParams(pageName, populate));
    throw error;
  }
}

// Backwards compatibility alias (deprecated)
export const getBrandByName = getPageByName;
