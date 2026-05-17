import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'

export default function Layout() {
	return (
		<div className="min-h-screen bg-background">
			<TopNav />
			<main className="pt-20 p-8 max-w-6xl mx-auto">
				<Outlet />
			</main>
		</div>
	)
}