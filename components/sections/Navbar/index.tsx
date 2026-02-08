import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <header
            className="flex h-16 shrink-0 text-center justify-center items-center gap-2 border-b border-sidebar-border bg-card hover:cursor-pointer"
            id="header"
        >
            <Button variant="link" asChild>
                <Link href="/">
                    <h1 className="text-2xl font-bold text-card-foreground mb-0">
                        Yesica Anama Rodas
                    </h1>
                </Link>
            </Button>
        </header>
    );
};

export default Navbar;
