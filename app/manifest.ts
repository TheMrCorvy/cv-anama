import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Yesica Anama Rodas",
		short_name: "Yesica Rodas",
		description: "Curriculum Vitae of Yesica Anama Rodas",
		start_url: "/",
		display: "standalone",
		background_color: "#fff",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
