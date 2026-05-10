import React from 'react';

const DestinationPage =async () => {

    const res =await fetch('http://localhost:5000/destination') ;
    const destination = await res.json() ;

    console.log(destination)

    return (
        <div>
        </div>
    );
};

export default DestinationPage;