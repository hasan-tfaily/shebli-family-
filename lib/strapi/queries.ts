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
    img?: string;
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

// ==================== BLOG TYPES ====================
export type StrapiBlog = {
  id: number;
  documentId: string;
  title?: string;
  paragraphs?: string;
  description?: string | null;
  Date?: string;
  authorName?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  coverImage?: {
    id: number;
    documentId: string;
    url: string;
    width: number;
    height: number;
    alternativeText?: string | null;
    name?: string;
  };
  images?: Array<{
    id: number;
    url: string;
    width: number;
    height: number;
  }>;
  category?: {
    id: number;
    documentId: string;
    name: string;
    slug: string;
  };
};

export type StrapiBlogResponse = {
  data: StrapiBlog[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiBlogSingleResponse = {
  data: StrapiBlog;
};

export type StrapiPageResponse = {
  data: Array<StrapiEntity<StrapiPage>>;
};

export function unwrapAttributes<T>(
  entity: StrapiEntity<T> | null | undefined
): T | null {
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
function buildPageQueryParams(
  pageName: string,
  populate: StrapiPopulate = ["*"]
) {
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
export async function getPageByName({
  pageName,
  populate,
  revalidate = 2,
}: Options) {
  try {
    const { data } = await apiService.get<StrapiPageResponse>(
      "api/brands",
      buildPageQueryParams(pageName, populate),
      { next: { revalidate } }
    );

    return data?.data?.[0] ?? null;
  } catch (error) {
    console.error("❌ Strapi API Error:", error);
    throw error;
  }
}

// Backwards compatibility alias (deprecated)
export const getBrandByName = getPageByName;

// ==================== BLOG QUERIES ====================

type BlogQueryOptions = {
  populate?: StrapiPopulate;
  revalidate?: number;
  limit?: number;
};

type BlogByIdOptions = {
  documentId: string;
  populate?: StrapiPopulate;
  revalidate?: number;
};

/**
 * Build populate params for Strapi REST API
 */
function buildPopulateParams(populate: StrapiPopulate = ["*"]) {
  const params: Record<string, string> = {};

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
 * GET all blogs
 * Endpoint: api/blogs?populate=*
 */
export async function getAllBlogs({
  populate = ["*"],
  revalidate = 2,
  limit,
}: BlogQueryOptions = {}) {
  try {
    const params: Record<string, string> = buildPopulateParams(populate);
    
    // Add pagination limit if specified
    if (limit !== undefined) {
      params["pagination[limit]"] = String(limit);
    }
    
    const { data } = await apiService.get<StrapiBlogResponse>(
      "api/blogs",
      params,
      { next: { revalidate } }
    );

    return data?.data ?? [];
  } catch (error) {
    console.error("❌ Strapi API Error (getAllBlogs):", error);
    throw error;
  }
}

/**
 * GET single blog by document ID
 * Endpoint: api/blogs/{documentId}?populate=*
 */
export async function getBlogByDocumentId({
  documentId,
  populate = ["*"],
  revalidate = 2,
}: BlogByIdOptions) {
  try {
    const { data } = await apiService.get<StrapiBlogSingleResponse>(
      `api/blogs/${documentId}`,
      buildPopulateParams(populate),
      { next: { revalidate } }
    );

    return data?.data ?? null;
  } catch (error) {
    throw error;
  }
}

/**
 * Build query params for single type endpoints
 * Single types don't use filters, just populate
 */
function buildSingleTypeQueryParams(populate: StrapiPopulate = ["*"]) {
  const params: Record<string, string> = {};

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

type SingleTypeOptions = {
  populate?: StrapiPopulate;
  revalidate?: number;
};

/**
 * Fetch a Strapi single type (e.g., "homepage", "about", etc.)
 * Single types have a fixed endpoint and return a single object
 */
export async function getSingleType(
  endpoint: string,
  { populate, revalidate = 2 }: SingleTypeOptions = {}
) {
  try {
    const params = buildSingleTypeQueryParams(populate);
    const { data } = await apiService.get<any>(`api/${endpoint}`, params, {
      next: { revalidate },
    });

    return data?.data ?? null;
  } catch (error) {
    console.error("❌ Strapi Single Type API Error:", error);
    throw error;
  }
}
