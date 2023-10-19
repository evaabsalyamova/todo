import { useState } from "react";
import { addTodo, updateTodo, useAppDispatch } from "../../../redux";
import "./styles.css";
import { sendNewTodo, sendTodoUpdates } from "../../../api/todoList";
import { ITodo } from "../../../types/todo";

interface IProps {
  onFinish: React.Dispatch<React.SetStateAction<boolean>>;
  todo?: ITodo;
}

const TodoForm: React.FunctionComponent<IProps> = ({ onFinish, todo }) => {
  const [newText, setNewText] = useState<string>(todo?.text ?? "");
  const [newTitle, setNewTitle] = useState<string>(todo?.title ?? "");
  //флаг для различия режима создания или изменения todo( если editMode false- это режим добавления todo)
  const editMode = !(todo === undefined);

  const dispatch = useAppDispatch();

  const handleSubmitButtonClick = () => {
    if (todo) {
      if (newText !== todo.text || newTitle !== todo.title) {
        dispatch(updateTodo({ id: todo.id, text: newText, title: newTitle }));

        sendTodoUpdates({
          todo: { ...todo, text: newText, title: newTitle },
        });
      }

      //что делать когда человек закончил процесс редактирования или добавления
      onFinish(false);
      return;
    }

    if (newText !== "") {
      dispatch(addTodo({ todoText: newText, todoTitle: newTitle }));
      sendNewTodo({ title: newTitle, body: newText });

      onFinish(false);
    }
  };

  return (
    <div className="addTodoBlockContainer">
      <input
        className="addBlockInputTitle"
        onChange={(title) => setNewTitle(title.target.value)}
        value={newTitle}
        placeholder="Enter title"
      />

      <input
        className="addBlockText"
        onChange={(text) => setNewText(text.target.value)}
        value={newText}
        placeholder="Enter text"
      />
      <div className="addTodoButtonContainer">
        <button onClick={handleSubmitButtonClick}>
          {editMode ? "SAVE" : "ADD"}
        </button>

        {!editMode && (
          <button
            onClick={() => {
              setNewText("");

              //onFinish- то что нам надо сделать по окончанию процесса добавления или редактирования
              onFinish(false);
            }}
          >
            BACK
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoForm;
