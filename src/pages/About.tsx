export default function About() {
  return (
		<div className="flex flex-col gap-8 bg-surface text-foreground p-7 font-[GeneralSans-Light] rounded-sm shadow md:flex-row">
			<div className="flex flex-col justify-evenly py-2 md:w-1/2">
				<hr className="border-t-[0.5px] border-muted-foreground" />

				<p className="leading-relaxed mx-3">
					Hi, I'm Jakobi — an artist and middle school art teacher
					from the Pacific Northwest. A graduate of the University of
					Washington's School of Art, I've been a working artist since
					2001.
				</p>
				<p className="leading-relaxed mx-3">
					I primarily work with concrete, wire, and paint on plywood.
					Jakobi Art Works is a place for me to share my work with
					others.
				</p>
				<p className="leading-relaxed mx-3">
					Custom orders are always welcome — size, color, and design
					can often be adjusted to fit your style. Get in touch if you
					have something in mind.
				</p>
				<hr className="border-t-[0.5px] border-muted-foreground" />
			</div>
			<div className="md:w-1/2 my-4">
				<img
					src="/assets/images/artist-portrait.jpg"
					alt="The artist with a red, 8-bit concrete heart over his face"
					className="w-full h-full object-cover rounded"
				/>
			</div>
		</div>
  );
}
