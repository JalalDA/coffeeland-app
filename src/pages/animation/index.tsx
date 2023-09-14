import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Draggable from 'gsap/dist/Draggable'
import Flip from 'gsap/dist/Flip'

type Props = {}

gsap.registerPlugin(ScrollTrigger, Draggable, Flip)

const Animation = (props: Props) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef) {
            const tl = gsap.timeline()
            tl.to(".box", 1, {
                scale: 0.1,
                y: 60,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut",
                delay: 1,
                stagger: {
                    amount: 1.5,
                    grid: "auto",
                    from: "center"
                }
            })
        }
    })
    return (
        <div>
            <Head>
                <title>GSAP Animation</title>
            </Head>
            <main>
                <div ref={containerRef} className='container h-screen w-screen items-center justify-center'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                        <div className="box bg-blue-400 h-40 w-40 rounded-lg"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Animation