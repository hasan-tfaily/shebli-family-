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

const generateHeader = (userHeader: HeadersMap = {}): HeadersInit => {
  // For Strapi protected endpoints you must send a Bearer token.
  // Prefer setting STRAPI_API_TOKEN in .env.local; this fallback is ONLY for quick local testing.
  const envToken = process.env.STRAPI_API_TOKEN;
  const fallbackToken =
    "Bearer 902be690ab4a31ed41a6aac15c5440db46cf55bc65718aafec53d8c81728397d0c8120bed5d4fb956aaa9e439bbc8609b3e32da0f88d283527739a4a81415f79f8569ff727a824afc09e0eca48d677a2acd4a8bc6737f4d14964b3438b5e18d930ac702a93bc3b131e73e486f6493194b6191b33c68dc7ecd09aaec3f277eb56";

  return {
    ...(token ? { Authorization: token } : {}),
    ...(!token && (envToken || fallbackToken)
      ? { Authorization: envToken ? `Bearer ${envToken}` : fallbackToken }
      : {}),
    ...userHeader,
  };
};

const generatePath = (path: string = ""): string => {
  // Keep this simple for now: match the Strapi host you're testing in Postman.
  return `http://46.62.246.5:1337/${path}`;
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

export const get = async <T = unknown>(
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

const apiService = { get, setToken };
export default apiService;
