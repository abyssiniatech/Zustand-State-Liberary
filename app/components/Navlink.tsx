   "use client"
import Link from "next/link"
const Links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "User", href: "/user" },
    { name: "Contact", href: "/contact" },
    {name:"Form",href:"/form"},
];
const Navlink=()=>{
    return(
         <div>
         {Links.map((link,index)=>(
              <Link key={index} href={link.href} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"> 
                {link.name}
              </Link>
            ))}

        </div>
         )
    }
    export default Navlink