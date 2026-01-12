/**
 * Client-side Strapi API - Uses Next.js proxy to hide Strapi URL
 * 
 * Use this in client components ("use client") instead of importing from queries.ts
 * This ensures all API calls go through /api/strapi proxy
 */

export type StrapiPopulate = string[];

type ClientQueryOptions = {
  pageName: string;
  populate?: StrapiPopulate;
};

/**
 * Build Strapi query params for the proxy API
 */
function buildQueryString(pageName: string, populate: StrapiPopulate = ["*"]): string {
  const params = new URLSearchParams();
  params.append("filters[name][$eq]", pageName);

  if (populate.length === 1 && populate[0] === "*") {
    params.append("populate", "*");
  } else {
    populate.forEach((field, idx) => {
      params.append(`populate[${idx}]`, field);
    });
  }

  return params.toString();
}

/**
 * Fetch a page/brand by name using the Next.js proxy
 * This is the client-safe version of getPageByName
 */
export async function fetchPageByName({ pageName, populate = ["*"] }: ClientQueryOptions) {
  try {
    const queryString = buildQueryString(pageName, populate);
    const response = await fetch(`/api/strapi/brands?${queryString}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result?.data?.[0] ?? null;
  } catch (error) {
    console.error("❌ Client API Error (fetchPageByName):", error);
    return null;
  }
}

type BlogQueryOptions = {
  populate?: StrapiPopulate;
  limit?: number;
};

type BlogByIdOptions = {
  documentId: string;
  populate?: StrapiPopulate;
};

/**
 * Build populate params as query string
 */
function buildPopulateQueryString(populate: StrapiPopulate = ["*"]): string {
  const params = new URLSearchParams();

  if (populate.length === 1 && populate[0] === "*") {
    params.append("populate", "*");
  } else {
    populate.forEach((field, idx) => {
      params.append(`populate[${idx}]`, field);
    });
  }

  return params.toString();
}

/**
 * Fetch all blogs using the Next.js proxy
 */
export async function fetchAllBlogs({ populate = ["*"], limit }: BlogQueryOptions = {}) {
  try {
    const params = new URLSearchParams();
    
    if (populate.length === 1 && populate[0] === "*") {
      params.append("populate", "*");
    } else {
      populate.forEach((field, idx) => {
        params.append(`populate[${idx}]`, field);
      });
    }

    if (limit !== undefined) {
      params.append("pagination[limit]", String(limit));
    }

    const response = await fetch(`/api/strapi/blogs?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result?.data ?? [];
  } catch (error) {
    console.error("❌ Client API Error (fetchAllBlogs):", error);
    return [];
  }
}

/**
 * Fetch a single blog by document ID using the Next.js proxy
 */
export async function fetchBlogByDocumentId({ documentId, populate = ["*"] }: BlogByIdOptions) {
  try {
    const queryString = buildPopulateQueryString(populate);
    const response = await fetch(`/api/strapi/blogs/${documentId}?${queryString}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result?.data ?? null;
  } catch (error) {
    console.error("❌ Client API Error (fetchBlogByDocumentId):", error);
    return null;
  }
}

/**
 * Fetch a single type from Strapi using the Next.js proxy
 */
export async function fetchSingleType(endpoint: string, { populate = ["*"] }: { populate?: StrapiPopulate } = {}) {
  try {
    const queryString = buildPopulateQueryString(populate);
    const response = await fetch(`/api/strapi/${endpoint}?${queryString}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result?.data ?? null;
  } catch (error) {
    console.error("❌ Client API Error (fetchSingleType):", error);
    return null;
  }
}

