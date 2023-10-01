import { useState } from "react";
import { addTodo, useAppDispatch } from "../../../redux";

interface IProps {
  setShouldShowAddTodoBlock: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTodoBlock: React.FunctionComponent<IProps> = ({
  setShouldShowAddTodoBlock,
}) => {
  const [currentText, setCurrentText] = useState<string>("");

  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        onChange={(text) => setCurrentText(text.target.value)}
        value={currentText}
      />
      <button
        onClick={() => {
          if (currentText !== "") {
            dispatch(addTodo({ todoText: currentText }));
            setCurrentText("");
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
  );
};

export default AddTodoBlock;
