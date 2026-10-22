import Image from "next/image";
import { company } from "@/lib/site";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="brand">
      <Image
        src="/brand/logo.jpeg"
        alt=""
        width={compact ? 40 : 46}
        height={compact ? 40 : 46}
        className="brand-mark"
        priority
      />
      <span className="brand-copy">
        <span className="brand-name" aria-label={company.name}>
          <span className="brand-ai">AI</span>Syntax
        </span>
        <span className="brand-studio">Studio</span>
      </span>
    </span>
  );
}
