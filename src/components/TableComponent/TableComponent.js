import "./TableComponent.css";
import IconBtnEdit from "../../icon/icon_button_edit.svg";
import IconBtnDelete from "../../icon/icon_button_delete.svg";
import IconBtnAdd from "../../icon/icon_button_plus.svg";

export default function ({ arrayUsers, deleteItem, editItem, createItem }) {
  const resultArrayUsers =
    arrayUsers.length === 0 ? (
      <tr className="block__table__tbody__tr">
        <td
          colspan="6"
          align="center"
          className="block__table__tbody__td-content"
        >
          N/A
        </td>
      </tr>
    ) : (
      arrayUsers.map((item, index) => {
        return (
          <tr key={index} className="block__table__tbody__tr">
            <td className="block__table__tbody__td-content">{item.lastName}</td>
            <td className="block__table__tbody__td-content">
              {item.firstName}
            </td>
            <td className="block__table__tbody__td-content">
              {item.patronymic}
            </td>
            <td className="block__table__tbody__td-content">{item.email}</td>
            <td className="block__table__tbody__td-content">{item.login}</td>
            <td>
              <button
                onClick={() => editItem(item)}
                className="block__table-box__box-title__button"
              >
                <img
                  src={IconBtnEdit}
                  className="block__table-box__box-title__button__img"
                  alt="edit"
                />
              </button>
              <button
                onClick={() => deleteItem(item)}
                className="block__table-box__box-title__button"
              >
                <img
                  src={IconBtnDelete}
                  className="block__table-box__box-title__button__img"
                  alt="delete"
                />
              </button>
            </td>
          </tr>
        );
      })
    );
  return (
    <div className="block">
      <div className="block__box-title">
        <h1 className="block__box-title__h1">Пользователи</h1>
        <button
          className="block__box-title__button-add"
          onClick={() => createItem()}
        >
          <img
            src={IconBtnAdd}
            className="block__box-title__button-add__img"
            alt="add"
          />
          Добавить
        </button>
      </div>
      <table className="block__table-box">
        <thead className="block__table-title__thead">
          <tr className="block__table-title__thead__tr">
            <th className="block__table-title__thead__tr__th">Фамилия</th>
            <th className="block__table-title__thead__tr__th">Имя</th>
            <th className="block__table-title__thead__tr__th">Отчество</th>
            <th className="block__table-title__thead__tr__th">E-mail</th>
            <th className="block__table-title__thead__tr__th">Login</th>
            <th className="block__table-title__thead__tr__th"></th>
          </tr>
        </thead>
        <tbody className="block__table__tbody">{resultArrayUsers}</tbody>
      </table>
    </div>
  );
}
