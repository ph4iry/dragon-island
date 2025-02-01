import clsx from "clsx";
import { motion } from "motion/react";
import { MouseEventHandler, ReactNode, useRef } from "react";

export default function FloatingCard({ children, className, sizing }: { children: ReactNode, className?: string, sizing?: string }) {
  let bounds: DOMRect;
  const inputRef = useRef<HTMLDivElement>(null!);

  const rotateToMouse: MouseEventHandler<HTMLDivElement> = (e) => {
    if (innerWidth < 768) return;
    bounds = inputRef.current?.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
  };
  const removeListener: MouseEventHandler<HTMLDivElement> = () => {
    inputRef.current.style.transform = '';
  };

  return (
    <div
    style={{ perspective: '1500px' }}
    className={clsx(sizing || "size-full")}
  >
    <motion.div
      ref={inputRef}
      onMouseLeave={removeListener}
      onMouseMove={rotateToMouse}
      className={clsx('bg-[#FEF7EE] transition-all p-6', className)}
    >
      {children}
    </motion.div>
  </div>
  )
}