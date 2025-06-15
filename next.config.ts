import createMDX from "@next/mdx";

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

const nextConfig = {
	turbopack: {},
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"]
};

export default withMDX(nextConfig);
