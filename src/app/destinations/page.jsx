import React from 'react';

const DestinationPage =async () => {

    const res =await fetch('http://localhost:5000/destination') ;
    const destinations = await res.json() ;

    // console.log(destinations)

    return (
        <div>
            <h1>All Destinations</h1>


            <div>

                {
                    destinations.map(d => <div key={d._id}>
                        {d.destinationName}
                    </div>)
                }

            </div>
        </div>
    );
};

export default DestinationPage;