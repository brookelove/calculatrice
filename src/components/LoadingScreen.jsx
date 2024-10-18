import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  // if (!progressRef.current) return; // Ensure the ref is attached

  useEffect(() => {
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
  }, [onComplete]);

  return (
    <div>
      <p ref={progressRef}>{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
