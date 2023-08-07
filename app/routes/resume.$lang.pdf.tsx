import type { LoaderArgs } from "@vercel/remix";

// TODO - https://remix.run/docs/en/main/guides/resource-routes#creating-resource-routes
export async function loader({ params }: LoaderArgs) {
  const report = await getReport(params.lang);
  const pdf = await generateReportPDF(report);

  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
