import Card from '../card/Card';
import style from './Cards.module.css'
export default function Cards({characters, onClose}) {
   
   return (<div className={style.container}>
      {
         characters.map(({name,species,gender,image,id})=>{
            return(
            <Card
            key={id}
            id={id}
            name={name} 
            species={species} 
            gender={gender} 
            image={image} 
            onClose={onClose}
            />
            )
         })
      }
   </div>)
}
