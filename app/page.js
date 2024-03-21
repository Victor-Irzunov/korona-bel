import FormOrder from "@/components/Form/FormOrder";
import BtnComp from "@/components/btn/BtnComp";
import Catalog from "@/components/catalog/Catalog";
import Garantiya from "@/components/garantiya/Garantiya";
import ObratnyjZvonok from "@/components/obratnyjZvonok/ObratnyjZvonok";
import SliderComp from "@/components/sliderComp/SliderComp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="" id='main'>
      <section className="hero min-h-[80vh]" style={{ backgroundImage: 'url("/fon.webp")' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="sd:max-w-lg">
            <h1 className="mb-5 text-white sd:text-5xl xz:text-3xl font-bold">Официальный представитель мотоблоков, снегоуборщиков и генераторов KORONA</h1>
            <p className="mb-5">
              Мы предлагаем высококачественные мотоблоки, снегоуборщики и генераторы от ведущего производителя KORONA, а также запасные части к данной технике.
              Наши продукты отличаются надежностью и производительностью, гарантируя вам эффективное решение для различных задач.
            </p>
            <BtnComp />
          </div>

        </div>
      </section>

      <div className='container mx-auto'>

        <section className='bg-[#272727] rounded-tr-2xl rounded-sm flex sd:justify-between xz:justify-center sd:flex-row xz:flex-col sd:p-10 xz:p-5 mt-16'>
          <div className='sd:mb-0 xz:mb-7 mx-auto w-auto sd:hidden xz:block'>
            <Image src='/img.webp' alt='Продажа техники' width={320} height={320} className="rounded-tr-xl rounded-bl-xl" />
          </div>

          <div className=''>
            <p className='text-[#FF6736] sd:text-3xl xz:text-xl font-bold'>
              Вы сделали правильный выбор в пользу компании, которой доверяют
            </p>

            <div className='mt-7 text-white'>
              <p className='sd:text-base xz:text-sm'>
                KORONA – производство снегоуборщиков, мотоблоков и генераторов. Также подходит для небольших дачных участков и средних фермерских хозяйств для вспашки земли, нарезки борозд, посадки, окучивания, сбора картошки, покоса травы, уборки снега и транспортировки грузов.
              </p>

            </div>
          </div>
          <div className='w-auto xz:hidden sd:block rounded-tr-xl rounded-bl-xl ml-4'>
            <Image src='/img.webp'
              alt='Продажа техники' width={1409} height={800}
              className="rounded-tr-xl rounded-bl-xl"
            />
          </div>
        </section>


        <SliderComp />

      </div>

      {/* <div className='bg-gradient-to-r from-orange-600 to-orange-400 py-10 relative'>
        <p className='text-center text-white uppercase text-4xl font-extrabold sd:w-[30%] xz:w-full mx-auto xz:px-5 sd:px-0 shadow-text'>
          Получи 2 подарка при покупке мотоблока
        </p>

        <Image src='/gift.webp'
          alt='Получи 2 подарка' width={130} height={130}
          className="absolute top-1/2 left-16 -translate-y-1/2 sd:block xz:hidden"
        />
        <Image src='/gift.webp'
          alt='Получи 2 подарка' width={130} height={130}
          className="absolute top-1/2 right-16 -translate-y-1/2 sd:block xz:hidden"
        />
      </div> */}


      <Catalog />

      <Garantiya />

      <ObratnyjZvonok />



      <dialog id="my_modal_1" className="modal">
        <div className="modal-box overflow-x-hidden">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Заказать звонок</h3>
          <p className="py-4 text-sm text-gray-400">Пожалуйста введите свой номер телефона и мы вам перезвоним в ближайшее время</p>

          <div className="modal-action">
            <FormOrder zvonok />
          </div>
        </div>
      </dialog>

    </main>
  )
}
