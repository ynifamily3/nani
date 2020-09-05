import React from "react";
import { Link } from "react-router-dom";

function Home(): JSX.Element {
  return (
    <div>
      <div>홈 페이지</div>
      <ul>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
