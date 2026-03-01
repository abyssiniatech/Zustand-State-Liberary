    "use client"

import Image   from "next/image"
import Navlink from "./Navlink"
 const Header= () =>{
    return(
        <div className="flex justify-between items-center p-4 bg-gray-100">
            <h1>My website </h1>
            <Image
              width={30}
                height={30}
                src="/images/logo.png"
                alt="Image"
                className="rounded-full  border-2 border-gray-300 "
            />
            <Navlink />
        </div>
    )
}
 
export default Header