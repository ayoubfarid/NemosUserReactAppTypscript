import React from "react"
import styles from "./TextRegularDisplay.module.css"

interface TextRegularDisplayProps{
    children:React.ReactNode
}

const TextRegularDisplay:React.FC<TextRegularDisplayProps>=({children}:TextRegularDisplayProps)=>{
    return(
        <div className={styles.text} >
            { children }
        </div>
    )
}
export default TextRegularDisplay;