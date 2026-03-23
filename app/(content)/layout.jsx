import { getPageMap } from "nextra/page-map";
import Layout from "../../components/layout";

const ORDER = {
  "/docs": ["index", "collecting-reviews", "app-blocks", "troubleshooting"],
  "/docs/collecting-reviews": ["index", "post-purchase-email", "storefront", "file-import", "judgeme", "loox", "reviews-io"],
  "/docs/app-blocks": ["index", "customising-app-blocks", "product-rating", "product-reviews", "review-form", "product-card-ratings", "review-form-page"],
};

const reorderPageMap = (nodes, route = "/docs") => {
  const rank = new Map((ORDER[route] || []).map((name, index) => [name, index]));
  return [...nodes]
    .sort((a, b) => (rank.get(a.name) ?? 999) - (rank.get(b.name) ?? 999))
    .map((node) => (node.children ? { ...node, children: reorderPageMap(node.children, node.route) } : node));
};

export default async function ContentLayout({ children }) {
  return (
    <Layout pageMap={reorderPageMap(await getPageMap("/docs"))}>
      {children}
    </Layout>
  );
}
