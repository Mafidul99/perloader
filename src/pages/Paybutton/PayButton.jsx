import React, { useState } from "react";
import { MdOutlinePayments } from "react-icons/md";

const PayButton = ({
  href = "https://payments.cashfree.com/forms/ntccsl",
  title = "Pay Daily Deposit",
  bgColor = "#6f3c85",
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <a
      href={href}
      target="_parent"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "inline-block" }}
      aria-label={title}
    >
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={{
          background: `linear-gradient(135deg, ${bgColor} 0%, ${shade(
            bgColor,
            -15
          )} 100%)`,
          border: "none",
          borderRadius: "8px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 10px",
          cursor: "pointer",
          color: "#fff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.2px",
          whiteSpace: "nowrap",
          boxShadow: hovered
            ? `0 6px 14px -5px ${hexToRgba(bgColor, 0.55)}, 0 2px 4px ${hexToRgba(
                bgColor,
                0.25
              )}`
            : `0 3px 8px -3px ${hexToRgba(bgColor, 0.4)}, 0 1px 2px ${hexToRgba(
                bgColor,
                0.2
              )}`,
          transform: pressed
            ? "translateY(0) scale(0.97)"
            : hovered
            ? "translateY(-1px)"
            : "translateY(0)",
          transition:
            "transform 0.18s ease, box-shadow 0.25s ease, background 0.25s ease",
          outline: "none",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            borderRadius: "6px",
            background: "rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(4px)",
          }}
        >
          <MdOutlinePayments size={12} color="#fff" />
        </span>
        <span>{title}</span>
      </button>
    </a>
  );
};

/* ---------- helpers ---------- */

function shade(hex, percent) {
  const { r, g, b } = hexToRgb(hex);
  const t = percent < 0 ? 0 : 255;
  const p = Math.abs(percent) / 100;
  const nr = Math.round((t - r) * p) + r;
  const ng = Math.round((t - g) * p) + g;
  const nb = Math.round((t - b) * p) + b;
  return rgbToHex(nr, ng, nb);
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const num = parseInt(full, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0"))
      .join("")
  );
}

function hexToRgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default PayButton;