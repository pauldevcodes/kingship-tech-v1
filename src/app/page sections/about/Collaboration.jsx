'use client'
import { useRef } from "react"
import Image from "next/image"
import { useTransform, useScroll, motion } from "framer-motion"
import smaple from '../../../../public/images/AboutCompany.jpg'

export default function Collaboration() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.95], [1, 2.5, 2.5])
    const x = useTransform(
        scrollYProgress,
        [0.1, 0.25, 0.7, 1],
        ["0%", "-55%", "-60%", "-80%"]
    )
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

    return (
        <section className="mt-[-35vh]">
            <div ref={targetRef} className="h-[300vh] w-full">
                <div className="sticky top-[10vh]">
                    <div className="flex justify-center">
                        <motion.div style={{ scale, x, opacity }} className="origin-top">
                            <Image
                                src={smaple}
                                className="h-[75vh] max-h-[45vw] w-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}