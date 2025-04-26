import { useContext, useEffect, useState } from "react";

import image from "/ram.png"
import GalleryPage from "./GalleryPage";
import GalleryPage2 from "./GalleryPage2";
import { SearchContext } from "../context/Searchcontext";
export default function Homepage() {
    const { setSearchTerm, isFetched, searchTerm } = useContext(SearchContext);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://aframe.io/releases/1.3.0/aframe.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleSearch = () => {
        window.scrollBy({
            top: 700,      // 400 pixels upar
            behavior: 'smooth'
        });
    }


    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <a-scene embedded>
                    <a-assets>
                        <img id="panorama" src={image} alt="360 View" />
                    </a-assets>

                    <a-sky src="#panorama" rotation="0 -130 0" animation="property: rotation; to: 0 230 0; loop: true; dur: 30000"></a-sky>
                </a-scene>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start  bg-opacity-40 text-white z-10">


                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-2">A virtual journey around the Ram tempal</h2>
                        <div className="flex items-center justify-center mt-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-2 w-64 rounded-l bg-white text-black border border-gray-300"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="bg-green-500 px-4 py-2 rounded-r text-white" onClick={handleSearch}>🔍</button>
                        </div>
                    </div>
                </div>
            </div>
            { <GalleryPage />}
            <GalleryPage2 />
        </>
    );
}
