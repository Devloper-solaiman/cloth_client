import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
