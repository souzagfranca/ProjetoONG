import { Link } from "react-router-dom";

export default function Button(props) {
    return (
        <>
            <Link to={props.link}>
                <button className="btn btn-sm btn-info">{props.title}</button>
            </Link>
        </>
    )
}