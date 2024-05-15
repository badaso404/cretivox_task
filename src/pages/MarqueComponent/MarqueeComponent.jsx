import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '/MarqueeComponent.css';

gsap.registerPlugin(ScrollTrigger);

const MarqueeComponent = () => {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let tl = gsap.timeline();
    let items = itemsRef.current;
    let tlLength = items.length * 2;

    tl.to(contentRef.current, {
      xPercent: -100,
      duration: tlLength,
      repeat: -1,
      ease: 'none'
    });

    let currentScale = 1;
    let scaleTl;

    ScrollTrigger.create({
      markers: true,
      trigger: marqueeRef.current,
      onUpdate: (self) => {
        if (self.direction === 1) {
          let tScale = self.getVelocity() / 200;
          if (tScale > currentScale) {
            currentScale = tScale;
            if (scaleTl) scaleTl.kill();
            scaleTl = gsap.timeline({
              defaults: {
                ease: 'power2.out'
              },
              onComplete: () => {
                currentScale = 1;
                if (scaleTl) scaleTl.kill();
              }
            })
            .to(tl, {
              duration: 0.2,
              timeScale: tScale,
              ease: 'power2.out'
            })
            .to(
              tl,
              {
                timeScale: 1,
                duration: 1,
                ease: 'none'
              },
              '+=1'
            );
          }
        }
      }
    });

    return () => {
      if (tl) tl.kill();
      if (scaleTl) scaleTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="marquee" ref={marqueeRef}>
      <div className="marquee__content" ref={contentRef}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="marquee__item"
            key={index}
            ref={el => (itemsRef.current[index] = el)}>
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeComponent;
