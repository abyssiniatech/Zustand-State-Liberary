import Counter1 from "../components/Counter1"
import Name from "../components/Name";
const User=()=>{
    return(
        <div className="min-h-screen flex flex-col justify-center items-center  bg-indigo-900 text-white">
            <Counter1 />
            <Name />
        </div>
    )
}
export default User;