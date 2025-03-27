'use client'

import React from 'react';
// import Header from '@/app/components/header';
import { useParams } from 'next/navigation';

// export interface PageProps {
//     params: { id: string};
// }

export default function Page() {
    const params = useParams();
    return (
        <div className="py-6 px-10">
            <p>{`Information about company (${params.id})`}</p>
        </div>
    );
}
