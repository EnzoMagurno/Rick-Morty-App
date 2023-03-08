//name species gender image onClose
import styles from './Card.module.css'
export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={styles.container}>
         <button className={styles.buttonX} onClick={onClose}>X</button>
            <img className="image" src={image} alt="" /> 
         <h2 className="">Name: {name}</h2>
         <h2 className="">Species: {species}</h2>
         <h2 className="">Gender: {gender}</h2>
      </div>
   );
}
