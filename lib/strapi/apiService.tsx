/**
 * Strapi API Service - Server-side only
 *
 * This service makes direct calls to Strapi and should ONLY be used
 * in server components, server actions, or API routes.
 *
 * For client-side data fetching, use the /api/strapi proxy endpoints instead.
 */

let token = "";

type HeadersMap = Record<string, string>;

type QueryParams = Record<string, string | number | boolean | null | undefined>;

type NextFetchOptions = {
  next?: {
    revalidate?: number;
    tags?: string[];
  };
};

type FetchOptions = {
  headers?: HeadersMap;
} & NextFetchOptions;

// Environment-based configuration
const STRAPI_BASE_URL =
  process.env.STRAPI_BASE_URL || "http://46.62.246.5:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Fallback token for development - REMOVE IN PRODUCTION
const FALLBACK_TOKEN =
  "902be690ab4a31ed41a6aac15c5440db46cf55bc65718aafec53d8c81728397d0c8120bed5d4fb956aaa9e439bbc8609b3e32da0f88d283527739a4a81415f79f8569ff727a824afc09e0eca48d677a2acd4a8bc6737f4d14964b3438b5e18d930ac702a93bc3b131e73e486f6493194b6191b33c68dc7ecd09aaec3f277eb56";

const generateHeader = (userHeader: HeadersMap = {}): HeadersInit => {
  const envToken = STRAPI_API_TOKEN;

  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: token } : {}),
    ...(!token && (envToken || FALLBACK_TOKEN)
      ? {
          Authorization: envToken
            ? `Bearer ${envToken}`
            : `Bearer ${FALLBACK_TOKEN}`,
        }
      : {}),
    ...userHeader,
  };
};

const generatePath = (path: string = ""): string => {
  return `${STRAPI_BASE_URL}/${path}`;
};

const buildUrl = (baseUrl: string, params?: QueryParams): string => {
  if (!params || Object.keys(params).length === 0) return baseUrl;

  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });
  return url.toString();
};

export const get = async <T = unknown,>(
  path: string,
  params?: QueryParams,
  fetchOptions: FetchOptions = {}
): Promise<{ data: T }> => {
  const url = generatePath(path);
  const fullUrl = buildUrl(url, params);

  const headers = generateHeader(fetchOptions.headers);

  const response = await fetch(fullUrl, {
    method: "GET",
    headers,
    ...(fetchOptions.next && { next: fetchOptions.next }),
  });

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  const data: T = await response.json();
  return { data };
};

// Token handling
export const setToken = (t?: string): void => {
  if (t) token = t;
};

// Export the Strapi base URL for use in media utilities (server-side only)
export const getStrapiBaseUrl = (): string => STRAPI_BASE_URL;

const apiService = { get, setToken, getStrapiBaseUrl };
export default apiService;
