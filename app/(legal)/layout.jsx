import { getPageMap } from "nextra/page-map";
import Layout from "../../components/layout";

export default async function LegalLayout({ children }) {
  return (
    <Layout pageMap={await getPageMap("/")}>
      {children}
    </Layout>
  );
}
