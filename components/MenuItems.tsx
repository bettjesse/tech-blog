"use client";


import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface MenuItemProps {

  label: string;
  href: string;
};

export const MenuItem = ({

  label,
  href,
}: MenuItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-gray-600 hover:text-black text-sm font-[500] pl-6 transition-all  ",
        isActive && "text-black  "
      )}
    >
      <div className={cn("flex items-center gap-x-4 py-4",
       isActive && "border-b border-black "
      )}>
       
        {label}
      </div>
      {/* <div
        className={cn(
          "mb-auto opacity-0 border-2 border-sky-700 w-full transition-all",
          isActive && "opacity-100"
        )}
      /> */}
    </button>
  )
}