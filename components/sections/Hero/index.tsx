import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FC } from 'react';
import ClientCard from '@/components/ui/ClientCard';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection: FC = () => {
    return (
        <article className="relative w-full py-16 px-4">
            {/* Background soft gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-transparent" />

            <div className="mx-auto max-w-5xl">
                <Card
                    element="section"
                    className="border-muted/50 bg-background/80 backdrop-blur-sm shadow-lg"
                >
                    <CardHeader className="text-center">
                        <h6 className="flex justify-center px-4 pt-1 text-xs md:text-sm">
                            Cosmetóloga & Cosmiatra Graduada del Instituto LACA
                        </h6>

                        <CardTitle className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 mt-1">
                            Yesica Anama Rodas
                        </CardTitle>

                        <p className="mx-auto max-w-4xl text-muted-foreground text-base md:text-lg leading-relaxed">
                            Atención estética profesional enfocada en el cuidado integral de la
                            piel, con tratamientos personalizados, fundamentos académicos sólidos y
                            un enfoque responsable en cada consulta.
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <Separator />

                        <div className="mx-auto max-w-4xl text-center space-y-4 py-8">
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                Graduada del Instituto LACA Ezeiza, con formación teórica y práctica
                                en Cosmetología y Cosmiatría. Trabajo con protocolos modernos,
                                priorizando la evaluación personalizada, la seguridad y el
                                acompañamiento cercano de cada paciente.
                            </p>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                Mi objetivo es ayudarte a comprender tu piel y cuidarla de forma
                                consciente, respetando sus tiempos y necesidades reales.
                            </p>
                        </div>
                    </CardContent>

                    <CardFooter className='flex justify-center'>
                        <ClientCard className="px-0 md:px-12 w-full md:w-auto min-h-4 flex flex-col items-center gap-4 bg-transparent shadow-lg">
                            <Link
                                href="https://wa.me/5491150488031"
                                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90 gap-4"
                            >
                                <FaWhatsapp size={24} />
                                Consultar por una evaluación
                            </Link>

                            <span className="text-xs text-muted-foreground w-full text-center">
                                Atención personalizada · Evaluación previa · Protocolos responsables
                            </span>
                        </ClientCard>
                    </CardFooter>
                </Card>
            </div>
        </article>
    );
};

export default HeroSection;
