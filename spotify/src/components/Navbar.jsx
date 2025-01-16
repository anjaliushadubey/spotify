import { useState } from "react";
import { Home, Install, Logo, Search,Menu,Close  } from "../assets/icons"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 return (
    <nav className="bg-primary h-auto items-center flex justify-between">
             <a href="/"> 
        <img src={Logo} alt="logo" className="w-[5rem] "
        />
         </a>
         <div className="md:hidden">
        <button className="text-white focus:outline-none"  onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? Close : Menu} alt="menu" className="w-[2rem] h-[2rem]" />
        </button>
      </div> 
        <div className="hidden md:flex items-center ">
          <button className="bg-secondary2 rounded-full w-[4rem] h-[4rem] ">
            <span className=" justify-center  ">
              <img src={Home} alt="home" className="w-[2rem] h-[2rem]   " />
            </span>
          </button>
          <div className="relative flex items-center ml-3 my-3">
          <input type="text" placeholder="What do you want to play?"  className="w-[474px] h-[47px] bg-secondary2 items-center justify-center pl-14 font-[500px] rounded-full" onChange={()=>{}}/>
          <img src={Search} alt="search" className="w-[3rem] absolute ml-2" onClick={()=>{}} />
          </div>
          </div>
          <div className=" hidden items-center md:flex justify-between">
            <span className="bg-white text-black rounded-full px-20 py-5 font-bold from-neutral-100 mx-1">
              Explore Premium
            </span>
            <button className="flex items-center font-bold mx-2">
              <img src={Install} alt="install" className="h-[3rem]"/>
              <span className="text-white ">
                Install App
              </span>
            </button>
            <button className="mx-3">
              <img src={Notification} alt="notification" className="justify-center w-[2rem]"/>
            </button>
            <button className="w-[5rem] h-[5rem] bg-secondary2 rounded-full mx-2">
              <span className="bg-secondary3  h-[32px] w-[32px] rounded-full font-[20px] px-4 py-3">
                A
              </span>
            </button>


          </div>
          {menuOpen && ( 
        <div className=" relative left-0 w-full bg-black text-white flex flex-col items-center py-4 md:hidden">
           <button
      className="absolute top-2 right-4 text-white hover:text-secondary"
      onClick={() => setMenuOpen(false)} 
    >
      <img src={Close} alt="close" className="w-[2rem] h-[2rem]" />
    </button>

          <a href="/" className="py-2 text-lg hover:text-slate-500">Search</a> 
          <a href="/" className="py-2 text-lg hover:text-slate-500">Help</a> 
          <a href="/" className="py-2 text-lg hover:text-slate-500">Download</a> 
          <a href="/" className="py-2 text-lg hover:text-slate-500">Privacy</a> 
          <a href="/" className="py-2 text-lg hover:text-slate-500">Terms</a>
          <a href="/" className="py-2 text-lg hover:text-slate-500">Premium</a>
          <a href="/" className="py-2 text-lg hover:text-slate-500">Home</a>   
        </div>
      )}
    </nav>
        
  );
};

export default Navbar
