import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { Alert } from '@/components/ui/alert';

export default function CV() {
    return (
        <article>
            <header
                className="flex h-16 shrink-0 text-center justify-center items-center gap-2 border-b border-sidebar-border bg-card"
                id="header"
            >
                <h1 className="text-2xl font-bold text-card-foreground mb-0">Yesica Anama Rodas</h1>
            </header>
            <section
                className="mt-4 mb-12 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 w-full justify-center px-6"
                id="about"
            >
                <Card
                    className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 h-[64vh]"
                    style={{
                        backgroundImage: "url('/assets/pfp.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></Card>
                <Card className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
                    <CardHeader className="pb-0 mb-0">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage
                                    src="/assets/pfp_square.jpg"
                                    alt="Yesica Anama Rodas"
                                />
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
                                    Cosmiatría. Altamente capacitada para asistir a pacientes en
                                    áreas relacionadas al cuidado de la piel, mantener y mejorar la
                                    belleza natural, aplicar tratamientos mediante distintos
                                    productos y/o herramientas, entre otras.
                                </p>
                            </div>
                        </div>
                        <Separator />
                        <div className="flex flex-col h-full justify-between">
                            <h4 className="font-bold text-xl mb-1">Formación Académica</h4>
                            <div className="text-sm mb-3 md:mb-0">
                                <div className="h-5 items-center space-x-4 text-sm mb-4 hidden md:flex">
                                    <strong>Instituto HILET</strong>
                                    <Separator orientation="vertical" />
                                    <strong>Mar del Plata</strong>
                                    <Separator orientation="vertical" />
                                    <strong className="font-lg">Secretariado Médico</strong>
                                </div>
                                <strong className="text-sm mb-2 mt-4 block md:hidden">
                                    Instituto HILET, Mar del Plata: Secretariado Médico
                                </strong>
                                <strong>ENERO DEL 2026 - PRESENTE</strong>
                                <br />
                                Actualmente me encuentro cursando la carrera de Secretariado Médico,
                                basada en facturar, organizar, recibir y retribuir todo lo
                                relacionado con asuntos médicos.
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
                                    <strong>Capital Federa</strong>
                                    <Separator orientation="vertical" />
                                    <strong className="font-lg">Cosmetología</strong>
                                </div>
                                <strong className="text-sm mb-2 mt-4 block md:hidden">
                                    Instituto LACA, Capital Federal: Cosmetología
                                </strong>
                                <strong>JUNIO DEL 2025 - OCTUBRE DEL 2025</strong>
                                <br />
                                Con diploma en Cosmetología, con nota promedio de 8, y enfocada en
                                el tratamiento y cuidado de la piel, así como también para combatir
                                el envejecimiento y mejorar la belleza natural de los pacientes.
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
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
                                        Apoyo en producción, atención al cliente Limpieza, embalaje
                                        y reposición de productos.
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
                                        Colaboración en la elaboración, orden y limpieza del espacio
                                        de trabajo.
                                    </p>
                                </div>
                            </Alert>
                        </div>
                    </CardContent>
                </Card>
            </section>
            <section
                className="mt-12 mb-12 flex flex-col md:flex-row md:justify-around gap-5 w-full justify-center px-6"
                id="skills-and-achievements"
            >
                {/* These 2 cards should be aligned in the same row when the user visits the page on desktop, and switch to flex-col on mobile */}
                <Card className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
                    <CardHeader className="pb-2">
                        <div className="flex justify-center items-center gap-4">
                            <div className="text-center mt-4">
                                <h2 className="text-4xl font-bold">Aptitudes</h2>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Separator />
                        <ul className="list-disc list-inside">
                            <li>Tratamientos del rostro y piel.</li>
                            <li>Uso de cremas, y herramientas de belleza.</li>
                            <li>Estudio y desarrollo de nuevas habilidades.</li>
                            <li>Capacidad de adaptabilidad a distintos entornos.</li>
                            <li>
                                Entendimiento de la teoría al momento de fundamentar un tratamiento.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
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
            </section>
            <section
                className="mt-12 mb-12 flex flex-col gap-5 w-full justify-center px-6"
                id="contact-info"
            >
                <Card className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
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
                            <a
                                href="mailto:yesicaanama2@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
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
            </section>
            <footer className="flex h-16 shrink-0 text-center justify-center items-center gap-2 border-b border-sidebar-border bg-card relative">
                <a
                    href="https://www.corvalangonzalo.com"
                    target="_blank"
                    className="md:absolute lg:absolute xl:absolute top-1/5 left-0"
                >
                    <Button variant="link" size="lg" className="cursor-pointer">
                        Gonzalo Corvalán
                    </Button>
                </a>
                <h1 className="text-2xl font-bold text-card-foreground mb-0">
                    &copy; {new Date().getFullYear()}
                </h1>
            </footer>
        </article>
    );
}
