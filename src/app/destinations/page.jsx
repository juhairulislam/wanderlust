import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage =async () => {

    const res =await fetch('http://localhost:5000/destination') ;
    const destinations = await res.json() ;

    // console.log(destinations)

    return (
        <div className='p-10'>
            <h1 className='text-center font-extrabold text-4xl text-cyan-500 my-8'>All Destinations</h1>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto'>

                {
                    destinations.map(d => <div key={d._id}>
                       <DestinationCard d={d}></DestinationCard>
                    </div>)
                }

            </div>
        </div>
    );
};

export default DestinationPage;