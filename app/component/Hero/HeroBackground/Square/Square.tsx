import Style from "./square.module.css"
import { useRef } from "react"

interface SquareProps{
    index: number
    glow: boolean
}


export default function Square(props: SquareProps){
    const squareRef = useRef<HTMLDivElement>(null)

    return(
        <div
            ref={squareRef}
            key={props.index}
            className={`w-[5rem] h-[5rem] border-[1px] border-white ${Style.square} ${props.glow ? "bg-white transition-colors duration-1000" : "bg-transparent transition-colors duration-1000"}`}
        >
        </div>
    )
}