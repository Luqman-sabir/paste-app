import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/slices/PasteSlice";

const ViewPaste = () => {
  const { id } = useParams();
  const allPaste = useSelector((state) => state.paste.pastes);
  const paste = allPaste.filter((p) => p._id === id)[0];
  return (
    <div className="flex justify-center">

<div className="flex flex-col gap-5 items-center bg-neutral-700 min-w-[50%] sm:min-w-[80%] md:min-w-[60%] lg:min-w-[50%] xl:min-w-[40%] p-5 h-auto rounded-md">
<div className="flex flex-col sm:flex-row gap-5 w-full">
        <input
          type="text"
          disabled
          className="p-2 rounded-md w-full bg-white sm:w-[460px]"
          placeholder="Enter title here"
          value={paste.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full">
      <textarea
          disabled
          className="w-full max-w-[610px] bg-white rounded-md h-[300px] p-2"
          value={paste.content}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Description here"
        />
      </div>
    </div>
    </div>
  );
};

export default ViewPaste;
