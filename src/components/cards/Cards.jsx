import Card from '../card/Card';

export default function Cards({characters}) {
   
   return (<div>
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
