import { twMerge } from "tw-merge";
import { clsx, type ClassValue } from "clsx";

/**
 *Merges and sorts tailwindcss utitlity classes
 */
export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

/**
 * Application url found in the .env.local file of the application
 */
export const APP_URL = process.env.APP_URL! ?? "";
