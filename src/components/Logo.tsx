import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  useImage?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showWordmark = true,
  useImage = true,
}) => {
  const sizeMap = {
    sm: { fullWidth: 84, fullHeight: 24, iconSize: 24 },
    md: { fullWidth: 112, fullHeight: 32, iconSize: 32 },
    lg: { fullWidth: 140, fullHeight: 40, iconSize: 40 },
    xl: { fullWidth: 182, fullHeight: 52, iconSize: 52 },
  };

  const currentSize = sizeMap[size];

  if (showWordmark) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <Image
          src="/logo-transparent.png"
          alt="Krevia"
          width={currentSize.fullWidth}
          height={currentSize.fullHeight}
          style={{ height: currentSize.fullHeight, width: "auto" }}
          className="object-contain"
          priority
        />
        <span className="sr-only">Krevia</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: currentSize.iconSize, height: currentSize.iconSize }}
    >
      <Image
        src="/logo-icon.png"
        alt="Krevia"
        width={currentSize.iconSize}
        height={currentSize.iconSize}
        style={{ width: currentSize.iconSize, height: currentSize.iconSize }}
        className="object-contain"
        priority
      />
      <span className="sr-only">Krevia</span>
    </div>
  );
};
