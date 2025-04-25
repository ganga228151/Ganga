import { useParams } from 'react-router-dom';

// High-resolution images
import image from "/Ramtempal.jpg";
import image1 from "/Animal.jpg";
import image2 from "/Tajmahal.jpg";
import image3 from "/ram.png";
import image4 from "/Land img.jpg";
import image5 from "/Land img2.jpg";
import image6 from "/Landimg3.jpg";
import image7 from "/Landimg4.jpg";

const highResImages = {
  'bora-bora': image,
  'poppy-field': image1,
  'bagan': image2,
  'Ganga': image3,
  'Land1': image4,
  'Land2': image5,
  'Land3': image6,
  'Land4': image7,
};

export default function View360Page() {
  const { imageId } = useParams();
  const panoramaUrl = highResImages[imageId];

  if (!panoramaUrl) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-red-600">
        404: Image not found.
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black">
      <a-scene
        embedded
        vr-mode-ui="enabled: true"
        renderer="antialias: true; precision: high; colorManagement: true; toneMapping: reinhard; physicallyCorrectLights: true;"
      >
        <a-assets>
          <img
            id="panorama"
            src={panoramaUrl}
            alt="360 View"
            crossOrigin="anonymous"
          />
          <audio id="bg-music" src="/ambient.mp3" preload="auto"></audio>
        </a-assets>

        {/* Use a-sky for proper 360 spherical mapping */}
        <a-sky
          src="#panorama"
          rotation="0 -130 0"
          animation="property: rotation; to: 0 230 0; loop: true; dur: 60000"
        ></a-sky>

        <a-sound src="#bg-music" autoplay="true" loop="true" position="0 2 0"></a-sound>

        {/* Enable full 3D movement with camera rig */}
        <a-entity id="cameraRig" movement-controls position="0 1.6 0">
          <a-entity camera look-controls wasd-controls position="0 0 0"></a-entity>
        </a-entity>
      </a-scene>
    </div>
  );
}
