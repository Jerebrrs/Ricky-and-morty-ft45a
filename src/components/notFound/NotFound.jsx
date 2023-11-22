const error404 = "https://shots.codepen.io/username/pen/dVPewm-800.jpg?version=1505412103";

export default function NotFound(props) {
    return (
        <div>
            <img src={error404} alt="Not Found" />
        </div>
    )
}