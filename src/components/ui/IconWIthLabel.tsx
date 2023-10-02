import { ReactNode } from "react";

interface IconWithLabelProps {
  icon: ReactNode;
  label: string;
}
export function IconWithLabel(props: IconWithLabelProps) {
  return (
    <div className="flex items-center space-x-2 border-l-0 border-[1px] border-[#455967] rounded-sm">
      <div className="scale-[1.4] bg-[#282c3c] border-[1px] border-[#455967] rounded-full">
        {props.icon}
      </div>
      <div className="p-1 text-xs text-white text-right">
        {props.label}
      </div>
    </div>
  );
}