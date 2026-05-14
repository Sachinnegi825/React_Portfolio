import React from "react";
import { motion } from "framer-motion";

const BentoTile = ({ 
  children, 
  className = "", 
  colSpan = "col-span-4", 
  rowSpan = "row-span-1",
  delay = 0,
  showBorderBeam = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card ${colSpan} ${rowSpan} ${className}`}
    >
      {showBorderBeam && <div className="border-beam" />}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default BentoTile;
