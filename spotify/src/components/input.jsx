
import { Search } from "../assets/icons"
const [searchTerm , setSearchTerm]=useState(' ');


const Input = () => {
  return (
    <div className="relative flex items-center ml-3 my-3">
      <input type="text" placeholder="What do you want to play?"  className="w-[474px] h-[47px] bg-secondary2 items-center justify-center pl-14 font-[500px] rounded-full" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img src={Search} alt="search" className="w-[3rem] absolute ml-2" onClick={()=searchSongs(searchTerm)} />
    </div>
  )
}

export default Input;
