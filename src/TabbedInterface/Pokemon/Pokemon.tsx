import React, { useEffect } from "react";
import "./Pokemon.css";
import PokemonByType from "./PokemonByType/PokemonByType";
import { motion } from "framer-motion";

var BEMHelper = require("react-bem-helper");

var classes = new BEMHelper("pokemon");

const Pokemon: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  //console.log(mousePosition);
  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };
  return (
    <div {...classes()}>
      <PokemonByType />
      <motion.div className="cursor" variants={variants} animate="default" />
    </div>
  );
};

export default Pokemon;
