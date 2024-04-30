const Dostavka = () => {
	return (
		<section className="mb-16" id="dostavka">
			<div className='container mx-auto'>
				<div className='border-b-4 border-orange-600 pb-4'>
					<h4 className='text-4xl'>
						Доставка
					</h4>
				</div>

				<div className='mt-10'>
					<h5 className='text-orange-600 font-semibold text-2xl'>
						Осуществляем доставку по Беларуси
					</h5>

					<p className='mt-5'>
						Мы осуществляем бесплатную доставку в любой город или деревню Беларуси. Доставка до подъезда клиента производится на следующий день после оформления заказа, при условии наличия товара на складе.
					</p>

					<ul className='mt-4 sd:pl-5 xz:pl-1'>
						<li className='mb-2'>
							<p className="font-semibold">
								Дополнительная информация:
							</p>
							<div className='sd:pl-5 xz:pl-3'>
								<p className=''>
									• Средний срок доставки по г. Минску – 1 день.
								</p>
								<p className=''>
									• Средний срок доставки за черту г. Минска – 3 дня.
								</p>
								<p className='mt-2'>
									Не стесняйтесь обращаться к нашим специалистам для уточнения всех деталей. Мы готовы помочь вам сделать правильный выбор и предоставить наилучший сервис доставки.
								</p>
							</div>
						</li>

						<li className='mb-2'>
							<p className="font-semibold">
								Условия доставки:
							</p>
							<div className='sd:pl-5 xz:pl-3'>
								<p className='mt-2'>
									Пожалуйста, обращайтесь к нашим менеджерам для уточнения условий доставки. Мы готовы предложить вам индивидуальный подход, который может отличаться от стандартных условий.
								</p>
							</div>
						</li>

						<li className='mb-2'>
							<p className="font-semibold">
								Самовывоз:
							</p>
							<div className='sd:pl-5 xz:pl-3'>
								<p className='mt-2'>
									Если вы предпочитаете забрать товар самостоятельно, мы рады предложить вам эту возможность. Наши магазины открыты для вас в удобное время:
								</p>
								<p className=''>
									• Работаем без выходных с 10:00 до 20:00.
								</p>
							</div>
						</li>

						<li className='mb-2'>
							<p className="font-semibold">
								Проверка товара:
							</p>
							<div className='sd:pl-5 xz:pl-3'>
								<p className='mt-2'>
									Мы призываем вас внимательно проверить товар при получении. Убедитесь, что вы получили нужную вам модель и проверьте комплектацию перед подписанием гарантийного талона.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Dostavka