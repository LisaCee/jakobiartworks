import { FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-background flex justify-between max-w-7xl pb-4 px-5 mx-auto mt-8">
			<p className="text-foreground text-xs font-[GeneralSans-Light]">
				&copy; {new Date().getFullYear()} Jakobi Art Works
			</p>
			<a
				href="https://www.instagram.com/j.a.w/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Instagram"
				className="text-foreground transition-colors"
			>
				<FaInstagram size={18} />
				<span className="sr-only">Instagram - opens in new link</span>
			</a>
		</footer>
	);
}
