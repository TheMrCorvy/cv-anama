import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "Googlebot",
				allow: ["/"],
				disallow: "/private/",
			},
			{
				userAgent: ["Applebot", "Bingbot"],
				disallow: ["/"],
			},
		],
		sitemap: "https://yesicarodas.com",
	};
}

export const preferredRegion = "auto";
export const fetchPriority = "high";
export const revalidateTag = "robots";
