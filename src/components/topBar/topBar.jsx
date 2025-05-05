import UserButton from "../userButton/userButton";
import "./topBar.css";


const TopBar = () => {
  return (
    <div className="topBar">
      {/* search */}
      <div className="search">
        <img src="/general/search.svg" alt="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />

      {/* user */}
    </div>
  );
};

export default TopBar;
