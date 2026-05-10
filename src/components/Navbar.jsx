import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-6 shadow'>

            <ul className='flex justify-between items-center gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
            </ul>

            <div>
                <Image
                alt='Nav Logo'
                src={'/assets/Wanderlast.png'}
                width={150}
                height={150}
                ></Image>
            </div>


             <ul className='flex justify-between items-center gap-4'>
                <li><Link className='flex items-center gap-2' href={'/profile'}><CgProfile />
 Profile</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>Sign Up</Link></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;