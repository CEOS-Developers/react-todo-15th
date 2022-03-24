import React from 'react';

const Modal = ({ children }, ref) => {
    return (
        <div className="modal hidden" ref={ref}>
            <div
                className="modal-overlay"
                onClick={() => {
                    ref.current.classList.add('hidden');
                }}
            ></div>
            <div className="modal-content">{children}</div>
        </div>
    );
};

export default React.forwardRef(Modal);
