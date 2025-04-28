import { Link } from 'react-router-dom';

import image from "/Ramtempal.jpg";
import image1 from "/Animal.jpg";
import image2 from "/Tajmahal.jpg";
import image3 from "/ram.png";
import image4 from "/Land img.jpg";
import image5 from "/Land img2.jpg";
import image6 from "/Landimg3.jpg";
import image7 from "/Landimg4.jpg";



import { useContext } from 'react';
import { SearchContext } from '../context/Searchcontext';

const images = [
  {
    imageId: 'bora-bora',
    title: 'Ram ji',
    thumbnail: image,
  },
  {
    imageId: 'poppy-field',
    title: 'Animal in the Field',
    thumbnail: image1,
  },
  {
    imageId: 'bagan',
    title: 'Tajmahal',
    thumbnail: image2,
  },
  {
    imageId: 'Ganga',
    title: 'Ram ji Tempal',
    thumbnail: image3,
  },
  {
    imageId: 'Land1',
    title: 'img1',
    thumbnail: image4,
  },
  {
    imageId: 'Land2',
    title: 'img2',
    thumbnail: image5,
  },
  {
    imageId: 'Land3',
    title: 'img3',
    thumbnail: image6,
  },
  {
    imageId: 'Land4',
    title: 'img4',
    thumbnail: image7,
  },
  
];

export default function GalleryPage() {

  const { searchTerm, setIsFeched } = useContext(SearchContext);

  const filteredImage = searchTerm
    ? images.filter((image) =>
      Object.entries(image).some(([key, value]) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    : images;

  setIsFeched(!!filteredImage)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">360° Photo Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImage.length > 0 ? filteredImage.map(({ imageId, title, thumbnail }) => (
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
        )) : <div className='flex items-center justify-center mx-auto'>
          <p className='text-center p-5 text-black font-bold'>Nothing to show</p></div>}

      </div>
    </div>
  );
}
