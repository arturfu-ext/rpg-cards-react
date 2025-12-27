export function LivePreviewPanel() {
	return (
		<section className="hidden flex-col rounded-2xl border border-slate-700/50 bg-slate-800/90 shadow-xl backdrop-blur-sm lg:flex">
			{/* Header */}
			<header className="flex-shrink-0 border-b border-slate-700/50 px-4 py-4">
				<h2 className="font-modesto text-xl tracking-wide text-white">
					Live Preview
				</h2>
			</header>

			{/* Preview Area */}
			<div className="relative flex-1 overflow-hidden">
				{/* Background with blur effect */}
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: "url('/live-preview-bg.jpeg')",
						filter: "blur(8px) brightness(0.4)",
						transform: "scale(1.1)",
					}}
				/>

				{/* Cards Container */}
				<div className="relative flex h-full items-center justify-center gap-6 p-6">
					{/* Front Card */}
					<div className="flex h-[420px] w-[300px] flex-col rounded-xl border border-amber-900/50 bg-gradient-to-b from-amber-50 to-amber-100 shadow-2xl">
						{/* Card Header */}
						<div className="rounded-t-xl bg-gradient-to-r from-amber-800 to-amber-700 px-3 py-2">
							<div className="flex items-center justify-between">
								<span className="font-modesto text-sm tracking-wide text-amber-100">
									Mace of Terror
								</span>
								<div className="flex gap-1">
									<span className="text-xs text-amber-200">J</span>
									<span className="text-xs text-amber-200">+</span>
								</div>
							</div>
						</div>

						{/* Card Image Area */}
						<div className="mx-3 mt-3 h-40 rounded-lg bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700">
							<div className="flex h-full items-center justify-center">
								<div className="text-6xl opacity-50">🔨</div>
							</div>
						</div>

						{/* Card Type */}
						<div className="mx-3 mt-2 rounded bg-amber-700 px-2 py-0.5 text-center">
							<span className="text-xs text-amber-100">Sorcery</span>
						</div>

						{/* Card Content */}
						<div className="flex-1 p-3">
							<div className="mb-2 border-b border-amber-300 pb-1">
								<span className="text-xs font-bold text-amber-900">
									Charges
								</span>
							</div>
							<p className="text-xs leading-relaxed text-amber-900">
								This magic weapon has 3 charges, to a asos or the mins tes
								ontocrst of that ascerption or saving less. DC 15 Wisdom saving
								throw with at DC 15 Wisdom saving throw.
							</p>
						</div>

						{/* Card Footer */}
						<div className="flex items-center justify-between border-t border-amber-300 px-3 py-2">
							<div className="flex gap-1">
								<div className="h-4 w-4 rounded bg-amber-600" />
								<div className="h-4 w-4 rounded bg-amber-600" />
							</div>
							<span className="text-[8px] text-amber-600">M. CLAUD DESIGN</span>
						</div>
					</div>

					{/* Back Card */}
					<div className="flex h-[420px] w-[300px] flex-col items-center justify-center rounded-xl border border-amber-900/50 bg-gradient-to-b from-amber-800 to-amber-900 shadow-2xl">
						{/* Decorative Pattern */}
						<div className="relative">
							<div className="h-64 w-48 rounded-lg border-4 border-amber-600/50 bg-gradient-to-br from-amber-700 to-amber-800">
								<div className="flex h-full items-center justify-center">
									<div className="text-8xl opacity-30">⚔️</div>
								</div>
							</div>
							{/* Corner decorations */}
							<div className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-amber-500" />
							<div className="absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-amber-500" />
							<div className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-amber-500" />
							<div className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-amber-500" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
