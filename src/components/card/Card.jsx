//name species gender image onClose
import style from './Card.module.css'
export default function Card({name,species,gender,image,onClose,id}) {
   return (
      <div className={style.container}>
         <button className={style.buttonX} onClick={()=>onClose(id)}>X</button>
         <img className="image" src={image} alt="" /> 
         <h2 className="">Name: {name}</h2>
         <h2 className="">Species: {species}</h2>
         <h2 className="">Gender: {gender}</h2>
      </div>
   );
}
