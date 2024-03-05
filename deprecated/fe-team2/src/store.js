import { writable } from "svelte/store";

export const showModal = writable(false);

const initialValue = localStorage.getItem('darkMode') !== null ? localStorage.getItem('darkMode') === 'true' : true;
export let checkNum = writable(1);

export const darkMode = writable(initialValue);

// 상태가 변경될 때마다 로컬 스토리지 업데이트
darkMode.subscribe((value) => {
  localStorage.setItem('darkMode', value);
});

