import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { FC } from 'react';

const EducationAndPractice: FC = () => {
    return (
        <section className="w-full px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <Card className="bg-background/80 backdrop-blur-sm border-muted/50">
                    <CardHeader className="text-center space-y-4">
                        <div>
                            <CardTitle className="text-2xl md:text-3xl">
                                Formación y práctica
                            </CardTitle>
                            <CardDescription className="max-w-2xl mx-auto">
                                Mi recorrido académico y el proceso de formación continua que
                                acompaña mi desarrollo profesional.
                            </CardDescription>
                        </div>
                        <Separator className="max-w-xl mx-auto" />
                    </CardHeader>

                    <CardContent className="space-y-10">
                        {/* Formación principal */}
                        <div className="space-y-4 max-w-3xl mx-auto">
                            <h3 className="text-xl font-semibold">Formación en estética</h3>

                            <p className="text-muted-foreground leading-relaxed">
                                Inicié mi formación en el Instituto LACA durante el año 2025, donde
                                cursé y completé las carreras de Cosmetología y Cosmiatría. Ambas
                                formaciones incluyeron contenidos teóricos y prácticos orientados al
                                cuidado integral de la piel y al abordaje estético responsable.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                Durante este proceso realicé prácticas con modelos reales, aplicando
                                distintos protocolos según el tipo y estado de la piel, siempre bajo
                                criterios académicos y profesionales.
                            </p>
                        </div>

                        <Separator />

                        {/* Práctica y enfoque actual */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            <div className="space-y-3">
                                <h4 className="font-medium text-lg">Práctica supervisada</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Además de las prácticas realizadas durante la formación,
                                    continué ejercitando técnicas y protocolos en un entorno
                                    controlado con personas cercanas, priorizando siempre la
                                    observación, el aprendizaje y el cuidado de la piel.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-medium text-lg">Aprendizaje continuo</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Considero la capacitación constante como parte fundamental del
                                    ejercicio profesional. Me encuentro en permanente aprendizaje
                                    para mejorar tanto la atención como la organización del trabajo.
                                </p>
                            </div>
                        </div>

                        <Separator />

                        {/* Formación complementaria */}
                        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                            <AccordionItem value="complementaria">
                                <AccordionTrigger>Formación complementaria</AccordionTrigger>
                                <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                                    <p>
                                        • Secretariado Médico (en curso) – Instituto HILET, Mar del
                                        Plata.
                                    </p>
                                    <p>
                                        • Capacitación autodidacta en herramientas de ofimática
                                        (Word, Excel y gestión básica de documentos e informática para oficinas).
                                    </p>
                                    <p className="pt-2">
                                        Esta formación complementa mi perfil profesional,
                                        permitiéndome desarrollar una atención más organizada, clara
                                        y eficiente.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default EducationAndPractice;
