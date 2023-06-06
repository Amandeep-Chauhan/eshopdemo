'use client';

import React from 'react'
import useGetDetails from './hooks/useGetDetails';

const Details = () => {
    const { data }= useGetDetails();

    return (
        <div>Details</div>
    )
}

export default Details