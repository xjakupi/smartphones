import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <div className="sidebar-conatiner-div">
        <Sidebar />
        <Container />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
