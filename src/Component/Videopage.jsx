import 'aframe';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import thumb1 from '/Fild1.mp4';
import thumb2 from '/Fild2.mp4';
import thumb3 from '/Football.mp4';
import thumb4 from '/v4.mp4';

const videoMap = {
  'v1': thumb1,
   'v2': thumb2,
  'v3': thumb3,
  'v4': thumb4,
};

export default function Videopage() {
  const { videoId } = useParams();
  const videoRef = useRef(null);
  const sphereRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const src = videoMap[videoId];
    setVideoSrc(src);

    if (src && videoRef.current) {
      const videoEl = videoRef.current;

      videoEl.setAttribute('src', src);
      videoEl.load();

      const onCanPlay = () => {
        videoEl.play()
          .then(() => {
            if (sphereRef.current) {
              sphereRef.current.setAttribute('src', '#vid');
            }
          })
          .catch(err => {
            console.error('Autoplay error:', err);
          });
      };

      videoEl.addEventListener('canplay', onCanPlay);

      return () => {
        videoEl.removeEventListener('canplay', onCanPlay);
      };
    }
  }, [videoId]);

  if (!videoMap[videoId]) {
    return <div className="text-center text-red-600 mt-10">Video not found for ID: {videoId}</div>;
  }

  return (
    <div className="h-screen w-screen">
      <a-scene embedded>
        <a-assets>
          <video
            id="vid"
            ref={videoRef}
            crossOrigin="anonymous"
            loop
            playsInline
            muted
            preload="auto"
          />
        </a-assets>

        <a-videosphere ref={sphereRef} radius="5" rotation="0 -90 0"></a-videosphere>

        <a-camera  position="0 1.6 0" 
  fov="80" wasd-controls-enabled="true" look-controls-enabled="true"></a-camera>
      </a-scene>
    </div>
  );
}
