import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";

const Achievements: FC = () => {
return (
    <Card element='section' className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
        <CardHeader className="pb-2">
            <div className="flex justify-center items-center gap-4">
                <div className="text-center mt-4">
                    <h2 className="text-4xl font-bold">Logros</h2>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <Separator />
            <ul className="list-disc list-inside">
                <li>Diplomatura en Cosmetología con nota promedio de 8.</li>
                <li>Diplomatura en Cosmiatría con nota promedio de 10.</li>
                <li>Buenos resultados en prácticas con pacientes reales.</li>
            </ul>
        </CardContent>
    </Card>
);
}

export default Achievements