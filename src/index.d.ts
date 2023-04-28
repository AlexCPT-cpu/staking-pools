export interface ItemProps {
  title: string;
  subTitle: string;
}

export interface NavItemProp {
  name: string;
  Icon: React.FC<{ className?: string }>;
}

export interface MobileProps {
  navOpen: boolean;
  setNavOpen: (state: boolean) => void;
}
