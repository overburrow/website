const nodes = [
	{
		name: "burrow-1",
		stats: [
			{ label: "cpu", value: 0.3 },
			{ label: "ram", value: 0.5 },
			{ label: "disk", value: 0.05 },
		],
	},
	{
		name: "burrow-2",
		stats: [
			{ label: "cpu", value: 0.5 },
			{ label: "ram", value: 0.4 },
			{ label: "disk", value: 0.1 },
		],
	},
	{
		name: "burrow-3",
		stats: [
			{ label: "cpu", value: 0.2 },
			{ label: "ram", value: 0.3 },
			{ label: "disk", value: 0.2 },
		],
	},
];

const StatsPage = () => {
	return (
		<main className="relative grid grid-cols-2 justify-center *:not-last:border-r-1">
			{nodes.map((node) => (
				<div key={node.name} className="p-4">
					<p className="text-muted-foreground mb-2">{node.name}</p>
					{node.stats.map((stat) => (
						<div key={stat.label} className="flex gap-4 items-center">
							<span className="basis-1/2">{stat.label}</span>
							<div className="basis-1/2 bg-muted h-2">
								<div
									style={{ width: `${stat.value * 100}%` }}
									className="bg-foreground h-full"
								/>
							</div>
						</div>
					))}
				</div>
			))}
		</main>
	);
};

export default StatsPage;
