export default function BaseballGame() {
	this.play = function (computerInputNumbers, userInputNumbers) {
		console.log("play");
		console.log(match(computerInputNumbers, userInputNumbers));
		return "결과 값 String";
	};
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

const baseball = new BaseballGame();

const form = document.querySelector("form");
const userInput = document.getElementById("user-input");
function match(num1, num2) {
	const result = { ball: 0, strike: 0, nothing: 0 };
	for (let i = 0; i < num1.length; i++) {
		if (num1[i] === num2[i]) {
			result.strike++;
		} else if (num1.includes(num2[i])) {
			result.ball++;
		} else {
			result.nothing++;
		}
	}
	return result;
}

function getRandomInt() {
	return Math.floor(Math.random() * 9) + 1;
}

function get3RandomNums() {
	const nums = [];
	for (let i = 0; i < 3; i++) {
		while (1) {
			const randomNum = getRandomInt();
			if (!nums.includes(randomNum)) {
				nums.push(randomNum);
				break;
			}
		}
	}
	return nums;
}

function stringTo3NumsArr(str) {
	const nums = str.split("");
	return nums.map((num) => parseInt(num));
}
const computer = get3RandomNums();
function onSubmit(e) {
	e.preventDefault();
	console.log(e);
	if (userInput.value === "") {
		return;
	}
	var regexp = /^[0-9]*$/;
	if (!regexp.test(userInput.value)) {
		alert("숫자가 아닙니다. 다시입력해주세요.");
		userInput.value = "";

		return;
	}
	if (userInput.value.length !== 3) {
		alert("3자리 숫자를 입력하십시오.");
		userInput.value = "";
		return;
	}
	const userInputNums = stringTo3NumsArr(userInput.value);
	if (
		userInputNums[0] === userInputNums[1] ||
		userInputNums[1] === userInputNums[2] ||
		userInputNums[0] === userInputNums[2]
	) {
		alert("서로 다른 숫자를 입력해 주십이오.");
		userInput.value = "";
		return;
	}

	console.log(userInput.value.length);
	console.log("reg ", regexp.test(userInput.value));
	console.log("computer", computer);
	baseball.play(computer, stringTo3NumsArr(userInput.value));
	userInput.value = "";
}

form.addEventListener("submit", onSubmit);
