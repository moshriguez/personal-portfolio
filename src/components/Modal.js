import React from "react";

const Modal = ({ message, resetForm, setSending, errors }) => {

    const renderErrors = () => {
        errors.map((error, i) => {
            return <li key={i} >{error}</li>
        })
    }

    const ok = () => {
        resetForm()
        setSending(false)
    }

    return (
        <div className="modal-background">
            <div className="modal-content">
                {errors.length > 0 ? (
                    <>
                        <h3>Errors:</h3>
                        <div>
                            {renderErrors()}
                        </div>
                    </>
                ) : (
                    <>
                        <p>{message}</p>
                        {/successful/.test(message) ? <button onClick={ok} >OK</button> : null}
                    </>
                )}
            </div>
        </div>
    )
}

export default Modal