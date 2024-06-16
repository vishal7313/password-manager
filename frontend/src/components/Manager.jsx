const Manager = () => {
    return (
        <>
        <div
            className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        ></div>

        <div className="mx-auto bg-slate-50 mycontainer">
            <h1>Pass OP</h1>
            <p>My own Password Manager </p>
            <div className="text-white flex flex-col p-4">
                <input className="rounded-full" type="text" name="" id="" />
                <div className="flex">
                    <input type="text" name="" id="" />
                    <input type="text" name="" id="" />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Manager;