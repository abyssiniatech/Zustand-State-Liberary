// name container in zustand
import {create} from "zustand"
interface Nameprop{
    name:string;
    email:string;
    setname:(name:string)=>void;
    setemail:(email:string)=>void;
}

export const namstore = create<Nameprop>((set) => ({
    name: "John Doe",
    email: "john.doe@example.com",
    setname: (name: string) => set(() => ({ name })),
    setemail: (email: string) => set(() => ({ email }))
}))