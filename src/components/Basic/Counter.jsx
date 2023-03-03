import React from "react";
import './Counter.css'
import { keyframes } from "styled-components";

// eslint-disable-next-line
export default props => {

    const { title,percent,size } = props;

    const dasharray = ((Number(size)-30)/2)*(2*Math.PI)
    const progress = (Number(percent)/100) * dasharray;

    return (
        <div className="contador">
            <svg className='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" style={{transform: 'rotate(210deg)'}} width={size+"px"} height={size+"px"}>
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx={Number(size)/2} cy={Number(size)/2} r={Number(size)/2 - 15} stroke={'url(#GradientColor)'} 
                fill='none' strokeWidth='15px' strokeDasharray={dasharray} strokeDashoffset={progress}
                strokeLinecap="round" />
            </svg>
            <div className="icon">
                <span className="percent">{percent}%</span>
                <span className="title">{title}</span>
            </div>
        </div>
    )
}