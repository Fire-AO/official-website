import "@/pages/home/page/assets/css/FirstIntro.css";
import { Link } from "react-router-dom";

function FirstIntro() {
  return (
    <div className="firstIntro-container dark:bg-black">
      <div className="Text text-[rgb(13,192,222)] dark:text-white">
        <div className="text">
          <p id="FIFire" className="dark:text-white text-[rgb(33,236,222)]">Fire</p>&nbsp;<p id="FIAO">AO</p>
        </div>
        <div className="plus">
          <p id="A">Alpha</p>&nbsp;<p>부터</p>&nbsp;<p id="O">Omega</p>&nbsp;
          <p>까지!</p>
        </div>
        <div className="ex font-bold">
          <p>대학생활의 처음부터 끝까지 함께해 줄 Fire AO입니다.</p>
        </div>
        <div className="FIbutton ">
          <Link className=" dark:bg-white font-semibold dark:font-normal bg-[rgb(13,192,222)] text-white dark:text-black" id="FIbut" to="/apply">
            지원하러 가기
          </Link>
        </div>
      </div>
      <div className="figure1"></div>
      <div className="figure2"></div>
      <div className="figure3"></div>
    </div>
  );
}

export default FirstIntro;
