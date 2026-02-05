import { FC } from "react";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Skills: FC = () => {
return (
    <Card element="section" className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
        <CardHeader className="pb-2">
            <div className="flex justify-center items-center gap-4">
                <div className="text-center mt-4">
                    <h2 className="text-4xl font-bold">Aptitudes</h2>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <Separator />
            <ul className="list-disc list-inside">
                <li>Tratamientos del rostro y piel.</li>
                <li>Uso de cremas, y herramientas de belleza.</li>
                <li>Estudio y desarrollo de nuevas habilidades.</li>
                <li>Capacidad de adaptabilidad a distintos entornos.</li>
                <li>Entendimiento de la teoría al momento de fundamentar un tratamiento.</li>
            </ul>
        </CardContent>
    </Card>
);
}

export default Skills