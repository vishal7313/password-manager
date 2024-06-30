const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
            Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        {/* <ul>
            <li className="flex gap-4">
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/">About</a>
                <a className='hover:font-bold' href="/">Contact</a>
            </li>
        </ul> */}
        <button className="text-white bg-green-500 px-2 rounded-full hover:bg-green-600 flex justify-between items-center gap-2">
          <img className="invert w-10 rounded-sm" src="https://img.icons8.com/ios-filled/50/00000/github--v1.png" alt="github" />
          <span className="font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;