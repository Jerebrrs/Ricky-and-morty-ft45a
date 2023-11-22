import { useSelector } from 'react-redux';
import Card from '../card/Card.jsx';

export default function Favorites({ myfavorites, onClose }) {
   const myFavorites = useSelector(state => state.myFavorites);


   return (
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
         }}
      >
         {
            myFavorites.map(myfavorite => ( 
               <Card
                  key={myfavorite.id}
                  id={myfavorite.id}
                  name={myfavorite.name}
                  status={myfavorite.status}
                  species={myfavorite.species}
                  gender={myfavorite.gender}
                  origin={myfavorite.origin.name}
                  image={myfavorite.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}
