const STRAPI_BASE_URL = "http://46.62.246.5:1337";

const getAuthHeaders = () => {
  const envToken = process.env.STRAPI_API_TOKEN;
  const fallbackToken =
    "Bearer 902be690ab4a31ed41a6aac15c5440db46cf55bc65718aafec53d8c81728397d0c8120bed5d4fb956aaa9e439bbc8609b3e32da0f88d283527739a4a81415f79f8569ff727a824afc09e0eca48d677a2acd4a8bc6737f4d14964b3438b5e18d930ac702a93bc3b131e73e486f6493194b6191b33c68dc7ecd09aaec3f277eb56";

  return {
    "Content-Type": "application/json",
    Authorization: envToken ? `Bearer ${envToken}` : fallbackToken,
  };
};

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required 'data' wrapper
    const { data } = body;
    if (!data) {
      return Response.json(
        { error: "Missing 'data' object in request body" },
        { status: 400 }
      );
    }

    const {
      fullName,
      country,
      telephone1,
      telephone2,
      fax,
      email,
      companyName,
      industry,
      address,
      interestCountry,
      interestState,
      investment,
      franchiseTimeline,
      havePremises,
      haveExperience,
      discoverSource,
      remarks,
    } = data;

    // ── Required-field validation ──────────────────────────────────────

    if (!fullName || !fullName.trim()) {
      return Response.json(
        { error: "Full name is a required field" },
        { status: 400 }
      );
    }

    if (!country || !country.trim()) {
      return Response.json(
        { error: "Country is a required field" },
        { status: 400 }
      );
    }

    if (!telephone1 || !telephone1.trim()) {
      return Response.json(
        { error: "Telephone 1 is a required field" },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return Response.json(
        { error: "Email is a required field" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!companyName || !companyName.trim()) {
      return Response.json(
        { error: "Company name is a required field" },
        { status: 400 }
      );
    }

    if (!industry || !industry.trim()) {
      return Response.json(
        { error: "Industry is a required field" },
        { status: 400 }
      );
    }

    if (!address || !address.trim()) {
      return Response.json(
        { error: "Address is a required field" },
        { status: 400 }
      );
    }

    if (!interestCountry || !interestCountry.trim()) {
      return Response.json(
        { error: "Territory of interest (country) is a required field" },
        { status: 400 }
      );
    }

    if (!interestState || !interestState.trim()) {
      return Response.json(
        { error: "Province/State/City is a required field" },
        { status: 400 }
      );
    }

    if (!remarks || !remarks.trim()) {
      return Response.json(
        { error: "Remarks is a required field" },
        { status: 400 }
      );
    }

    // ── Forward to Strapi ──────────────────────────────────────────────

    const response = await fetch(
      `${STRAPI_BASE_URL}/api/franchise-inquiries`,
      {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          data: {
            fullName: fullName.trim(),
            country: country.trim(),
            telephone1: telephone1.trim(),
            telephone2: telephone2 ? telephone2.trim() : null,
            fax: fax ? fax.trim() : null,
            email: email.trim(),
            companyName: companyName.trim(),
            industry: industry.trim(),
            address: address.trim(),
            interestCountry: interestCountry.trim(),
            interestState: interestState.trim(),
            investment: investment || null,
            franchiseTimeline: franchiseTimeline || null,
            havePremises: havePremises || null,
            haveExperience: haveExperience || null,
            discoverSource: discoverSource || null,
            remarks: remarks.trim(),
          },
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return Response.json(
        {
          error:
            result.error?.message || "Failed to create franchise inquiry",
        },
        { status: response.status }
      );
    }

    return Response.json(
      { success: true, data: result.data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating franchise inquiry:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
