import { icons } from "../../../assets/icons";
import "./styles.css";

const HeaderButtons: React.FunctionComponent = () => {
  return (
    <div className="headerButtons">
      <div className="headerButton">{icons.settings}</div>
      <div className="headerButton">{icons.lightMode}</div>
    </div>
  );
};

export default HeaderButtons;
