import { getPortfolio, getProjectCategories, getProjects } from "@/lib/portfolio";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const data = getPortfolio();

  return Response.json({
    ...data,
    projects: getProjects(category),
    categories: getProjectCategories(),
    generatedAt: new Date().toISOString(),
  });
}
