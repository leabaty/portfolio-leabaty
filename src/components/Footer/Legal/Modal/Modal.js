import React from "react";

function Modal({ isShowing, hide }) {
  return (
    <>
      {isShowing && (
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h4>Modal Header</h4>
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">Hello Modal Here</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
