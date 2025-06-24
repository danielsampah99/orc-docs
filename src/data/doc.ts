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
	{
		id: "partnership",
		title: "Partnership",
		description:
			"A partnership is made up of a minimum of two and a maximum of twenty persons who engage in profit making busniness. Their relationship is determined by a partnership agreement duly signed by all partners and stamped at the lands commission valuation division (LCVD)",
		docs: [
			{
				id: "partnership-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a partnership business. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the partnership agreement.",
				pageImage: null,
			},
			{
				id: "partnership-registration-instruction",
				title: "Registration Instructions",
				description: "The Registration Instructions section provides applicants with clear, step-by-step guidance on how to successfully register a partnership business. It outlines the key processes involved, starting from conducting a name availability search to the final incorporation stage. This section also highlights the applicable processing fee, required documents, and where to access partnership information post-registration. Additionally, it reminds applicants of the mandatory annual renewal of the partnership name. By following these instructions carefully, users can ensure a smooth and compliant registration experience.",
				pageImage: null,
			},
		]
	},
	{
		id: "public-company-limited-by-shares",
		title: "public company limited by shares",
		description: "A public company limited by shares is a body corporate formed without any restriction on the number of members per its constitution and its members liability is limited to the amount of unpaid shares.",
		docs: [
			{
			 	id: "public-company-limited-by-shares-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a public company limited by shares. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the public company limited by shares agreement.",
				pageImage: null,
			},
			{
				id: "public-company-limited-by-shares-registration-instruction",
				title: "Registration Instructions",
				description: "The Registration Instructions section provides applicants with clear, step-by-step guidance on how to successfully register a public company limited by shares business. It outlines the key processes involved, starting from conducting a name availability search to the final incorporation stage. This section also highlights the applicable processing fee, required documents, and where to access public company limited by shares information post-registration. Additionally, it reminds applicants of the mandatory annual renewal of the public company limited by shares name. By following these instructions carefully, users can ensure a smooth and compliant registration experience.",
				pageImage: null,
			},
			{
				id: "public-company-limited-by-shares-application-form",
				title: "Application Form",
				description: "The Application Form section provides a comprehensive form that applicants must complete to register a public company limited by shares. This form collects essential information such as the proposed company name, registered office address, details of directors and shareholders, and other relevant data required for the registration process. It is crucial for applicants to fill out this form accurately to ensure a smooth registration experience.",
				pageImage: null,
			}
		]
	},
	{
		id: "corporate-business-name",
		title: "Corporate Business Name",
		description:
			"A company may carry on business under a business name which does not consist of its corporate name. This is called a corporate business name . A stamp of the parent company is required and should be signed by one of its existing directors or secretary.",
		docs: [
			{
				id: "corporate-business-name-instruction",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a Corporate Business Name. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the corporate business agreement.",
				pageImage: null,
			},
			{
				id: "corporate-business-name-registration-instruction",
				title: "Registration Instructions",
				description: "The Registration Instructions section provides applicants with clear, step-by-step guidance on how to successfully register a corporate business name. It outlines the key processes involved, starting from conducting a name availability search to the final incorporation stage. This section also highlights the applicable processing fee, required documents, and where to access partnership information post-registration. Additionally, it reminds applicants of the mandatory annual renewal of the partnership name. By following these instructions carefully, users can ensure a smooth and compliant registration experience.",
				pageImage: null,
			},
		]
	},
];