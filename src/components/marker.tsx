import { cn } from "@/app/utils";
import { clsx } from "clsx";
import type React from "react";

export function Marker({
	time,
	title,
	className,
	children,
	...props
}: {
	time: string;
	title: string;
} & React.ComponentProps<"div">) {
	return (
		<div
			id={time}
			className={cn(className, "flex gap-6")}
			{...props}
		>
			<div>
				<button
					type="button"
					className="font-semibold"
				>
					{time}
				</button>
			</div>
			<div className="m-0!">
				<div className="mb-4 font-semibold">
					<a href={`#${time}`}>{title}</a>
				</div>
				{children}
			</div>
		</div>
	);
}
