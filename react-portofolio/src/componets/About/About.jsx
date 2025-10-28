import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";



export const About = () => {


    return (
        <section className={styles}>
            <li >
                <h2></h2>
                <div>
                    <h3>Software  Engineer</h3>
                    <p>I have a batcherlor in software engineering</p>
                </div>
            </li>
            <li >
                <h2></h2>
                <div>
                    <h3>Who I Am</h3>
                    <p>I am George Zacharias, i am 26 years old and i aspire to become a full stack developer</p>
                </div>
            </li>
        </section>

    );
};