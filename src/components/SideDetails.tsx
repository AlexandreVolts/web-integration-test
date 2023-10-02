import { ReactNode } from "react";

interface SideDetailsProps {
  profile: ReactNode;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}
function SideDetails(props: SideDetailsProps) {
  return (
    <div className="px-2 py-8 border-r-[1px] border-[#455967]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-4">
            <h3 className="flex text-2xl text-white">
              {props.icon} {props.title}
            </h3>
          </div>
          {props.profile}
          <nav>
            <ul>{props.children}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

interface SideDetailsTabProps {
  icon: ReactNode;
  label: string;
  selected?: boolean;
}
function SideDetailsTab(props: SideDetailsTabProps) {
  return (
    <li className="flex">
      <span>{props.icon}</span>
      <span>{props.label}</span>
    </li>
  );
}

SideDetails.Tab = SideDetailsTab;
export { SideDetails };
