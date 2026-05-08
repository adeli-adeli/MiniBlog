import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  // const content = document.getElementById("modal-content");
  return createPortal(
    <div className="modal_overlay">
      <div className="modal_content">
        <button className="modal_close" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
