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

export interface ButtonProps {
  children: ReactNode;
  loading?: boolean;
  onClick: MouseEvent<HTMLElement, MouseEvent>;
}

export interface PoolType {
  name: string;
  poolAddress: string;
  tokenAddress: string;
}
