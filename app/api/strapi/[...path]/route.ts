import { NextRequest, NextResponse } from "next/server";

const STRAPI_BASE_URL =
  process.env.STRAPI_BASE_URL || "http://46.62.246.5:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// Fallback token for development only - should be removed in production
const FALLBACK_TOKEN =
  "902be690ab4a31ed41a6aac15c5440db46cf55bc65718aafec53d8c81728397d0c8120bed5d4fb956aaa9e439bbc8609b3e32da0f88d283527739a4a81415f79f8569ff727a824afc09e0eca48d677a2acd4a8bc6737f4d14964b3438b5e18d930ac702a93bc3b131e73e486f6493194b6191b33c68dc7ecd09aaec3f277eb56";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const apiPath = path.join("/");

    // Forward query parameters
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    const strapiUrl = `${STRAPI_BASE_URL}/api/${apiPath}${queryString ? `?${queryString}` : ""}`;

    const token = STRAPI_API_TOKEN || FALLBACK_TOKEN;

    const response = await fetch(strapiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      // Next.js caching - revalidate every 2 seconds
      next: { revalidate: 2 },
    });

    if (!response.ok) {
      console.error(`Strapi proxy error: ${response.status} for ${apiPath}`);
      return NextResponse.json(
        { error: "Failed to fetch from CMS" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=2, stale-while-revalidate=10",
      },
    });
  } catch (error) {
    console.error("Strapi proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const apiPath = path.join("/");

    const body = await request.json();
    const strapiUrl = `${STRAPI_BASE_URL}/api/${apiPath}`;

    const token = STRAPI_API_TOKEN || FALLBACK_TOKEN;

    const response = await fetch(strapiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error(
        `Strapi proxy POST error: ${response.status} for ${apiPath}`
      );
      return NextResponse.json(
        { error: "Failed to post to CMS" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Strapi proxy POST error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
