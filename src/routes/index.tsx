import { createFileRoute } from "@tanstack/react-router";
import DeckManagerPanel from "@/components/deck-manager-panel/DeckManagerPanel.tsx";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen overflow-hidden bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 p-4 lg:p-5">
			<div className="grid h-full grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[320px_minmax(520px,1fr)_minmax(420px,1fr)] text-white">
				<DeckManagerPanel />
				{/*<CardEditorPanel />*/}
				{/*<LivePreviewPanel />*/}
			</div>
		</div>

		/*	<div className="min-h-full overflow-hidden bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 p-4 lg:p-5">
		<div className="grid h-full gap-4 grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[320px_minmax(520px,1fr)_minmax(420px,1fr)]">
			<DeckManagerPanel />
			<CardEditorPanel />
			<LivePreviewPanel />
		</div>
	</div>*/
	);
}
