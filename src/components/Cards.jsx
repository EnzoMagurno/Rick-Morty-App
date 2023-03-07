import Card from './Card';

export default function Cards({characters}) {
   return (<div>
      {
         characters.map(characters=>{
            <Card name={characters.name} species={characters.species} gender={characters.gender} image={characters.image} onClose={characters.onClose}
            />
         })
      }
   </div>)
}
