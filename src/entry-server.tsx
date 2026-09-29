import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { PageMetaCollector, type PageMetaProps } from "./components/PageMeta";
import { SERVICE_CATALOG } from "./data/services";
import { portfolioProjects } from "./data/portfolioProjects";

export const pagePaths = [
  "/",
  "/hakkimizda",
  "/hizmetler",
  ...SERVICE_CATALOG.map((service) => `/hizmetler/${service.slug}`),
  "/portfolyo",
  ...portfolioProjects.map((project) => `/portfolyo/${project.slug}`),
  "/iletisim",
];

export function renderPage(path: string) {
  const meta: PageMetaProps = { title: "", description: "", path };
  const markup = renderToString(
    <PageMetaCollector.Provider value={meta}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </PageMetaCollector.Provider>
  );

  if (!meta.title || !meta.description) {
    throw new Error(`Missing page metadata: ${path}`);
  }

  return { markup, meta };
}
