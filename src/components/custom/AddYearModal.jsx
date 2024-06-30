import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddYearModal = React.forwardRef(({ isOpen, onClose, onConfirm, year, onYearChange }, ref) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <p className="mb-4 text-bb-violet">Please enter the year to add:</p>
        <Input
          ref={ref}
          type="text"
          value={year}
          onChange={onYearChange}
          placeholder="Enter year"
          className="border border-gray-300 p-2 rounded w-full mb-4 text-bb-violet"
        />
        <div className="flex justify-end space-x-4">
          <Button onClick={onClose} className="mr-2 bg-bb-violet">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-bb-violet">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
});

AddYearModal.displayName = 'AddYearModal';

export { AddYearModal };