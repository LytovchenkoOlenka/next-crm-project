import React from 'react';

export interface PageProps {
    // title?: string;
}

export default function Page({}: PageProps) {
    return (
        <main>
           <h1 className="text-xl">Settings Page</h1>
        </main>
    );
}