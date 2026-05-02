import "./Card.css";

export default function Card({ as: Component = "section", className = "", children, ...props }: any) {
  return (
    <Component className={`card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
