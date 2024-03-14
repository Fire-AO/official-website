import { Link, ScrollRestoration } from "react-router-dom"
import CompleteModal from "./components/CompleteModal"
import { useState } from "react";
import { Helmet } from "react-helmet";
import ao from "@/common/assets/images/AO-symbol.png";

const index = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [phoneNum1, setPhoneNum1] = useState('');
  const [phoneNum2, setPhoneNum2] = useState('');
  const [phoneNum3, setPhoneNum3] = useState('');
  const [aWord, setAWord] = useState('');
  const [stuIdErrorMessage, setStuIdErrorMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [awordErrorMessage, setAwordErrorMessage] = useState('');
  const [isVerified] = useState(false);
  const [verifiedErrorMessage, setVerifiedErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [modalText] = useState('');

  const resetForm = () => {
    setStudentId('');
    setName('');
    setPhoneNum('');
    setAWord('');
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("학번:", studentId);
    console.log("이름:", name);
    console.log("전화번호:", phoneNum);
    console.log("한 마디:", aWord);

    if (isVerified === true) {
      setVerifiedErrorMessage("");
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
    else {
      setVerifiedErrorMessage("전화번호 인증을 해주세요.");
    }
  }


  return (
    <>
      <ScrollRestoration />

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
              onSubmit={(e) => e.preventDefault()}
            >
              <label
                className="w-[32px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
                htmlFor="studentId">학번</label>
              <div
                className={`mt-[6px] 
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
                className={`mt-[6px] 
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
                htmlFor="phoneNumber">전화번호
              </label>
              <div className="mt-[6px] flex flex-row gap-1 w-[339px] text-[#000] dark:text-[#CCC]">
                <input className="bg-[#CCC] dark:bg-[#0d0d0d] w-1/4 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
                  placeholder="010"
                  onInput={(e) => {
                    if (e.currentTarget.value.length <= 3) {
                      console.log(e.currentTarget.value.length)
                      setPhoneNum1(e.currentTarget.value)
                    }
                    else {
                      e.currentTarget.value = phoneNum1
                    }
                  }}
                />
                -
                <input className="bg-[#CCC] dark:bg-[#0d0d0d] w-1/3 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
                  placeholder="1234"
                  onInput={(e) => {
                    if (e.currentTarget.value.length <= 4)
                      setPhoneNum2(e.currentTarget.value)
                    else
                      e.currentTarget.value = phoneNum2
                  }}
                />
                -
                <input className="bg-[#CCC] dark:bg-[#0d0d0d] w-1/3 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
                  placeholder="5678"
                  onInput={(e) => {
                    if (e.currentTarget.value.length <= 4)
                      setPhoneNum3(e.currentTarget.value)
                    else
                      e.currentTarget.value = phoneNum3
                  }}
                />
              </div>
              <button className="bg-[#333] w-full mt-3 rounded-3xl py-2 text-neutral-200 px-2"
                onClick={() => {
                  fetch("https://api.fireao.com/dev/auth/send-one/test", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      receivePhoneNumber: phoneNum1 + phoneNum2 + phoneNum3,
                    }),
                  })
                    .catch((err) => {
                      console.error(err);
                    });
                }}>
                인증번호 받기
              </button>
              <p
                className="mb-[10px] font-['PRETENDARD-REGULAR'] font- text-[11px] text-left text-[#d64142]"
              >
                {phoneErrorMessage}
              </p>
              {/* https://api.fireao.com/dev/auth/valid-verification-code */}
              <div className="flex flex-col mt-[30px]">
                <label
                  className="text-nowrap w-[64px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC] focus:outline-none"
                  htmlFor="phoneNumber">
                  전화번호 인증
                </label>
                <input
                  className="bg-[#CCC] dark:bg-[#0d0d0d] rounded-lg py-2 pl-2 focus:outline-none"
                  onInput={(e) => setVerificationCode(e.currentTarget.value)}
                />
                <button
                  className="bg-[#333] w-full mt-3 rounded-3xl py-2 text-neutral-200"
                  onClick={() => {
                    fetch("https://api.fireao.com/dev/auth/valid-verification-code",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          verificationCode: verificationCode,
                          phoneNumber: phoneNum1 + phoneNum2 + phoneNum3,
                        })
                      })
                      .then((res) => {
                        if (res.ok) {
                          console.log("인증 성공");
                        }
                        else {
                          console.log("인증 실패");
                        }
                      })
                  }}
                >
                  인증번호 확인
                </button>
                <div className="h-[40px] w-full">
                  {verifiedErrorMessage && <p className="text-[#d64142]">{verifiedErrorMessage}</p>}
                </div>
              </div>

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
                  className="w-full flex-grow-0 font-['PRETENDARD-LIGHT'] flex-shrink-0 text-base text-left text-[#7f7f7f] dark:[#7f7f7f] bg-transparent border-none :focusoutline-none resize-none"
                  placeholder="자유롭게 한 마디를 남겨주세요."
                ></textarea>
              </div>
              <p className="font-['PRETENDARD-REGULAR'] text-[11px] text-left text-[#d64142]">
                {awordErrorMessage}
              </p>
              <button
                type="submit"
                className="mt-[63px] flex justify-center items-center relative overflow-hidden px-[136px] py-3.5 rounded-3xl bg-[#333] flex-grow-0 flex-shrink-0 font-['PRETENDARD-SEMIBOLD'] active:scale-95 text-[18px] text-center text-neutral-200"
                onClick={handleSubmit}
              >
                지원하기
              </button>
            </form>
          </div>

          <CompleteModal
            isVisible={modalOpen}
            onClose={() => setModalOpen(false)}
            text={modalText}
          />
        </div>
      </div >

      <Helmet>
        <title>Apply | Fire AO</title>
        <link rel="canonical" href={`/apply`} />
        <meta name="description" content="Fire AO apply" />
        <meta name="keywords" content={`fire, AO, Myongji, Univ., MJ, computer, science, major, apply`} />
        <meta name="author" content="FireAO" />/

        <meta property="og:title" content="apply | Fire AO" />
        <meta property="og:description" content="Fire AO apply" />
        <meta property="og:image" content={ao} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fire AO" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:url" content={`/apply`} />

        <meta name="twitter:title" content={`apply | Fire AO`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={'Fire AO apply'} />
        <meta name="twitter:image" content={ao} />
      </Helmet>
    </>
  )
}

export default index