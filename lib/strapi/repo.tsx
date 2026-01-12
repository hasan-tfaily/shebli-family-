import { getPageByName } from "@/lib/strapi/queries";

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
  const brand = await getPageByName({
    pageName: "About Us",
    populate: ["Hero", "section", "section.featuredItems"],
    revalidate: 30,
  });
  return (
    <main style={{ padding: 24 }}>
      <h1>Brands (Test)</h1>
      <pre>{JSON.stringify(brand, null, 2)}</pre>
    </main>
  );
}
