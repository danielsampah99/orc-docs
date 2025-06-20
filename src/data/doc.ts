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
		id: "professional-bodies",
		title: "Professional Bodies",
		description:"Learn how to properly register a professional Body",
		docs: [
			{
				id: "professional-bodies-application",
				title: "Professional Bodies Application",
				description:
					"Learn the basics of our platform and how to begin your company registration journey. This guide covers initial requirements and provides an overview of the registration process.",
				pageImage: null,
			},
			{
				id: "registration-instruction-professional-bodies",
				title: "Registration Instructions",
				description:
					"A step-by-step guide to help you complete your application process accurately and efficiently.",
				pageImage: null,
			},
			{
				id: "prerequisite-documents",
				title: "Prerequisite Documents",
				description:
					"A list of all the necessary documents needed to complete your application.",
				pageImage: null,
			},
			{
				id: "service-type",
				title: "Service Type",
				description:
					" where you can select a suitable payment option for your application processing.",
				pageImage: null,
			},
			{
				id: "name-availability",
				title: "Name Availability",
				description:
					"The name availability page, where the system will check if the name you intend to use is unique, compliant, and available for registration.",
				pageImage: null,
			},
			{
				id: "registration-process",
				title: "Registrarion Process",
				description:
					"Next, you will be directed to the Registration Forms page, where you will complete the official registration details required to submit your application.",
				pageImage: null,
			},
			{
				id: "professional-bodies-review",
				title: "Review",
				description:
					"The next page allows you to review all the information you have provided before final submission.",
				pageImage: null,
			},

			
		],
	},
	{
		id: "external-company",
		title: "External Company ",
		description:
			"This page provides an introduction to what an external company is, along with a brief video explanation, registration cost options, and a button to begin the application process.",
		docs: [

			{
				id: "external-company-application",
				title: "External Company",
				description:
					"This page provides an introduction to what an external company is, along with a brief video explanation, registration cost options",
				pageImage: null,
			},
			{
				id: "external-company-instructions",
				title: "Instructions",
				description:
					"The next page outlines the step-by-step registration process and lists all the required documents needed to register an external company in Ghana.",
				pageImage: null,
			},
			{
				id: "external-company-form",
				title: "External Company Registration",
				description:
					"The next page outlines the step-by-step process required to complete the registration of an external company, guiding you through each section of the application.",
				pageImage: null,
			},

			
		]
			
	}
];
