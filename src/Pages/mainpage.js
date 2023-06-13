import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSharp } from '@fortawesome/free-solid-svg-icons'
const Mainpage = () => {
    const [user, loading, error] = useAuthState(auth);

    // useEffect(() => {
    //     if (!user) {
    //         navigate("/");
    //     } else{
    //         navigate("/Mainpage");
    //     }

    // });
    const navigate = useNavigate();
    return (
        <div>
            <header className="hide-when-mobile">
                <ul className="flex">
                    <h1 className="logo"> Logo </h1>
                    <li className="main-list">
                        <a className="main-link home-name" href="www">
                            Home
                        </a>
                    </li>
                    <li className="main-list">
                        <a className="main-link" href="#">
                            Menu
                        </a>
                    </li>
                    <li className="main-list">
                        <a className="main-link" href="#">
                            About
                        </a>
                    </li>
                </ul>
                <div className="userNameStates">
                    <button
                        onClick={() => {
                            const auth = getAuth();
                            signOut(auth)
                                .then(() => {
                                    navigate("/");
                                })
                                .catch((error) => {
                                    // An error happened.
                                });
                        }}
                    >
                        Sign out
                    </button>
                    <h1>Wlecomeaaaa</h1>
                </div>
            </header>
            <div className="mainPageContainer1">
                <div className="mainPageContainer">
                    <section className="section1">
                        <div className="profileData">
                        <img className="userPic" src={require('../img/IMG_6546 2.JPG')} />
                            <div className="userData">
                                <h3>name</h3>
                                <p>Location</p>
                                <p>counter recipe</p>
                            </div>
                        </div>

                        <h2>Recipe</h2>
                        <div className="lineRecipe">
                        </div>
                        <h5 className="uploded">
                            Uploded
                        </h5>
                        <div className="uplodedRecipeBoxes">
                            <div className="uplodedRecipeBox">

                        
                            <img className="recipePic" src={require('../img/IMG_6546 2.JPG')} />
                            <div className="recipeData">
                                <h3>name</h3>
                                <p>discription</p>
                                <p>Time</p>
                                <FontAwesomeIcon icon="fa-sharp fa-solid fa-bookmark" style={{color: "#ffbb00",}} />
                            </div>
                        </div>

                            </div>

                    
                    </section>




                    <section className="section2">sssged</section>
                    <section className="section3">sssfe</section>
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default Mainpage;
