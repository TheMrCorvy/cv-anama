'use client';

import { FC, useEffect, useState } from 'react';
import { Card, CardProps } from '../card';
import Spinner from '../Spinner';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./DynamicComponent'), {
    loading: () => <Spinner />,
});

export interface ClientCardProps extends CardProps {
    delay?: number
}

const ClientCard: FC<ClientCardProps> = ({ children, className, delay = 2000, ...props }) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Card {...props} className={'relative ' + className}>
            {showContent ? <DynamicComponent>{children}</DynamicComponent> : <Spinner />}
        </Card>
    );
};

export default ClientCard;
