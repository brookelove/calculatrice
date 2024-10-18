import { useState, useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router";
import { SwitchTransition, Transition } from "react-transition-group";

// Components
import LoadingScreen from "./LoadingScreen";

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  // const startLoading = () => {
  //   setIsLoading(true);
  // };

  useEffect(() => {
    setIsLoading(true);
  }, [location]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <SwitchTransition>
        <Transition
          key={location.pathname}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEnter={(node) => {
            gsap.set(node, { autoAlpha: 0, yPercent: 100 });
            gsap.to(node, { autoAlpha: 1, yPercent: 0, duration: 0.5 });
          }}
          onExit={(node) => {
            setIsLoading(true);
            gsap.to(node, { autoAlpha: 0, yPercent: 100, duration: 0.5 });
          }}
        >
          {children}
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default TransitionComponent;
