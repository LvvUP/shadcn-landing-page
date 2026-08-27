import {
  BadgeCheck,
  Blocks,
  Cookie,
  Crown,
  Drama,
  Ghost,
  Goal,
  LineChart,
  MousePointerClick,
  Newspaper,
  PictureInPicture,
  Puzzle,
  Sparkle,
  Squirrel,
  TabletSmartphone,
  Vegan,
  Wallet,
} from "lucide-react";

const iconMap = {
  BadgeCheck,
  Blocks,
  Cookie,
  Crown,
  Drama,
  Ghost,
  Goal,
  LineChart,
  MousePointerClick,
  Newspaper,
  PictureInPicture,
  Puzzle,
  Sparkle,
  Squirrel,
  TabletSmartphone,
  Vegan,
  Wallet,
} as const;

export type IconName = keyof typeof iconMap;

export const Icon = ({
  name,
  color,
  size,
  className,
  ...props
}: {
  name: IconName;
  color: string;
  size: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}) => {
  const LucideIcon = iconMap[name];

  return <LucideIcon color={color} size={size} className={className} {...props} />;
};
