import { ChevronRightIcon } from "@/icons/chevron-right-icon";
import Link from "next/link";

export function NextPageLink({
	title,
	description,
	href,
}: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<div className="flow-root">
			<Link
				href={href}
				className="-mx-3 -my-2 block rounded-xl px-3 py-2 hover:bg-gray-950/4"
			>
				<p className="flex items-center gap-3 text-sm/7 text-gray-500">
					Up next
					<ChevronRightIcon className="stroke-current" />
				</p>
				<p className="mt-3 text-base/7 font-medium text-gray-950">{title}</p>
				<p className="text-sm/7 text-gray-700">{description}</p>
			</Link>
		</div>
	);
}
