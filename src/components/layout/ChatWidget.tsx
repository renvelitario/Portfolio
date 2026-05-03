import { useState } from "react";
import Icon from "../ui/Icon.tsx";
import { chatContent } from "../../data/content.js";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`chat-widget ${isOpen ? "open" : ""}`.trim()}>
      <button
        className="chat-fab"
        type="button"
        aria-label={chatContent.openLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <Icon name="message-circle" />
      </button>

      <div className="chat-panel">
        <div className="chat-header">
          <div className="chat-title">
            <div className="chat-avatar" aria-hidden="true" />
            <h2>{chatContent.title}</h2>
          </div>

          <button
            className="chat-close"
            type="button"
            aria-label={chatContent.closeLabel}
            onClick={() => setIsOpen(false)}
          >
            <Icon name="x" />
          </button>
        </div>

        <div className="chat-body">
          <p className="chat-message">{chatContent.placeholderMessage}</p>
        </div>

        <form className="chat-input">
          <input type="text" placeholder={chatContent.inputPlaceholder} disabled />
          <button type="button" disabled>
            <Icon name="send" />
          </button>
        </form>
      </div>
    </aside>
  );
}
