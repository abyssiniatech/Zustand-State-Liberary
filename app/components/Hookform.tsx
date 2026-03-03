// create and build  profesional react hooks form from scratch by using next js ,typescript and tailwind css 
"use client"
import {useForm } from "react-hook-form"
interface form{
    name:string
    email:string
    password:string
}
const Hookform=()=>{
    const {register,handleSubmit,formState:{errors}}=useForm<form>()
    const onSubmit=(data:form)=>{
        console.log(data.name)
    }
    return(
        <div className="min-h-screen text-gray-800 bg-white flex items-center  ">
           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-10 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
              <label htmlFor="name">Name:</label>
              <input
               {...register("name",{required:"Name is required"})}
               type="text"
               id="name"
               placeholder="enter name here"
               className="px-4 mx-auto"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}

              {/* email */}
               <label htmlFor="email">Email:</label>
              <input
               {...register("email",{required:"email is required"})}
               type="email"
               id="email"
               placeholder="enter email here"
               className=""
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              {/* password */}
               <label htmlFor="password">Password:</label>
              <input
               {...register("password",{required:"password is required"})}
               type="text"
               id="password"
               placeholder="enter password here"
               className=""
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              <button className="bg-teal-700 text-white mx-auto m-4 rounded px-6 py-2 text-2xl hover:bg-teal-600">Add</button>
           </form>
        </div>
    )
}
export default Hookform



