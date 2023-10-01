import type { LoaderFunctionArgs } from "@vercel/remix";
import { Document, Page, renderToStream, View } from "@react-pdf/renderer";
import { pdf } from "~/utils/responses";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.lang) return;
  if (params.lang !== "en" && params.lang !== "ja") return;

  return pdf(await generatePDF(params.lang));
};

async function generatePDF(lang: string): Promise<Buffer> {
  const stream = await renderToStream(
    lang === "en" ? <PDFDocument /> : <PDFDocument />,
  );

  return new Promise((resolve, reject) => {
    let buffers: Uint8Array[] = [];
    stream.on("data", (data) => {
      buffers.push(data);
    });
    stream.on("end", () => {
      resolve(Buffer.concat(buffers));
    });
    stream.on("error", reject);
  });
}

function PDFDocument() {
  return (
    <>
      <Document title="Shoma Yamamoto's Resume">
        <Page
          size="A4"
          style={{
            paddingTop: 48,
            paddingLeft: 72,
            paddingRight: 48,
            paddingBottom: 72,
          }}
        >
          <View></View>
        </Page>
      </Document>
    </>
  );
}
