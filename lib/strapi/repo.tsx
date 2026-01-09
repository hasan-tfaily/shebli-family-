import { getBrandByName } from "@/lib/strapi/queries";

type Brand = {
  id: number;
  attributes: {
    name: string;
    slug?: string;
    createdAt: string;
  };
};

type BrandResponse = {
  data: Brand[];
};

export default async function TestBrandsPage() {
  const brand = await getBrandByName({
    brandName: "About Us",
    populate: ["Hero", "section", "section.featuredItems"],
    revalidate: 0,
  });
  return (
    <main style={{ padding: 24 }}>
      <h1>Brands (Test)</h1>
      <pre>{JSON.stringify(brand, null, 2)}</pre>
    </main>
  );
}
