import React, { useState } from "react";
import stilos from "./formModule.css";
import validation from "../../utils/validation";
const banner = "https://c.wallhere.com/photos/24/bf/Rick_and_Morty_kendiparodim-1313759.jpg!d";
import style from "./formModule.css";
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
        <div
            style={{
                backgroundColor: "AppWorkspace",
                padding: "20px",
                borderRadius: "20px",
                boxshadow: "5px 5px overscrollBehaviorBlock",
            }}>
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
        </div >
    )
}