import { cn } from "@/app/utils";
import { Button } from "@headlessui/react";
import type React from "react";

export function IconButton({
	className,
	...props
}: React.ComponentProps<"button">) {
	return (
		<Button
			type="button"
			className={cn(
				className,
				"relative *:relative",
				"before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-1/2 before:rounded-md",
				"before:bg-white/75 before:backdrop-blur-sm",
				"data-hover:before:bg-gray-950/5",
				"focus:outline-hidden data-focus:before:outline-2 data-focus:before:outline-blue-700 data-focus:before:outline-solid",
			)}
			{...props}
		/>
	);
}
