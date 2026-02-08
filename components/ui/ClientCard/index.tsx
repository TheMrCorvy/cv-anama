'use client';

import { useEffect, useState } from 'react';
import { Card, CardProps } from '../card';
import Spinner from '../Spinner';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./DynamicComponent'), {
    loading: () => <Spinner />,
});

const ClientCard = ({ children, className, ...props }: CardProps) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Card {...props} className={'relative ' + className}>
            {showContent ? <DynamicComponent>{children}</DynamicComponent> : <Spinner />}
        </Card>
    );
};

export default ClientCard;
