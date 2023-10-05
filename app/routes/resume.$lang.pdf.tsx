import type { LoaderFunctionArgs } from "@vercel/remix";
import {
  Document,
  Font,
  Link,
  Page,
  renderToStream,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { notFound, pdf } from "~/utils/responses";

// import DMSerifDisplay from "/public/fonts/dm-serif-display/DMSerifDisplay-Regular.ttf";

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
  //FIXME - make the fonts well applied
  Font.register({
    family: "Inter",
    src: "https://api.fontsource.org/v1/fonts/inter",
  });
  // Font.register({
  //   family: "DM Serif Display",
  //   src: DMSerifDisplay,
  // });

  const styles = StyleSheet.create({
    page: {
      // fontFamily: "Inter",
      fontSize: 12,
      color: "#232E53",
      paddingVertical: 60,
      paddingHorizontal: 52,
    },
    heading: {
      // fontFamily: "DM Serif Display",
      fontWeight: "bold",
      color: "green",
      fontSize: 24,
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
          <Text style={[styles.heading, { fontSize: 40 }]}>Shoma Yamamoto</Text>
          <Text style={[styles.paragraph, { marginTop: 16, fontSize: 16 }]}>
            Self-taught, dedicated and highly motivated Web Developer with a
            passion for the acquisition of new skills and knowledge. Familiar
            with most major technology stacks and platforms. Strong focus on
            user experience and accessibility. Believe that committing to share
            expectations and goals with a team is key to any successful project
            delivered.
          </Text>
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 8 }}
          >
            <Text
              style={[
                styles.flexItem,
                { paddingRight: 6, borderRightWidth: 1 },
              ]}
            >
              Web Developer
            </Text>
            <Text
              style={[
                styles.flexItem,
                { paddingHorizontal: 6, borderRightWidth: 1 },
              ]}
            >
              Osaka, JP
            </Text>
            <Text
              style={[
                styles.flexItem,
                { paddingHorizontal: 6, borderRightWidth: 1 },
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
          <Text style={[styles.heading]}>Work Experience</Text>
          <View style={[styles.section, { marginTop: 24 }]}>
            <View style={[styles.headingSection]}>
              <Text style={[{ fontWeight: "bold" }]}>Freelance</Text>
              <Text style={{ color: "#757d94" }}>Apr 2020 - Current</Text>
            </View>
            <View style={[styles.contentSection]}>
              <Text style={{ fontStyle: "italic" }}>
                Web Developer - Web apps and websites creation. Graphic design.
                Product development.
              </Text>
              <View style={{ marginTop: 4 }}>
                <Text style={{ marginTop: 4 }}>
                  Tech stack is predominantly React, Typescript, Jest/React
                  Testing Library and Tailwind CSS, using a rest API built in
                  Node.
                </Text>
                <Text style={{ marginTop: 4 }}>
                  Selected tech stack and libraries according to the
                  specifications of the site requested by the clients.
                </Text>
                <Text style={{ marginTop: 4 }}>
                  Topics include content marketing, landing page
                  copy/design/optimization, and more.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={[styles.heading]}>Education</Text>
          <View style={[styles.section, { marginTop: 24 }]}>
            <View style={styles.headingSection}>
              <Text style={[{ fontWeight: "bold" }]}>
                Osaka Prefecture University (now Osaka Metropolitan University)
              </Text>
              <Text style={{ color: "#757d94" }}>2015 - 2020</Text>
            </View>
            <View style={styles.contentSection}>
              <Text style={{ fontStyle: "italic" }}>
                Science, College of Life, Environment, and Advanced Sciences
              </Text>
              <View style={{ marginTop: 4 }}>
                <Text style={{ marginTop: 4 }}>
                  Leave of absence and study abroad year at personal expense.
                </Text>
                <Text style={{ marginTop: 4 }}>
                  Withdrawn from school for personal reasons.
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
              <Text style={{ fontWeight: "bold" }}>Languages</Text>
              <View style={{ marginTop: 4 }}>
                <Text>JavaScript, TypeScript</Text>
                <Text>Python</Text>
                <Text>Rust</Text>
                <Text>PHP</Text>
              </View>
            </View>
            <View style={{ flexBasis: "50%" }}>
              <Text style={{ fontWeight: "bold" }}>Frameworks</Text>
              <View style={{ marginTop: 4 }}>
                <Text>Remix</Text>
                <Text>Tailwind CSS</Text>
              </View>
            </View>
            <View style={{ flexBasis: "50%", marginTop: 16 }}>
              <Text style={{ fontWeight: "bold" }}>Other</Text>
              <View style={{ marginTop: 4 }}>
                <Text>Git</Text>
                <Text>REST API</Text>
                <Text>Linux</Text>
                <Text>Unit testing</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
