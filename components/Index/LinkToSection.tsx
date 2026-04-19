export const LinkToSection = ({ title, href, children }) => (
	<a
		href={`#${href}`}
		className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group relative"
	>
		<span className=" text-accent uppercase font-mono transition">{title}</span>
		<br />
		<p className=" text-slate-400 transition">{children}</p>
	</a>
);
