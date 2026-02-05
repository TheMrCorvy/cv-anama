import { FC } from "react";

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";

const Contact: FC = () => {
    return (
        <article
            className="mt-12 mb-12 flex flex-col gap-5 w-full justify-center px-6"
            id="contact-info"
        >
            <Card element='section' className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
                <CardHeader className="pb-2">
                    <div className="flex justify-center items-center gap-4">
                        <div className="text-center mt-4">
                            <h2 className="text-4xl font-bold">Contáctame!</h2>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Separator />
                    <p className="text-xl flex items-center gap-2">
                        <FaWhatsapp />
                        <a
                            href="https://api.whatsapp.com/send?phone=+5491150488031&text=Hola!%20Me%20interesa%20tu%20CV!"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Button variant="link" size="lg" className="cursor-pointer">
                                +54 9 11 5048-8031
                            </Button>
                        </a>
                    </p>
                    <p className="text-xl flex items-center gap-2">
                        <FaPhone />
                        <a href="tel:+5491176059251" target="_blank">
                            <Button variant="link" size="lg" className="cursor-pointer">
                                +54 9 11 5048-8031
                            </Button>
                        </a>
                    </p>
                    <p className="text-xl flex items-center gap-2">
                        <FaEnvelope />
                        <a href="mailto:yesicaanama2@gmail.com" target="_blank" rel="noreferrer">
                            <Button variant="link" size="lg" className="cursor-pointer">
                                yesicaanama2@gmail.com
                            </Button>
                        </a>
                    </p>
                    <p className="text-xl flex items-center gap-2">
                        <FaLinkedin />
                        <a
                            href="https://www.linkedin.com/in/yesica-anama-rodas"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="link" size="lg" className="cursor-pointer">
                                yesica-anama-rodas
                            </Button>
                        </a>
                    </p>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <div>
                            <p className="text-md mb-0">
                                Matheu 3157, Mar Del Plata, Buenos Aires.
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <a href="/assets/cv.pdf" target="_blank">
                        <Button size="lg" className="cursor-pointer">
                            Descarga mi CV
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </article>
    );
}

export default Contact