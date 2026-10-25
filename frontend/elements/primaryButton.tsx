import { MouseEventHandler } from "react";
import "./elements.css";

type ButtonProps = {
    name: string;
    destination: string;
}


export default function PrimaryButton({name, destination}: ButtonProps) {
    return (
        <>
            <a href={destination} className="primarybutton">
                {name}
            </a>
        </>
    );
}