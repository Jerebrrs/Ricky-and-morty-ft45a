import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card.jsx';
import { filterCard, orderCards } from '../../redux/actions.js';

export default function Favorites({ onClose }) {
   const myFavorites = useSelector(state => state.myFavorites);
   const dispatch = useDispatch();
   const handleOrder = event => {
      dispatch(orderCards(event.target.value))
   }
   const handleFilter = event => {
      dispatch(filterCard(event.target.value))
   }

   return (
      <div>
         <div >
            <select name="order" onChange={handleOrder}>
               <option value="A">Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select name='filter' onChange={handleFilter}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
               <option value="All">All</option>
            </select>
         </div>
         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
            }}
         >

            {
               !myFavorites.length
                  ? <h2>No hay Favoritos</h2>
                  :
                  myFavorites.map(myfavorite => (
                     <Card
                        key={myfavorite.id}
                        id={myfavorite.id}
                        name={myfavorite.name}
                        status={myfavorite.status}
                        species={myfavorite.species}
                        gender={myfavorite.gender}
                        origin={myfavorite.origin}
                        image={myfavorite.image}
                        onClose={onClose}
                     />
                  ))
            }
         </div>
      </div >
   );
}
