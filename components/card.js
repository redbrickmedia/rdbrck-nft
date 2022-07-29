import Link from "next/link";
import React from "react";

const Card = ({ id, heading }) => {
  return (
    <section className="rounded-xl max-w-sm">
      <div className="flex mt-4">
        <div>
          <Link href={`/${id}`}>
            <button className=" uppercase tracking-[2px] text-sm bg-white text-black px-6 py-2 rounded-[100px] transition duration-600 hover:scale-105 shadow-md">
              {heading}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
