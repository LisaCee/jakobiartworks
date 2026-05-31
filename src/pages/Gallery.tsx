import { artworks } from "@/data/artwork";
import { Header } from "../components/sections/Header";

export default function Home() {
	return (
		<>
			{/* Hero statement */}
			<Header />

			{/* Masonry gallery */}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 grid-flow-dense">
				{artworks.map((artwork, index) => (
					<div
						key={artwork.id}
						className={`aspect-square overflow-hidden ${artwork?.featured ? "col-span-2 row-span-2" : ""} p-4`}
						style={{ animationDelay: `${index * 40}ms` }}
					>
						<img
							src={artwork.src}
							alt={artwork.alt}
							className="w-full h-auto object-cover transition-all duration-300 hover:shadow-[3px_3px_8px_rgba(0,0,0,0.3)]
 hover:scale-[1.05]"
						/>
					</div>
				))}
			</div>
		</>
	);
}
