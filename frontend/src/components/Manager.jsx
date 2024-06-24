import { useRef } from "react";

const Manager = () => {
    const ref = useRef();
    const showPassword = () => {
        alert("Password: Pssword");
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        } else {
            ref.current.src = "icons/eyecross.png"
        }
    }

    const savePassword = () => {
        
    }
    return (
        <>
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
            ></div>

            <div className="mx-auto mycontainer">
                <h1 className="text-4xl text font-bold text-center">
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-green-900 text-center font-bold">My own Password Manager </p>
                <div className="flex flex-col p-4 text-black gap-6 items-center">
                    <input
                        placeholder="Enter website URL"
                        className="rounded-full border border-green-600 w-full p-4 py-1"
                        type="text"
                        name=""
                        id=""
                    />
                    <div className="flex w-full justify-between gap-8">
                        <input
                            placeholder="Enter username"
                            type="textbox"
                            className="rounded-full border border-green-600 w-full p-4 py-1"
                            name=""
                            id=""
                        />
                        <div className="relative">
                            <input
                                placeholder="Enter password"
                                type="password"
                                className="rounded-full border border-green-600 w-full p-4 py-1"
                                name=""
                                id=""
                            />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-200 rounded-full px-8 py-2 w-fit border border-green-900">
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                    
                </div>
            </div>
        </>
    )
}

export default Manager;