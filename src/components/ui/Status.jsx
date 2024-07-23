import { useEffect } from "react";

const Status = ({ isOpen, message, handleClose, type, autoClose = false }) => {
  const info = type === "info" ? "text-bb-violet bg-bb-white" : "";
  const success = type === "success" ? "bg-progress-green text-bb-violet" : "";
  const error = type === "error" ? "bg-red-600 text-bb-white" : "";

  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        handleClose();
      }, 1000);
    }
  }, [autoClose, handleClose]);

  return (
    <>
      <div
        className={`fixed w-1/4 h-max max-h-32 bottom-16 right-16 z-20 ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        } transition-opacity duration-500 ${
          info || success || error
        } shadow-lg rounded-sm overflow-auto`}
      >
        <span className="flex items-center justify-center p-2">
          <span className="text-4xl material-symbols-outlined">
            {success ? "check" : error ? "warning" : "info"}
          </span>
          <p className="text-2xl ml-2 flex-grow">{message}</p>
          <span
            className="cursor-pointer text-4xl material-symbols-outlined"
            onClick={handleClose}
          >
            close
          </span>
        </span>
      </div>
    </>
  );
};

export default Status;
