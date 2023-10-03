import { IconCircleArrowUpFilled, IconDiamondFilled, IconSkull, IconUser } from "@tabler/icons-react";
import { ProgressBar } from "./ui/ProgressBar";
import { IconWithLabel } from "./ui/IconWIthLabel";
import { UserData } from "@/types/UserData";

export function ProfileCard(props: UserData) {
  return (
    <div className="w-64 p-2 pb-3 space-y-4 border-[1px] border-[#455967] rounded-sm">
      <div className="flex items-center space-x-8">
        <span className="p-1 text-[#282c3c] bg-[#2ce5a7] rounded-full">
          <IconUser />
        </span>
        <p className="text-white">{props.pseudo}</p>
      </div>
      <ProgressBar label={props.level.toString()} progress={props.progress} />
      <div className="flex justify-between">
        <IconWithLabel icon={<IconCircleArrowUpFilled />} label={props.xp.toString()} />
        <IconWithLabel icon={<IconDiamondFilled />} label={props.gems.toString()} />
        <IconWithLabel icon={<IconSkull />} label={`${props.rewards}/5`} />
      </div>
    </div>
  );
}
