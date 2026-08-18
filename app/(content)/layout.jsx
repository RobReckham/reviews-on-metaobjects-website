import { getPageMap } from "nextra/page-map";
import Layout from "../../components/layout";

const ORDER = {
  "/docs": ["index", "collecting-reviews", "managing-reviews", "displaying-reviews", "troubleshooting"],
  "/docs/collecting-reviews": ["index", "post-purchase-email", "storefront", "file-import", "judgeme", "loox", "reviews-io", "trustpilot", "shop-app"],
  "/docs/managing-reviews": ["index", "replies", "featured-reviews", "verified-badge", "additional-attributes", "translations"],
  "/docs/displaying-reviews": ["index", "customising-app-blocks", "core", "product-rating", "product-card-ratings", "rating-bar", "review-list", "reviews-slider", "review-form", "post-purchase-form", "bestseller", "sold-count", "last-purchased", "returning-customers", "rating-share", "floating-badge"],
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
