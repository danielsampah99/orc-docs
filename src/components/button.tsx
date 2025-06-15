import { cn } from "@/app/utils";
import type React from "react";

export function Button({
	className,
	type = "button",
	...props
}: React.ComponentProps<"button">) {
	return (
		<button
			type={type}
			className={cn(
				className,
				"rounded-full bg-gray-950 px-3.5 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500",
			)}
			{...props}
		/>
	);
}
