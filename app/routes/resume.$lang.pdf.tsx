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

  return pdf(await generatePDF(params.lang));
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
                    &bull; SSR application with 20 routes: blog, works, resume,
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
                    &bull; 107 issue resolution records + 6 coding policy documents
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    &bull; Approximately 12,000 lines of Rust, developed over 7 months (Mar-Oct 2026)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={[styles.heading]}>Education</Text>
          <View style={[styles.section, { marginTop: 24 }]}>
            <View style={styles.headingSection}>
              <Text style={[{ fontFamily: "Helvetica-Bold" }]}>
                <Link
                  src="https://www.osakafu-u.ac.jp/en/"
                  style={{ color: "#2cb67d" }}
                >
                  Osaka Prefecture University
                </Link>
                {" "}
                <Link
                  src="https://www.omu.ac.jp/en/"
                  style={{ color: "#2cb67d" }}
                >
                  (now Osaka Metropolitan University)
                </Link>
              </Text>
              <Text style={{ marginTop: 8, color: "#757d94" }}>
                2015 - 2020
              </Text>
            </View>
            <View style={styles.contentSection}>
              <Text style={{ fontFamily: "Helvetica-Oblique" }}>
                Faculty of Science, Department of Life and Environmental Sciences
              </Text>
              <View style={{ marginTop: 8 }}>
                <Text style={{ marginTop: 4 }}>
                  &bull; One-year self-funded leave of absence: Toronto, Canada
                </Text>
                <Text style={{ marginTop: 4 }}>
                  &bull; Withdrawn from school for personal reasons.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 24 }}>
          <Text style={[styles.heading, styles.headingSection]}>Skills</Text>
          <View
            style={[
              styles.contentSection,
              { flexDirection: "row", flexWrap: "wrap" },
            ]}
          >
            <View style={{ flexBasis: "50%" }}>
              <Text style={{ fontFamily: "Helvetica-Bold" }}>Languages</Text>
              <View style={{ marginTop: 8 }}>
                <Text>TypeScript, JavaScript</Text>
                <Text>Rust</Text>
                <Text>Python</Text>
              </View>
            </View>
            <View style={{ flexBasis: "50%" }}>
              <Text style={{ fontFamily: "Helvetica-Bold" }}>Frontend</Text>
              <View style={{ marginTop: 8 }}>
                <Text>Remix, React, Next.js</Text>
                <Text>Tailwind CSS, MDX</Text>
              </View>
            </View>
            <View style={{ flexBasis: "50%", marginTop: 16 }}>
              <Text style={{ fontFamily: "Helvetica-Bold" }}>Testing & Other</Text>
              <View style={{ marginTop: 8 }}>
                <Text>Playwright, Vitest</Text>
                <Text>Git, Linux, REST API, Vercel</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}