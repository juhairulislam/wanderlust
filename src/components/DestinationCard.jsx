import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendarAlt, FaStarHalfAlt } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({ d }) => {
    const { _id ,destinationName, country, price, imageUrl, duration } = d;

    return (
        <div className="group w-[280px] rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">

            

            <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                    alt={destinationName}
                    src={imageUrl}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Rating — top right */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                    <FaStarHalfAlt
                        size={11} className="text-yellow-400" />
                    <span>4.8</span>
                </div>
            </div>

            {/* Body */}
            <div className="p-4">

                {/* Location — below image */}
                <div className="flex items-center gap-1 text-xs font-semibold text-neutral-700 mb-1">
                    <LuMapPin size={12} />
                    <span>{country}</span>
                </div>

                <h2 className="font-serif text-xl font-semibold text-neutral-900 mb-3 leading-snug">
                    {destinationName}
                </h2>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                        <FaRegCalendarAlt size={13} />
                        <span>{duration}</span>
                    </div>
                    <div>
                        <span className="text-lg font-semibold text-neutral-900">${price}</span>
                        <span className="text-xs text-neutral-400 ml-1">/ person</span>
                    </div>
                </div>

                <Link href={`/destinations/${_id}`}> <Button variant='ghost' className='mt-2 text-cyan-500'>Book Now<GoArrowUpRight />
                </Button></Link>
            </div>
        </div>
    );
};

export default DestinationCard;