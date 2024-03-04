import React from "react"
import styles from "./TextBoldDisplay.module.css"

interface TextBoldDisplayProps{
    children:React.ReactNode
}

const TextBoldDisplay:React.FC<TextBoldDisplayProps>=({children}:TextBoldDisplayProps)=>{
    return(
        <div className={styles.text} >
            { children }
        </div>
    )
}
export default TextBoldDisplay;