import "./styles.css";
import TableComponent from "./components/TableComponent/TableComponent";
import BlockDisplay from "./components/BlockDisplay/BlockDisplay";
import React, { useState } from "react";
export default function App() {
  const [classBlockDisplay, setClassBlockDisplay] = useState(
    "block-display-none"
  );
  const [targetItem, setTargetItem] = useState(null);
  const [arrayUsers, setArrayUsers] = useState([
    {
      firstName: "Иван",
      lastName: "Иванов",
      patronymic: "Иванович",
      email: "mail1@mail.com",
      login: "user1"
    },
    {
      firstName: "Петр",
      lastName: "Петров",
      patronymic: "Сергеевич",
      email: "mail2@mail.com",
      login: "user2"
    },
    {
      firstName: "Григорий",
      lastName: "Сергеев",
      patronymic: "Викторович",
      email: "mail3@mail.com",
      login: "user3"
    },
    {
      firstName: "Виктор",
      lastName: "Федоров",
      patronymic: "Федорович",
      email: "mail4@mail.com",
      login: "user4"
    },
    {
      firstName: "Сергей",
      lastName: "Хвастунов",
      patronymic: "Петрович",
      email: "mail5@mail.com",
      login: "user5"
    },
    {
      firstName: "Федор",
      lastName: "Григорьев",
      patronymic: "Григорьевич",
      email: "mail6@mail.com",
      login: "user6"
    }
  ]);
  const [currentForm, setCurrentForm] = useState("");
  const deleteItem = (item) => {
    setClassBlockDisplay("block-display-window");
    setTargetItem(item);
    setCurrentForm("windowUserDeletion");
  };
  const editItem = (item) => {
    setClassBlockDisplay("block-display-window");
    setTargetItem(item);
    setCurrentForm("formUserEditing");
  };
  const createItem = () => {
    setClassBlockDisplay("block-display-window");
    setCurrentForm("formUserCreating");
  };

  return (
    <div className="App">
      <header className="App__header-box"></header>
      <main className="App__main-box">
        <aside className="App__main__anside-box"></aside>
        <section className="App__main__section-box">
          <TableComponent
            arrayUsers={arrayUsers}
            deleteItem={deleteItem}
            editItem={editItem}
            createItem={createItem}
          />
        </section>
      </main>
      <BlockDisplay
        classBlockDisplay={classBlockDisplay}
        arrayUsers={arrayUsers}
        setArrayUsers={setArrayUsers}
        targetItem={targetItem}
        setClassBlockDisplay={setClassBlockDisplay}
        currentForm={currentForm}
      />
    </div>
  );
}
