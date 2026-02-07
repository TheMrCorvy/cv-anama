import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://yesicarodas.com",
			lastModified: "2025-04-07",
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					es: "https://yesicarodas.com",
				},
			},
		},
		{
			url: "https://yesicarodas.com/cv.pdf",
			lastModified: "2025-04-07",
			changeFrequency: "monthly",
			priority: 0.8,
			alternates: {
				languages: {
					es: "https://yesicarodas.com/cv.pdf",
				},
			},
		},
	];
}
