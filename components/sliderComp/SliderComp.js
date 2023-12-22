"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-10 mx-7 '>
			<div className='container mx-auto'>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>

					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Драгун Павел
								</p>
								<div className="rating">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Безгранично доволен своим приобретением – мотоблоком от KORONA! Отличная производительность и надежность в работе делают его идеальным помощником на моем фермерском участке. Это действительно качественное оборудование, которое справляется с любыми задачами!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Карачун Сергей
								</p>
								<div className="rating">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Благодаря снегоуборщику KORONA, моя зима стала гораздо легче! Мощность и эффективность этого устройства просто поражают. Теперь я с удовольствием освобождаю свой двор от снега, зная, что задача будет выполнена быстро и без лишних усилий.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Сущиц Анатолий
								</p>
								<div className="rating">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я полностью удовлетворен своим приобретением генератора от KORONA. Он обеспечивает стабильное и надежное электроснабжение, что является ключевым фактором для эффективной работы моего дачного участка. Отличное качество и простота в использовании делают этот генератор отличным выбором для любого пользователя
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Ломач Станислав
								</p>
								<div className="rating">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Я купил технику от KORONA, и я полностью доволен! Прекрасное обслуживание со стороны компании сделало мой опыт покупки еще более приятным. Спасибо за отличное качество и внимание к клиентам!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента купившего у нас технику' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Хомич Андрей
								</p>
								<div className="rating">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Благодаря KORONA, мой новый мотоблок превзошел все ожидания! Прекрасное обслуживание компании и их профессиональный подход сделали покупку легкой и приятной. Рад, что выбрал их продукцию для своего дачного хозяйства!
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp