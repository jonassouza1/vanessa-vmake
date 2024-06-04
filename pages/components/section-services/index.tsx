import { useState, useEffect } from "react";
import styles from "styles/sections/SectionServices.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionServices = () => {
  const images = [
    { id: "1", image: "/client1.jpg" },
    { id: "2", image: "/client2.jpg" },
    { id: "3", image: "/client3.jpg" },
  ];

  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 700) {
        setCount(2);

        if (window.innerWidth < 530) {
          setCount(1);
        }
      } else {
        setCount(3);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="SectionServices" className={styles.section}>
      <div className={styles.divTitle}>
        {" "}
        <h2>Serviços</h2>
      </div>
      <div className={styles.carousel}>
        <Swiper
          slidesPerView={count}
          pagination={{ clickable: true }}
          navigation
        >
          {images.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.image} alt="cliente" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
};
export default SectionServices;
