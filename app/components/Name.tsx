  "use client"
import { namstore } from "@/store/usename"

interface NameState {
    name: string;
    email:string
    setname: (name: string) => void;
    setemail: (name: string) => void;


}

const Name: React.FC = () => {
    const { name, email } = namstore() as NameState;
    return (
        <div>
            <input
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    (namstore.getState() as NameState).setname(e.target.value)
                }
                className="px-4 py-2 rounded text-black"
                placeholder="Enter your name"
            />
                <input
                    type="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        (namstore.getState() as NameState).setemail(e.target.value)
                    }
                    className="px-4 py-2 rounded text-black"
                    placeholder="Enter your email"
                />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Name
