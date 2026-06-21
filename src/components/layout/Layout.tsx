import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import Footer from "../sections/Footer";

export default function Layout() {
	return (
		<div className="min-h-screen bg-background pb-2">
			<TopNav />
			<main className="pt-20 p-4 md:p-8 max-w-lg md:max-w-4xl mx-auto flex flex-col gap-8">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}