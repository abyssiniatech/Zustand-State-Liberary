import {create} from "zustand"
interface Incrementprop{
    counter:number;
    increment:()=>void;
    decrement:()=>void;
    reset:()=>void;
}

// create zustand store
export const incrementstore = create<Incrementprop>((set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
    reset: () => set(() => ({ counter: 0 }))
}))
