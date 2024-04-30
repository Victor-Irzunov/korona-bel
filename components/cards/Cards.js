const data = [
	{
		imgSrc: "/cards/bel-magnit.webp",
		altText: "Карта рассрочки Беларусь банка Магнит",
		title: "Карта Магнит",
		bank: "Беларусбанк (Магнит старый/новый)",
		duration: "3 / 6 месяцев"
	},
	{
		imgSrc: "/cards/card-belgaz-pokup.webp",
		altText: "Карта рассрочки БелгазпромБанка Карта Покупок",
		title: "Карта Покупок",
		bank: "БелгазпромБанка",
		duration: "4 месяца"
	},
	{
		imgSrc: "/cards/fun.webp",
		altText: "Карта рассрочки БПС-Сбербанк FUN",
		title: "Карта FUN",
		bank: "БПС-Сбербанк",
		duration: "6 / 7 месяцев"
	},
	{
		imgSrc: "/cards/4repaha.webp",
		altText: "Карта рассрочки ВТБ Черепаха",
		title: "Карта Черепаха",
		bank: "ВТБ",
		duration: "8 месяцев"
	},
	{
		imgSrc: "/cards/halva.webp",
		altText: "Карта рассрочки МТБанк Халва",
		title: "Карта Халва",
		bank: "МТБанк",
		duration: "2/2 + 2 месяца"
	},
	{
		imgSrc: "/cards/prior.webp",
		altText: "Карта рассрочки ПриорБанка",
		title: "Карта ПриорБанка",
		bank: "ПриорБанк",
		duration: "6 месяца"
	},
];

const Cards = () => {
	return (
		<section className='sd:py-12 xz:py-5 sd:mb-10 xz:mt-0 mb-8'>
			<div className='container mx-auto'>
				<div className='border-b-4 border-orange-600 pb-4'>
					<h4 className='text-4xl'>
						Рассрочка
					</h4>
				</div>

				<div className='mt-6'>
					<h5 className='text-orange-600 font-semibold text-2xl'>
						 Мы предоставляем рассрочку следующих банков:
					</h5>
				</div>
				<div className='grid sd:grid-cols-3 xz:grid-cols-2 gap-4 sd:mt-8 xz:mt-4 justify-center'>
					{data.map((item, index) => (
						<div key={index} className="card sd:w-96 xz:w-40 xy:w-48 xm:w-72 bg-base-100 shadow-xl mx-auto">
							<figure className="sd:px-10 sd:pt-10 xz:px-2 xz:pt-6">
								<img src={item.imgSrc} alt={item.altText} className="rounded-xl" />
							</figure>
							<div className="card-body items-center text-center sd:px-6 xz:px-2">
								<h5 className="card-title sd:text-xl xz:text-base">
									{item.title}
								</h5>
								<p className="sd:text-base xz:text-xs xy:text-sm">
									{item.bank}
								</p>
								<p>
									{item.duration}
								</p>
								<div className="card-actions">
									{/* <button className="btn btn-primary">
							
						 </button> */}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Cards;
