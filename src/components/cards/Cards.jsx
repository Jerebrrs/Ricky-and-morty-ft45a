import Card from '../card/Card.jsx';

export default function Cards({ characters, onClose}) {// como objeto asi lo guarrdo
   // console.log(characters);
   return (//mapeamos character
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
         }}
      >
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
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}
