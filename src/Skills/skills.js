import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import htmlImage from "../Images/HtmlSkills.png";
import cssImage from "../Images/CSSSkills.png";
import JavaScriptImage from "../Images/JavaScriptSkills.png";
import BootStrapImage from "../Images/BootStrapSkills.png";
import GitHubIMage from "../Images/GithubSkills.png";
import GitCloneImage from "../Images/GitSkills.png";
import ReactImage from "../Images/ReactSkills.png";
import ReduxImage from "../Images/RedusSkills.png";
import NodeImage from "../Images/NodeSkills.png";
import MongoImage from "../Images/MongoSkills.png";
import AwsImage from "../Images/amazonSkills.png";

import React from "react";
import "./skills.css";

let MyList = [
  "React",
  "Node",
  "SQL",
  "Mongoose",
  "MongoDb",
  "JavaScript",
  "JavaScript",
  "Git",
  "netlify",
  "HTML",
  "CSS",
  "heroku",
  "MongoAtlast",
  "Express",
  "Bootstrap",
  "React",
  "Node",
  "SQL",
  "Mongoose",
  "MongoDb",
  "JavaScript",
  "JavaScript",
  "Git",
  "netlify",
  "HTML",
  "CSS",
  "heroku",
  "MongoAtlast",
  "Express",
  "React",
  "Node",
  "SQL",
  "Mongoose",
  "MongoDb",
  "JavaScript",
];
function wordFromMyList(i, j) {
  return MyList[i * 4 + j];
}
function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "white" : "black"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          wordFromMyList(i, j),
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function Skills() {
  return (
    <div className="skills-page">
      <div className="skills-left-side">
        <h1 className="animate__animated  animate__bounce  home-content skills-heading">
          Tech Stacks
        </h1>
        <div className="tech-stack">
          <img src={htmlImage} alt="htmlImage" />
          <img src={cssImage} alt="cssImage" />
          <img src={BootStrapImage} alt="BootStrapImage" />
          <img src={JavaScriptImage} alt="JavaScriptImage" />
          <img src={ReactImage} alt="ReactImage" />
          <img src={ReduxImage} alt="ReduxImage" />
          <img src={NodeImage} alt="NodeImage" />
          <img src={MongoImage} alt="MongoImage" />
          <img src={GitHubIMage} alt="GitHubIMage" />
          <img src={GitCloneImage} alt="GitCloneImage" />
          <img src={AwsImage} alt="AwsImage" />
        </div>
      </div>
      <div className="skills-right-side">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={["#202025", 0, 80]} />
          <Cloud count={8} radius={20} />
          <TrackballControls />
        </Canvas>
      </div>
    </div>
  );
}
