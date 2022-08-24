import Link from "next/link";
import React from "react";
import { useProgressContext } from "../Context/ProgressContext";

const Card = ({ id, heading }) => {

  const progressState = useProgressContext();
  const handleClick = () => {
    progressState.setProgress((prevValue) => [
      ...prevValue
        .filter((x) => x.id < 3)
        .map((y) => {
          return { ...y, active: false };
        }),
      ...prevValue
        .filter((x) => x.id === 3)
        .map((y) => {
          return { ...y, active: true };
        }),
        ...prevValue
        .filter((x) => x.id > 3)
        .map((y) => {
          return { ...y, active: false };
        }),
    ]);
  }

  return (
    <section className="">
      <div className="flex justify-center mt-8 2xl:mt-12">
        <div>
          <Link href={`/${id}`}>
            <button onClick={handleClick} className="uppercase tracking-[2px] text-xs 3xl:text-lg bg-white text-black px-6 py-2 3xl:h-14 h-10 rounded-[100px] transition duration-600 hover:scale-105 shadow-md">
              {heading}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;

