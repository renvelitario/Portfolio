import Icon from "./Icon.tsx";
import "./CardTitle.css";

export default function CardTitle({ icon, children, className = "" }) {
  return (
    <div className={`card-title ${className}`.trim()}>
      <Icon name={icon} />
      <span>{children}</span>
    </div>
  );
}
