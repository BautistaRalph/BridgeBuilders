import * as React from "react";
import { cn } from "@/lib/utils";

const Goal = React.forwardRef(
  ({ className, image, title, progress = 0, ...props }, ref) => {
    const complete = progress == 100;
    const completedGoalStyle = complete ? "bg-bb-violet" : "bg-bb-light-purple";
    const completedTextStyle = complete ? "text-bb-white" : "text-bb-violet";

    return (
      <div
        ref={ref}
        className={cn(
          `flex flex-col w-72 h-80 mr-4 ml-4 mt-8 mb-4 ${completedGoalStyle} flex-none`,
          className
        )}
        {...props}
      >
        <div className="flex items-center w-full h-2/3">
          <img src={image} className="object-contain" />
        </div>
        <h3 className={`text-center text-3xl flex-grow ${completedTextStyle}`}>
          {complete ? "Complete" : "Incomplete"}
        </h3>
        <div className="flex w-full justify-between">
          <span
            className={`${
              progress >= 25
                ? complete
                  ? "bg-progress-green"
                  : "bg-progress-green-2"
                : "bg-bb-purple"
            } h-2 w-1/4 mr-1`}
          />
          <span
            className={`${
              progress >= 50
                ? complete
                  ? "bg-progress-green"
                  : "bg-progress-green-2"
                : "bg-bb-purple"
            } h-2 w-1/4 mr-1`}
          />
          <span
            className={`${
              progress >= 75
                ? complete
                  ? "bg-progress-green"
                  : "bg-progress-green-2"
                : "bg-bb-purple"
            } h-2 w-1/4 mr-1`}
          />
          <span
            className={`${
              progress >= 100
                ? complete
                  ? "bg-progress-green"
                  : "bg-progress-green-2"
                : "bg-bb-purple"
            } h-2 w-1/4`}
          />
        </div>
        <div className="bg-bb-white">
          <h3 className="text-center text-1xl p-2">{title}</h3>
        </div>
      </div>
    );
  }
);
Goal.displayName = "Goal";

export default Goal;
