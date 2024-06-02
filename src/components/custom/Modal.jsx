import React from 'react';

const Modal = React.forwardRef(({ isOpen, onClose, onConfirm, message }, ref) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <p className="mb-4 text-black">{message}</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-green-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export { Modal };