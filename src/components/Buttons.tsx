import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const Buttons = ({ children, onClick, color }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Buttons;
