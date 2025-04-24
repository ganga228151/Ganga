import { Link } from 'react-router-dom';

import image from "/Ramtempal.jpg";
import image1 from "/Animal.jpg";
import image2 from "/Tajmahal.jpg";
import image3 from "/ram.png";

const images = [
  {
    imageId: 'bora-bora',
    title: 'Ram ji',
    thumbnail: image,
  },
  {
    imageId: 'poppy-field',
    title: 'Over the Field',
    thumbnail: image1,
  },
  {
    imageId: 'bagan',
    title: 'Bagan, Myanmar',
    thumbnail: image2,
  },
  {
    imageId: 'Ganga',
    title: 'Bagan, Myanmar',
    thumbnail: image3,
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">360° Photo Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map(({ imageId, title, thumbnail }) => (
          <Link
            to={`/view/${imageId}`}
            key={imageId}
            className="block bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="w-full h-48 flex items-center justify-center bg-black">
              <img
                src={thumbnail}
                alt={title}
                className="max-h-full object-contain"
                style={{ imageRendering: 'auto' }}
              />
            </div>
            <div className="p-3 text-center font-semibold text-gray-700">
              {title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
