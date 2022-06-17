import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ id, heading }) => {
  
  return (
    <AnimatePresence>
      <section className="rounded-xl max-w-xs">
        <div className="flex items-center mt-4">
          <div className="flex text-cyan space-x-2">
            <Link href={`/details/${id}`}>
              <button className="bg-white border-2 border-black text-black px-6 py-2 rounded-full transition duration-600 hover:scale-105">
                {heading}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Card;
1;
