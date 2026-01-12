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

    // Validate required fields
    const { data } = body;
    if (!data) {
      return Response.json(
        { error: "Missing 'data' object in request body" },
        { status: 400 }
      );
    }

    const { name, email, phoneNumber, country, city, topic, message } = data;

    // Basic validation - name is required
    if (!name) {
      return Response.json(
        { error: "Name is a required field" },
        { status: 400 }
      );
    }

    // Either email or phone number is required
    if (!email && !phoneNumber) {
      return Response.json(
        { error: "Either email or phone number is required" },
        { status: 400 }
      );
    }

    // Email validation (only if email is provided)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return Response.json(
          { error: "Invalid email format" },
          { status: 400 }
        );
      }
    }

    // Send to Strapi
    const response = await fetch(`${STRAPI_BASE_URL}/api/leads`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        data: {
          name,
          email,
          phoneNumber: phoneNumber || null,
          country: country || null,
          city: city || null,
          topic: topic || null,
          message: message || null,
        },
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: result.error?.message || "Failed to create lead" },
        { status: response.status }
      );
    }

    return Response.json({ success: true, data: result.data }, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
