import React, { useState } from "react";

import validation from "../../utils/validation";
const banner = "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-ruefers-deviantart-22.png";

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });


    const [errors, setErrors] = useState({
        email: "Ingrese su Email",
        password: "Ingrese su Password"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(validation({
            ...userData,
            [name]: value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div>
            <img
                src={banner}
                style={{ width: "300px" }}
                alt=""
            />
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input
                    key="email"
                    type="text"
                    name="email"
                    value={userData.email}
                    placeholder="Ingresar Email..."
                    onChange={handleChange}
                />
                <p style={{ color: "coral" }}>{errors.email ? errors.email : null}</p>

                <label>Password: </label>
                <input
                    key="password"
                    type="password"
                    name="password"
                    value={userData.password}
                    placeholder="Ingresar pasword..."
                    onChange={handleChange}
                />
                <p style={{ color: "coral" }}>{errors.password ? errors.password : null}</p>
                <hr />

                <button
                    type="submit"
                    disabled={errors.email || errors.password}
                >Enviar</button>
            </form>
        </div>
    )
}