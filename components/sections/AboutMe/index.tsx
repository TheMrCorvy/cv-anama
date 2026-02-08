import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FC } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const AboutMe: FC = () => {
    return (
        <article
            className="mt-4 mb-12 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 w-full justify-center px-6"
            id="about-me"
        >
            <Card
                element="section"
                className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 h-[64vh]"
                style={{
                    backgroundImage: "url('/assets/pfp.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></Card>
            <Card className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 bg-background/80 backdrop-blur-sm border-muted/50">
                <CardHeader className="space-y-6">
                    <div className="flex items-center gap-5">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="/assets/pfp_square.jpg" alt="Yesica Anama Rodas" />
                            <AvatarFallback>YR</AvatarFallback>
                        </Avatar>

                        <div>
                            <CardTitle className="text-2xl md:text-3xl">
                                Yesica Anama Rodas
                            </CardTitle>
                            <CardDescription className="text-base">
                                Cosmetóloga y Cosmiatra graduada
                            </CardDescription>
                        </div>
                    </div>

                    <Separator />
                </CardHeader>

                <CardContent className="space-y-8">
                    {/* Texto principal */}
                    <div className="space-y-4 max-w-3xl">
                        <h3 className="text-xl font-semibold">Acerca de mí</h3>

                        <p className="text-muted-foreground leading-relaxed">
                            Soy cosmetóloga y cosmiatra graduada del Instituto LACA, con formación
                            teórica y práctica en el cuidado integral de la piel. Mi enfoque se basa
                            en la evaluación personalizada, el respeto por los tiempos de cada piel
                            y la aplicación responsable de tratamientos estéticos.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            Al haber finalizado recientemente mi formación, trabajo con protocolos
                            actuales y una atención detallada, dedicando el tiempo necesario a cada
                            consulta para que el paciente se sienta acompañado, informado y seguro.
                        </p>
                    </div>

                    <Separator />

                    {/* Enfoque profesional */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-medium mb-2">Evaluación consciente</h4>
                            <p className="text-sm text-muted-foreground">
                                Cada tratamiento comienza con una evaluación previa para entender el
                                estado real de la piel y definir el abordaje más adecuado.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">Formación actualizada</h4>
                            <p className="text-sm text-muted-foreground">
                                Trabajo con conocimientos recientes y técnicas aprendidas durante mi
                                formación académica y prácticas supervisadas.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">Acompañamiento cercano</h4>
                            <p className="text-sm text-muted-foreground">
                                Priorizo una atención clara y humana, explicando cada paso del
                                tratamiento y los cuidados necesarios.
                            </p>
                        </div>
                    </div>

                    <Separator />
                </CardContent>
                <CardFooter className="space-y-0">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full border py-2 px-4 rounded-xl hover:cursor-pointer mt-2"
                    >
                        <AccordionItem value="about-me-professional-formation">
                            <AccordionTrigger>Formación académica</AccordionTrigger>
                            <AccordionContent className="space-y-3 text-sm text-muted-foreground">
                                <ol>
                                    <li>
                                        <span className="h-5 items-center space-x-4 text-sm mb-4 hidden lg:flex min-h-4">
                                            <div className="h-full flex flex-row justify-between w-[9rem]">
                                                <p>• Instituto HILET</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[3rem]">
                                                <p>2026</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[8rem]">
                                                <p>Mar del Plata</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[15rem]">
                                                <p className="font-lg">
                                                    Secretariado Médico (en curso)
                                                </p>
                                            </div>
                                        </span>
                                        <p className="text-sm mb-2 mt-4 block lg:hidden">
                                            • Secretariado Médico (en curso) – Instituto HILET, Mar
                                            del Plata - 2026
                                        </p>
                                    </li>
                                    <li>
                                        <span className="h-5 items-center space-x-4 text-sm mb-4 hidden lg:flex min-h-4">
                                            <div className="h-full flex flex-row justify-between w-[9rem]">
                                                <p>• Instituto LACA</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[3rem]">
                                                <p>2025</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[8rem]">
                                                <p>Capital Federal</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[15rem]">
                                                <p className="font-lg">Cosmiatría</p>
                                            </div>
                                        </span>
                                        <p className="text-sm mb-2 mt-4 block lg:hidden">
                                            • Cosmiatría – Instituto LACA (Capital Federal) - 2025
                                        </p>
                                    </li>
                                    <li>
                                        <span className="h-5 items-center space-x-4 text-sm mb-4 hidden lg:flex min-h-4">
                                            <div className="h-full flex flex-row justify-between w-[9rem]">
                                                <p>• Instituto LACA</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[3rem]">
                                                <p>2025</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[8rem]">
                                                <p>Capital Federal</p>
                                                <Separator orientation="vertical" />
                                            </div>
                                            <div className="h-full flex flex-row justify-between w-[15rem]">
                                                <p className="font-lg">Cosmetología</p>
                                            </div>
                                        </span>
                                        <p className="text-sm mb-2 mt-4 block lg:hidden">
                                            • Cosmetología – Instituto LACA (Capital Federal) - 2025
                                        </p>
                                    </li>
                                </ol>
                                <p className="pt-2">
                                    Durante mi formación realicé prácticas con pacientes reales,
                                    aplicando tratamientos bajo criterios profesionales y
                                    académicos.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardFooter>
            </Card>
        </article>
    );
};

export default AboutMe;
