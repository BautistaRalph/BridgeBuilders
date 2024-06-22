import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";

const Select = forwardRef(
  ({ className, handleChange, optionList, children, ...props }, ref) => {
    const selectRef = useRef(null);

    const handleOpen = () => {
      selectRef.current.style.display = "block";
    };

    const handleClose = () => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.relatedTarget)
      ) {
        selectRef.current.style.display = "none";
      }
    };

    const handleSelectChange = (event) => {
      handleChange(event);
      handleClose();
    };

    return (
      <>
        <button
          ref={ref}
          onFocus={handleOpen}
          onBlur={handleClose}
          className={cn(className)}
          {...props}
        >
          {children}
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </button>

        <div
          ref={selectRef}
          className="hidden absolute bg-bb-white w-full shadow-lg z-10 flex-col"
        >
          {optionList.map((option) => (
            <>
              <button
                className="text-bb-violet bg-bb-white text-3xl text-left p-4 w-full transition-colors duration-300 hover:text-bb-white hover:bg-bb-purple"
                value={option.value}
                name={option.name}
                onClick={handleSelectChange}
              >
                {option.value}
              </button>
            </>
          ))}
        </div>
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;
