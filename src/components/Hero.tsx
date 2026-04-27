import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/b8f401e5-8ff9-4552-aef8-b88999f27040/files/64571da2-2f25-450f-af43-36663de5dd60.jpg"
          alt="Арбузное поле"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80">Свежая доставка с поля</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          СОЧНЫЕ<br/>АРБУЗЫ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-8">
          Отборные арбузы прямо с бахчи — спелые, сладкие и доставленные к вашей двери
        </p>
        <button className="bg-white text-green-900 px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-green-100 transition-colors duration-300 cursor-pointer">
          Заказать арбуз
        </button>
      </div>
    </div>
  );
}