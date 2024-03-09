import { Link } from "react-router-dom"
import CompleteModal from "./components/CompleteModal"
import { useState } from "react";

const index = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [aWord, setAWord] = useState('');
  const [stuIdErrorMessage, setStuIdErrorMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [awordErrorMessage, setAwordErrorMessage] = useState('');

  const [modalOpen, setModalOpen] = useState(false);

  const resetForm = () => {
    setStudentId('');
    setName('');
    setPhoneNum('');
    setAWord('');
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("학번:", studentId);
    console.log("이름:", name);
    console.log("전화번호:", phoneNum);
    console.log("한 마디:", aWord);

    fetch("/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: studentId,
        name,
        phoneNum,
        aWord,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          return res.json(); //body에 있는 것을 js 객체로 바꿔서 반환. 반환값은 프로미스객체라 다시 받을수 있음.
        } else if (res.ok) {
          resetForm();
          setModalOpen(true);
        }
      })
      .then((json) => {
        if (json !== undefined && json !== null) {
          console.log(json);
          if (
            json.stuIdErrorMessage !== undefined &&
            json.stuIdErrorMessage !== null &&
            json.stuIdErrorMessage !== ""
          ) {
            setStuIdErrorMessage(json.stuIdErrorMessage);
          }
          if (
            json.nameErrorMessage !== undefined &&
            json.nameErrorMessage !== null &&
            json.nameErrorMessage !== ""
          ) {
            setNameErrorMessage(json.nameErrorMessage);
          }
          if (
            json.phoneNumErrorMessage !== undefined &&
            json.phoneNumErrorMessage !== null &&
            json.phoneNumErrorMessage !== ""
          ) {
            setPhoneErrorMessage(json.phoneNumErrorMessage);
          }
          if (
            json.aWordErrorMessage !== undefined &&
            json.aWordErrorMessage !== null &&
            json.aWordErrorMessage !== ""
          ) {
            setAwordErrorMessage(json.aWordErrorMessage);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }


  return (
    <div className="bg-white dark:bg-black h-screen">
      <div
        className="w-full overflow-hidden pr-4 pl-4 bg-white dark:bg-black mx-auto"
      >
        <div className="mb-[42px] flex justify-center">
          {/* <ApplyMain /> */}
          <div
            className="flex justify-center items-center w-screen relative overflow-hidden py-[11px] bg-white dark:bg-black border-t-0 border-r-0 border-b border-l-0 border-[#0d0d0d]"
          >
            <p className="font-['Montserrat'] font-black text-3xl">
              <Link to="/">
                <span className="text-black dark:text-white">Fire AO</span>
              </Link>
            </p>
          </div>

        </div>
        <div className="mb-[34px] flex justify-center">
          {/* <ApplyForm /> */}

          <form
            onSubmit={handleSubmit}>
            <label
              className="w-[32px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
              htmlFor="studentId">학번</label>
            <div
              className={`mt-[10px] 
              mb-[${stuIdErrorMessage ? '3px' : '26px'}]
              flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0d0d0d]`}
            >
              <input
                type="text"
                id="studentId"
                onInput={(e) => setStudentId(e.currentTarget.value)}
                className="flex-grow-0 w-full flex-shrink-0 font-['PRETENDARD-LIGHT'] text-base text-left text-neutral-500 dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
                placeholder="학번을 입력해주세요."
              />
            </div>
            <p
              className="font-['PRETENDARD-REGULAR'] mb-[10px] text-[11px] text-left text-[#d64142]"
            >
              {stuIdErrorMessage}
            </p>
            <label
              className=" font-['PRETENDARD-SEMIBOLD'] w-[32px] text-base text-left text-[#000] dark:text-[#CCC]"
              htmlFor="name">이름</label>
            <div
              className={`mt-[10px] 
                mb-[${nameErrorMessage ? '3px' : '26px'}]
               flex justify-start items-center w-[339px] h-[47px] [relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]`}
            >
              <input
                type="text"
                id="name"
                onInput={(e) => setName(e.currentTarget.value)}
                className="flex-grow-0 flex-shrink-0 w-full font-['PRETENDARD-LIGHT'] text-base text-left text-neutral-500 dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
                placeholder="이름을 입력해주세요."
              />
            </div>
            <p
              className="mb-[10px] font-['PRETENDARD-REGULAR'] text-[11px] text-left text-[#d64142]"
            >
              {nameErrorMessage}
            </p>
            <label
              className=" w-[64px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
              htmlFor="phoneNumber">전화번호</label
            >
            <div
              className={`mt-[10px] 
              mb-[${phoneErrorMessage ? '3px' : '26px'}] 
              flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]`}
            >
              <input
                type="tel"
                onInput={(event) => {
                  setPhoneNum(
                    event.currentTarget.value
                      .replace(/[^0-9]/g, "")
                      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
                  );
                }}
                maxLength={13}
                id="phoneNumber"
                className="w-full flex-grow-0 flex-shrink-0 font-['PRETENDARD-LIGHT'] text-base text-left text-[#7f7f7f] dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
                placeholder="전화번호를 입력해주세요."
              />
            </div>
            <p
              className="mb-[10px] font-['PRETENDARD-REGULAR'] font- text-[11px] text-left text-[#d64142]"
            >
              {phoneErrorMessage}
            </p>

            <label
              className=" w-[127px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
              htmlFor="message">한 마디 남기기</label
            >
            <div
              className={`mt-[10px] 
              mb-[${awordErrorMessage ? '3px' : '26px'}] 
              flex justify-start items-start w-[339px] h-24 relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]`}
            >
              <textarea
                id="message"
                onInput={(e) => setAWord(e.currentTarget.value)}
                className="w-full flex-grow-0 font-['PRETENDARD-LIGHT'] flex-shrink-0 text-base text-left text-[#7f7f7f] dark:[#7f7f7f] bg-transparent border-none focus:outline-none resize-none"
                placeholder="자유롭게 한 마디를 남겨주세요."
              ></textarea>
            </div>
            <p className="font-['PRETENDARD-REGULAR'] text-[11px] text-left text-[#d64142]">
              {awordErrorMessage}
            </p>
            <button
              type="submit"
              className="mt-[63px] flex justify-center items-center relative overflow-hidden px-[136px] py-3.5 rounded-3xl bg-[#333] flex-grow-0 flex-shrink-0 font-['PRETENDARD-SEMIBOLD'] active:scale-95 text-[18px] text-center text-neutral-200"
            >
              지원하기
            </button>
          </form>
        </div>

        <CompleteModal
          isVisible={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </div>
    </div >
  )
}

export default index