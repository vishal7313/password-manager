import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({ site: "", websitename: "", username: "", password: "" })
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
            passwordRef.current.type = "password";
        } else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text";
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

    const copyText = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: "Bounce"
            });
        navigator.clipboard.writeText(text);
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition= "Bounce"
            />
            {/* Same as */}
            <ToastContainer />
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
                    <div className="flex w-full justify-between gap-8">
                        <input
                            placeholder="Enter website URL"
                            type="text"
                            className="rounded-full border border-green-600 w-full p-4 py-1"
                            name="site"
                            id=""
                            value={form.site}
                            onChange={handleChange}
                        />
                        <div className="relative">
                            <input
                                placeholder="Enter wesbite name"
                                type="text"
                                className="rounded-full border border-green-600 w-full p-4 py-1"
                                name="websitename"
                                id="websitename"
                                value={form.websitename}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

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
                                ref={passwordRef}
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
                                    <th className="py-2">Website Name</th>
                                    <th className="py-2">Website URL</th>
                                    <th className="py-2">Username</th>
                                    <th className="py-2">Password</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100 text-black">
                                {
                                    passwordArray.map((item, index) => {
                                        return <tr key={index}>
                                            <td className="py-2 border boerder-white text-center">
                                                <div className="flex items-center justify-center">
                                                    <span>{item.websitename}</span>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.websitename) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            className={"cursor-pointer"}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="justify-center py-2 border boerder-white text-center">
                                                <div className="flex items-center justify-center">
                                                    <a href={item.site} target="_blank" rel="noreferrer">
                                                        {item.site}
                                                    </a>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            className={"cursor-pointer"}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2 border boerder-white text-center">
                                                <div className="flex items-center justify-center">
                                                    <span>{item.username}</span>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            className={"cursor-pointer"}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="flex items-center justify-center py-2 border boerder-white text-center">
                                                <div className="flex items-center justify-center">
                                                    <span>{item.password}</span>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            className={"cursor-pointer"}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager;