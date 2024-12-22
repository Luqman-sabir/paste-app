import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/slices/PasteSlice";


const Home = () => {
    const [title,setTitle]=useState("");
    const [value,setValue]=useState("");
    const [params,setParams]=useSearchParams("");
    const pasteId = params.get("pasteId")
    const dispatch = useDispatch();
    function createPaste() {
        const paste = {
            title : title,
            content : value,
             _id : pasteId ||
             Date.now().toString(36),
             createdAt:new Date().toISOString(),
        }
        if (pasteId) {
            // update
            dispatch(updateToPastes(paste))
        }
        else{
            // create
            dispatch(addToPastes(paste))
        }
        // after creation or uppdation
        setTitle("");
        setValue("");
        setParams({});
    }
  return (
    <div className="flex flex-col gap-5 items-center">
    <div className="flex gap-5">
      <input type="text" className="p-2 rounded-md" placeholder="Enter title here"  value={title} onChange={(e)=>setTitle(e.target.value)} />
    <button className="p-2 bg-green-400 rounded-md" onClick={createPaste}>
        {
            pasteId ? "Update My paste":"Create My Paste"
        }
    </button>
    
    </div>
    <div>
        <textarea
        className="w-[350px]"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="Enter Description here"
        />
    </div>
    </div>
    
  )
}

export default Home
