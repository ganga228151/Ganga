import { Link } from 'react-router-dom';
import thumb1 from '/Fild1.mp4';import thumb2 from '/Fild2.mp4';
import thumb3 from '/Football.mp4';
import v4 from '/v4.mp4';
import { useContext } from 'react';
import { SearchContext } from '../context/Searchcontext';
import { div } from 'framer-motion/client';

const videos = [
    { videoId: 'v1', title: 'Water', thumbnail: thumb1 },
    { videoId: 'v2', title: 'Animal', thumbnail: thumb2 },
    { videoId: 'v3', title: 'Football-field', thumbnail: thumb3 },
    { videoId: 'v4', title: 'Football-field', thumbnail: v4 },
];

export default function GalleryPage() {


    const { searchTerm } = useContext(SearchContext);

    const filteredVideo = searchTerm
        ? videos.filter((image) =>
            Object.entries(image).some(([key, value]) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        : videos;


    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">360° Video Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredVideo.length > 0 ? filteredVideo.map(({ videoId, title, thumbnail }) => (
                    <Link
                        to={`/video/${videoId}`}
                        key={videoId}
                        className="block bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
                    >
                        <div className="w-full h-48 flex items-center justify-center bg-black">
                            <video
                                src={thumbnail}
                                className="max-h-full object-contain"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                        <div className="p-3 text-center font-semibold text-gray-700">{title}</div>
                    </Link>
                )) : <div className='flex items-center justify-center mx-auto'>
                    <p className='text-center p-5 text-black font-bold'>Nothing to show</p></div>}
            </div>
        </div>
    );
}
