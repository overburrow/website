"use client";

import { navConfig } from "@/lib/config/nav";
import {
  IconBrightnessUpFilled,
  IconExternalLink,
  IconMoonFilled,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";

import { Logo } from "./logo";

type NavContext = {
  rect: DOMRect | null;
  setRect: Dispatch<SetStateAction<DOMRect | null>>;
};

const NavContext = createContext<NavContext | null>(null);

export const Nav = () => {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {
    ref: themeButtonRef,
    toggleSwitchTheme,
    isDarkMode,
  } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
    duration: 500,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const parentRect = ref.current?.getBoundingClientRect();

  return (
    <nav className="fixed w-full flex items-center justify-between top-0 left-0 p-4">
      <NavContext.Provider value={{ rect, setRect }}>
        <Logo animated size={20} />

        <div ref={ref} className="relative flex p-1 outline rounded-full">
          {rect && parentRect && (
            <motion.div
              animate={{
                width: rect.width,
                height: rect.height,
                top: rect.top - parentRect.top,
                left: rect.left - parentRect.left,
              }}
              transition={{ duration: 0.2, ease: "circOut" }}
              className="bg-muted absolute rounded-full -z-10"
            />
          )}
          {navConfig.routes.map((r, i) => (
            <NavItem key={i} name={r.name} link={r.link} />
          ))}
        </div>

        {isMounted ? (
          <button
            ref={themeButtonRef}
            onClick={toggleSwitchTheme}
            className="*:size-5"
          >
            {isDarkMode ? <IconBrightnessUpFilled /> : <IconMoonFilled />}
          </button>
        ) : (
          <button className="size-5" />
        )}
      </NavContext.Provider>
    </nav>
  );
};

type NavItemProps = {
  name: string;
  link: string;
};

const NavItem = ({ name, link }: NavItemProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const ctx = useContext(NavContext);
  const pathname = usePathname();
  const isExternal = !link.startsWith("/");

  useEffect(() => {
    if (!ctx || !ref.current) return;
    const isCurrentPath = pathname.split("/")[1] === link.substring(1);
    const rect = ref.current.getBoundingClientRect();
    if (isCurrentPath) ctx.setRect(rect);
  }, [pathname]);

  return (
    <Link
      ref={ref}
      href={link}
      target={isExternal ? "_blank" : "_self"}
      className="text-sm px-2 py-0.5 flex items-center gap-1"
    >
      {name}
      {isExternal && (
        <IconExternalLink className="size-3 text-muted-foreground" />
      )}
    </Link>
  );
};
