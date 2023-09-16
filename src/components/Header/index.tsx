import HeaderButtons from "./HeaderButtons";
import "./styles.css";

const Header: React.FunctionComponent = () => {
  return (
    <div className="container">
      <span className="title">Task manager</span>
      <HeaderButtons />
    </div>
  );
};

export default Header;
