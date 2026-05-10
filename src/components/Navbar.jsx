import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>

            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
            </ul>

            <div>
                <Image
                alt='Nav Logo'
                src={'/assets/Wanderlast.png'}
                width={100}
                height={100}
                ></Image>
            </div>


             <ul>
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;