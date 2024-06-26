import { useState, useEffect } from "react";
import styles from "styles/sections/SectionDepoiments.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionDepoiments = () => {
  const images = [
    { id: "1", image: "/depoiment1.jpg" },
    { id: "2", image: "/depoiment2.jpg" },
  ];

  const [count, setCount] = useState<number>(2);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 430) {
        setCount(1);
      } else {
        setCount(2);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="SectionDepoiments" className={styles.section}>
      <div className={styles.gradient}></div>
      <div className={styles.divTitle}>
        {" "}
        <h2>DEPOIMENTOS</h2>
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
    </section>
  );
};
export default SectionDepoiments;
