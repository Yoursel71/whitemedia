import {
  ComponentPropsWithoutRef,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Check, Copy, X } from "lucide-react";
import {
  copyProjectInquiryMessage,
  INSTAGRAM_DM_URL,
  PROJECT_INQUIRY_MESSAGE,
} from "@/lib/contact";

type InstagramContactLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "target" | "rel"
>;

export default function InstagramContactLink({
  children,
  onClick,
  ...props
}: InstagramContactLinkProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  async function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    event.preventDefault();
    setCopied(await copyProjectInquiryMessage());
    setOpen(true);
  }

  async function handleCopy() {
    setCopied(await copyProjectInquiryMessage());
  }

  const dialog = open && typeof document !== "undefined"
    ? createPortal(
        <div
          className="instagram-contact-modal"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <div
            className="instagram-contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="instagram-contact-title"
          >
            <button
              ref={closeButtonRef}
              className="instagram-contact-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Pencereyi kapat"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <p className="eyebrow">Instagram mesajı</p>
            <h2 id="instagram-contact-title">Mesajın hazır.</h2>
            <p className="instagram-contact-description">
              {copied
                ? "Mesajı panoya kopyaladık. Instagram sohbeti açılınca mesaj alanına basılı tutup “Yapıştır” seçeneğine dokun."
                : "Mesajı kopyalayıp Instagram sohbetinde mesaj alanına yapıştır."}
            </p>

            <div className="instagram-contact-message">
              {PROJECT_INQUIRY_MESSAGE}
            </div>

            <div className="instagram-contact-actions">
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => void handleCopy()}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Mesaj kopyalandı" : "Mesajı kopyala"}</span>
              </button>
              <a
                className="btn"
                href={INSTAGRAM_DM_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <span>Instagram'ı aç</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <a {...props} href={INSTAGRAM_DM_URL} onClick={handleClick}>
        {children}
      </a>
      {dialog}
    </>
  );
}
