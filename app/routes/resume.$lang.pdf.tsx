import {
  Document,
  Link,
  Page,
  renderToStream,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type { LoaderFunctionArgs } from "@vercel/remix";

import { notFound, pdf } from "~/utils/responses";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.lang || (params.lang !== "en" && params.lang !== "ja"))
    throw notFound("お探しのページは見つかりませんでした。");

  return pdf(await generatePDF(params.lang), {
    headers: { "X-Robots-Tag": "noindex, nofollow, noarchive" },
  });
};

async function generatePDF(lang: string): Promise<Buffer> {
  const stream = await renderToStream(
    lang === "en" ? <PDFDocument /> : <Document />,
  );

  return await new Promise((resolve, reject) => {
    const buffers: Uint8Array[] = [];
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
  //TODO - make the fonts well applied
  // Font.register({
  //   family: "Inter",
  //   src: "https://api.fontsource.org/v1/fonts/inter",
  // });
  // Font.register({
  //   family: "DM Serif Display",
  //   src: DMSerifDisplay,
  // });

  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica", // Inter
      fontSize: 11,
      color: "#232E53",
      paddingVertical: 60,
      paddingHorizontal: 52,
    },
    heading: {
      fontFamily: "Times-Bold", // DM Serif Display
      color: "#2cb67d",
      fontSize: 20,
    },
    section: { flexDirection: "row" },
    headingSection: { width: "33.333333%" },
    contentSection: {
      width: "66.666666%",
    },
    flexItem: { color: "#757d94" },
    paragraph: { color: "black" },
  });

  return (
    <Document title="Shoma Yamamoto's Resume" author="Shoma Yamamoto">
      <Page style={styles.page}>
        <View>
          <Text style={[styles.heading, { fontSize: 36 }]}>Shoma</Text>
          <Text style={[styles.heading, { marginTop: -12, fontSize: 36 }]}>
            Yamamoto
          </Text>
          <Text style={[styles.paragraph, { marginTop: 16, fontSize: 14 }]}>
            Self-taught Web / Systems Developer with sustained self-directed
            study in web application and CLI tool development. Comfortable
            owning the full cycle - requirements, design, implementation,
            testing, and documentation - as a solo practitioner. Currently
            operating this site as a portfolio and service window for web
            development work.
          </Text>
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 16 }}
          >
            <Text
              style={[
                styles.flexItem,
                { paddingRight: 6, borderRightWidth: 0.7 },
              ]}
            >
              Self-taught Web / Systems Developer
            </Text>
            <Text
              style={[
                styles.flexItem,
                { paddingHorizontal: 6, borderRightWidth: 0.7 },
              ]}
            >
              Osaka, JP
            </Text>
            <Text
              style={[
                styles.flexItem,
                { paddingHorizontal: 6, borderRightWidth: 0.7 },
              ]}
            >
              6plusjp@gmail.com
            </Text>
            <Link
              style={[styles.flexItem, { paddingLeft: 6 }]}
              src="https://github.com/6plusjp"
            >
              github.com/6plusjp
            </Link>
          </View>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={[styles.heading]}>Skills & Experience</Text>
          <View style={{ marginTop: 16 }}>
            <View style={styles.section}>
              <View style={styles.headingSection}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>Languages</Text>
              </View>
              <View style={styles.contentSection}>
                <Text style={{ marginTop: 4 }}>&bull; TypeScript, JavaScript</Text>
                <Text style={{ marginTop: 4 }}>&bull; Rust</Text>
              </View>
            </View>
            <View style={[styles.section, { marginTop: 12 }]}>
              <View style={styles.headingSection}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>Frontend</Text>
              </View>
              <View style={styles.contentSection}>
                <Text style={{ marginTop: 4 }}>&bull; Remix, React</Text>
                <Text style={{ marginTop: 4 }}>&bull; Tailwind CSS, MDX</Text>
              </View>
            </View>
            <View style={[styles.section, { marginTop: 12 }]}>
              <View style={styles.headingSection}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>Testing & Other</Text>
              </View>
              <View style={styles.contentSection}>
                <Text style={{ marginTop: 4 }}>&bull; Playwright, Vitest</Text>
                <Text style={{ marginTop: 4 }}>&bull; Git, Linux, REST API, Vercel</Text>
              </View>
            </View>
            <View style={[styles.section, { marginTop: 12 }]}>
              <View style={styles.headingSection}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>Experience</Text>
              </View>
              <View style={styles.contentSection}>
                <Text style={{ marginTop: 4 }}>&bull; Web application development with TypeScript / JavaScript (Remix, React)</Text>
                <Text style={{ marginTop: 4 }}>&bull; CLI / TUI application development in Rust</Text>
                <Text style={{ marginTop: 4 }}>&bull; E2E testing (Playwright) and unit testing (Vitest)</Text>
                <Text style={{ marginTop: 4 }}>&bull; File-based content management with MDX</Text>
                <Text style={{ marginTop: 4 }}>&bull; SSR deployment and operations on Vercel</Text>
                <Text style={{ marginTop: 4 }}>&bull; Linux-based development environment (kitty / fish / Neovim / Zed)</Text>
                <Text style={{ marginTop: 4 }}>&bull; Approximately 10 months in Toronto, Canada (not enrolled at a university or language school)</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={[styles.heading]}>Personal Projects</Text>
          <View style={{ marginTop: 16 }}>
            <View style={[styles.section, { marginTop: 12 }]}>
              <View style={[styles.headingSection]}>
                <Text style={[{ fontFamily: "Helvetica-Bold" }]}>
                  <Link
                    src="https://6plus.vercel.app"
                    style={{ color: "#2cb67d" }}
                  >
                    Portfolio Site
                  </Link>
                </Text>
                <Text style={{ marginTop: 4, color: "#757d94", fontSize: 10 }}>
                  Remix, TypeScript, Vercel
                </Text>
              </View>
              <View style={styles.contentSection}>
                <View style={{ marginTop: 4 }}>
                  <Text style={{ marginTop: 4 }}>
                    &bull; SSR application with 17 routes: blog, works, resume,
                    contact, policies, RSS, API
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    &bull; Playwright E2E test suite
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    &bull; Deployed and maintained on Vercel since 2022
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.section, { marginTop: 16 }]}>
              <View style={[styles.headingSection]}>
                <Text style={[{ fontFamily: "Helvetica-Bold" }]}>
                  <Link
                    src="https://github.com/6plusjp/protonvpn-tui"
                    style={{ color: "#2cb67d" }}
                  >
                    ProtonVPN Terminal UI
                  </Link>
                </Text>
                <Text style={{ marginTop: 4, color: "#757d94", fontSize: 10 }}>
                  Rust
                </Text>
              </View>
              <View style={styles.contentSection}>
                <View style={{ marginTop: 4 }}>
                  <Text style={{ marginTop: 4 }}>
                    &bull; TUI wrapping protonvpn-cli: country/city hierarchy
                    browsing, fuzzy search, connection session management
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    &bull; GitHub Actions CI, clippy/rustfmt lint config, integration
                    tests
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    &bull; 109 issue resolution records + 6 coding policy documents
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    &bull; Approximately 13,000 lines of Rust across 66 files,
                    2026-03 to 2026-10
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}