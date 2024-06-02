import React from 'react';

const AddYearModal = React.forwardRef(({ isOpen, onClose, onConfirm, year, onYearChange }, ref) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <p className="mb-4 text-black">Please enter the year to add:</p>
        <input
          ref={ref}
          type="text"
          value={year}
          onChange={onYearChange}
          placeholder="Enter year"
          className="border border-gray-300 p-2 rounded w-full mb-4 text-black"
        />
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-green-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
});

AddYearModal.displayName = 'AddYearModal';

export { AddYearModal };