export default function SearchBar(props) {
   return (//si quiero pasar id 
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch("Id: 1")
         }>Agregar</button>
      </div>
   );
}
