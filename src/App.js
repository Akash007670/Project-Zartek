import React from "react";
import Styles from "./App.module.css";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  return (
    <div className={Styles["App"]}>
      <main className={Styles["board-wrapper"]}>
        <Board id="board-1" className={Styles["board"]}>
          <Card id="card-1" className={Styles["card"]} draggable="true">
            <p>Card one</p>
          </Card>
          <Card id="card-5" className={Styles["card"]} draggable="true">
            <p>Card five</p>
          </Card>
        </Board>
        <Board id="board-2" className={Styles["board"]}>
          <Card id="card-2" className={Styles["card"]} draggable="true">
            <p>Card two</p>
          </Card>
          <Card id="card-3" className={Styles["card"]} draggable="true">
            <p>Card three</p>
          </Card>
          <Card id="card-4" className={Styles["card"]} draggable="true">
            <p>Card four</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
