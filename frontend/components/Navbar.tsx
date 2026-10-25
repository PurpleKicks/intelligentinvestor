'use client'
import PrimaryButton from "@/elements/primaryButton";
import './components.css'


export default function Navbar() {
    return (
        <>
        <div className="navbar">
            This is the navbar!
        <span >
            <PrimaryButton name={"button"} destination="/hello"/>
            </span>
        </div>
        </>
    );

}