import React from "react";
import { MdOutlinePayments } from "react-icons/md";

const PayButton = ({
  href = "https://payments.cashfree.com/forms/ntccsl",
  title = "Pay Daily Deposit",
  bgColor = "#6f3c85",
}) => {
  return (
    <form>
      <a
        href={href}
        target="_parent"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            background: bgColor,
            border: `1px solid ${bgColor}`,
            borderRadius: "10px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 12px",
            width: "fit-content",
            cursor: "pointer",
            transition: "transform 0.15s ease, opacity 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <MdOutlinePayments size={18} color="#fff" />
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              color: "#fff",
              fontSize: "12px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </span>
        </div>
      </a>
    </form>
  );
};

export default PayButton;