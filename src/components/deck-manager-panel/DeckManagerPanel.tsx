/*import {
	Download,
	type LucideIcon,
	Plus,
	Settings,
	Sword,
	Upload,
} from "lucide-react";

const mockCards = [
	{ id: 1, name: "Weapon Mace", icon: Sword },
	{ id: 2, name: "Card Bienvehere", icon: Sword },
	{ id: 3, name: "Danir of Sider", icon: Sword },
	{ id: 4, name: "Fantatry Atnowledge", icon: Sword },
	{ id: 5, name: "Mace of Terror", icon: Sword, selected: true },
	{ id: 6, name: "Mace of Lemoh", icon: Sword },
	{ id: 7, name: "Ralle of Thilast", icon: Sword },
	{ id: 8, name: "Banw of Choice", icon: Sword },
	{ id: 9, name: "Rarity of Ilingon", icon: Sword },
	{ id: 10, name: "Hail of Stannes", icon: Sword },
	{ id: 11, name: "Mae of Svopes", icon: Sword },
	{ id: 12, name: "Firentskly", icon: Sword },
];

type Props = {
	name: string;
	icon: LucideIcon;
	selected?: boolean;
};

function CardItem({ name, icon: Icon, selected }: Props) {
	return (
		<button
			type="button"
			className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
				selected
					? "bg-slate-600/80 text-white"
					: "text-slate-300 hover:bg-slate-700/50"
			}`}
		>
			<div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-amber-600 to-amber-800">
				<Icon className="h-4 w-4 text-white" />
			</div>
			<span className="flex-1 truncate text-sm">{name}</span>
			<div
				className={`h-2.5 w-2.5 rounded-full ${selected ? "bg-blue-400" : "bg-blue-500"}`}
			/>
		</button>
	);
}

interface FooterButtonProps {
	icon: LucideIcon;
	label: string;
}

function FooterButton({ icon: Icon, label }: FooterButtonProps) {
	return (
		<button
			type="button"
			className="flex flex-1 flex-col items-center gap-1.5 rounded-lg py-3 text-slate-400 transition-colors hover:bg-slate-700/50 hover:text-white"
		>
			<Icon className="h-5 w-5" />
			<span className="text-xs">{label}</span>
		</button>
	);
}*/

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";

function DeckManagerPanel() {
	return (
		<aside className="h-full flex flex-col gap-3">
			<header className="shrink-0">
				<h2 className="font-modesto text-3xl tracking-wide">DECK MANAGER</h2>
			</header>
			{/* Content */}
			<div className="flex flex-1 flex-col gap-3 overflow-hidden">
				{/* Deck Selector */}
				<div className="shrink-0">
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Deck" />
						</SelectTrigger>
					</Select>
					{/*<select className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">*/}
					{/*	<option>Current Deck</option>*/}
					{/*</select>*/}
				</div>

				{/* New Card Button */}
				<Button
					variant="outline"
					className="shrink-0 border-dashed border-slate-500 bg-slate-700/30 text-slate-300 hover:border-slate-400 hover:bg-slate-700/50 hover:text-white"
				>
					<Plus />
					New Card
				</Button>

				{/* Cards List */}
				<div className="flex-1 space-y-1 overflow-y-auto">
					{/*{mockCards.map((card) => (*/}
					{/*	<CardItem*/}
					{/*		key={card.id}*/}
					{/*		name={card.name}*/}
					{/*		icon={card.icon}*/}
					{/*		selected={card.selected}*/}
					{/*	/>*/}
					{/*))}*/}
				</div>
			</div>
			Footer
			<footer className="flex shrink-0 border-t border-slate-700/50 px-2 py-2">
				{/*<FooterButton icon={Upload} label="Import" />*/}
				{/*<FooterButton icon={Download} label="Export" />*/}
				{/*<FooterButton icon={Settings} label="Settings" />*/}
			</footer>
		</aside>
	);
}

export default DeckManagerPanel;
