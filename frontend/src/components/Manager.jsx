import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
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
        if (form.site.length > 3 && form.websitename.length > 3 && form.username.length > 3 && form.password.length > 8) {
            setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
            localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
            console.log([...passwordArray, form]);
            setForm({ site: "", websitename: "", username: "", password: "" })

            toast('Password saved successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark"
            });
        } else {
            toast('Error: Please fill all fields correctly', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark"
            });
        }
    }

    const deletePassword = (id) => {
        console.log(id);
        const c = confirm('Do you want to delete this password?');
        if (c) {
            const filteredArray = passwordArray.filter((item) => item.id !== id);
            setPasswordArray(filteredArray);
            localStorage.setItem("password", JSON.stringify(filteredArray));
        }

        toast('Password deleted successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }

    const editPassword = (id) => {
        console.log(id);
        setForm(passwordArray.find((item) => item.id === id));
        const filteredArray = passwordArray.filter((item) => item.id !== id);
        setPasswordArray(filteredArray);
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
            theme: "dark"
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
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
            <div
                className="absolute inset-0 -z-10 h-full w-full"
            >
            </div>

            <div className="p-2 md:p-0 md:mycontainer min-h-[88.6vh]">
                <h1 className="text-4xl text font-bold text-center">
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-green-900 text-center font-bold">My own Password Manager </p>
                <div className="flex flex-col p-4 text-black gap-6 items-center">
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input
                            placeholder="Enter website URL"
                            type="text"
                            className="rounded-full border border-green-600 w-full p-4 py-1"
                            name="site"
                            id="site"
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

                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input
                            placeholder="Enter username"
                            type="textbox"
                            className="rounded-full border border-green-600 w-full p-4 py-1"
                            name="username"
                            id="username"
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

                        <table className="table-auto w-full rounded-xl overflow-hidden mb-10">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="py-2">Website Name</th>
                                    <th className="py-2">Website URL</th>
                                    <th className="py-2">Username</th>
                                    <th className="py-2">Password</th>
                                    <th className="py-2">Actions</th>
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
                                            <td className="py-2 border boerder-white text-center">
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
                                            <td className="py-2 border boerder-white text-center">
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
                                            <td className="flex items-center justify-center py-2 border boerder-white text-center">
                                                <span className="cursor-pointer mx-1" onClick={() => {editPassword(item.id)}}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/ifsxxxte.json"
                                                        trigger="hover"
                                                        style={{"width": "25px", "height":"25px"}}
                                                    >
                                                    </lord-icon>
                                                </span>

                                                <span className="cursor-pointer mx-1" onClick={() => {deletePassword(item.id)}}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover"
                                                        style={{"width": "25px", "height":"25px"}}
                                                    >
                                                    </lord-icon>
                                                </span>
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