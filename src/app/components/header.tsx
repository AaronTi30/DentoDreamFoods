"use client";

import React from 'react';
import { links } from '../../../lib/data';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
    return (
        <header className="z-[999] relative">
            <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-black border-opacity-40 bg-gray-50
            bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full">

            </div>
            
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-500 sm:w -[initial] sm:flex-nowrap 
                sm:gap-5"
                >
                    {links.map((link) => (
                        <li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover-text-gray-950 transition"

                                )}
                                href={link.hash}

                            >
                                {link.name}
                                <span className="rounded-full absolute inset-0 -z-10 ">

                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}