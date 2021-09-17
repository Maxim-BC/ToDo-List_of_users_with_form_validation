import "./FormUser.css";
import React, { useState } from "react";
import IconBtnClose from "../../../icon/icon_button_close.svg";

export default function WindowCreate({
  arrayUsers,
  setArrayUsers,
  setClassBlockDisplay
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [messageError, setMessageError] = useState("");

  const createItem = (event) => {
    event.preventDefault();
    const array = arrayUsers;
    const newItem = {
      firstName: firstName,
      lastName: lastName,
      patronymic: patronymic,
      email: email,
      login: login
    };
    //Checking for existing login and email
    const resultFindEmail = array.find((item) => item.email === newItem.email);
    const resultFindLogin = array.find((item) => item.login === newItem.login);
    if (resultFindEmail !== undefined) {
      setMessageError(`Пользователь с таким e-mail уже существует!`);
    }
    if (resultFindLogin !== undefined) {
      setMessageError(`Пользователь с таким логином уже существует!`);
    }
    if (resultFindLogin === undefined && resultFindEmail === undefined) {
      const newArray = [newItem, ...array];
      setArrayUsers(newArray);
      setClassBlockDisplay("block-display-none");
      setMessageError("");
    }
  };

  const close = () => {
    setClassBlockDisplay("block-display-none");
    setMessageError("");
  };

  const handleInputLastName = (event) => {
    if (event.target.value.length < 51) {
      setLastName(filterInput(event.target.value));
    }
  };

  const handleInputFirstName = (event) => {
    if (event.target.value.length < 51) {
      setFirstName(filterInput(event.target.value));
    }
  };

  const handleInputPatronymic = (event) => {
    if (event.target.value.length < 51) {
      setPatronymic(filterInput(event.target.value));
    }
  };

  //Validating input for correct characters
  const filterInput = (item) => {
    return item.replace(/[0-9[|\];'"!/\\|:~^_`()$#?>&<@№/{}*+-=.,%\s]/g, "");
  };
  const handleInputEmail = (event) => {
    if (event.target.value.length < 246) {
      const filterValue = event.target.value.replace(
        /[а-яА-Я[|\];'"!/\\|:~^`()$#?>&<№/{}*+=,%\s]/g,
        ""
      );
      setEmail(filterValue);
    }
  };

  const handleInputLogin = (event) => {
    if (event.target.value.length < 51) {
      setLogin(event.target.value);
    }
  };

  return (
    <form onSubmit={createItem} className="form-box">
      <div className="form-box__title">
        <p className="form-box__title__p">Создание пользователя</p>
        <button
          className="form-box__box-button__btn-close"
          onClick={() => close()}
          type="button"
        >
          <img
            src={IconBtnClose}
            className="form-box__box-button__btn-close__img"
            alt="close"
          />
        </button>
      </div>

      <div className="form-box__main-box">
        <div className="form-box__main-box__content">
          <label className="form-box__main-box__content__label">
            Фамилия
            <input
              className="form-box__main-box__content__label__input"
              onChange={handleInputLastName}
              type="text"
              value={lastName}
              required
              placeholder="Введите фамилию"
            />
          </label>

          <label className="form-box__main-box__content__label">
            Имя
            <input
              className="form-box__main-box__content__label__input"
              onChange={handleInputFirstName}
              type="text"
              value={firstName}
              required
              placeholder="Введите имя"
            />
          </label>

          <label className="form-box__main-box__content__label">
            Отчество
            <input
              className="form-box__main-box__content__label__input"
              onChange={handleInputPatronymic}
              type="text"
              value={patronymic}
              required
              placeholder="Введите отчество"
            />
          </label>

          <label className="form-box__main-box__content__label">
            E-mail
            <input
              className="form-box__main-box__content__label__input"
              onChange={handleInputEmail}
              type="email"
              value={email}
              required
              placeholder="Введите электронную почту"
            />
          </label>

          <label className="form-box__main-box__content__label">
            Логин
            <input
              className="form-box__main-box__content__label__input"
              onChange={handleInputLogin}
              type="text"
              value={login}
              required
              placeholder="Введите логин"
            />
          </label>
        </div>
        <p className="form-box__main-box__error">{messageError}</p>
      </div>
      <div className="form-box__box-button">
        <button
          disabled={!patronymic || !login || !firstName || !lastName || !email}
          type="submit"
          className="form-box__box-button__btn-create"
        >
          Создать
        </button>
      </div>
    </form>
  );
}
