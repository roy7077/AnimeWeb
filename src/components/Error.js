import { useRouteError } from "react-router-dom";


const Error=()=>{
    const err=useRouteError();
    return (
        <div className="h-screen flex items-center justify-center shadow-lg">
            <div className="">
            <h1 className='font-bold text-lg'>{err.status}</h1>
            <h2 className="">{err.statusText}</h2>
           </div>
        </div>
    )
}

export default Error;