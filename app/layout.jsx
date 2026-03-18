import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Nextra Docs",
  description: "Nextra documentation website",
};

const navbar = <Navbar logo={<b>Nextra Docs</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra Docs.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/your-org/your-repo"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
