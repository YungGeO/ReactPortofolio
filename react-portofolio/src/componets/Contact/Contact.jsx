import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" >
            <div >
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul>
                <li >
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:zachariasg7@hotmail.com">zachariasg7@hotmail.com</a>
                </li>
            </ul>
        </footer>
    );
}