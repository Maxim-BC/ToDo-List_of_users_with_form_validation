import "./WindowUserDeletion.css";
import React from "react";

export default function WindowDelete({
  arrayUsers,
  setArrayUsers,
  targetItem,
  setClassBlockDisplay
}) {
  const deleteItem = () => {
    const array = arrayUsers;
    const filterArr = array.filter((arr) => arr.login !== targetItem.login);
    const newArray = [...filterArr];
    setArrayUsers(newArray);
    setClassBlockDisplay("block-display-none");
  };

  const cancel = () => {
    setClassBlockDisplay("block-display-none");
  };
  return (
    <div className="box-delete">
      <div className="box-delete__title">
        <p className="box-delete__title__p">Удаление пользователя</p>
      </div>
      <div className="box-delete__content">
        <p className="box-delete__content__p">
          Удалить выбранного пользователя?
        </p>
      </div>
      <div className="box-delete__box-button">
        <button
          className="box-delete__box-button__btn-cancel"
          onClick={() => cancel()}
        >
          Отменить
        </button>
        <button
          onClick={() => deleteItem()}
          className="box-delete__box-button__btn-delete"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
