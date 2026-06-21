import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";
import { navItems } from "./navItems";

export default function TopNav() {
	const { dark, updateTheme } = useTheme();
	const { pathname } = useLocation();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background shadow-xs font-[Khand-Medium]">
			<div className="flex justify-between mx-auto px-4 py-4 max-w-7xl h-full items-center">
				<Link
					to="/"
					className="text-3xl font-semibold text-foreground md:text-2xl"
				>
					Jakobi Art Works
				</Link>
				<div className="flex gap-4 items-center">
					{navItems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							aria-label={item.title}
							className={`flex items-center gap-2 transition-colors ${
								pathname === item.href
									? "text-foreground"
									: "text-muted hover:text-foreground"
							}`}
						>
							<item.icon className="size-6 md:size-5" />
							<span className="hidden md:inline text-sm">
								{item.title}
							</span>
						</Link>
					))}
					<a
						href="https://www.instagram.com/j.a.w/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className="text-muted hover:text-foreground transition-colors"
					>
						<FaInstagram className="size-6 md:size-5" />
						<span className="sr-only">
							Instagram - opens in new link
						</span>
					</a>
					<button
						onClick={updateTheme}
						aria-label={
							dark
								? "Switch to light mode"
								: "Switch to dark mode"
						}
						className="text-muted hover:text-foreground transition-colors"
					>
						{dark ? (
							<Sun className="size-6 md:size-5" />
						) : (
							<Moon className="size-6 md:size-5" />
						)}
					</button>
				</div>
			</div>
		</header>
	);
}
