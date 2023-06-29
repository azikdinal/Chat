import Navbar from "../molecules/Navbar.jsx";
import Chats from "../molecules/Chats.jsx";
import Tabs from "../atoms/Tabs.jsx";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Tabs />
      <button className="btn-archive">
        <img
          style={{ width: "20px", height: "20px" }}
          src="/img/icons/archive.svg"
          alt="box"
        />
        Archived Chats
      </button>
      <Chats />
    </div>
  );
};

export default Sidebar;
