export default function About() {
  return (
		<div className="flex flex-col-reverse md:gap-8 bg-surface text-foreground p-4 md:p-7 font-[GeneralSans-Light] rounded-sm shadow md:flex-row md:my-15 lg:my-25">
			<div className="flex flex-col justify-evenly py-2 md:w-1/2">
				<hr className="hidden border-t-[0.5px] border-muted-foreground md:block mb-4" />

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
					can often be adjusted to fit your style.{" "}
					<a href="mailto:jakobi@jakobiartworks.com">Get in touch</a>{" "}
					if you have something in mind.
				</p>
				<hr className="hidden md:block border-t-[0.5px] border-muted-foreground mt-4" />
			</div>
			<div className="flex flex-col md:w-1/2 my-4">
				<img
					src="/assets/images/artist-portrait.jpg"
					alt="The artist with a red, 8-bit concrete heart over his face"
					className="w-full h-full object-cover rounded"
				/>
				<hr className="border-t-[0.5px] mt-8 border-muted-foreground pt-2 md:hidden" />
			</div>
		</div>
  );
}
