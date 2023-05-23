"use client"

import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';

const Tour = dynamic(() => import('reactour'), { ssr: false });

interface Step {
    selector: string;
    content: string;
}

export default function Index() {

    const tourConfig: Step[] = [
        {
            selector: '[data-tut="reactour__abc"]',
            content: `Dashboard`,
        },
        {
            selector: '[data-tut="reactour__final"]',
            content: `Manage all your Inventory`,
        },
        {
            selector: '[data-tut="reactour__box"]',
            content: '',
        },
    ];

    const accentColor = "#5cb7b7";
    const [mount, setMount] = useState(false);


    useEffect(() => {
        setMount(true);

    }, []);

    const closeTour = () => {
        setMount(false);
    };


    return (
        <div>

            {mount && (
                <Tour
                    onRequestClose={closeTour}
                    disableInteraction={false}
                    steps={tourConfig}
                    isOpen={mount}
                    rounded={5}
                    accentColor={accentColor}
                />
            )}

            <div>
            </div>
        </div>
    );
}
