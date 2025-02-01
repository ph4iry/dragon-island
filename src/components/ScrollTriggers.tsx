import { motion } from 'framer-motion-3d';
import { ReactNode, useContext } from 'react';
import { ScrollContext } from '@/Contexts';

export function ScrollTriggeredIsland({ children, start, end }: { children: ReactNode, start: number, end: number }) {
  const scrollProgress = useContext(ScrollContext)
  // clamp animation to start and end so it doesnt animate unless its after start or before end; zoom in and pull to the right
  // map progress to rotation between 0 and 45 degrees
  // translate towards the camera and pull up to the right

  // animate so that the island reverses after the end point from context = 0.8 to context = 1
  const animation = () => {
    if (start < scrollProgress && scrollProgress < 0.8) {
      return {
        rotateY: Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * Math.PI / 4,
        z: -(Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * 1500),
        y: (Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * 500),
      }
    } else if (scrollProgress > 0.8) {
      return {
        rotateY: (Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * Math.PI / 4) * (1 - scrollProgress),
        z: (-(Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * 1500)) * (1 - scrollProgress),
        y: ((Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * 500)) * (1 - scrollProgress),
      }
    }
  }
  return (
    <motion.group
    animate={animation()}
    >
      {children}
    </motion.group>
  )
}

export function ScrollTriggeredSatScore({ children, start, end }: { children: ReactNode, start: number, end: number }) {
  const scrollProgress = useContext(ScrollContext)

  return (
    <motion.group
      animate={{
        // rotateY: Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * Math.PI * 3,
        x: -(Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * (innerWidth * 5)),
        y: (Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * 2000),
        z: (Math.min(Math.max((scrollProgress - start) / (end - start), 0), 1) * 3000),
      }}
    >
      {children}
    </motion.group>
  )
}