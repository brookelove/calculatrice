import { useState } from "react";
import gsap from "gsap";
import { useLocation } from "react-router";
import { SwitchTransition, Transition } from "react-transition-group";

//components used
import LoadingScreen from "./LoadingScreen";

const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <SwitchTransition>
        <Transition
          key={location.pathname}
          timeout={500}
          onEnter={(node) => {
            gsap.set(node, { autoAlpha: 0, scale: 1, yPercent: 0 });
            gsap
              .timeline({ paused: true })
              .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
              .to(node, { scale: 1, duration: 0.25 })
              .eventCallback("onComplete", () => {
                setIsLoading(false);
              })
              .play();
          }}
          onExit={(node) => {
            setIsLoading(true);
            gsap
              .timeline({ paused: true })
              .to(node, { scale: 1, duration: 0.2 })
              .to(node, { yPercent: 100, autoAlpha: 0, duration: 0.2 })
              .play();
          }}
        >
          {children}
        </Transition>
      </SwitchTransition>
    </>
  );
};
export default TransitionComponent;
