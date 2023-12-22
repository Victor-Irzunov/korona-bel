const RunningText = () => {
	return (
		<div className="overflow-hidden relative w-full bg-[#f97d36]">
			<div className="inline-block whitespace-nowrap animate-marquee">
				<div className="text-white font-extrabold">
					<span className="sd:mx-24 xz:mx-6">KORONA</span>
					<span className="sd:mx-24 xz:mx-6">Мотоблоки</span>
					<span className="sd:mx-24 xz:mx-6">KORONA</span>
					<span className="sd:mx-24 xz:mx-6">Снегоуборщики</span>
					<span className="sd:mx-24 xz:mx-6">KORONA</span>
					<span className="sd:mx-24 xz:mx-6">Генераторы</span>
				</div>
			</div>
		</div>
	);
};

export default RunningText;