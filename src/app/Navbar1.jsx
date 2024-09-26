import Link from "next/link"
import { UserIcon, LogInIcon, LogOutIcon, HomeIcon, ShoppingCartIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SignInButton } from "@clerk/nextjs"

export default function Navbar() {
  const navItems = [
    { icon: HomeIcon, label: "Home", href: "/" },
    // { icon: ShoppingCartIcon, label: "Cart", href: "/cart" },
    // { icon: UserIcon, label: "Profile", href: "/profile" },
    // { icon: LogInIcon, label: "Login", href: "/login" },
    // { icon: LogOutIcon, label: "Logout", href: "/logout" },
  ]

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">Trendz</span>
            </Link>
          </div>

       
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Button variant="ghost" size="sm">
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.label}
                </Button>
              </Link>


            ))}

            <SignInButton></SignInButton>


          </div>

         
          <div className="flex items-center sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center text-foreground hover:text-primary transition-colors"
                    >
                      <item.icon className="h-5 w-5 mr-2" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}