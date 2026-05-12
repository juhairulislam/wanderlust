import Image from 'next/image';
import React from 'react';
import { FiMapPin, FiClock, FiCalendar, FiTag, FiArrowLeft, FiStar } from 'react-icons/fi';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaRegEdit } from 'react-icons/fa';
import { EditModal } from '@/components/EditModal';
import { DeleteDialog } from '@/components/DeleteDialog';

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  const {
    _id,
    destinationName,
    country,
    price,
    imageUrl,
    duration,
    departureDate,
    description,
    category,
  } = destination;

  const formattedDate = new Date(departureDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans">

      
      <div className='flex items-center justify-end gap-2 my-6'>

<EditModal destination={destination}></EditModal>
<DeleteDialog destination={destination}></DeleteDialog>

      </div>

      
      {/* ── Hero ── */}
      <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          alt={destinationName}
          src={imageUrl}
          fill
          priority
          className="object-cover"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Back button */}
        <Link
          href="/destinations"
          className="absolute top-5 left-5 md:top-8 md:left-10 flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm transition-all duration-200"
        >
          <FiArrowLeft size={16} />
          <span className="hidden sm:inline">Back</span>
        </Link>

        {/* Category badge */}
        <div className="absolute top-5 right-5 md:top-8 md:right-10">
          <span className="bg-amber-400 text-amber-900 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>

        {/* Hero title block */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 md:px-14 md:pb-12">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
            <FiMapPin size={13} />
            <span>{country}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {destinationName}
          </h1>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-14 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — Description */}
          <div className="lg:col-span-2 space-y-8">

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <FiClock size={18} />, label: 'Duration', value: duration },
                { icon: <FiCalendar size={18} />, label: 'Departure', value: formattedDate },
                { icon: <FiTag size={18} />, label: 'Category', value: category },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-stone-100 flex flex-col gap-2"
                >
                  <span className="text-amber-500">{icon}</span>
                  <p className="text-[11px] uppercase tracking-widest text-stone-400 font-medium">{label}</p>
                  <p className="text-sm md:text-base font-semibold text-stone-800 leading-snug">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
              <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-400 rounded-full inline-block" />
Overview              </h2>
              <p className="text-stone-500 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>

            {/* Highlights — placeholder cards */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
              <h2 className="text-lg font-bold text-stone-800 mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-400 rounded-full inline-block" />
                What's Included
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-600">
                {[
                  '✈️  Round-trip flights',
                  '🏨  Hotel accommodation',
                  '🍽️  Daily breakfast',
                  '🚌  Airport transfers',
                  '🗺️  Guided city tours',
                  '📋  Travel insurance',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 bg-stone-50 rounded-xl px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-3xl shadow-md border border-stone-100 overflow-hidden">

              {/* Price header */}
              <div className="bg-gradient-to-br from-amber-400 to-orange-400 p-6 text-center">
                <p className="text-amber-900/70 text-xs uppercase tracking-widest font-semibold mb-1">Per Person</p>
                <p className="text-4xl font-extrabold text-white">
                  ${Number(price).toLocaleString()}
                </p>
                <div className="flex items-center justify-center gap-1 mt-2 text-amber-900/70 text-xs">
                  <FiStar size={12} className="fill-amber-900/50" />
                  <span>All-inclusive package</span>
                </div>
              </div>

              {/* Trip meta */}
              <div className="p-6 space-y-4 border-b border-stone-100">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">Destination</span>
                  <span className="font-semibold text-stone-700">{destinationName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">Country</span>
                  <span className="font-semibold text-stone-700">{country}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">Duration</span>
                  <span className="font-semibold text-stone-700">{duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-400">Departure</span>
                  <span className="font-semibold text-stone-700">{formattedDate}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 space-y-3">
                <button className="w-full bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold py-3.5 rounded-2xl transition-colors duration-200 text-sm tracking-wide">
                  Book Now
                </button>
                <button className="w-full border border-stone-200 hover:bg-stone-50 text-stone-600 font-medium py-3 rounded-2xl transition-colors duration-200 text-sm">
                  Save to Wishlist
                </button>
                <p className="text-center text-xs text-stone-400 mt-1">
                  Free cancellation up to 30 days before departure
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;