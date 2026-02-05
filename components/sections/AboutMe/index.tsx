import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FC } from 'react';

const AboutMe: FC = () => {
    return (
        <article
            className="mt-4 mb-12 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 w-full justify-center px-6"
            id="about"
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
            <Card
                element="section"
                className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto"
            >
                <CardHeader className="pb-0 mb-0">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src="/assets/pfp_square.jpg" alt="Yesica Anama Rodas" />
                            <AvatarFallback>YR</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Yesica Anama Rodas</CardTitle>
                            <CardDescription>Cosmetóloga y Cosmiatra</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 h-auto">
                    <div className="flex justify-center">
                        <div className="text-center">
                            <p className="text-2xl font-bold">Acerca de Mí</p>
                            <p className="text-sm text-muted-foreground">
                                Graduada del instituto LACA con diplomas en Cosmetología y
                                Cosmiatría. Altamente capacitada para asistir a pacientes en áreas
                                relacionadas al cuidado de la piel, mantener y mejorar la belleza
                                natural, aplicar tratamientos mediante distintos productos y/o
                                herramientas, entre otras.
                            </p>
                        </div>
                    </div>
                    <Separator />
                    <div className="flex flex-col h-full justify-between">
                        <h4 className="font-bold text-xl mb-1">Formación Académica</h4>
                        <div className="text-sm mb-3 md:mb-0">
                            <div className="h-5 items-center space-x-4 text-sm mb-4 flex">
                                <strong>Instituto HILET</strong>
                                <Separator orientation="vertical" />
                                <strong>Mar del Plata</strong>
                                <Separator orientation="vertical" />
                                <strong className="font-lg">Secretariado Médico</strong>
                            </div>
                            {/* <strong className="text-sm mb-2 mt-4 block md:hidden">
                                Instituto HILET, Mar del Plata: Secretariado Médico
                            </strong> */}
                            <strong>ENERO DEL 2026 - PRESENTE</strong>
                            <br />
                            Actualmente me encuentro cursando la carrera de Secretariado Médico,
                            basada en facturar, organizar, recibir y retribuir todo lo relacionado
                            con asuntos médicos.
                        </div>
                        <Separator />
                        <div className="text-sm mb-3 md:mb-0">
                            <div className="h-5 items-center space-x-4 text-sm mb-4 hidden md:flex">
                                <strong>Instituto LACA</strong>
                                <Separator orientation="vertical" />
                                <strong>Capital Federal</strong>
                                <Separator orientation="vertical" />
                                <strong className="font-lg">Cosmiatría</strong>
                            </div>
                            <strong className="text-sm mb-2 mt-4 block md:hidden">
                                Instituto LACA, Capital Federal: Cosmiatría
                            </strong>
                            <strong>OCTUBRE DEL 2025 - DICIEMBRE DEL 2025</strong>
                            <br />
                            Graduada a finales del año 2025 en Cosmiatría, la especialización de
                            Cosmetología para combatir el envejecimiento de la piel en distintas
                            áreas del cuerpo.
                        </div>
                        <Separator />
                        <div className="text-sm mb-3 md:mb-0">
                            <div className="h-5 items-center space-x-4 text-sm mb-4 hidden md:flex">
                                <strong>Instituto LACA</strong>
                                <Separator orientation="vertical" />
                                <strong>Capital Federal</strong>
                                <Separator orientation="vertical" />
                                <strong className="font-lg">Cosmetología</strong>
                            </div>
                            <strong className="text-sm mb-2 mt-4 block md:hidden">
                                Instituto LACA, Capital Federal: Cosmetología
                            </strong>
                            <strong>JUNIO DEL 2025 - OCTUBRE DEL 2025</strong>
                            <br />
                            Con diploma en Cosmetología, con nota promedio de 8, y enfocada en el
                            tratamiento y cuidado de la piel, así como también para combatir el
                            envejecimiento y mejorar la belleza natural de los pacientes.
                        </div>
                    </div>
                </CardContent>
            </Card>
        </article>
    );
};

export default AboutMe;
