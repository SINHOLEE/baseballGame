import { get3RandomNumArr } from "./utils.js";

function BaseballGame() {
	this.res = {};
	this.computerNumArr = null;

	this.resetComputerNumArr = function () {
		this.computerNumArr = get3RandomNumArr();
	};

	this.getComputerNumArr = function () {
		return this.computerNumArr;
	};

	this.match = function (num1, num2) {
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
	};

	this.isNothing = function () {
		return this.res.nothing === 3 ? true : false;
	};

	this.isRight = function () {
		return this.res.strike === 3 ? true : false;
	};

	this.play = function (
		userInputNumbers,
		computerInputNumbers = this.getComputerNumArr()
	) {
		const result = this.match(computerInputNumbers, userInputNumbers);
		this.res = result;
		if (this.isNothing()) {
			return "낫싱";
		}
		if (this.isRight()) {
			return "🎉정답을 맞추셨습니다.🎉";
		}
		let returnString = "";
		returnString += result.ball > 0 ? `${result.ball}볼 ` : "";
		returnString += result.strike > 0 ? `${result.strike}스트라이크` : "";
		return returnString;
	};
}

export const baseball = new BaseballGame();
