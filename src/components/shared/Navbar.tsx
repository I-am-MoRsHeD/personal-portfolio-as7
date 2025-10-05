'use client';
import UserMenu from "@/components/ui/user-menu"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { navigationLinks } from "@/static/navinfo"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="container mx-auto sticky top-1 z-50 bg-muted rounded-md px-2">
      <div className="flex h-16 items-center justify-between gap-4 w-full">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-72 mt-3 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-4 md:gap-4">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-24">
                      <Link
                        href={link.href}
                        className="flex-row items-center gap-2 py-1.5"
                      >
                        <span>{link.label}</span>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Image src="https://res.cloudinary.com/dt3h4wx0k/image/upload/v1759167450/logo_2_b0iq3e.png" width={120} height={120} alt="Logo" />
            </Link>
          </div>
        </div>
        {/* Middle area */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="flex flex-row gap-5 w-full">
            {navigationLinks.map((link, index) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

              return (
                <NavigationMenuItem key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-medium transition-all border-b-2",
                      isActive
                        ? "text-primary border-primary rounded-xl px-2"
                        : "text-muted-foreground border-transparent hover:text-primary hover:border-primary/50"
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
