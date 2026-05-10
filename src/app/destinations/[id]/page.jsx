import React from 'react';

const DetailsPage =async ({params}) => {

    const {id} = await params ;
    return (
        <div>
            this is destination details page re bhai
        </div>
    );
};

export default DetailsPage;