import * as React from "react"
import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const MainNav = () => {
  return (
    <NavigationMenu className="text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
            Reference cases
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-4 p-6 w-[600px] bg-[#1E1B3C] text-white">
              <div className="col-span-2 grid grid-cols-2 gap-6">
                <a href="#" className="group block space-y-2">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                      alt="Office workspace"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Company A</h3>
                    <p className="text-sm text-gray-300">200% productivity increase</p>
                  </div>
                </a>
                <a href="#" className="group block space-y-2">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1664575602554-2087b04935a5"
                      alt="Modern office"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Company B</h3>
                    <p className="text-sm text-gray-300">50% cost reduction</p>
                  </div>
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-4 p-6 w-[400px] bg-[#1E1B3C] text-white">
              <div className="grid grid-cols-1 gap-4">
                <a href="#" className="block group">
                  <h3 className="text-lg font-semibold">Our Story</h3>
                  <p className="text-sm text-gray-300">Learn about our journey and mission</p>
                </a>
                <a href="#" className="block group">
                  <h3 className="text-lg font-semibold">Team</h3>
                  <p className="text-sm text-gray-300">Meet the people behind our success</p>
                </a>
                <a href="#" className="block group">
                  <h3 className="text-lg font-semibold">Careers</h3>
                  <p className="text-sm text-gray-300">Join our growing team</p>
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            to="/plans" 
            className="text-white hover:text-white/80 px-4 py-2 inline-block"
          >
            Plans
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent hover:bg-white/10">
            Partners
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-4 p-6 w-[400px] bg-[#1E1B3C] text-white">
              <div className="grid grid-cols-1 gap-4">
                <a href="#" className="block group">
                  <h3 className="text-lg font-semibold">Partner Program</h3>
                  <p className="text-sm text-gray-300">Join our partner network</p>
                </a>
                <a href="#" className="block group">
                  <h3 className="text-lg font-semibold">Find a Partner</h3>
                  <p className="text-sm text-gray-300">Locate certified partners</p>
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNav
