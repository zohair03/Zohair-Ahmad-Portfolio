import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Protrait from "./components/Protrait.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Protrait />
      <div className="introductionDiv">
        <div className="intro">
          <h1>Hello Iam Zohair Ahmad Shaikh</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            perspiciatis cum recusandae eligendi dolorem dignissimos quod nihil
            sint sit atque consequatur voluptatibus officiis, eum nam assumenda?
            Eum cumque est exercitationem tempora animi. Non, est, enim id
            facere iste distinctio quasi, ipsa architecto quibusdam pariatur ab
            vitae temporibus facilis inventore? Totam, vero quam harum ut a ad
            obcaecati ipsum hic mollitia ipsa beatae fuga laborum sit
            repudiandae! Laudantium natus corporis cupiditate aut sunt
            reiciendis soluta earum, neque aperiam iste, et nihil. Natus
            voluptatem nulla sed dignissimos molestiae facere illo in, eos
            deserunt, odit ullam, soluta suscipit quia earum alias corporis
            quaerat!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
