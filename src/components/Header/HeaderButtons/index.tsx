import { icons } from "../../../assets/icons";
import "./styles.css";

const HeaderButtons: React.FunctionComponent = () => {
  return (
    <div className="headerButtons">
      <button className="headerButton">{icons.settings}</button>
      <button className="headerButton">{icons.lightMode}</button>
    </div>
  );
};

export default HeaderButtons;
