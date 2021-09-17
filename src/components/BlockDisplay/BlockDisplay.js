import "./BlockDisplay.css";
import React from "react";
import FormUserCreating from "./FormUser/FormUserCreating";
import FormUserEditing from "./FormUser/FormUserEditing";
import WindowUserDeletion from "./WindowUserDeletion/WindowUserDeletion";

export default function BlockDisplay({
  classBlockDisplay,
  arrayUsers,
  setArrayUsers,
  targetItem,
  setClassBlockDisplay,
  currentForm
}) {
  return (
    <div className={classBlockDisplay}>
      {currentForm === "formUserEditing" && (
        <FormUserEditing
          targetItem={targetItem}
          arrayUsers={arrayUsers}
          setArrayUsers={setArrayUsers}
          setClassBlockDisplay={setClassBlockDisplay}
        />
      )}
      {currentForm === "windowUserDeletion" && (
        <WindowUserDeletion
          arrayUsers={arrayUsers}
          setArrayUsers={setArrayUsers}
          targetItem={targetItem}
          setClassBlockDisplay={setClassBlockDisplay}
        />
      )}
      {currentForm === "formUserCreating" && (
        <FormUserCreating
          arrayUsers={arrayUsers}
          setArrayUsers={setArrayUsers}
          setClassBlockDisplay={setClassBlockDisplay}
        />
      )}
    </div>
  );
}
