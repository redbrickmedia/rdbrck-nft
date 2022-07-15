import Link from "next/link";
import React from "react";

const Card = ({ id, heading }) => {

  return (
    <section className="rounded-xl max-w-sm">
      <div className="flex mt-4">
        <div>
          <Link href={`/${id}`}>
            <button className="bg-white border-2 border-black text-black px-6 py-2 rounded-full transition duration-600 hover:scale-105 shadow-md hover:shadow-gray-600">
              {heading}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;