import { ComponentPropsWithoutRef } from "react";
import { INSTAGRAM_PROFILE_URL } from "@/lib/contact";

type InstagramContactLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "target" | "rel"
>;

export default function InstagramContactLink({
  children,
  ...props
}: InstagramContactLinkProps) {
  return (
    <a
      {...props}
      href={INSTAGRAM_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
