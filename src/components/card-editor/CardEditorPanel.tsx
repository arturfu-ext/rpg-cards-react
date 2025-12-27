import {
	Bold,
	GripVertical,
	Image,
	Italic,
	Link,
	List,
	ListOrdered,
	Sparkles,
	Sword,
	Underline,
	Wand2,
} from "lucide-react";
import { useState } from "react";

type Tab = "basic" | "appearance" | "mechanics";

const iconOptions = [
	Sword,
	Sword,
	Wand2,
	Wand2,
	Sword,
	Sparkles,
	Sparkles,
	Sword,
	Wand2,
	Sword,
	Sword,
	Wand2,
];

interface TabButtonProps {
	active: boolean;
	onClick: () => void;
	children: React.ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-4 py-2 text-sm font-medium transition-colors ${
				active
					? "border-b-2 border-blue-500 text-white"
					: "text-slate-400 hover:text-white"
			}`}
		>
			{children}
		</button>
	);
}

function ColorPickerPlaceholder({ gradient }: { gradient: string }) {
	return (
		<div
			className={`h-20 w-full cursor-pointer rounded-lg ${gradient} transition-transform hover:scale-[1.02]`}
		/>
	);
}

interface MechanicRowProps {
	type: string;
	value: string;
}

function MechanicRow({ type, value }: MechanicRowProps) {
	return (
		<div className="flex items-center gap-2">
			<GripVertical className="h-4 w-4 cursor-grab text-slate-500" />
			<select className="rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2 text-sm text-white outline-none focus:border-blue-500">
				<option>{type}</option>
			</select>
			<input
				type="text"
				defaultValue={value}
				className="flex-1 rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
			/>
		</div>
	);
}

export function CardEditorPanel() {
	const [activeTab, setActiveTab] = useState<Tab>("basic");

	return (
		<section className="hidden flex-col rounded-2xl border border-slate-700/50 bg-slate-800/90 shadow-xl backdrop-blur-sm md:flex">
			{/* Header */}
			<header className="flex flex-shrink-0 items-center justify-between border-b border-slate-700/50 px-4 py-4">
				<h2 className="font-modesto text-xl tracking-wide text-white">
					Card Editor
				</h2>
				{/* Tabs */}
				<nav className="flex gap-1">
					<TabButton
						active={activeTab === "basic"}
						onClick={() => setActiveTab("basic")}
					>
						Basic Info
					</TabButton>
					<TabButton
						active={activeTab === "appearance"}
						onClick={() => setActiveTab("appearance")}
					>
						Appearance
					</TabButton>
					<TabButton
						active={activeTab === "mechanics"}
						onClick={() => setActiveTab("mechanics")}
					>
						Mechanics
					</TabButton>
				</nav>
			</header>

			{/* Content */}
			<div className="flex-1 overflow-y-auto p-5">
				{/* Basic Info Section */}
				<div className="space-y-5">
					{/* Card Name */}
					<label className="block">
						<span className="mb-1.5 block text-sm text-slate-400">
							Card Name
						</span>
						<input
							type="text"
							defaultValue="Mace of Terror"
							className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
						/>
					</label>

					{/* Type and Rarity */}
					<div className="grid grid-cols-2 gap-4">
						<label className="block">
							<span className="mb-1.5 block text-sm text-slate-400">Type</span>
							<select className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white outline-none focus:border-blue-500">
								<option>Weapon (Mace)</option>
								<option>Armor</option>
								<option>Spell</option>
								<option>Item</option>
							</select>
						</label>
						<label className="block">
							<span className="mb-1.5 block text-sm text-slate-400">
								Rarity
							</span>
							<select className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white outline-none focus:border-blue-500">
								<option>Rare</option>
								<option>Common</option>
								<option>Uncommon</option>
								<option>Very Rare</option>
								<option>Legendary</option>
							</select>
						</label>
					</div>

					{/* Requires Attunement Toggle */}
					<div className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-700/30 px-4 py-3">
						<span className="text-sm text-slate-300">Requires Attunement</span>
						<button
							type="button"
							className="h-6 w-11 rounded-full bg-slate-600 p-0.5 transition-colors"
						>
							<div className="h-5 w-5 rounded-full bg-white shadow-sm transition-transform" />
						</button>
					</div>

					{/* Appearance Section */}
					<div className="pt-2">
						<h3 className="mb-4 font-modesto text-lg tracking-wide text-white">
							Appearance
						</h3>

						<div className="grid grid-cols-4 gap-4">
							{/* Front Accent */}
							<div>
								<span className="mb-1.5 block text-sm text-slate-400">
									Front Accent
								</span>
								<ColorPickerPlaceholder gradient="bg-gradient-to-br from-red-500 via-orange-400 to-amber-300" />
							</div>

							{/* Back Accent */}
							<div>
								<span className="mb-1.5 block text-sm text-slate-400">
									Back Accent
								</span>
								<ColorPickerPlaceholder gradient="bg-gradient-to-br from-teal-500 via-emerald-400 to-green-300" />
							</div>

							{/* Icon Browser */}
							<div>
								<span className="mb-1.5 block text-sm text-slate-400">
									Icon Browser
								</span>
								<div className="grid h-20 grid-cols-4 gap-1 rounded-lg border border-slate-600 bg-slate-700/50 p-2">
									{iconOptions.slice(0, 12).map((Icon, i) => (
										<button
											// biome-ignore lint/suspicious/noArrayIndexKey: static placeholder list
											key={i}
											type="button"
											className="flex items-center justify-center rounded text-slate-400 transition-colors hover:bg-slate-600 hover:text-white"
										>
											<Icon className="h-3.5 w-3.5" />
										</button>
									))}
								</div>
							</div>

							{/* Background Image */}
							<div>
								<span className="mb-1.5 block text-sm text-slate-400">
									Background Image
								</span>
								<div className="flex h-20 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-600 bg-slate-700/30 text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-300">
									<Image className="mb-1 h-5 w-5" />
									<span className="text-xs">Drag and drop</span>
									<span className="text-xs">Image</span>
								</div>
							</div>
						</div>
					</div>

					{/* Mechanics Section */}
					<div className="pt-2">
						<h3 className="mb-4 font-modesto text-lg tracking-wide text-white">
							Mechanics
						</h3>

						<div className="space-y-3">
							<MechanicRow type="Damage" value="1d6 Bludgeoning" />
							<MechanicRow type="Mastery" value="Sap" />

							{/* Rich Text Area */}
							<div className="mt-4">
								<div className="flex items-center gap-1 rounded-t-lg border border-b-0 border-slate-600 bg-slate-700/70 px-2 py-1.5">
									<button
										type="button"
										className="rounded p-1.5 text-slate-400 hover:bg-slate-600 hover:text-white"
									>
										<Bold className="h-4 w-4" />
									</button>
									<button
										type="button"
										className="rounded p-1.5 text-slate-400 hover:bg-slate-600 hover:text-white"
									>
										<Italic className="h-4 w-4" />
									</button>
									<button
										type="button"
										className="rounded p-1.5 text-slate-400 hover:bg-slate-600 hover:text-white"
									>
										<Underline className="h-4 w-4" />
									</button>
									<div className="mx-1 h-4 w-px bg-slate-600" />
									<button
										type="button"
										className="rounded p-1.5 text-slate-400 hover:bg-slate-600 hover:text-white"
									>
										<Link className="h-4 w-4" />
									</button>
									<button
										type="button"
										className="rounded p-1.5 text-slate-400 hover:bg-slate-600 hover:text-white"
									>
										<List className="h-4 w-4" />
									</button>
									<button
										type="button"
										className="rounded p-1.5 text-slate-400 hover:bg-slate-600 hover:text-white"
									>
										<ListOrdered className="h-4 w-4" />
									</button>
									<div className="mx-1 h-4 w-px bg-slate-600" />
									<button
										type="button"
										className="rounded p-1.5 text-slate-400 hover:bg-slate-600 hover:text-white"
									>
										<Image className="h-4 w-4" />
									</button>
								</div>
								<div
									contentEditable
									className="min-h-[120px] rounded-b-lg border border-slate-600 bg-slate-700/50 p-3 text-sm text-slate-300 outline-none focus:border-blue-500"
									suppressContentEditableWarning
								>
									This magic weapon has 3 charges, it x most of the terws and
									description ascerption of the box.{" "}
									<strong>DC 15 Wisdom saving throw</strong>. Its nqroh boks
									larwt at the snitos,{" "}
									<strong>DC 15 Wisdom saving throw</strong>, for{" "}
									<strong>DC 15 Wisdom saving throw</strong>.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="flex flex-shrink-0 items-center justify-between border-t border-slate-700/50 px-5 py-3">
				<span className="text-sm text-slate-400">
					Switch to Advanced Code View
				</span>
				<button
					type="button"
					className="h-6 w-11 rounded-full bg-blue-600 p-0.5 transition-colors"
				>
					<div className="ml-auto h-5 w-5 rounded-full bg-white shadow-sm transition-transform" />
				</button>
			</footer>
		</section>
	);
}
