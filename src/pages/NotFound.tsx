import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

export default function NotFound() {
  return (
    <main className="case-not-found">
      <PageMeta
        title="Sayfa Bulunamadı | White Media"
        description="Aradığınız sayfa bulunamadı. White Media ana sayfasına dönebilirsiniz."
        path="/404"
        noIndex
      />
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="display">Bu sayfa tuvalde yok.</h1>
        <Link className="btn" to="/">
          <ArrowLeft className="button-icon" aria-hidden="true" />
          <span>Ana sayfaya dön</span>
        </Link>
      </div>
    </main>
  );
}
