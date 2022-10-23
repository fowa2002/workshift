import '../../assets/css/Components.css';

function Nav() {
    return (
      <div className="Nav">
        <ul>
            <li><a className="active" href="#">홈</a></li>
            <li><a href="#">공지사항</a></li>
            <li><a href="#">소개</a></li>
            <li><a href="#">자유게시판</a></li>
        </ul>
      </div>
    );
  }
  
  export default Nav;
  