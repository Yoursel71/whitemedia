import { ComponentPropsWithoutRef, MouseEventHandler } from "react";
import {
  INSTAGRAM_ANDROID_DM_URL,
  INSTAGRAM_APP_DM_URL,
  INSTAGRAM_DM_URL,
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
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);

    if (event.defaultPrevented || typeof navigator === "undefined") {
      return;
    }

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isAppleMobile =
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

    if (!isAndroid && !isAppleMobile) {
      return;
    }

    event.preventDefault();
    window.location.assign(
      isAndroid ? INSTAGRAM_ANDROID_DM_URL : INSTAGRAM_APP_DM_URL,
    );
  };

  return (
    <a
      {...props}
      href={INSTAGRAM_DM_URL}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
