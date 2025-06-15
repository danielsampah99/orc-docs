import { SidebarLayout } from "@/components/sidebar-layout";
import { getDocGroups } from "@/data/doc";
import type { ReactNode } from "react";

export default function WebLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <SidebarLayout docGroups={getDocGroups()}>{children}</SidebarLayout>;
}
