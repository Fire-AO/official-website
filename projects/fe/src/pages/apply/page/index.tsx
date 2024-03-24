import { Link, ScrollRestoration } from "react-router-dom"
import CompleteModal from "./components/CompleteModal"
import { useState } from "react";
import { Helmet } from "react-helmet";
import ao from "@/common/assets/images/AO-symbol.png";

const index = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [phoneNum1, setPhoneNum1] = useState('010');
  const [phoneNum2, setPhoneNum2] = useState('');
  const [phoneNum3, setPhoneNum3] = useState('');
  const [aWord, setAWord] = useState('');
  const [stuIdErrorMessage, setStuIdErrorMessage] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [awordErrorMessage, setAwordErrorMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCodeErrorMessage, setVerificationErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [modalText, setModalText] = useState('');
  const [sentVerificationCode, setSentVerificationCode] = useState(false);

  const resetForm = () => {
    setStudentId('');
    setName('');
    setAWord('');
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("학번:", studentId);
    console.log("이름:", name);
    console.log("한 마디:", aWord);

    if (isVerified === true) {
      setModalText("지원이 완료되었습니다.")
      setVerificationErrorMessage("");
      fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: studentId,
          name,
          phoneNum: `${phoneNum1}-${phoneNum2}-${phoneNum3}`,
          aWord,
          verificationCode: verificationCode,
        }),
      })
        .then((res) => {
          console.log(res);
          if (res.status === 400) {
            return res.json();
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
            if (
              json.verificationCodeErrorMessage !== undefined &&
              json.verificationCodeErrorMessage !== null &&
              json.verificationCodeErrorMessage !== ""
            ) {
              setVerificationErrorMessage(json.verificationCodeErrorMessage);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    else {
      setVerificationErrorMessage("전화번호 인증을 해주세요.");
    }
  }

  return (
    <>
      <ScrollRestoration />

      <div className="w-full min-h-screen bg-white dark:bg-black px-4 flex flex-col items-center">
        {/* <ApplyMain /> */}
          <Link
            to="/"
            className="w-full text-center border-b border-[#0d0d0d] mb-[42px] py-[11px] mx-auto text-black dark:text-white font-['Montserrat'] font-black text-3xl"
          >
            Fire AO
          </Link>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-[339px]"
        >
          <label
            className="w-[32px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
            htmlFor="studentId">학번</label>
          <div
            className={`mt-[6px] 
              mb-[${stuIdErrorMessage ? '3px' : '26px'}]
              flex justify-start items-center w-[339px] h-[47px] relative  px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0d0d0d]`}
          >
            <input
              type="text"
              id="studentId"
              onInput={(e) => setStudentId(e.currentTarget.value)}
              className="flex-grow-0 w-full flex-shrink-0 font-['PRETENDARD-LIGHT'] text-base text-left text-neutral-500 dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
              placeholder="학번을 입력해주세요."
            />
          </div>
          <p className="font-['PRETENDARD-REGULAR'] mb-[10px] text-[11px] text-left text-[#d64142]">
            {stuIdErrorMessage}
          </p>
          <label
            className=" font-['PRETENDARD-SEMIBOLD'] w-[32px] text-base text-left text-[#000] dark:text-[#CCC]"
            htmlFor="name">이름</label>
          <div
            className={`mt-[6px] 
                mb-[${nameErrorMessage ? '3px' : '26px'}]
               flex justify-start items-center w-[339px] h-[47px] [relative  px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]`}
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
                if (isVerified === true) {
                  e.currentTarget.value = phoneNum1;
                }
                else {
                  if (e.currentTarget.value.length <= 3) {
                    console.log(e.currentTarget.value.length)
                    setPhoneNum1(e.currentTarget.value)
                  }
                  else {
                    e.currentTarget.value = phoneNum1
                  }
                }
              }}
            />
            -
            <input className="bg-[#CCC] dark:bg-[#0d0d0d] w-1/3 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
              placeholder="1234"
              onInput={(e) => {
                if (isVerified === true) {
                  e.currentTarget.value = phoneNum2;
                }
                else {
                  if (e.currentTarget.value.length <= 4)
                    setPhoneNum2(e.currentTarget.value)
                  else
                    e.currentTarget.value = phoneNum2
                }
              }}
            />
            -
            <input className="bg-[#CCC] dark:bg-[#0d0d0d] w-1/3 rounded text-center focus:outline-none py-1 text-neutral-500 dark:[#7f7f7f]"
              placeholder="5678"
              onInput={(e) => {
                if (isVerified === true) {
                  e.currentTarget.value = phoneNum2;
                }
                else {
                  if (e.currentTarget.value.length <= 4)
                    setPhoneNum3(e.currentTarget.value)
                  else
                    e.currentTarget.value = phoneNum3
                }
              }}
            />
          </div>
          <button className="bg-[#333] active:scale-95 w-full mt-3 rounded-3xl py-2 text-neutral-200 px-2 active:bg-[#555]"
            onClick={() => {
              fetch("https://api.shallwes.com/dev/auth/send-one/test", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  receivePhoneNumber: phoneNum1 + phoneNum2 + phoneNum3,
                }),
              })
                .then((res) => {
                  if (res.ok) {
                    setModalText("인증번호가 전송 되었습니다.")
                    setModalOpen(true);
                    setSentVerificationCode(true);
                  }
                  else {
                    setModalText("인증번호 전송이 실패되었습니다.")
                    setModalOpen(true);
                  }
                })
                .catch((err) => {
                  console.error(err);
                  setModalText("인증번호 전송이 실패되었습니다.")
                  setModalOpen(true);
                });
            }}>
            인증번호 받기
          </button>
          <p
            className="mb-[50px] font-['PRETENDARD-REGULAR'] font- text-[11px] text-left text-[#d64142]"
          >
            {phoneErrorMessage}
          </p>

          <div className="flex flex-col mt-[30px]">
            <label
              className="text-nowrap font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC] focus:outline-none"
              htmlFor="phoneNumber">
              전화번호 인증
            </label>
            <input
              className="mt-[6px] bg-[#CCC] dark:bg-[#0d0d0d] rounded-lg py-2 pl-2 focus:outline-none text-neutral-500 dark:[#7f7f7f]"
              placeholder="인증번호를 입력해주세요."
              onInput={(e) => {
                if (isVerified === true) {
                  e.currentTarget.value = verificationCode;
                }
                else {
                  if (e.currentTarget.value.length <= 6)
                    setVerificationCode(e.currentTarget.value)
                  else
                    e.currentTarget.value = verificationCode
                }
              }}
            />
            <button
              className="bg-[#333] active:bg-[#555] text-neutral-200 active:scale-95 w-full mt-3 rounded-3xl py-2 "
              onClick={() => {
                if (sentVerificationCode === false) {
                  setModalText("인증번호를 먼저 받아주세요.")
                  setModalOpen(true);
                }
                else {
                  if (isVerified === false) {
                    fetch("https://api.shallwes.com/dev/auth/valid-verification-code",
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
                          setIsVerified(true);
                          setModalText("인증이 완료되었습니다.")
                          setModalOpen(true);
                        }
                        else {
                          setIsVerified(false);
                          setModalText("인증이 실패되었습니다.")
                          setModalOpen(true);
                        }
                      })
                      .catch((err) => {
                        console.error(err);
                        setIsVerified(false);
                        setModalText("인증 실패되었습니다.")
                        setModalOpen(true);
                      })
                  }
                  else {
                    setModalText("이미 인증이 완료되었습니다.")
                    setModalOpen(true);
                  }
                }
              }}
            >
              인증번호 확인
            </button>

            <p
              className="font-['PRETENDARD-REGULAR'] mb-[10px] text-[11px] text-left text-[#d64142]"
            >
              {verificationCodeErrorMessage}
            </p>

          </div>

          <label
            className="inline-block mt-[50px] w-[127px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
            htmlFor="message">한 마디 남기기</label
          >
          <div
            className={`mt-[10px] 
                mb-[${awordErrorMessage ? '3px' : '26px'}] 
                flex justify-start items-start w-[339px] h-24 relative  px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]`}
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
            className="my-[50px] flex justify-center items-center relative  px-[136px] py-3.5 rounded-3xl bg-[#333] flex-grow-0 flex-shrink-0 font-['PRETENDARD-SEMIBOLD'] active:scale-95 text-[18px] text-center active:bg-[#555] text-neutral-200"
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