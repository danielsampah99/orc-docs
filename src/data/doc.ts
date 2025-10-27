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
		id: "business-name-registration",
		title: "Business Name Registration",
		description: "Learn how to register a business name.",
		docs: [
			{
				id: "business-name-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a business name. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the business name registration agreement.",
				pageImage: null,
			},
			{
				id: "business-name-check",
				title: "Name Check",
				description: "The Name Check section allows users to search for the availability of a business name. This section provides detailed information on the name search process and important guidelines.",
				pageImage: null,
			},
			{
				id: "business-name-form",
				title: "Business Name Registration Form",
				description: "The Business Name Registration Form section provides applicants with a comprehensive form to fill out and submit for the registration of a business name. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "business-name-final",
				title: "Review and Submit",
				description: "The Review and Submit section provides applicants with a comprehensive form to fill out and submit for the registration of a business name. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
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
			{
				id: "professional-bodies-payment",
				title: "Payment Process",
				description:
					"The next page provides a step-by-step guide on how users can complete payments securely within the application.",
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
	{
		id: "public-company-limited-by-guarantee",
		title: "Public Company Limited by Guarantee",
		description: "A public company limited by guarantee is a type of company that is not owned by shareholders, but by members who have made a promise to contribute to the company's assets if it goes bankrupt. This type of company is often used for non-profit organizations or charitable trusts.",
		docs: [
			{
				id: "public-company-guarantee-start-application",
				title: "Start Application",
				description: "The Start application button allows users to begin the process of registering a public company limited by guarantee. Clicking the button will guide applicants through submitting the necessary information and documents required for registration, based on the public company limited by guarantee agreement.",
				pageImage: null,
			},
			{
				id: "public-company-guarantee-name-check",
				title: "Name Check",
				description: "The Name Check section allows users to search for the availability of a company name. This section provides detailed information on the name search process and important guidelines.",
				pageImage: null,
			},
			{
				id: "public-company-guarantee-registration-form-1",
				title: "Company Details",
				description: "The Company Details section provides applicants with a comprehensive form to fill out and submit for the registration of a public company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
				},
			{
				id: "public-company-guarantee-registration-form-2",
				title: "Executive Council Members / Directors",
				description: "The Executive Council Members / Directors section provides applicants with a comprehensive form to fill out and submit for the registration of a public company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "public-company-guarantee-registration-form-3",
				title: "Particulars of Company Secretary",
				description: "The Particulars of Company Secretary section provides applicants with a comprehensive form to fill out and submit for the registration of a public company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "public-company-guarantee-registration-form-4",
				title: "Subscribers",
				description: "The Subscribers section provides applicants with a comprehensive form to fill out and submit for the registration of a public company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "public-company-guarantee-registration-form-5",
				title: "Beneficial Owner (BO)",
				description: "The Beneficial Owners section provides applicants with a comprehensive form to fill out and submit for the registration of a public company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "public-company-guarantee-registration-form-6",
				title: "Attachments",
				description: "The Attachments section provides applicants with a comprehensive form to fill out and submit for the registration of a public company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "public-company-guarantee-registration-final",
				title: "Review and Submit",
				description: "The Review and Submit section provides applicants with a comprehensive form to fill out and submit for the registration of a public company limited by guarantee. This section includes all the necessary fields and instructions to ensure a smooth and accurate submission process.",
				pageImage: null,
			}
		]
	},
	{
		id: "change-in-particulars",
		title: "Change in Particulars",
		description: "A user can make changes to the particulars of a registered entity.",
		docs: [
			{
				id: "change-in-particulars-business-name",
				title: "Business Name",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered business name. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-corporate-business-name",
				title: "Corporate Business Name",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered corporate business name. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{ 
				id: "change-in-particulars-partnership",
				title: "Partnership",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered partnership. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-private-company-limited-by-shares",
				title: "Private Company Limited by Shares",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered private company limited by shares. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-private-company-unlimited-by-shares",
				title: "Private Company Unlimited by Shares",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered private company unlimited by shares. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-public-company-limited-by-shares",
				title: "Public Company Limited by Shares",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered public company limited by shares. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-public-company-unlimited-by-shares",
				title: "Public Company Unlimited by Shares",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered public company unlimited by shares. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-private-company-limited-by-guarantee",
				title: "Private Company Limited by Guarantee",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered private company limited by guarantee. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-public-company-limited-by-guarantee",
				title: "Public Company Limited by Guarantee",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered public company limited by guarantee. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-external-company",
				title: "External Company",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered external company. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			},
			{
				id: "change-in-particulars-professional-body",
				title: "Professional Body",
				description: "The Instructions section provides users with a comprehensive guide on how to make changes to the particulars of a registered professional body. This section includes all the necessary steps and information to ensure a smooth and accurate submission process.",
				pageImage: null,
			}
		]
	},
		{
		id: "filing",
		title: "Filing",
		description:
			"Filing refers to the process of submitting necessary documents and information to the relevant authorities for the purpose of registering a business or company. This section provides detailed instructions on how to properly file your application, including required forms, supporting documents, and submission procedures to ensure compliance with legal and regulatory requirements.",
		docs: [
			{
				id: "filing-business-name",
				title: "Business Name",
				description: "The Filing section for a Business Name allows owners to submit updates, statutory documents, and compliance-related information to the Office of the Registrar of Companies. This feature is used to maintain accurate and up-to-date records for a registered Business Name. Through this section, business owners can file changes to their business details, submit required renewals, and provide supporting documents whenever the Registrar requests verification. It ensures that the Business Name remains compliant with legal requirements and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-corporate-business-name",
				title: "Corporate Business Name",
				description: "The Filing section for a Corporate Business Name enables authorized users to submit statutory updates, compliance documents, and changes related to a registered corporate business name. This feature ensures that all records held by the Registrar remain accurate and up to date. Through this section, corporate entities can file amendments to business information, submit annual or required statutory filings, respond to compliance requests, and provide supporting documentation for verification. It is an essential tool for maintaining regulatory compliance and ensuring that the corporate business name remains in good standing with the Office of the Registrar of Companies.",
				pageImage: null,
			},
			{
				id: "filing-partnership",
				title: "Partnership",
				description: "The Filing section for a Partnership allows partners to submit necessary statutory documents, updates, and compliance-related information to the Office of the Registrar of Companies. This feature is essential for maintaining accurate records of the partnership and ensuring compliance with legal requirements. Through this section, partners can file changes to partnership details, submit required renewals, and provide supporting documents as requested by the Registrar. It helps ensure that the partnership remains in good standing and that all information on record reflects the current status of the business.",
				pageImage: null,
			
			},
			{
				id: "filing-private-company-limited-by-shares",
				title: "Private Company Limited by Shares",
				description: "The Filing section for a Private Company Limited by Shares allows company representatives to submit necessary statutory documents, updates, and compliance-related information to the Office of the Registrar of Companies. This feature is vital for maintaining accurate records of the private company and ensuring adherence to legal requirements. Through this section, private companies can file changes to company details, submit required annual returns, and provide supporting documents as requested by the Registrar. It helps ensure that the private company remains in good standing and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-private-company-unlimited-by-shares",
				title: "Private Company Unlimited by Shares",
				description: "The Filing section for a Private Company Unlimited by Shares enables company representatives to submit statutory updates, compliance documents, and changes related to the registered private company. This feature is essential for maintaining accurate records with the Office of the Registrar of Companies. Through this section, private companies can file amendments to company information, submit annual returns, respond to compliance requests, and provide supporting documentation for verification. It ensures that the private company remains compliant with legal requirements and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-public-company-limited-by-shares",
				title: "Public Company Limited by Shares",
				description: "The Filing section for a Public Company Limited by Shares enables authorized representatives to submit statutory updates, compliance documents, and changes related to the registered public company. This feature is crucial for maintaining accurate records with the Office of the Registrar of Companies. Through this section, public companies can file amendments to company information, submit annual returns, respond to compliance requests, and provide supporting documentation for verification. It ensures that the public company remains compliant with legal requirements and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-public-company-unlimited-by-shares",
				title: "Public Company Unlimited by Shares",
				description: "	The Filing section for a Public Company Unlimited by Shares allows authorized representatives to submit necessary statutory documents, updates, and compliance-related information to the Office of the Registrar of Companies. This feature is vital for maintaining accurate records of the public company and ensuring adherence to legal requirements. Through this section, public companies can file changes to company details, submit required annual returns, and provide supporting documents as requested by the Registrar. It helps ensure that the public company remains in good standing and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-private-company-limited-by-guarantee",
				title: "Private Company Limited by Guarantee",
				description: "The Filing section for a Private Company Limited by Guarantee enables company representatives to submit statutory updates, compliance documents, and changes related to the registered private company. This feature is essential for maintaining accurate records with the Office of the Registrar of Companies. Through this section, private companies can file amendments to company information, submit annual returns, respond to compliance requests, and provide supporting documentation for verification. It ensures that the private company remains compliant with legal requirements and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-public-company-limited-by-guarantee",
				title: "Public Company Limited by Guarantee",
				description: "The Filing section for a Public Company Limited by Guarantee allows authorized representatives to submit necessary statutory documents, updates, and compliance-related information to the Office of the Registrar of Companies. This feature is vital for maintaining accurate records of the public company and ensuring adherence to legal requirements. Through this section, public companies can file changes to company details, submit required annual returns, and provide supporting documents as requested by the Registrar. It helps ensure that the public company remains in good standing and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-external-company",
				title: "External Company",
				description: "The Filing section for an External Company allows authorized representatives to submit necessary statutory documents, updates, and compliance-related information to the Office of the Registrar of Companies. This feature is vital for maintaining accurate records of the external company and ensuring adherence to legal requirements. Through this section, external companies can file changes to company details, submit required annual returns, and provide supporting documents as requested by the Registrar. It helps ensure that the external company remains in good standing and that all information on record reflects the current status of the business.",
				pageImage: null,
			},
			{
				id: "filing-professional-body",
				title: "Professional Body",
				description: "The Filing section for a Professional Body allows authorized representatives to submit necessary statutory documents, updates, and compliance-related information to the Office of the Registrar of Companies. This feature is vital for maintaining accurate records of the professional body and ensuring adherence to legal requirements. Through this section, professional bodies can file changes to their details, submit required annual returns, and provide supporting documents as requested by the Registrar. It helps ensure that the professional body remains in good standing and that all information on record reflects its current status.",
				pageImage: null,
			},
		]
	},
];

