
 
import styles from './HeaderLabel.module.css';
interface HeaderLabelProps {
        title:string;

}

 const HeaderLabel:React.FC<HeaderLabelProps> =({title})=>{
    return (
        <h2  className={styles.headerLabel}  > {title} </h2>
    );

}
export default HeaderLabel;