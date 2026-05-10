import Image from 'next/image';
import React from 'react';

const DestinationCard = ({d}) => {

    const {destinationName , country , price , imageUrl, duration} = d ;


    return (
        <div>

            <Image
            alt={destinationName}
            src={imageUrl}
            width={400}
            height={400}
            >

            </Image>

            
        </div>
    );
};

export default DestinationCard;