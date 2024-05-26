'use client';

import useSearchModal from "@/app/hooks/useSearchModal";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
    const searchModal = useSearchModal();
    return(
        <div
            onClick={searchModal.onOpen}
            className="
                border-[1px]
                w-full
                md:w-auto
                py-2
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
            "
        >
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        text-sm
                        font-semibold
                        px-6
                    "
                >
                    Anywhere
                </div>
                <div
                    className="
                        hidden
                        sm:block
                        text-sm
                        font-semibold
                        px-6
                        border-x-[1px]
                        flex-1
                        text-center
                    "
                >
                    Anytime
                </div>
                <div 
                    className="
                        text-sm
                        pl-6
                        pr-2
                        text-gray-600
                        flex
                        felx-row
                        items-center
                        gap-3
                    "
                >
                    <div className="hidden sm:block">Add Guests</div>
                    <div className="p2 bg-rose-500 rounded-full text-white">
                        <IoMdSearch   size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;