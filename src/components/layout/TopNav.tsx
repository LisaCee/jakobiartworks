import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";
import { navItems } from "./navItems";

export default function TopNav() {
	const { dark, updateTheme } = useTheme();
	const { pathname } = useLocation();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 h-10 bg-surface shadow-sm font-[Khand-Medium]">
			<div className="flex justify-between mx-auto px-4 max-w-7xl h-full items-center">
				<Link to="/" className="font-semibold text-foreground">
					Jakobi Art Works
				</Link>
				<div className="flex gap-4">
					{navItems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							aria-label={item.title}
							className={`flex items-center gap-2 transition-colors ${
								pathname === item.href
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							<item.icon size={18} />
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
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						<FaInstagram size={18} />
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
						className="text-muted-foreground hover:text-foreground transition-colors"
					>
						{dark ? <Sun size={18} /> : <Moon size={18} />}
					</button>
				</div>
			</div>
		</header>
	);
}
