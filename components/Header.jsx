import Link from "next/link";
import { Button } from "./ui/button";
//Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
         <div className="container mx-auto flex justify-between items-center">
         {/*logo*/}
          <Link href= "/">
          <h1 className="text-2xl font-semibold">
            Nico<span className="text-[#FF7A29]">.</span>
          </h1>
          </Link>


          {/* desktop Nav and buttons */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav></Nav>
              <a 
                href="https://wa.me/+573008735048" 
                target="_blank" 
                rel="noopener noreferrer" 
              >
               <Button>Hire me</Button>
              </a>
          </div>


          {/* Mobile nav */}
          <div className="xl:hidden">
            <MobileNav></MobileNav>
          </div>



        </div>
        </header>
    )
}

export default Header