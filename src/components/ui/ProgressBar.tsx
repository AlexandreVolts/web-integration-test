import { useRef } from "react";

interface ProgressBarProps {
  label: string;
  progress: number;
}
export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center w-6 h-6 text-sm text-[#282c3c] bg-[#2ce5a7] border-[1px] border-[#2ce5a7] rounded-sm">
        <p>{props.label}</p>
      </div>
      <div className="w-full h-4 border-[1px] border-[#2ce5a7] rounded-r-sm">
        <div
          className="h-full bg-[#2ce5a7]"
          style={{ width: `${props.progress * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
