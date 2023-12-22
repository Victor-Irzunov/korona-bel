"use client"

const BtnComp = () => {
	return (
		<button
			className="btn bg-orange-500 border-orange-500 text-white mt-5"
			onClick={() => document.getElementById('my_modal_1').showModal()}
		>
			Заказать звонок
		</button>
	)
}

export default BtnComp