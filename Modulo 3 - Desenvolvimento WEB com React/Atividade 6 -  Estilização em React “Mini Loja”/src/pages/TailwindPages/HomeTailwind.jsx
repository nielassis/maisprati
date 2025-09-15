import React, { startTransition, useEffect } from "react";
import ProductCardsTailwind from "../../components/TailwindComponents/ProductCardsTailwind";
import { getProductsByCategory } from "../../providers/api";

export default function HomeTailwind() {
  const [smartphoneProducts, setSmartphoneProducts] = React.useState([]);
  const [laptopProducts, setLaptopProducts] = React.useState([]);
  const [mobileProducts, setMobileProducts] = React.useState([]);

  useEffect(() => {
    startTransition(() => {
      getProductsByCategory("smartphones").then((smartphoneProducts) => {
        setSmartphoneProducts(smartphoneProducts);
      });
    });

    startTransition(() => {
      getProductsByCategory("laptops").then((laptopProducts) => {
        setLaptopProducts(laptopProducts);
      });
    });

    startTransition(() => {
      getProductsByCategory("mobile-accessories").then((mobileProducts) => {
        setMobileProducts(mobileProducts);
      });
    });
  }, []);

  return (
    <div className="flex flex-col p-6 w-full min-h-screen">
      <section id="smartphone-cards" className="flex-1">
        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-xl text-black font-bold mb-8">Smartphones</h3>
          <ProductCardsTailwind products={smartphoneProducts} />
        </div>
      </section>
      <section id="laptops-cards" className="flex-1">
        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-xl text-black font-bold mb-8">
            Laptops / Notebooks
          </h3>
          <ProductCardsTailwind products={laptopProducts} />
        </div>
      </section>
      <section id="mobile-accessories-cards" className="flex-1">
        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-xl text-black font-bold mb-8">
            Mobile Accessories
          </h3>
          <ProductCardsTailwind products={mobileProducts} />
        </div>
      </section>
    </div>
  );
}
