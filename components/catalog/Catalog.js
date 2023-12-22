"use client"
import React, { useState } from "react";
import ImgProductDetails from "../imgProductDetails/ImgProductDetails";
import { product } from "@/constans/Products";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="mt-28" id="product">
      <div className="text-center">
        <h2 className="text-5xl uppercase font-semibold">Каталог</h2>
      </div>
      <div className="flex justify-center mt-5 flex-wrap">
        <button
          onClick={() => handleCategoryClick("Все")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Все" ? "border-b-2 border-orange-500" : ""
          }`}
        >
          Все
        </button>
        <button
          onClick={() => handleCategoryClick("Мотоблоки")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Мотоблоки"
              ? "border-b-2 border-orange-500"
              : ""
          }`}
        >
          Мотоблоки
        </button>
        <button
          onClick={() => handleCategoryClick("Снегоуборщики")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Снегоуборщики"
              ? "border-b-2 border-orange-500"
              : ""
          }`}
        >
          Снегоуборщики
        </button>
        <button
          onClick={() => handleCategoryClick("Генераторы")}
          className={`mr-4 mb-4 ${
            selectedCategory === "Генераторы"
              ? "border-b-2 border-orange-500"
              : ""
          }`}
        >
          Генераторы
        </button>
      </div>
      {product.map((el) => {
        if (selectedCategory === "Все" || el.group === selectedCategory) {
          return (
            <div className="mt-20" key={el.id}>
              <h2 className="text-center text-4xl">{el.group}</h2>
              {el.box.map((item) => (
                <div
                  className="mt-12 mb-16 bg-slate-200 py-3"
                  key={`${el.id}-${item.title}`}
                >
                  <h3 className="text-orange-500 text-center text-2xl font-semibold mb-7">
                    {item.title}
                  </h3>
                  <div className="container mx-auto">
                    {item.children.map((elem) => (
                      <div className="mb-16" key={elem.id}>
                        <ImgProductDetails product={elem} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </section>
  );
};

export default Catalog;
