import { useState } from "react";
import Icon from "../ui/Icon.jsx";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`chat-widget ${isOpen ? "open" : ""}`.trim()}>
      <button
        className="chat-fab"
        type="button"
        aria-label="Open chat"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <Icon name="message-circle" />
      </button>

      <div className="chat-panel">
        <div className="chat-header">
          <div className="chat-title">
            <div className="chat-avatar" aria-hidden="true" />
            <h2>Chat with Ren</h2>
          </div>

          <button
            className="chat-close"
            type="button"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
          >
            <Icon name="x" />
          </button>
        </div>

        <div className="chat-body">
          <p className="chat-message">Hi, I&apos;m a placeholder for your future AI chat.</p>
        </div>

        <form className="chat-input">
          <input type="text" placeholder="Ask something..." disabled />
          <button type="button" disabled>
            <Icon name="send" />
          </button>
        </form>
      </div>
    </aside>
  );
}
