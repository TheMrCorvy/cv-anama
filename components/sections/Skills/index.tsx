import { FC } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const Skills: FC = () => {
    return (
        <Card
            element="section"
            className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto"
        >
            <CardHeader className="pb-2">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-center mt-4">
                        <h2 className="text-4xl font-bold">Aptitudes</h2>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <Separator />
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="skills-item-1">
                        <AccordionTrigger>Tratamientos del rostro y piel.</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="skills-item-2">
                        <AccordionTrigger>
                            Uso de cremas, y herramientas de belleza.
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other components
                            aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="skills-item-3">
                        <AccordionTrigger>
                            Estudio y desarrollo de nuevas habilidades.
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It is animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="skills-item-4">
                        <AccordionTrigger>
                            Capacidad de adaptabilidad a distintos entornos.
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It is animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="skills-item-5">
                        <AccordionTrigger>
                            Entendimiento de la teoría al momento de fundamentar un tratamiento.
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It is animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    );
};

export default Skills;
