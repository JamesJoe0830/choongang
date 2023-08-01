import React from "react";
import "./components.css";
export default function Nav() {
  return (
    <nav className="total_wrapper">
      <div className="nav_wrapper">
        <div className="nav_logo">
          <div>분당 중앙 부동산</div>
          <div className="nav_subtitle">내 집 마련의 A to Z</div>
        </div>
        <ul className="nav_menuList">
          <li className="nav_item">찾아오시는길</li>
          <li className="nav_item">단지 정보</li>
          <li className="nav_item">ㅇㅇㅇㅇ</li>
          <li className="nav_item">ㅇㅇㅇㅇㅇ</li>
        </ul>
      </div>
    </nav>
  );
}
