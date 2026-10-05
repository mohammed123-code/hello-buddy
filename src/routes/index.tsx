import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Santhu Mohammed M | AI/ML, Cloud & Full-stack Engineer" },
    { name: "description", content: "Explore Santhu Mohammed M's machine learning, cloud and DevOps projects, full-stack experience, certifications and daily coding practice." },
    { property: "og:title", content: "Santhu Mohammed M | Engineering Portfolio" },
    { property: "og:description", content: "AI/ML, cloud infrastructure, DevOps and full-stack development. Projects, experience and a commitment to daily problem solving." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Portfolio,
});
