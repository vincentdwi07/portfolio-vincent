"use client";

import { useEffect, useState } from "react";
import Square from "./Square/Square";

export default function HeroBackground(children: React.PropsWithChildren) {
	const [count, setCount] = useState(0);
	const [random, setRandom] = useState(0)

	useEffect(() => {
		const updateGrid = () => {
			const squareSize = 50;
			const cols = Math.floor(window.innerWidth / squareSize);
			const rows = Math.floor(window.innerHeight / squareSize);
			setCount((cols * rows) / 1.75);
		};

		updateGrid();
		window.addEventListener("resize", updateGrid);
		return () => window.removeEventListener("resize", updateGrid);
	}, []);

	useEffect(() => {
		if (count === 0) return

		const interval = setInterval(() => {
			const random = Math.floor((Math.random() * ((count - 50) - 20)))
			setRandom(random)
		}, 1000)

		return () => clearInterval(interval)
	}, [count])

	console.log(random)

  return (
	<>
		<div
		className="bg-linear-to-b from-black to-gray-700 w-full h-[100vh] flex flex-wrap justify-center relative overflow-hidden"
		style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.3)" }}
		>
			<div 
				className="absolute top-0 left-0 w-full h-full pointer-events-none"
				style={{ background: "radial-gradient(circle, rgba(0,0,0,0.3) 40%, black 80%" }}
			></div>
			{Array.from({ length: count }).map((_, index) => (
				<Square 
					index={index} 
					key={index}
					glow={random === index ? true : false}
				/>
			))}


			<div 
				className="absolute top-0 left-0 w-full h-full pointer-events-none"
				style={{ background: "rgba(0,0,0,0.5)" }}
			>
			</div>

			<div className="absolute top-0 left-0 right-0 h-full max-w-[1440px] w-full mx-auto pointer-events-none p-10">
				{children.children}
			</div>
		</div>
	</>
  );
}
