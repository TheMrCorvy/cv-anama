import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function CV() {
	return (
		<article>
			<header className="flex h-16 shrink-0 text-center justify-center items-center gap-2 border-b border-sidebar-border bg-card">
				<h1 className="text-2xl font-bold text-card-foreground mb-0">
					Yesica Anama Rodas
				</h1>
			</header>
			<section className="mt-12 mb-12 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 w-full justify-center px-6">
				<Card
					className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4 h-[64vh]"
					style={{
						backgroundImage: "url('/assets/pfp.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
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
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
							<div>
								<CardTitle>Yesica Anama Rodas</CardTitle>
								<CardDescription>
									Profesional altamente capacitada
								</CardDescription>
							</div>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex justify-center">
							<div className="text-center">
								<p className="text-2xl font-bold">
									Acerca de Mí
								</p>
								<p className="text-sm text-muted-foreground">
									Información profesional relevante
								</p>
							</div>
						</div>
						<Separator />
						<h4 className="font-bold text-lg mb-1">
							Área de Comidas:
						</h4>
						<p className="text-sm">
							Más de 5 años de experiencia profesional en el área
							de comidas. Tanto en el apartado de ccina, como
							atendiendo clientes de forma directa en diversos
							emprendimientos gastronómicos.
						</p>
						<h4 className="font-bold text-lg mb-1 mt-5">
							Área de Entretenimiento:
						</h4>
						<p className="text-sm">
							Con amplia experiencia en el rubro de eventos,
							asistiendo en la logística del manejo de y
							distribución de vienes durante reuniones de
							distintos ámbitos a los cuales asistieron multitud
							de clientes.
						</p>
						<h4 className="font-bold text-lg mb-1 mt-5">Ventas:</h4>
						<p className="text-sm">
							Cuento con ligera experiencia en el área de
							promoción de forma presencial tanto de productos
							como servicios, así como tambien estoy ampliamente
							capacitada para anejar el cobro directo a clientes,
							y administrar el dinero que ingresa o es extraído en
							caja.
						</p>
						<h4 className="font-bold text-lg mb-1 mt-5">
							Cuidados Personales y Servicios de Limpieza:
						</h4>
						<p className="text-sm mb-2">
							Ávido manejo, control y protección de pacientes con
							discapacidad, así como adultos mayores en situación
							de enfermedad e incapacidad de autocuidados.
						</p>
						<p className="text-sm">
							Sanitización de espacios y objetos de uso diario,
							así como también la limpieza de espacios públicos y
							privados. Esto incluye tanto locales, asi como
							hogares habitacionales.
						</p>
					</CardContent>
				</Card>
			</section>
			<section className="mt-12 mb-12 flex flex-col gap-5 w-full justify-center px-6">
				<Card className="mx-auto w-full h-auto">
					<CardHeader className="pb-2">
						<div className="flex justify-center">
							<div className="text-center">
								<h3 className="text-2xl font-bold">
									Capacitación y Formación
								</h3>
								<p className="text-sm text-muted-foreground">
									Información relevante acerca de mis estudios
								</p>
							</div>
						</div>
						<Separator />
					</CardHeader>
					<CardContent className="space-y-4">
						<h2 className="font-bold text-3xl">
							Secundario Completo:
						</h2>
						<p className="text-md mb-2">
							Un gran logro personal en mi vida fue la culminación
							de mis estudios secundarios. Debido a diversos
							motivos personales, me vi en la obligación de
							interrumpir mis estudios para salir a trabajar de
							manera muy temprana. Sin embargo, nunca perdí de
							vista la importancia de la educación y el deseo de
							superarme. Finalmente, logré completar mi
							secundaria, lo que representa un gran paso en mi
							desarrollo personal y profesional.
						</p>
						<p className="text-md mb-2">
							Este logro no solo me permitió adquirir nuevos
							conocimientos, sino también demostrarme a mí misma
							que con esfuerzo y dedicación es posible alcanzar
							metas importantes, sin importar las dificultades.
							Además, me ha inspirado a seguir aprendiendo y
							buscando nuevas oportunidades para crecer tanto en
							lo personal como en lo laboral.
						</p>
						<p className="text-md mb-2">
							Estoy convencida de que la educación es una
							herramienta poderosa para abrir puertas y crear un
							futuro mejor. Este logro me ha motivado a seguir
							invirtiendo en mi formación y a buscar nuevas
							oportunidades para seguir creciendo y aprendiendo.
						</p>
						<Separator className="my-7" />
						<h4 className="font-bold text-2xl">
							Formación Profesional Complementaria:
						</h4>
						<p className="text-md mb-2">
							En la actualidad me encuentro en proceso de
							aprendizaje de las múltiples herramientas de
							Microsoft Office, tales como Excel, Word y
							PowerPoint. Estas herramientas son fundamentales
							para el manejo de datos y la creación de documentos
							profesionales. Estoy comprometida en adquirir
							habilidades sólidas en estas aplicaciones para
							mejorar mi eficiencia y productividad en el entorno
							laboral.
						</p>
						<p className="text-md mb-2">
							Si bien es cierto que carezco de la experiencia real
							a la hora de utilizar estas herramientas, siento que
							estoy lista para afrontarme a todos los desafíos que
							el mundo tenga para otorgarme. Nada me detendrá en
							mi carrera profesional y continuaré capacitándome en
							las herramientas que sean necesarias con tal de
							poder desempeñarme de la mejor manera posible en el
							ámbito laboral.
						</p>
					</CardContent>
				</Card>
			</section>
			<section className="mt-12 mb-12 flex flex-col gap-5 w-full justify-center px-6">
				<Card className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
					<CardHeader className="pb-2">
						<div className="flex justify-center items-center gap-4">
							<div className="text-center mt-4">
								<h2 className="text-4xl font-bold">
									Contáctame!
								</h2>
							</div>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<Separator />
						<p className="text-xl">
							<span className="font-bold">Email: </span>
							<a
								href="mailto:yesicaanama2@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<Button variant="link" size="lg">
									yesicaanama2@gmail.com
								</Button>
							</a>
						</p>
						<p className="text-xl">
							<span className="font-bold">Teléfono: </span>
							<a href="tel:+5491176059251" target="_blank">
								<Button variant="link" size="lg">
									+54 911 7605-9251
								</Button>
							</a>
						</p>
						<div>
							<p className="text-md mb-0">
								<span className="font-bold text-lg">
									Domicilio:{" "}
								</span>
								Barrio Nueve de Enero, localidad de Monte
								Grande, Zona Sur.
							</p>
							<p className="text-sm">
								A pocos minutos de la estación de tren, con
								fácil acceso múltiples zonas de la provincia de
								Buenos Aires.
							</p>
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
