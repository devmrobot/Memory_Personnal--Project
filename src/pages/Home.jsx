import React from "react";
import "./home.css";
import Cards from "../components/Cards";
import { useState } from "react";

const Home = () => {

    const [images, setImages] = useState(
        [
         { id: 1, name: "htmlcard", img: "/img/html.png" },
         { id: 1, name: "htmlcard", img: "/img/html.png" },
         { id: 2, name: "csscard", img: "/img/css.png" },
         { id: 2, name: "csscard", img: "/img/css.png" },
         { id: 3, name: "reactcard", img: "img/react.png" },
         { id: 3, name: "reactcard", img: "img/react.png" },
         { id: 4, name: "jscard", img: "img/js.png" },
         { id: 4, name: "jscard", img: "img/js.png" },
         { id: 5, name: "scsscard", img: "img/scss.png" },
         { id: 5, name: "scsscard", img: "img/scss.png" },
         { id: 6, name: "nodejscard", img: "img/nodejs.png" },
         { id: 6, name: "nodejscard", img: "img/nodejs.png" },
         { id: 7, name: "phpcard", img: "img/php.png" },
         { id: 7, name: "phpcard", img: "img/php.png" },
         { id: 8, name: "mysqlcard", img: "img/mysql.png" },
         { id: 8, name: "mysqlcard", img: "img/mysql.png" },
         { id: 9, name: "mysqlcard", img: "img/angular.png" },
         { id: 9, name: "mysqlcard", img: "img/angular.png" },
         { id: 10, name: "mysqlcard", img: "img/vue.png" },
         { id: 10, name: "mysqlcard", img: "img/vue.png" },
         { id: 11, name: "mysqlcard", img: "img/flutter.png" },
         { id: 11, name: "mysqlcard", img: "img/flutter.png" },
         { id: 12, name: "mysqlcard", img: "img/c.png" },
         { id: 12, name: "mysqlcard", img: "img/c.png" },
         { id: 12, name: "mysqlcard", img: "img/python.png" },
         { id: 12, name: "mysqlcard", img: "img/python.png" },
         { id: 12, name: "mysqlcard", img: "img/tailwind.png" },
         { id: 12, name: "mysqlcard", img: "img/tailwind.png" },
         { id: 12, name: "mysqlcard", img: "img/java.png" },
         { id: 12, name: "mysqlcard", img: "img/java.png" },
        ].sort(() => Math.random() - 0.5)
       );

    function refreshPage(){ 
        window.location.reload(); 
    }

 return (
  <div>
   <section className="header">
    <h1>MEMORY GAME</h1>
   </section>
   <section className="main">
    <h2>Pinguins love code !</h2>
    <button className="btnreplaymemory" onClick={refreshPage}>New Game</button>
    <div>
     <Cards images={images} setImages={setImages} />
    </div>
   </section>
  </div>
 );
};

export default Home;
