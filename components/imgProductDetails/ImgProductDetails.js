"use client"
import { useState } from "react";
import { RiCheckboxCircleFill, RiShieldCheckFill } from "react-icons/ri"
import FormOrder from "../Form/FormOrder";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; 


const ImgProductDetails = ({ product }) => {
	const { id, name, images, alt, description, price, discount } = product
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModalOrder = () => {
		document.getElementById("my_modal_3").close();
	};

	const handleImageClick = (index) => {
		setSelectedImageIndex(index);
	};
	const handleImageView = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handlePrevImage = () => {
		const prevIndex = (selectedImageIndex - 1 + images.length) % images.length;
		setSelectedImageIndex(prevIndex);
	};

	const handleNextImage = () => {
		const nextIndex = (selectedImageIndex + 1) % images.length;
		setSelectedImageIndex(nextIndex);
	};

	return (
		<div className="bg-white p-6 rounded-lg border border-gray-300 flex sd:flex-row xz:flex-col gap-6">
			<div>
				<div className="sd:w-[32rem] xz:w-auto overflow-hidden rounded-lg border border-gray-300">
					<div className="max-w-full"
						onClick={handleImageView}
					>
						<img src={images[selectedImageIndex]} alt={alt} className="w-full h-full object-cover" />
					</div>
				</div>
				<div className="flex items-center gap-3 mt-6 overflow-x-auto">
					{images.map((img, idx) => (
						<div
							key={idx}
							className="w-20 h-16 rounded border border-gray-300 overflow-hidden cursor-pointer"
							onClick={() => handleImageClick(idx)}
						>
							<img src={img} alt={name} className="w-full h-full object-cover" />
						</div>
					))}
				</div>
			</div>

			<div className="flex-1">
				<h2 className="font-medium sd:text-3xl xz:text-2xl mb-6">{name}</h2>

				<div className="pt-1 flex items-center gap-3">
					{
						price ?
							<strong className="text-2xl font-medium text-gray-800">{price} руб</strong>
							:
							<div className="badge badge-accent badge-outline pl-1.5 mt-3">
								Уточняйте цену
							</div>
					}
				</div>
				<div className="flex items-center gap-2 mt-4">
					<div className="rating rating-sm disabled">
						{[1, 2, 3, 4, 5].map((rating) => (
							<input
								key={rating}
								type="radio"
								className={`mask mask-star-2 ${Math.floor(rating) >= rating ? "bg-orange-400" : "bg-gray-300"
									}`}
							/>
						))}
					</div>

					<span className="text-green-500 ml-2 sd:text-base xz:text-xs">Бесплатная доставка</span>

				</div>
				<div className="badge badge-lg bg-emerald-600 text-white gap-2 pl-1.5 mt-3">
					<RiCheckboxCircleFill fontSize={18} /> Рекомендуем
				</div>
				<div className="py-4 max-w-lg">
					<ul className='text-sm'>
						{
							description.map((el, idx) => {
								return (
									<li className='' key={idx}>
										{el}
									</li>
								)
							})
						}
					</ul>
				</div>

				<FormOrder product={name} />

				<div className="pt-4 flex items-center gap-3 text-sm text-gray-500">
					<RiShieldCheckFill fontSize={22} />
					Быстрая доставка. Гарантия.
				</div>
			</div>


			{isModalOpen && (
				<div className="fixed inset-0 z-10 flex items-center justify-center">
					<div className="fixed inset-0 bg-black opacity-50"></div>
					<div className="relative bg-white p-8 rounded-lg max-w-2xl w-full">
						<img
							src={images[selectedImageIndex]}
							alt={name}
							className="w-full h-full object-cover rounded-lg"
						/>
						<div className="absolute top-1/2 -translate-x-1/2 left-6 cursor-pointer" onClick={handlePrevImage}>
							<BsChevronLeft className="text-3xl text-gray-700 hover:text-gray-900" />
						</div>
						<div className="absolute top-1/2 -translate-x-1/2 right-2 cursor-pointer" onClick={handleNextImage}>
							<BsChevronRight className="text-3xl text-gray-700 hover:text-gray-900" />
						</div>
						<div className="absolute top-4 right-12 cursor-pointer" onClick={closeModal}>
							<span className="text-3xl font-bold">✕</span>
						</div>
					</div>
				</div>
			)}

			
		</div>
	)
}

export default ImgProductDetails;