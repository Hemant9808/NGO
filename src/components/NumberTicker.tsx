import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";


function cn(...classNames:any) {
    return classNames.filter(Boolean).join(' ');
  }
 

export default function NumberTicker({
  value = 0,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in seconds
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

//   useEffect(() => {
//     if (value === 0) {
//       // Directly update the content when value is 0
//       if (ref.current) {
//         ref.current.textContent = "0";
//       }
//     } else if (isInView) {
//       setTimeout(() => {
//         motionValue.set(direction === "down" ? 0 : value);
//       }, delay * 1000);
//     }
//   }, [motionValue, isInView, delay, value, direction]);



useEffect(() => {
    if (value >= 1 && value <= 5 && isInView) {
      // Animate from 1 to 1000, then back to the original value
      motionValue.set(1); // Start from 1
      setTimeout(() => {
        motionValue.set(1000); 
        springValue.set(value);
        // Animate to 1000
        //  setTimeout(() => {
        // springValue.set(value);// Finally animate to the original value
        // }, 100); // Adjust timing as needed
      }, delay * 1000);
       
    } else if (value === 0) {
      // Directly update the content when value is 0
      if (ref.current) {
        ref.current.textContent = "0";
      }
    } else if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }

  }, [motionValue, isInView, delay, value, direction]);


  useEffect(
    () =>
      springValue.on("change", (latest: any) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return (
    <span
      className={cn(
        "inline-block text-zinc-550 tracking-wider",
        className
      )}
      ref={ref}
    />
  );
}