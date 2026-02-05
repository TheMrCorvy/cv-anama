import { Alert } from '@/components/ui/alert';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FC } from 'react';

const WorkExperience: FC = () => {
    return (
        <section className="mt-12 mb-12 flex flex-col gap-5 w-full justify-center px-6">
            <Card className="mx-auto w-full h-auto">
                <CardHeader className="pb-2">
                    <div className="flex justify-center">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">Experiencia Laboral</h3>
                        </div>
                    </div>
                    <Separator />
                </CardHeader>
                <CardContent className="flex flex-col gap-2" id="work-experience">
                    <div className="w-full flex flex-col md:flex-row gap-0 md:gap-8">
                        <Alert className="flex w-full md:w-1/2 flex-row mb-4">
                            <div className="flex flex-col w-full">
                                <h4 className="font-bold text-lg mb-1">
                                    Pizzería Ri-K, Capital Federal: Ayudante de Cocina
                                </h4>
                                <p className="text-sm">
                                    <strong>DICIEMBRE DEL 2020 - Enero 2026</strong>
                                    <br />
                                    Apoyando en la preparación, organización y mantenimiento del
                                    área de trabajo.
                                </p>
                            </div>
                        </Alert>
                        <Alert className="flex w-full md:w-1/2 flex-row mb-4">
                            <div className="flex flex-col w-full">
                                <h4 className="font-bold text-lg mb-1">
                                    Granja Pío, Capital Federal: Atención al Cliente
                                </h4>
                                <p className="text-sm">
                                    <strong>MAYO DEL 2023 - DICIEMBRE DEL 2023</strong>
                                    <br />
                                    Atención al cliente y preparación de alimentos en pollería,
                                    manejo de caja y limpieza.
                                </p>
                            </div>
                        </Alert>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-0 md:gap-8">
                        <Alert className="flex w-full md:w-1/2 flex-row mb-4">
                            <div className="flex flex-col w-full">
                                <h4 className="font-bold text-lg mb-1">
                                    Quinta La Caprichosa, Capital Federal: Mesera de Eventos
                                </h4>
                                <p className="text-sm">
                                    <strong>ENERO DEL 2021 - MAYO DEL 2023</strong>
                                    <br />
                                    Servicio de mesa en eventos, atención al cliente, montaje y
                                    desmontaje, toma de pedidos.
                                </p>
                            </div>
                        </Alert>
                        <Alert className="flex w-full md:w-1/2 flex-row mb-4">
                            <div className="flex flex-col w-full">
                                <h4 className="font-bold text-lg mb-1">
                                    El Obrador, Capital Federal: Ayudante de Panadería
                                </h4>
                                <p className="text-sm">
                                    <strong>ABRIL DEL 2020 - DICIEMBRE DEL 2020</strong>
                                    <br />
                                    Apoyo en producción, atención al cliente Limpieza, embalaje y
                                    reposición de productos.
                                </p>
                            </div>
                        </Alert>
                    </div>
                    <div className="w-full flex justify-center">
                        <Alert className="flex w-full md:w-1/2 flex-row">
                            <div className="w-full">
                                <h4 className="font-bold text-lg mb-1">
                                    Zoquete Molinete, Capital Federal: Ayudante de Cocina
                                </h4>
                                <p className="text-sm">
                                    <strong>ABRIL DEL 2019 - MARZO DEL 2020</strong>
                                    <br />
                                    Colaboración en la elaboración, orden y limpieza del espacio de
                                    trabajo.
                                </p>
                            </div>
                        </Alert>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default WorkExperience;
