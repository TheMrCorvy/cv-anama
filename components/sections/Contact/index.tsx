import { FC } from 'react';

import { CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ClientCard from '@/components/ui/ClientCard';

export interface ContactSectionProps {
    linkForCv?: boolean;
}

const Contact: FC<ContactSectionProps> = ({ linkForCv = false }) => {
    return (
        <article
            className="mt-12 mb-12 flex flex-col gap-5 w-full justify-center px-6"
            id="contact-info"
        >
            <ClientCard
                delay={3000}
                element="section"
                className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto"
            >
                <CardHeader className="pb-2">
                    <div className="flex justify-center items-center gap-4">
                        <div className="text-center mt-4">
                            <h2 className="text-4xl font-bold">Contáctame!</h2>
                        </div>
                    </div>
                </CardHeader>
                <div className="w-full px-6">
                    <Separator />
                </div>
                <CardContent>
                    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3 mx-auto">
                        <div className="flex flex-row items-center gap-2 mb-2 md:mb-6">
                            <FaWhatsapp size={24} />
                            <div>
                                <a
                                    href="https://api.whatsapp.com/send?phone=+5491150488031&text=Hola!%20Me%20interesa%20tu%20CV!"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Button variant="link" size="lg" className="cursor-pointer">
                                        +54 9 11 5048-8031
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-center mb-2 md:mb-6">
                            <FaPhone size={24} />
                            <div>
                                <a href="tel:+5491176059251" target="_blank">
                                    <Button variant="link" size="lg" className="cursor-pointer">
                                        +54 9 11 5048-8031
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-center mb-2 md:mb-6">
                            <FaEnvelope size={24} />
                            <div>
                                <a
                                    href="mailto:yesicaanama2@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button variant="link" size="lg" className="cursor-pointer">
                                        yesicaanama2@gmail.com
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-center mb-2 md:mb-6">
                            <FaLinkedin size={24} />
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/yesica-anama-rodas"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button variant="link" size="lg" className="cursor-pointer">
                                        /in/yesica-anama-rodas
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-left md:text-center mb-2">
                        <FaMapMarkerAlt size={24} />
                        <div>
                            <p className="text-md mb-0">
                                Matheu 3157, Mar Del Plata, Buenos Aires.
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    {linkForCv && (
                        <Button size="lg" className="cursor-pointer" variant="link" asChild>
                            <Link href="/cv">Visita mi cv</Link>
                        </Button>
                    )}
                    <a href="/assets/cv.pdf" target="_blank">
                        <Button size="lg" className="cursor-pointer">
                            Descarga mi CV
                        </Button>
                    </a>
                </CardFooter>
            </ClientCard>
        </article>
    );
};

export default Contact;
