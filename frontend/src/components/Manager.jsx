import { useEffect, useRef, useState } from "react";

const Manager = () => {
    const ref = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let password = localStorage.getItem("password");

        if (password) {
            setPasswordArray(JSON.parse(password));
        }
    }, [])

    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            document.getElementById("password").type = "password";
        } else {
            ref.current.src = "icons/eyecross.png"
            document.getElementById("password").type = "text";
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form]);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

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
                        name="site"
                        id=""
                        value={form.site}
                        onChange={handleChange}
                    />
                    <div className="flex w-full justify-between gap-8">
                        <input
                            placeholder="Enter username"
                            type="textbox"
                            className="rounded-full border border-green-600 w-full p-4 py-1"
                            name="username"
                            id=""
                            value={form.username}
                            onChange={handleChange}
                        />
                        <div className="relative">
                            <input
                                placeholder="Enter password"
                                type="password"
                                className="rounded-full border border-green-600 w-full p-4 py-1"
                                name="password"
                                id="password"
                                value={form.password}
                                onChange={handleChange}
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

                <div className="passwords">
                    <h2 className="font-bold text-2xl py-4">Your Password</h2>
                    {
                        passwordArray.length === 0 && <div> No Password to show </div>
                    }

                    {
                        passwordArray.length !== 0 &&
                    
                        <table className="table-auto w-full rounded-xl overflow-hidden">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="py-2">Song</th>
                                    <th className="py-2">Artist</th>
                                    <th className="py-2">Year</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100 text-black">
                                <tr>
                                    <td className="py-2 border boerder-white text-center w-32">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td className="py-2 border boerder-white text-center w-32">Malcolm Lockyer</td>
                                    <td className="py-2 border boerder-white text-center w-32">1961</td>
                                </tr>
                                <tr>
                                    <td className="py-2 border boerder-white text-center w-32">Witchy Woman</td>
                                    <td className="py-2 border boerder-white text-center w-32">The Eagles</td>
                                    <td className="py-2 border boerder-white text-center w-32">1972</td>
                                </tr>
                                <tr>
                                    <td className="py-2 border boerder-white text-center w-32">Shining Star</td>
                                    <td className="py-2 border boerder-white text-center w-32">Earth, Wind, and Fire</td>
                                    <td className="py-2 border boerder-white text-center w-32">1975</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager;