import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const Achievements: FC = () => {
    return (
        <Card
            element="section"
            className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto"
        >
            <CardHeader className="pb-2">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-center mt-4">
                        <h2 className="text-4xl font-bold">Logros</h2>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="achievements-item-1">
                        <AccordionTrigger>
                            Diplomatura en Cosmetología con nota promedio de 8.
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="achievements-item-2">
                        <AccordionTrigger>
                            Diplomatura en Cosmiatría con nota promedio de 10.
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other components
                            aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="achievements-item-3">
                        <AccordionTrigger>
                            Buenos resultados en prácticas con pacientes reales.
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

export default Achievements;
