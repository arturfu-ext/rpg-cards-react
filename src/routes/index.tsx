import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
			<section className="p-6 h-full w-8xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
					<h1 className="text-white font-modesto text-3xl">RPG Cards</h1>
				</div>
			</section>
		</div>
	);
}
