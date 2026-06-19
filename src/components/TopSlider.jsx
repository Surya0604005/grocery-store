import { useEffect, useState } from "react";

function TopSlider() {
  const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="top-slider">
      <img src={images[current]} alt="banner" />
    </section>
  );
}

export default TopSlider;
