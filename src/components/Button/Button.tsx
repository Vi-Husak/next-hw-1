import Link from "next/link";

interface ButtonProps {
  type: "link" | "submit" | "button" | "reset";
  href?: string;
  onClick?: () => void;
  color?: "dark" | "light";
  children: React.ReactNode;
}

export default function Button({
  type,
  href,
  onClick,
  color = "dark",
  children,
}: ButtonProps) {
  const buttonClasses = `inline-block px-11 py-3 font-medium text-lg rounded ${
    color === "dark"
      ? "bg-[#2C36F2] text-[#F6F7FF]"
      : "bg-[#F6F7FF] text-[#707C87]"
  }`;

  if (type === "link" && href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  if (type === "submit" || type === "button" || type === "reset") {
    return (
      <button type={type} onClick={onClick} className={buttonClasses}>
        {children}
      </button>
    );
  }

  return null;
}
