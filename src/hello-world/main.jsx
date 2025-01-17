import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Todolist from "../todolist/Todolist";
import Table from "../table/Table";
import AlertButton from "../Button/AlertButton";
import MyButton from "../Button/MyButton";
import Toolbar from "../Button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Todolist />
      <Table /> <br />
      <AlertButton text="clickme" message="sudah di click" />
      <MyButton text="Klik Saya" onsmash={() => alert("sudah di klik")} />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("sudah di klik");
        }}
      />
      <SearchForm />
      <SayHelloForm />
      <Counter />
    </Container>
  </StrictMode>
);
