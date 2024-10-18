import * as THREE from "three";
import { useEffect } from "react";

const Scene = () => {
  const calculatorThreeJs = "calculatorThreeJs";

  useEffect(() => {
    console.log("Scene component mounted"); // Log when the component mounts
    // |--------- Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    console.log("Window Inner Width", window.innerWidth);
    console.log("Window Inner Height", window.innerHeight);
    // |------------ creation of canvas
    const canvas = document.getElementById(calculatorThreeJs);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);

    // |----------- creation of lighting initially
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.AmbientLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    // |----------- create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix(); // Update the camera's projection matrix
      renderer.setSize(window.innerWidth, window.innerHeight); // Update the renderer size
    };

    window.addEventListener("resize", onWindowResize);

    animate();

    return () => {
      // Cleanup logic
      console.log("Cleaning up Scene component"); // Log when the component unmounts
      renderer.dispose();
    };
  }, [calculatorThreeJs]);

  return <canvas id={calculatorThreeJs}></canvas>; // Use a single canvas in JSX
};

export default Scene;
