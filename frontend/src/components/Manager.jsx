const Manager = () => {
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
                    <input className="rounded-full border border-green-600 w-full p-4 py-1" type="text" name="" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input className="rounded-full border border-green-600 w-full p-4 py-1" type="text" name="" id="" />
                        <input className="rounded-full border border-green-600 w-full p-4 py-1" type="text" name="" id="" />
                    </div>
                    <button className="flex justify-center items-center bg-green-400 hover:bg-green-200 rounded-full px-4 py-2 w-fit">
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