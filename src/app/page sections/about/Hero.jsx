'use client'
import React, { useRef } from "react"
// library
import { useScroll, useTransform, motion } from "framer-motion"

const Hero = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const position = useTransform(scrollYProgress, pos =>
        pos >= 1 ? "relative" : "fixed"
    )

    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef}
            className="relative mb-[4rem] h-screen py-10 text-black"
        >
            <motion.div
                style={{ position, scale, x: "-50%" }}
                className="fixed pt-40 left-1/2"
            >
                <h3 className="capitalize font-semibold text-3xl text-center">
                    Welcome to Kingship Technologies, your premier destination for cutting-edge cybersecurity training
                </h3>
            </motion.div>
        </motion.section>
    )
}

export default Hero;