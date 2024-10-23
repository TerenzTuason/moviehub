"use client"

import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const Loading: React.FC = () => {
    useEffect(() => {
        // Trigger the SweetAlert loading popup when this component is mounted
        Swal.fire({
            title: 'Loading...',
            text: 'Please wait while we process your request.',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // Clean up the popup when the component is unmounted
        return () => {
            Swal.close();
        };
    }, []);

    return (
        <div className='bg-[#000000] h-screen'></div>
    ); // Ensure nothing is rendered visually on the page
};

export default Loading;
