'use client';

import { useEffect, useRef } from 'react';
import {
    motion as Motion,
    MotionConfig,
    useInView,
    useReducedMotion,
} from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import './CTA.css';

const ease = [0.16, 1, 0.3, 1];
const headline = ['Take The Easy Route.', 'Grow With Outreach!'];

const CTA = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.25, once: true });
    const isActive = useInView(ref, { amount: 0.05 });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!isActive || reduceMotion) return;

        let cancelled = false;
        const animations = new Set();
        const random = (min, max) => min + Math.random() * (max - min);
        const beams = ref.current.querySelectorAll('.outreach-cta__beam');

        // Each pass gets a fresh angle, speed, width, brightness, and pause.
        // Native animations update transforms without React rendering each frame.
        const runBeam = async (beam, index) => {
            const light = beam.firstElementChild;
            let firstPass = true;
            while (!cancelled) {
                beam.style.setProperty('--beam-angle', `${random(-180, 180)}deg`);
                const width = random(0.45, 0.9);
                const brightness = random(0.45, 0.85);
                const animation = light.animate([
                    { transform: `translate3d(-65%, 0, 0) scaleX(${width})`, opacity: 0, offset: 0 },
                    { transform: `translate3d(-24%, 0, 0) scaleX(${width})`, opacity: brightness * 0.65, offset: 0.3 },
                    { transform: `translate3d(8%, 0, 0) scaleX(${width})`, opacity: brightness, offset: 0.55 },
                    { transform: `translate3d(65%, 0, 0) scaleX(${width})`, opacity: 0, offset: 1 },
                ], {
                    duration: random(11000, 14500),
                    delay: firstPass ? index * 2200 + random(0, 1000) : random(10000, 14000),
                    easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
                });
                firstPass = false;
                animations.add(animation);
                try {
                    await animation.finished;
                } catch {
                    // Cancellation is expected when leaving view or unmounting.
                    return;
                } finally {
                    animations.delete(animation);
                }
            }
        };

        beams.forEach((beam, index) => { void runBeam(beam, index); });
        return () => {
            cancelled = true;
            animations.forEach((animation) => animation.cancel());
        };
    }, [isActive, reduceMotion]);
    return (
        <MotionConfig reducedMotion={reduceMotion ? 'always' : 'never'}>
            <Motion.div
                ref={ref}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.85, ease }}
                className={`outreach-cta ${isActive ? 'outreach-cta--active' : ''}`}
            >
                <div className="outreach-cta__scene" aria-hidden="true">
                    <div className="outreach-cta__ambient outreach-cta__ambient--gold" />
                    <div className="outreach-cta__ambient outreach-cta__ambient--pearl" />
                    <div className="outreach-cta__ambient outreach-cta__ambient--wash" />
                    {Array.from({ length: 5 }, (_, index) => (
                        <div className="outreach-cta__beam" key={index}>
                            <div className="outreach-cta__beam-light" />
                        </div>
                    ))}
                </div>

                <div className="outreach-cta__content">
                    <h2 className="outreach-cta__heading" aria-label={headline.join(' ')}>
                        {headline.map((line, lineIndex) => (
                            <span
                                key={line}
                                aria-hidden="true"
                                className={`outreach-cta__line ${lineIndex === 1 ? 'outreach-cta__line--gold' : ''}`}
                            >
                                {line.split(' ').map((word, wordIndex) => (
                                    <span className="outreach-cta__word-mask" key={word}>
                                        <Motion.span
                                            className="outreach-cta__word"
                                            initial={reduceMotion ? false : { y: '110%', rotate: 3, opacity: 0 }}
                                            animate={isInView ? { y: '0%', rotate: 0, opacity: 1 } : undefined}
                                            transition={{
                                                duration: 0.9,
                                                delay: 0.15 + lineIndex * 0.26 + wordIndex * 0.065,
                                                ease,
                                            }}
                                        >
                                            {word}
                                        </Motion.span>
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h2>

                    <Motion.div
                        className="outreach-cta__action"
                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : undefined}
                        transition={{ duration: 0.75, delay: 0.7, ease }}
                    >
                        <AnimatedButton text="Start Free Campaign" href="#" variant="default" />
                    </Motion.div>
                </div>
            </Motion.div>
        </MotionConfig>
    );
};

export default CTA;
