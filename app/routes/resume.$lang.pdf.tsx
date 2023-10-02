import type { LoaderFunctionArgs } from "@vercel/remix";
import {
  Document,
  // Font,
  Link,
  Page,
  renderToStream,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { notFound, pdf } from "~/utils/responses";

// import Inter from "/public/fonts/inter/Inter-Regular.ttf";
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
  // Font.register({
  //   family: "Inter",
  //   src: Inter,
  //   // `${__dirname.replace(
  //   //   "/build",
  //   //   "/public/fonts",
  //   // )}/inter/Inter-Regular.woff2`,
  // });
  // Font.register({
  //   family: "DM Serif Display",
  //   src: DMSerifDisplay,
  // });

  const styles = StyleSheet.create({
    page: {
      // fontFamily: "Inter",
      fontSize: 16,
      color: "#232E53",
      paddingVertical: 60,
      paddingHorizontal: 48,
    },
    heading: {
      // fontFamily: "DM Serif Display",
      fontWeight: "bold",
      color: "green",
    },
    flexItem: { color: "#757d94" },
    paragraph: { color: "black" },
  });

  return (
    <Document title="Shoma Yamamoto's Resume">
      <Page style={styles.page}>
        <View>
          <Text style={[styles.heading, { fontSize: 48 }]}>Shoma Yamamoto</Text>
          <Text style={[styles.paragraph, { fontSize: 20 }]}>
            Self-taught, dedicated and highly motivated Web Developer with a
            passion for the acquisition of new skills and knowledge. Familiar
            with most major technology stacks and platforms. Strong focus on
            user experience and accessibility. Believe that committing to share
            expectations and goals with a team is key to any successful project
            delivered.
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
        <View>
          <Text style={[styles.heading, { fontSize: 30 }]}>
            Work Experience
          </Text>
          <View>
            <View>
              <Text style={[styles.heading]}>Freelance</Text>
              <Text style={{ color: "#757d94" }}>Apr 2020 - Current</Text>
            </View>
            <View>
              <Text style={{ fontStyle: "italic" }}>
                Web Developer - Web apps and websites creation. Graphic design.
                Product development.
              </Text>
              <View>
                <Text style={{}}>
                  Tech stack is predominantly React, Typescript, Jest/React
                  Testing Library and Tailwind CSS, using a rest API built in
                  Node.
                </Text>
                <Text style={{}}>
                  Selected tech stack and libraries according to the
                  specifications of the site requested by the clients.
                </Text>
                <Text style={{}}>
                  Topics include content marketing, landing page
                  copy/design/optimization, and more.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.heading, { fontSize: 30 }]}>Education</Text>
          <View>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                Osaka Prefecture University (now Osaka Metropolitan University)
              </Text>
              <Text style={{ color: "#757d94" }}>2015 - 2020</Text>
            </View>
            <View>
              <Text style={{ fontStyle: "italic" }}>
                Science, College of Life, Environment, and Advanced Sciences
              </Text>
              <View>
                <Text style={{}}>
                  Leave of absence and study abroad year at personal expense.
                </Text>
                <Text style={{}}>
                  Withdrawn from school for personal reasons.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={[styles.heading, { fontSize: 30, width: "33.333333%" }]}>
            Skills
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "66.666666%",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>Languages</Text>
              <View>
                <Text>JavaScript, TypeScript</Text>
                <Text>Python</Text>
                <Text>Rust</Text>
                <Text>PHP</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>Frameworks</Text>
              <View>
                <Text>Remix</Text>
                <Text>Tailwind CSS</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "bold" }}>Other</Text>
              <View>
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
