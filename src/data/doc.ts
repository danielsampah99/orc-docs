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
	},{
		id: "private-Company-Limited-by-Shares",
		title: "Private Company Limited by Shares",
		description:
			"A private company limited by shares is a body corporate formed by one and not more than fifty shareholders whose liabilities are limited to the amount of shares unpaid.",
		docs: [
			{
				id: "priv-company-limited-shares-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a partnership business. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the partnership agreement.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-name-check",
				title: "Name Check",
				description: "The Name Check section allows users to search for the availability of a company name. This section provides detailed information on the name search process and important guidelines.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form1",
				title: "Company Details",
				description: "This page collects all primary company information.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form2",
				title: "Company Directors",
				description: "This page collects information about the Directors of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form3",
				title: "Particulars of Company Secretary",
				description: "This page collects information about the Secretary of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form4",
				title: "Details of Shares and Stated Capital",
				description: "This page collects information about the shares of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form5",
				title: "Subscribers",
				description: "This page collects information about the Subscribers of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form6",
				title: "Beneficial Owner (BO)",
				description: "This page collects information about the Beneficial Owner(BO) of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form7",
				title: "Attachment",
				description: "This page collects  any additonal information in the form of documents about the compay",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form8",
				title: "Review and Submit",
				description: "The Review and Submit section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
		]
	},
	{
		id: "private-Company-Unlimited-by-Shares",
		title: "Private Company Unimited by Shares",
		description:
			"A private company unlimited by shares is a body formed by one to fifty people whose liability is unlimited to the amount of shares unpaid. An unlimited liability company is a company which does not have a limit on the liability of its members.",
		docs: [
			{
				id: "priv-company-unlimited-shares-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a partnership business. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the partnership agreement.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-name-check",
				title: "Name Check",
				description: "The Name Check section allows users to search for the availability of a company name. This section provides detailed information on the name search process and important guidelines.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form1",
				title: "Company Details",
				description: "This page collects all primary company information.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form2",
				title: "Company Directors",
				description: "This page collects information about the Directors of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form3",
				title: "Particulars of Company Secretary",
				description: "This page collects information about the Secretary of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form4",
				title: "Details of Shares and Stated Capital",
				description: "This page collects information about the shares of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form5",
				title: "Subscribers",
				description: "This page collects information about the Subscribers of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form6",
				title: "Beneficial Owner (BO)",
				description: "This page collects information about the Beneficial Owner(BO) of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form7",
				title: "Attachment",
				description: "This page collects  any additonal information in the form of documents about the compay",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form8",
				title: "Review and Submit",
				description: "The Review and Submit section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
		]
	},
	{
		id: "public-Company-limited-by-Shares",
		title: "Public Company limited by Shares",
		description:
			"A public company limited by shares is a body corporate formed without any restriction on the number of members per its constitution and its members liability is limited to the amount of unpaid shares.",
		docs: [
			{
				id: "pub-company-limited-shares-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a partnership business. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the partnership agreement.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-name-check",
				title: "Name Check",
				description: "The Name Check section allows users to search for the availability of a company name. This section provides detailed information on the name search process and important guidelines.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form1",
				title: "Company Details",
				description: "This page collects all primary company information.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form2",
				title: "Company Directors",
				description: "This page collects information about the Directors of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form3",
				title: "Particulars of Company Secretary",
				description: "This page collects information about the Secretary of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form4",
				title: "Details of Shares and Stated Capital",
				description: "This page collects information about the shares of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form5",
				title: "Subscribers",
				description: "This page collects information about the Subscribers of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form6",
				title: "Beneficial Owner (BO)",
				description: "This page collects information about the Beneficial Owner(BO) of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form7",
				title: "Attachment",
				description: "This page collects  any additonal information in the form of documents about the compay",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form8",
				title: "Review and Submit",
				description: "The Review and Submit section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
		]
	},
	{
		id: "public-Company-Unlimited-by-Shares",
		title: "Public Company Unimited by Shares",
		description:
			"A public company unlimited by shares is a body corporate formed without any restriction on the number of members per its constitution and its liabilities are unlimited.",
		docs: [
			{
				id: "pub-company-unlimited-shares-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a partnership business. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the partnership agreement.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-name-check",
				title: "Name Check",
				description: "The Name Check section allows users to search for the availability of a company name. This section provides detailed information on the name search process and important guidelines.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form1",
				title: "Company Details",
				description: "This page collects all primary company information.",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form2",
				title: "Company Directors",
				description: "This page collects information about the Directors of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form3",
				title: "Particulars of Company Secretary",
				description: "This page collects information about the Secretary of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form4",
				title: "Details of Shares and Stated Capital",
				description: "This page collects information about the shares of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form5",
				title: "Subscribers",
				description: "This page collects information about the Subscribers of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form6",
				title: "Beneficial Owner (BO)",
				description: "This page collects information about the Beneficial Owner(BO) of the company",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form7",
				title: "Attachment",
				description: "This page collects  any additonal information in the form of documents about the compay",
				pageImage: null,
			},
			{
				id: "priv-company-limited-shares-registration-form8",
				title: "Review and Submit",
				description: "The Review and Submit section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
		]
	},
	{
		id: "private-company-limited-by-guarantee",
		title: "Private Company Limited by Guarantee",
		description: "A private company limited by guarantee is a type of company that is not owned by shareholders, but by members who have made a promise to contribute to the company's assets if it goes bankrupt. This type of company is often used for non-profit organizations or charitable trusts.",
		docs: [
			{
				id: "priv-company-guarantee-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a private company limited by guarantee. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the private company limited by guarantee agreement.",
				pageImage: null,
			},
			{
				id: "priv-company-guarantee-name-check",
				title: "Name Check",
				description: "The Name Check section allows users to search for the availability of a company name. This section provides detailed information on the name search process and important guidelines.",
				pageImage: null,
			}, 
			{
				id: "priv-company-guarantee-registration-form-1",
			    title: "Company Details",
				description: "The Company Details section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "priv-company-guarantee-registration-form-2",
				title: "Executive Council Members / Directors",
				description: "The Executive Council Members / Directors section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "priv-company-guarantee-registration-form-3",
				title: "Particulars of Company Secretary",
				description: "The Particulars of Company Secretary section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "priv-company-guarantee-registration-form-4",
				title: "Subscribers",
				description: "The Subscribers section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "priv-company-guarantee-registration-form-5",
				title: "Beneficial Owner (BO)",
				description: "The Beneficial Owners section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "priv-company-guarantee-registration-final",
				title: "Review and Submit",
				description: "The Review and Submit section provides applicants with a comprehensive form to fill out and submit for the registration of a private company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			
		]	
	},
];
