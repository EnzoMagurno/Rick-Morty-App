//name species gender image onClose
import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({name,species,gender,image,onClose,id}) =>{
   return (
      <div className={style.container}>
         <button className={style.buttonX} onClick={()=>onClose(id)}>X</button>
         <img className="image" src={image} alt="" /> 
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2 className="">Species: {species}</h2>
         <h2 className="">Gender: {gender}</h2>
      </div>
   );
}
export default Card