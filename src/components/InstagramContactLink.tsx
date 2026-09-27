import { ComponentPropsWithoutRef } from "react";
import { INSTAGRAM_DM_URL } from "@/lib/contact";

type InstagramContactLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "target" | "rel"
>;

export default function InstagramContactLink({
  children,
  ...props
}: InstagramContactLinkProps) {
  return (
    <a {...props} href={INSTAGRAM_DM_URL}>
      {children}
    </a>
  );
}
