import {
	Breadcrumb,
	BreadcrumbHome,
	Breadcrumbs,
	BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { NextPageLink } from "@/components/next-page-link";
import { SidebarLayoutContent } from "@/components/sidebar-layout";
import TableOfContents from "@/components/table-of-contents";

import { getDoc, getDocumentationContent } from "@/data/doc";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	let documentation = await getDoc((await params).slug);

	return {
		title: `${documentation?.title} | ORC`,
		description: documentation?.description,
	};
}

export default async function DocumentationPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	let slug = (await params).slug;
	let documentation = await getDoc(slug);

	if (!documentation) {
		notFound();
	}

	let DocumentationContent = await getDocumentationContent(slug);

	return (
		<SidebarLayoutContent
			breadcrumbs={
				<Breadcrumbs>
					<BreadcrumbHome />
					<BreadcrumbSeparator className="max-md:hidden" />
					<Breadcrumb
						href={`/#${documentation.docGroup.id}`}
						className="max-md:hidden"
					>
						{documentation.docGroup.title}
					</Breadcrumb>
					<BreadcrumbSeparator />
					<Breadcrumb>{documentation.title}</Breadcrumb>
				</Breadcrumbs>
			}
		>
			<div className="mx-auto max-w-7xl">
				<div className="-mx-2 sm:-mx-4">
					{documentation.pageImage && (
						<Image
							width={1200}
							height={630}
							priority={true}
							src={documentation.pageImage.url}
							alt={documentation.pageImage.alt || documentation.title}
							className="object-cover w-full h-full"
							quality={90}
							// onError={event => event.currentTarget.src = "/home.webp"}
						/>
					)}
				</div>
				<div className="mx-auto flex max-w-2xl gap-x-10 py-10 sm:py-14 lg:max-w-5xl">
					<div className="w-full flex-1">
						<div
							id="content"
							className="prose"
						>
							<DocumentationContent />
						</div>
						<div className="mt-16 border-t border-gray-200 pt-8 dark:border-white/10">
							{documentation.next ? (
								<NextPageLink
									title={documentation.next.title}
									description={documentation.next.description}
									href={`/${documentation.next.id}`}
								/>
							) : (
								<NextPageLink
									title="Home"
									description="Back to Home"
									href="/"
								/>
							)}
						</div>
					</div>
					<div className="hidden w-66 lg:block">
						<TableOfContents contentId="content" />
					</div>
				</div>
			</div>
		</SidebarLayoutContent>
	);
}
