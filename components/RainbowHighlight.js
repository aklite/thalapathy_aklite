import React from "react"
import { getLightColor } from "../components/useColorSeed"
import { RoughNotation } from "react-rough-notation"
export const RainbowHighlight=({colorIndex,children,className})=>{
    const animationDuration=React.Children.count(children)===1 ? 
    Math.floor(30*children.length):500

    const color=getLightColor(colorIndex)
    return (
        <span className={color}>
            <RoughNotation 
            type="highlight"
            multiline={true}
            padding={[0,2]}
            iterations={1}
            animationDuration={animationDuration}
            >
                <span className={className}>{children}</span>
            </RoughNotation>
        </span>
    )
}