import {
  FlowersDugunSalonuLogo,
  Kayi1461Logo,
  KozalaklarAtolyeLogo,
} from "@/components/Logos";
import type { PortfolioProject } from "@/data/portfolioProjects";

type BrandMarkProps = {
  project: PortfolioProject;
  className?: string;
};

export default function BrandMark({ project, className = "" }: BrandMarkProps) {
  const shared = `${className} brand-logo--${project.logoTreatment}`.trim();

  if (project.slug === "kayi-1461-turizm") {
    return <Kayi1461Logo className={className} role="img" aria-label={project.logoAlt} />;
  }

  if (project.slug === "flowers-dugun-salonu") {
    return <FlowersDugunSalonuLogo className={className} role="img" aria-label={project.logoAlt} />;
  }

  if (project.slug === "kozalaklar-oyun-atolyesi") {
    return <KozalaklarAtolyeLogo className={className} role="img" aria-label={project.logoAlt} />;
  }

  return <img className={shared} src={project.logo} alt={project.logoAlt} />;
}
