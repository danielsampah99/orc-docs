export type Doc = {
	id: string;
	title: string;
	description: string;
	pageImage: {
		url: string;
		alt: string;
	} | null;
};

export type DocGroup = Omit<Doc, "pageImage"> & { docs: Doc[] };

export function getDocGroups(): DocGroup[] {
	return docs;
}

export async function getDoc(
	slug: string,
): Promise<(Doc & { docGroup: DocGroup; next: Doc | null }) | null> {
	let docGroup = docs.find(({ docs }) => docs.some(({ id }) => id === slug));

	if (!docGroup) {
		return null;
	}

	let index = docGroup.docs.findIndex(({ id }) => id === slug);

	return {
		...docGroup.docs[index],
		docGroup,
		next: index < docGroup.docs.length - 1 ? docGroup.docs[index + 1] : null,
	};
}

export async function getDocumentationContent(slug: string) {
	return (await import(`@/data/docs/${slug}.mdx`)).default;
}

export const docs: DocGroup[] = [
	{
		id: "welcome",
		title: "Welcome",
		description:
			"Complete guide to company registration process with step-by-step instructions, legal compliance requirements, and essential business registration procedures. Learn how to properly register your company and start your business journey",
		docs: [
			{
				id: "getting-started",
				title: "Getting Started",
				description:
					"Learn the basics of our platform and how to begin your company registration journey. This guide covers initial requirements and provides an overview of the registration process.",
				pageImage: {
					url: `/home.webp`,
					alt: "",
				},
			},
			{
				id: "sign-in",
				title: "Signing In",
				description:
					"Instructions for accessing your existing account securely. Learn about our authentication process and how to recover your account if needed.",
				pageImage: null,
			},
			{
				id: "sign-up",
				title: "Signing up",
				description:
					"Step-by-step guide to creating your new account. Learn about required information, password requirements, and account verification process.",
				pageImage: null,
			},
			{
				id: "dashboard",
				title: "Dashboard",
				description:
					"Overview of your personalized dashboard interface. Learn how to navigate key features, track your registration progress, and manage your company information.",
				pageImage: null,
			},
		],
	},
	{
		id: "name-search-reservation-and-reserved-names",
		title: "Name Search, Name Reservation and Reserved Names",
		description:
			"Learn how to search for a business name and reserve it. This section provides detailed information on the name search process and important guidelines.",
		docs: [
			{
				id: "name-search-and-reservation",
				title: "Name Search and Reservation",
				description: "Learn how to search for a business name and reserve it.",
				pageImage: null,
			},
			{
				id: "reserved-names",
				title: "Reserved Names",
				description: "Learn about reserved names.",
				pageImage: null,
			},
		],
	},
];
