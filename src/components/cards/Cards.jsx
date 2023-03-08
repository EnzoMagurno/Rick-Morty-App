import Card from '../card/Card';
import styles from './Cards.module.css'

export default function Cards({characters}) {
   
   return (<div className={styles.container}>
      {
         characters.map(({name,species,gender,image})=>{
            return(
            <Card
            key={name}
            name={name} 
            species={species} 
            gender={gender} 
            image={image} 
            onClose={()=>window.alert(`Cerrando ${name}`)}
            />
            )
         })
      }
   </div>)
}
