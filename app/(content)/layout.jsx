import { getPageMap } from "nextra/page-map";
import Layout from "../../components/layout";

const ORDER = {
  "/docs": ["index", "installation", "how-it-works", "collecting-reviews", "displaying-reviews", "managing-reviews", "developers", "troubleshooting"],
  "/docs/collecting-reviews": ["index", "judgeme", "loox", "shop-app", "reviews-io", "trustpilot", "file-import", "post-purchase-email", "storefront"],
  "/docs/managing-reviews": ["index", "replies", "featured-reviews", "verified-badge", "translations", "admin-blocks", "additional-attributes"],
  "/docs/displaying-reviews": ["index", "customising-blocks", "core", "rating-bar", "floating-badge", "reviews-slider", "product-card-ratings", "rating-filters", "product-rating", "trust-signals", "review-list", "review-form", "checkout-blocks", "post-purchase-form"],
  "/docs/developers": ["index", "metaobjects-and-metafields", "html-and-js", "languages"],
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
