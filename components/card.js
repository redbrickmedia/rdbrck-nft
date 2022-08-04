import Link from "next/link";
import React from "react";

const Card = ({ id, heading }) => {
  return (
    <section className="rounded-xl flex-[1_0_50%] lg:flex-1">
      <div className="flex justify-center md:justify-start items-center mt-8 3xl:mt-12">
        <div>
          <Link href={`/${id}`}>
            <button className=" uppercase tracking-[2px] text-xs 3xl:text-lg bg-white text-black px-6 py-2 3xl:h-14 h-10 rounded-[100px] transition duration-600 hover:scale-105 shadow-md">
              {heading}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
