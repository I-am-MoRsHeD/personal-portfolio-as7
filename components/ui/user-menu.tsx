/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BoltIcon,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarImage,
} from "./avatar"
import { Button } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import Link from "next/link"
import { User } from "@/types"
import { logOut } from "../../services/postServices";
import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"

interface UserMenuProps {
  user: User;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export default function UserMenu({ user, setUser }: UserMenuProps) {
  const logout = async () => {
    const toastId = toast.loading('Logging out...');
    try {
      const res = await logOut();
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        setUser(null);
      }
    } catch (error: any) {
      toast.error(error?.response?.message || 'Something went wrong!', { id: toastId });
      console.log(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-foreground">
          <Avatar>
            {user && <AvatarImage src="/myImage.jpg" alt="Profile image" />}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href='/dashboard'>
            <DropdownMenuItem>
              <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>
                Dashboard
              </span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
