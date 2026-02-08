import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FC } from 'react';

const Studies: FC = () => {
    return (
        <section className="mt-12 mb-12 flex flex-col gap-5 w-full justify-center px-6">
            <Card className="mx-auto w-full h-auto">
                <CardHeader className="pb-2">
                    <div className="flex justify-center">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">Capacitación y Formación</h3>
                            <p className="text-sm text-muted-foreground">
                                Información relevante acerca de mis estudios
                            </p>
                        </div>
                    </div>
                    <Separator />
                </CardHeader>
                <CardContent className="space-y-4">
                    <h2 className="font-bold text-3xl">Secundario Completo:</h2>
                    <p className="text-md mb-2">
                        Un gran logro personal en mi vida fue la culminación de mis estudios
                        secundarios. Debido a diversos motivos personales, me vi en la obligación de
                        interrumpir mis estudios para salir a trabajar de manera muy temprana. Sin
                        embargo, nunca perdí de vista la importancia de la educación y el deseo de
                        superarme. Finalmente, logré completar mi secundaria, lo que representa un
                        gran paso en mi desarrollo personal y profesional.
                    </p>
                    <p className="text-md mb-2">
                        Este logro no solo me permitió adquirir nuevos conocimientos, sino también
                        demostrarme a mí misma que con esfuerzo y dedicación es posible alcanzar
                        metas importantes, sin importar las dificultades. Además, me ha inspirado a
                        seguir aprendiendo y buscando nuevas oportunidades para crecer tanto en lo
                        personal como en lo laboral.
                    </p>
                    <p className="text-md mb-2">
                        Estoy convencida de que la educación es una herramienta poderosa para abrir
                        puertas y crear un futuro mejor. Este logro me ha motivado a seguir
                        invirtiendo en mi formación y a buscar nuevas oportunidades para seguir
                        creciendo y aprendiendo.
                    </p>
                    <Separator className="my-7" />
                    <h4 className="font-bold text-2xl">Formación Profesional Complementaria:</h4>
                    <p className="text-md mb-2">
                        En la actualidad me encuentro en proceso de aprendizaje de las múltiples
                        herramientas de Microsoft Office, tales como Excel, Word y PowerPoint. Estas
                        herramientas son fundamentales para el manejo de datos y la creación de
                        documentos profesionales. Estoy comprometida en adquirir habilidades sólidas
                        en estas aplicaciones para mejorar mi eficiencia y productividad en el
                        entorno laboral.
                    </p>
                    <p className="text-md mb-2">
                        Si bien es cierto que carezco de la experiencia real a la hora de utilizar
                        estas herramientas, siento que estoy lista para afrontarme a todos los
                        desafíos que el mundo tenga para otorgarme. Nada me detendrá en mi carrera
                        profesional y continuaré capacitándome en las herramientas que sean
                        necesarias con tal de poder desempeñarme de la mejor manera posible en el
                        ámbito laboral.
                    </p>
                </CardContent>
            </Card>
        </section>
    );
};

export default Studies;
