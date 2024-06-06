import { useState, useEffect } from "react";
import styles from "styles/sections/SectionCertificate.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionCertificate = () => {
  const images = [
    { id: "1", image: "/certificate1.jpg" },
    { id: "2", image: "/certificate2.jpg" },
    { id: "3", image: "/certificate3.jpg" },
    { id: "4", image: "/certificate4.jpg" },
    { id: "5", image: "/certificate5.jpg" },
    { id: "6", image: "/certificate6.jpg" },
    { id: "7", image: "/certificate7.jpg" },
  ];

  const [count, setCount] = useState<number>(4);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1100) {
        setCount(3);
        if (window.innerWidth < 730) {
          setCount(2);
        }

        if (window.innerWidth < 520) {
          setCount(1);
        }
      } else {
        setCount(4);
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
export default SectionCertificate;
