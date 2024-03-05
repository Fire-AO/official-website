<script>
  import { createEventDispatcher } from "svelte";
  import { showModal } from "../store";

  const hypenTel = (event) => {
    event.target.value = event.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  };

  const dispatch = createEventDispatcher();

  let stuIdErrorMessage = "";
  let nameErrorMessage = "";
  let phoneErrorMessage = "";
  let awordErrorMessage = "";

  let studentId = "";
  let name = "";
  let phoneNumber = "";
  let message = "";

  function handleSubmit() {
    if (
      studentId.trim() === "" ||
      name.trim() === "" ||
      phoneNumber.trim() === "" ||
      message.trim() === ""
    ) {
      return false;
    }
    // 여기에서 폼 데이터를 사용하여 필요한 작업 수행
    console.log("학번:", studentId);
    console.log("이름:", name);
    console.log("전화번호:", phoneNumber);
    console.log("한 마디:", message);

    return false;
  }

  function resetForm() {
    studentId = "";
    name = "";
    phoneNumber = "";
    message = "";
  }

  function handleClick() {
    stuIdErrorMessage = "";
    nameErrorMessage = "";
    phoneErrorMessage = "";
    awordErrorMessage = "";
    fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: studentId,
        name: name,
        phoneNum: phoneNumber,
        aWord: message,
        id: studentId,
        name: name,
        phoneNum: phoneNumber,
        aWord: message,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          return res.json(); //body에 있는 것을 js 객체로 바꿔서 반환. 반환값은 프로미스객체라 다시 받을수 있음.
        } else if (res.ok) {
          resetForm();
          showModal.set(true);
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
            stuIdErrorMessage = json.stuIdErrorMessage;
          }
          if (
            json.nameErrorMessage !== undefined &&
            json.nameErrorMessage !== null &&
            json.nameErrorMessage !== ""
          ) {
            nameErrorMessage = json.nameErrorMessage;
          }
          if (
            json.phoneNumErrorMessage !== undefined &&
            json.phoneNumErrorMessage !== null &&
            json.phoneNumErrorMessage !== ""
          ) {
            phoneErrorMessage = json.phoneNumErrorMessage;
          }
          if (
            json.aWordErrorMessage !== undefined &&
            json.aWordErrorMessage !== null &&
            json.aWordErrorMessage !== ""
          ) {
            awordErrorMessage = json.aWordErrorMessage;
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });

    dispatch("click");
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <!-- 학번 입력 -->
  <label
    class="w-[32px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
    for="studentId">학번</label
  >
  <div
    class="mt-[10px] mb-[{stuIdErrorMessage
      ? '3px'
      : '26px'}] flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0d0d0d]"
  >
    <input
      type="text"
      id="studentId"
      bind:value={studentId}
      class="flex-grow-0 w-full flex-shrink-0 font-['PRETENDARD-LIGHT'] text-base text-left text-neutral-500 dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="학번을 입력해주세요."
    />
  </div>
  <p
    class="font-['PRETENDARD-REGULAR'] mb-[10px] text-[11px] text-left text-[#d64142]"
  >
    {stuIdErrorMessage}
  </p>
  <label
    class=" font-['PRETENDARD-SEMIBOLD'] w-[32px] text-base text-left text-[#000] dark:text-[#CCC]"
    for="name">이름</label
  >
  <div
    class="mt-[10px] mb-[{nameErrorMessage
      ? '3px'
      : '26px'}] flex justify-start items-center w-[339px] h-[47px] [relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]"
  >
    <input
      type="text"
      id="name"
      bind:value={name}
      class="flex-grow-0 flex-shrink-0 w-full font-['PRETENDARD-LIGHT'] text-base text-left text-neutral-500 dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="이름을 입력해주세요."
    />
  </div>
  <p
    class="mb-[10px] font-['PRETENDARD-REGULAR'] text-[11px] text-left text-[#d64142]"
  >
    {nameErrorMessage}
  </p>
  <label
    class=" w-[64px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
    for="phoneNumber">전화번호</label
  >
  <div
    class="mt-[10px] mb-[{phoneErrorMessage
      ? '3px'
      : '26px'}] flex justify-start items-center w-[339px] h-[47px] relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]"
  >
    <input
      type="tel"
      on:input={hypenTel}
      maxlength="13"
      id="phoneNumber"
      bind:value={phoneNumber}
      class="w-full flex-grow-0 flex-shrink-0 font-['PRETENDARD-LIGHT'] text-base text-left text-[#7f7f7f] dark:[#7f7f7f] bg-transparent border-none focus:outline-none"
      placeholder="전화번호를 입력해주세요."
    />
  </div>
  <p
    class="mb-[10px] font-['PRETENDARD-REGULAR'] font- text-[11px] text-left text-[#d64142]"
  >
    {phoneErrorMessage}
  </p>

  <label
    class=" w-[127px] font-['PRETENDARD-SEMIBOLD'] text-base text-left text-[#000] dark:text-[#CCC]"
    for="message">한 마디 남기기</label
  >
  <div
    class="mt-[10px] mb-[{awordErrorMessage
      ? '3px'
      : '26px'}] flex justify-start items-start w-[339px] h-24 relative overflow-hidden px-3.5 py-3 rounded-lg bg-[#dcdcdc] dark:bg-[#0D0D0D]"
  >
    <textarea
      id="message"
      bind:value={message}
      class="w-full flex-grow-0 font-['PRETENDARD-LIGHT'] flex-shrink-0 text-base text-left text-[#7f7f7f] dark:[#7f7f7f] bg-transparent border-none focus:outline-none resize-none"
      placeholder="자유롭게 한 마디를 남겨주세요."
    ></textarea>
  </div>
  <p class="font-['PRETENDARD-REGULAR'] text-[11px] text-left text-[#d64142]">
    {awordErrorMessage}
  </p>
  <!-- "지원하기" 버튼 -->
  <button
    type="submit"
    on:click={handleClick}
    class="mt-[63px] flex justify-center items-center relative overflow-hidden px-[136px] py-3.5 rounded-3xl bg-[#333] flex-grow-0 flex-shrink-0 font-['PRETENDARD-SEMIBOLD'] active:scale-95 text-[18px] text-center text-neutral-200"
    >지원하기</button
  >
</form>
