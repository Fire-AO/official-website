import { useState } from "react";
import { Link } from "react-router-dom";

function Apply() {
  // 폼 데이터와 모달 상태를 useState로 관리
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    phoneNumber: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // 성공 모달 상태
  const [failModalOpen, setFailModalOpen] = useState(false); // 실패 모달 상태
  const openSuccessModal = () => {
    setIsModalOpen(true);
  };
  const openFailModal = () => {
    setFailModalOpen(true);
  };
  const closeModals = () => {
    setIsModalOpen(false);
    setFailModalOpen(false);
  };
  // 폼 제출 이벤트 처리
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // 제출시 새로고침 방지

    for (const key in formData) {
      if (!formData[key]) {
        openFailModal(); // 빈 필드가 있으면 실패 모달을 엽니다.
        return;
      }
    }

    // 학번, 이름, 전화번호, 메시지 등 유효성 검사를 진행합니다.
    if (formData.studentId.length !== 8) {
      alert("학번은 8자리여야 합니다.");
      return;
    }

    if (!formData.studentId.startsWith("60")) {
      alert("학번은 60으로 시작해야 합니다.");
      return;
    }

    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(formData.name);
    if (!isKorean) {
      alert("이름은 한글이어야 합니다.");
      return;
    }

    if (formData.name.length > 4 || formData.name.length < 2) {
      alert("이름은 2글자에서 4글자 사이여야합니다.");
      return;
    }

    if (formData.phoneNumber.length !== 11) {
      alert("전화번호는 11자리여야 합니다.");
      return;
    }

    const phoneNumber = formData.phoneNumber;
    const formattedPhoneNumber = `${phoneNumber.slice(
      0,
      3
    )}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;

    const outputFormData = {
      StudentId: formData.studentId,
      Name: formData.name,
      PhoneNumber: formattedPhoneNumber,
      Message: formData.message,
    };

    // fetch 요청을 보냅니다.

    {
      try {
        const response = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(outputFormData),
        });
        {
          /*
if (response.ok) {
          openSuccessModal(); // 성공 모달을 엽니다.
        } else {
          openFailModal(); // 실패 모달을 엽니다.
        }

      */
        }
        openSuccessModal(); // 성공 모달을 엽니다.
      } catch (error) {
        alert("네트워크 환경을 확인해주세요.");
      }
    }
  };

  // 각 입력 필드 변경사항 처리, formData 상태 업데이트
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    closeModals();
  };

  // 실패 모달 닫기 함수
  const handleCloseFailModal = () => {
    closeModals();
  };

  return (
    <>
      {/* 모달 컴포넌트는 페이지 루트 바깥에 위치해야 합니다. */}
      {isModalOpen && (
        <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center text-center bg-black bg-opacity-50">
          <div className="w-[87vw] h-[16vh] pt-6 rounded-[15px] bg-[#262626]">
            <h2 className="text-xl text-white">성공적으로 지원 되었습니다!</h2>
            <div className="flex justify-between">
              <button
                onClick={handleCloseModal}
                className="mt-4 ml-3 p-2 bg-white rounded-[15px] w-[40vw] text-black font-bold"
              >
                취소
              </button>
              <Link
                to="/"
                className="mt-4 mr-3 p-2 bg-[#21ECC7] rounded-[15px] w-[40vw] text-black font-bold"
              >
                확인
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 실패 모달 */}
      {failModalOpen && (
        <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center text-center bg-black bg-opacity-50">
          <div className="w-[87vw] h-[16vh] pt-6 rounded-[15px] bg-[#262626]">
            <h2 className="text-xl text-white">
              지원서를 다시 한번 확인 해주세요.
            </h2>
            <button
              onClick={handleCloseFailModal}
              className="mt-4 p-2 bg-[#21ECC7] rounded-[15px] w-[60vw] text-black font-bold"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* 폼 컴포넌트 */}
      <div className="flex w-screen h-[110dvh] flex-col bg-black">
        <header>
          <div className="text-center p-3 relative text-white text-xl font-bold font-['Paytone One']">
            Fire AO
          </div>
          <div className="relative border border-stone-300 border-opacity-50"></div>
        </header>
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="p-7 relative flex flex-col justify-between">
              <div>
                <div className="relative text-white text-3xl font-black font-['Pretendard']">
                  Fire AO
                </div>
                <div className="relative text-white text-[15px] font-semibold font-['Pretendard']">
                  지원하기
                </div>
              </div>
              <div>
                <div className="pt-5 pb-2 relative text-white text-[15px] font-semibold font-['Pretendard']">
                  학번
                </div>
                <input
                  className="pl-3 w-[87vw] h-[5vh] relative rounded-[15px] bg-stone-950 shadow placeholder-zinc-300 text-zinc-300 text-xs font-light font-['Pretendard']"
                  type="number"
                  placeholder="학번을 입력해주세요."
                  value={formData.studentId}
                  onChange={handleInputChange}
                  name="studentId"
                />
              </div>
              <div>
                <div className="pt-5 pb-2 relative text-white text-[15px] font-semibold font-['Pretendard']">
                  이름
                </div>
                <input
                  className="pl-3 w-[87vw] h-[5vh] relative rounded-[15px] bg-stone-950 shadow placeholder-zinc-300 text-zinc-300 text-xs font-light font-['Pretendard']"
                  type="text"
                  placeholder="이름을 입력해주세요."
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
              <div>
                <div className="pt-5 pb-2 relative text-white text-[15px] font-semibold font-['Pretendard']">
                  전화번호
                </div>
                <input
                  className="pl-3 w-[87vw] h-[5vh] relative rounded-[15px] bg-stone-950 shadow placeholder-zinc-300 text-zinc-300 text-xs font-light font-['Pretendard']"
                  type="number"
                  placeholder="전화번호를 숫자만 입력해주세요."
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  name="phoneNumber"
                />
              </div>
              <div>
                <div className="pt-5 pb-2 relative text-white text-[15px] font-semibold font-['Pretendard']">
                  한 마디 남기기
                </div>
                <textarea
                  id="message"
                  rows="4"
                  className="pt-3 pl-3 mb-20 w-[87vw] h-[15vh] relative rounded-[15px] bg-stone-950 shadow placeholder-zinc-300 text-zinc-300 text-xs font-light font-['Pretendard']"
                  placeholder="자유롭게 한마디를 남겨 주세요."
                  value={formData.message}
                  onChange={handleInputChange}
                  name="message"
                ></textarea>
              </div>
              <div className="w-[87vw] h-[6vh] mt-5 flex flex-col justify-center hover:bg-[#21ECC7] bg-zinc-800 rounded-[15px] backdrop-blur-sm text-white text-base font-extrabold font-['Pretendard']">
                <button type="submit">지원하기</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Apply;
