import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/slices/PasteSlice";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flex justify-center min-h-screen p-4" >
      <div className="w-full max-w-[60%] " >
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-neutral-700  border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
        />
        <div className="grid gap-6 mt-6">
          {filterData.length > 0 ? (
            filterData.map((paste) => (
              <div
                key={paste._id}
                className=" bg-neutral-700 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between gap-4"
              >
                <div>
                  <h1 className="text-xl text-red-300 font-bold">{paste.title}</h1>
                  <p className="text-white text-md font-semibold mt-2">{paste.content}</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex gap-2 mb-2">
                    <Link
                      to={`/?pasteId=${paste?._id}`}
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      <FaRegEdit className="text-xl" />
                    </Link>
                    <button
                      onClick={() => handleDelete(paste?._id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <RiDeleteBin6Line className="text-xl" />
                    </button>
                    <Link
                      to={`/pastes/${paste?._id}`}
                      className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                    >
                     <IoMdEye className="text-2xl" />

                    </Link>
                 
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied to clipboard");
                      }}
                      className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      <FaRegCopy className="text-xl" />

                    </button>
                  </div>
                  <p className="text-lg text-white font-semibold ">
                    {formatDate(paste.createdAt)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No pastes found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;
