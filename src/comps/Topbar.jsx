import topnavStyles from "./styles/Topbar.module.css";

const Topbar = () => {
  return (
    <div id="Topbar" className={topnavStyles.topbar}>
      <div>
        <div id="logo">
          <img src="src/assets/react.svg" alt="logo" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default Topbar;
