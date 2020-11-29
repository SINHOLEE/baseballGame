import { baseball } from "./baseBallGame.js";
import { isInputValidated, stringToNumsArr } from "./utils.js";

const form = document.querySelector("form");
const userInput = document.getElementById("user-input");
const result = document.getElementById("result");

function init() {
	result.innerHTML = null;
	userInput.value = "";
	baseball.resetComputerNumArr();
}
function onClick() {
	init();
}

function onSubmit(e) {
	e.preventDefault();
	if (isInputValidated(userInput.value)) {
		userInput.value = "";
		return;
	}
	// 기존 데이터 삭제
	result.innerHTML = null;
	const resultString = baseball.play(
		baseball.getComputerNumArr(),
		stringToNumsArr(userInput.value)
	);

	const span = document.createElement("span");
	span.innerText = resultString;
	result.appendChild(span);
	if (baseball.isRight()) {
		const button = document.createElement("button");
		button.innerText = "게임 재시작";
		button.addEventListener("click", onClick);
		result.appendChild(button);
	}
}

init();
form.addEventListener("submit", onSubmit);
