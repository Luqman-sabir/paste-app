import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/slices/PasteSlice";

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [params, setParams] = useSearchParams("");
    const pasteId = params.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId, allPastes]);

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        };

        if (pasteId) {
            // update
            dispatch(updateToPastes(paste));
        
        } else {
            // create
            dispatch(addToPastes(paste));
        }
        // after creation or update
        setTitle("");
        setValue("");
        setParams({});
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-5 items-center bg-neutral-700 min-w-[50%] sm:min-w-[80%] md:min-w-[60%] lg:min-w-[50%] xl:min-w-[40%] p-5 h-auto rounded-md">
                <div className="flex flex-col sm:flex-row gap-5 w-full">
                    <input
                        type="text"
                        required
                        className="p-2 rounded-md w-full sm:w-[460px]"
                        placeholder="Enter title here"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                        className="p-2 bg-green-400 rounded-md w-full sm:w-auto"
                        onClick={createPaste}
                    >
                        {pasteId ? "Update My Paste" : "Create My Paste"}
                    </button>
                </div>
                <div className="w-full">
                    <textarea
                        className="w-full max-w-[610px] rounded-md h-[300px] p-2"
                        value={value}
                        required
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter Description here"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
