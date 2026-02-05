import { FC } from "react";

const Navbar:FC = () => {
return (
    <header
        className="flex h-16 shrink-0 text-center justify-center items-center gap-2 border-b border-sidebar-border bg-card"
        id="header"
    >
        <h1 className="text-2xl font-bold text-card-foreground mb-0">Yesica Anama Rodas</h1>
    </header>
);
}

export default Navbar