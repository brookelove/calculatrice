// import { useState } from "react";
// import gsap from "gsap";
// import { useLocation } from "react-router";
// import { SwitchTransition, Transition } from "react-transition-group";

// //components used
// import LoadingScreen from "./LoadingScreen";

// const TransitionComponent = ({ children }) => {
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(false);

//   // function to handle complete loading
//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   return (
//     <>
//       {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
//       <SwitchTransition>
//         <Transition
//           key={location.pathname}
//           timeout={500}
//           onEnter={(node) => {
//             gsap.set(node, { autoAlpha: 0, scale: 1, yPercent: 0 });
//             gsap
//               .timeline({ paused: true })
//               .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
//               .to(node, { scale: 1, duration: 0.25 })
//               .eventCallback("onComplete", () => {
//                 setIsLoading(false);
//               })
//               .play();
//           }}
//           onExit={(node) => {
//             setIsLoading(true);
//             gsap
//               .timeline({ paused: true })
//               .to(node, { scale: 1, duration: 0.2 })
//               .to(node, { yPercent: 100, autoAlpha: 0, duration: 0.2 })
//               .play();
//           }}
//         >
//           {children}
//         </Transition>
//       </SwitchTransition>
//     </>
//   );
// };
// export default TransitionComponent;
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
