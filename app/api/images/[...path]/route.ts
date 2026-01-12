import { NextRequest, NextResponse } from "next/server";

const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || "http://46.62.246.5:1337";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const imagePath = "/" + path.join("/");
    const strapiUrl = `${STRAPI_BASE_URL}${imagePath}`;

    const response = await fetch(strapiUrl, {
      headers: {
        // Forward any range headers for partial content requests
        ...(request.headers.get("range")
          ? { Range: request.headers.get("range")! }
          : {}),
      },
    });

    if (!response.ok) {
      return new NextResponse(null, { status: response.status });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const contentLength = response.headers.get("content-length");
    const cacheControl = response.headers.get("cache-control");

    const imageBuffer = await response.arrayBuffer();

    const headers: HeadersInit = {
      "Content-Type": contentType,
      // Cache images for 1 year (immutable content)
      "Cache-Control": cacheControl || "public, max-age=31536000, immutable",
    };

    if (contentLength) {
      headers["Content-Length"] = contentLength;
    }

    return new NextResponse(imageBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error proxying image:", error);
    return new NextResponse(null, { status: 500 });
  }
}
