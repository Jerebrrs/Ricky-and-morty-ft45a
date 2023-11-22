import React from "react";

export default function SearchBar(props) {

   const [id, setId] = React.useState("");
   const handleChange = event => {
      const { value } = event.target;
      setId(value); /// para que siempre qiede limpio

   }
   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }
   const handleRandom = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      props.onSearch(randomNumber);
   };
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
         <button onClick={handleRandom}>Random</button>
         <hr />
      </div>
   );
}
