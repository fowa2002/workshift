import Header from "./Header";
import Nav from "./Nav";

import Calender from "../pages/Calender";
import Main from "../pages/Main";

function Layout() {
  return (
    <div className="homeContents">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Calender></Calender>
    </div>
  );
}

export default Layout;
