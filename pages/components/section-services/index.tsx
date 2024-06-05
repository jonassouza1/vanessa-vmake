import { useState, useEffect } from "react";
import styles from "styles/sections/SectionServices.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionServices = () => {
  const images = [
    { id: "1", image: "/client1.jpg" },
    { id: "2", image: "/client2.jpg" },
    { id: "3", image: "/client3.jpg" },
    { id: "4", image: "/client4.jpg" },
    { id: "5", image: "/client5.jpg" },
    { id: "6", image: "/client6.jpg" },
    { id: "7", image: "/client7.jpg" },
    { id: "8", image: "/client8.jpg" },
    { id: "9", image: "/client9.jpg" },
    { id: "10", image: "/client10.jpg" },
  ];

  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1330) {
        setCount(4);

        if (window.innerWidth < 1120) {
          setCount(3);
        }
        if (window.innerWidth < 820) {
          setCount(2);
        }
        if (window.innerWidth < 520) {
          setCount(1);
        }
      } else {
        setCount(5);
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
      <div className={styles.gradient1}></div>
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
