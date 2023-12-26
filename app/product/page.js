"use client";
import { ProductContext } from "@/utils/Context";
import Link from "next/link";
import React, { useContext } from "react";

const page = () => {
    const [products] = useContext(ProductContext);
    return (
        <div className="flex flex-wrap gap-5 p-5 mt-[2%] w-[100%] h-[100%] ">
            {products &&
                products.map((p) => {
                    return (
                        <Link
                            href={`/product/${p.id}`}
                            key={p.id}
                            className="flex flex-col justify-center p-5 items-center rounded shadow-lg card w-[30%] h-[88%]"
                        >
                            <img
                                className="hover:scale-110 mb-5 h-[70%] object-contain"
                                src={p.image}
                                alt=""
                            />
                            <h1 className="text-xl">{p.title}</h1>
                            <h2>Price-{p.id * Math.floor(Math.random()*100)}</h2>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button>
                        </Link>
                    );
                })}
        </div>
    );
};

export default page;
