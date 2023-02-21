import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../../data/products.json";
import useSetState from "../../../../hooks/useSetState";
import ProductDescription from "./description";
import BannerImage from "./image";
import { Container } from "./styled";

export default function Banner() {
  const [newProducts] = useSetState(data[0].products);
  return (
    <header>
      <Swiper
        pagination={false}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="mySwiper"
      >
        {newProducts.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Container>
                <ProductDescription
                  name={product.name}
                  description={product.description}
                />
                <BannerImage imgURL={product.img} />
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
}
