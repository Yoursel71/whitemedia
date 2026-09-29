import { createContext, useContext, useEffect } from "react";

const SITE_URL = "https://whitemedia.com.tr";

export type PageMetaProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

// Build-time rendering collects the metadata from the same component that
// updates it during client-side navigation.
export const PageMetaCollector = createContext<PageMetaProps | null>(null);

function setMeta(attribute: "name" | "property", key: string, value: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = value;
}

export default function PageMeta({
  title,
  description,
  path = "/",
  type = "website",
  noIndex = false,
}: PageMetaProps) {
  const collector = useContext(PageMetaCollector);
  if (collector) {
    Object.assign(collector, { title, description, path, type, noIndex });
  }

  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", `${SITE_URL}/social/white-media-og.png`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, noIndex, path, title, type]);

  return null;
}
