import { Button } from "@/components/ui/button";
import { FC } from "react";

const Footer: FC = () => {
return (
    <footer className="flex h-16 shrink-0 text-center justify-center items-center gap-2 border-b border-sidebar-border bg-card relative">
        <a
            href="https://www.corvalangonzalo.com"
            target="_blank"
            className="md:absolute lg:absolute xl:absolute top-1/5 left-0"
        >
            <Button variant="link" size="lg" className="cursor-pointer">
                Gonzalo Corvalán
            </Button>
        </a>
        <h1 className="text-2xl font-bold text-card-foreground mb-0">
            &copy; {new Date().getFullYear()}
        </h1>
    </footer>
);
}

export default Footer