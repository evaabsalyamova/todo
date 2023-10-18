import { useState } from "react";
import { addTodo, useAppDispatch } from "../../../redux";
import "./styles.css";
import { sendNewTodo } from "../../../api/todoList";

interface IProps {
  setShouldShowAddTodoBlock: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTodoBlock: React.FunctionComponent<IProps> = ({
  setShouldShowAddTodoBlock,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentTitle, setCurrentTitle] = useState<string>("");

  const dispatch = useAppDispatch();

  return (
    <div className="addTodoBlockContainer">
      <input
        className="addBlockInputTitle"
        onChange={(title) => setCurrentTitle(title.target.value)}
        value={currentTitle}
        placeholder="Enter title"
      />

      <input
        className="addBlockText"
        onChange={(text) => setCurrentText(text.target.value)}
        value={currentText}
        placeholder="Enter text"
      />
      <div className="addTodoButtonContainer">
        <button
          onClick={() => {
            if (currentText !== "") {
              dispatch(
                addTodo({ todoText: currentText, todoTitle: currentTitle })
              );
              sendNewTodo({ title: currentTitle, body: currentText });

              setShouldShowAddTodoBlock(false);
            }
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            setCurrentText("");
            setShouldShowAddTodoBlock(false);
          }}
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default AddTodoBlock;
