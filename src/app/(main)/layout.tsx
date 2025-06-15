import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-dvh flex-col items-center justify-center px-6 py-12">
			<div className="w-full max-w-xs">
				<div className="flex justify-center">
					<Link
						href={"/"}
						aria-label="ORC DOCS"
					>
						Logo
					</Link>
				</div>

				<div className="mt-10">{children}</div>
			</div>
		</div>
	);
}
