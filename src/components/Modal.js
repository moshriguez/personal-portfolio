import React from "react";

const Modal = ({ message, resetForm, setSending, errors }) => {

    return (
        <div className="modal-background">
            <div className="modal-content">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Modal