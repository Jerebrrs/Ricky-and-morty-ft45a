import Card from './Card';

export default function Cards({characters}) {// como objeto asi lo guarrdo
  // console.log(characters);
   return (//mapeamos character
      <div>
         {
            characters.map(character => ( //retorno una est html
               <Card
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={() => window.alert
                     ('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   );
}
