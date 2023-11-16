import React from "react";

export default function SearchBar(props) {

   const [id, setId] = React.useState("");
   const handleChange = event => {
      const { value } = event.target;
      setId(value); /// para que siempre qiede limpio

   }
const handleClick = event =>{
   event.preventDefault();
   props.onSearch(id);
   setId("");
}
   return (//si quiero pasar id 
      <div>
         <input
            type='text'
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
