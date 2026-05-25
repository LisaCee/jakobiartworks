import { artworks } from "@/data/artwork";
import { Header } from "../components/sections/Header";

export default function Home() {
	return (
		<>
			{/* Hero statement */}
			<Header />

			{/* Masonry gallery */}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 grid-flow-dense">
				{artworks.map((artwork) => (
					<div
						key={artwork.id}
						className={`aspect-square ${artwork?.featured ? "col-span-2 row-span-2" : ""} cursor-pointer border-3 border-border-accent p-6`}
						onClick={() => console.log("clicked", artwork.id)}
					>
						<img
							src={artwork.src}
							alt={artwork.alt}
							className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
						/>
					</div>
				))}
			</div>
		</>
	);
}
