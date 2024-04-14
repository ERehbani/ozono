import { PropsWithChildren } from "react";

function Label({ children }: PropsWithChildren) {
  return (
    <span className="w-fit inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
      {children}
    </span>
  );
}

export default Label;
