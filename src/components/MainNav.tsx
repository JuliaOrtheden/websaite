import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const MainNav = () => {
  const navigate = useNavigate();

  return (
    <NavigationMenu className="text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            onClick={() => navigate('/reference-cases')}
            className="text-white hover:text-white/80 bg-transparent hover:bg-white/10"
          >
            Reference cases
          </NavigationMenuTrigger>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/our-story" className="text-white hover:text-white/80 bg-transparent hover:bg-white/10 flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
            Our story
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/plans" className="text-white hover:text-white/80 bg-transparent hover:bg-white/10 flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
            Plans
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNav