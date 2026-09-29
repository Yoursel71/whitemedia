type BrandGlyphProps = {
  className?: string;
};

export default function BrandGlyph({ className = "" }: BrandGlyphProps) {
  return (
    <span className={`brand-glyph ${className}`.trim()} aria-hidden="true">
      <span className="brand-glyph__piece" />
      <span className="brand-glyph__piece" />
      <span className="brand-glyph__piece" />
      <span className="brand-glyph__piece" />
    </span>
  );
}
