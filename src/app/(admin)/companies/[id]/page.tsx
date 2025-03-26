'use client'

import React from 'react';
import Header from '@/app/components/header';
import { useParams } from 'next/navigation';

// export interface PageProps {
//     params: { id: string};
// }

export default function Page() {
    const params = useParams();
    return (
        <>
            <Header>Company ({params.id})</Header>
        </>
    );
}
