import { baseball } from "./baseBallGame.js";
import { isInputValidated } from "./utils.js";

const form = document.querySelector("form");
const userInput = document.getElementById("user-input");
const result = document.getElementById("result");

function init() {
	result.innerHTML = null;
	userInput.value = "";
	baseball.resetComputerNumbers();
}
function onClick() {
	init();
}
const board = document.createElement("div");

function onSubmit(e) {
	e.preventDefault();
	if (isInputValidated(userInput.value)) {
		userInput.value = "";
		return;
	}
	// 기존 데이터 삭제
	result.innerHTML = null;
	const resultString = baseball.play(userInput.value);

	const span = document.createElement("span");
	span.innerText = resultString;
	// 결과 기록
	const round = baseball.getCountInputBucket();
	const lastUserInput = baseball.getLastUserInput();
	// 직전 입력 값: 123
	// 현재 round: 3 번째
	const boardString = `<div>직전 입력 값: ${lastUserInput} </div><div>현재 round : ${round}</div>`;
	result.innerHTML = boardString;

	result.appendChild(span);

	if (baseball.isRight()) {
		const button = document.createElement("button");
		button.innerText = "게임 재시작";
		button.addEventListener("click", onClick);
		result.appendChild(button);
	}
	userInput.value = "";
}

init();
form.addEventListener("submit", onSubmit);
