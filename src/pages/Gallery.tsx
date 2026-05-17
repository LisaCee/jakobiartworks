import { artworks } from "@/data/artwork";
import { Header } from "../components/sections/Header";

export default function Home() {
	return (
		<>
			{/* Hero statement */}
			<Header />

			{/* Masonry gallery */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{artworks.map((artwork) => (
					<div
						key={artwork.id}
						className="break-inside-avoid cursor-pointer"
						onClick={() => console.log("clicked", artwork.id)}
					>
						<img
							src={artwork.src}
							alt={artwork.alt}
							className="w-full h-auto hover:opacity-90 transition-opacity"
						/>
					</div>
				))}
			</div>
		</>
	);
}
