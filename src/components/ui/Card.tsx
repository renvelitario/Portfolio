import type React from "react";
import "./Card.css";

type CardProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
};

export default function Card({ as: Component = "section", className = "", children, ...props }: CardProps) {
  return (
    <Component className={`card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
