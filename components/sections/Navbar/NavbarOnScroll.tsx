// components/navbar-on-scroll.tsx
'use client';

import { useEffect, useState } from 'react';
import Navbar from './';
import { cn } from '@/lib/utils';

export default function NavbarOnScroll() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 0);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={cn(
                `
        fixed top-0 left-0 z-50 w-full
        transform-gpu transition-all duration-300 ease-out
        `,
                visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            )}
        >
            <Navbar />
        </div>
    );
}
