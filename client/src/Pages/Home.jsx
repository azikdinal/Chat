import ChatWindow from "../components/organisms/ChatWindow.jsx";
import Sidebar from "../components/organisms/Sidebar.jsx";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;
