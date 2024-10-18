import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// css
import "../assets/css/loading.css";

// image loading
import hourglass from "../assets/images/hourglass.png";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  //call to id
  const hourglassImg = "hourglassImg";

  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        innerHTML: 100, // Animate percentage from 0 to 100
        duration: 3,
        ease: "power1.inOut",
        snap: { innerHTML: 1 }, // Round to whole numbers
        onUpdate: function () {
          setProgress(progressRef.current.innerHTML);
        },
        onComplete: () => {
          setTimeout(onComplete, 500);
        },
      });
    }
  }, [onComplete]);

  useEffect(() => {
    let hourglassId = document.getElementById(hourglassImg);
    gsap.to(hourglassId, {
      start: 0.3,
      duration: 3, //matches duration of the loading bar
      rotation: 360,
      transformOrigin: "50% 50%",
    });
  });

  return (
    <div className="loadingContainer">
      <main>
        <img
          id={hourglassImg}
          src={hourglass}
          className="hourglassImg"
          alt="hourglass icon"
        />
        <p ref={progressRef}>{progress} %</p>
      </main>
    </div>
  );
};

export default LoadingScreen;
