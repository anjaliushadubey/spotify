import { Library, Plus } from "../assets/icons";


const Sidebar = () => {
  return (
    <div className="h-screen w-16 bg-black flex flex-col items-center justify-between py-4 fixed">
      <div className="flex flex-col gap-4">
        <div className="text-gray-400 hover:text-white cursor-pointer">
          <img src={Library} alt="library" />
        </div>
        <div className="text-gray-400 hover:text-white cursor-pointer">
        <img src={Plus} alt="plus" />
      </div>
      </div>
     
    </div>
  );
};

export default Sidebar;
