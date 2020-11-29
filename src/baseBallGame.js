import { getNthRandomNumbers } from "./utils.js";

function BaseballGame() {
	this.res = {};
	this.inputBucket = [];
	this.computerNumbers = null;

	this.insertInputBucket = function (value) {
		this.inputBucket.push(value);
	};

	this.getLastUserInput = function () {
		return this.inputBucket[this.getCountInputBucket() - 1];
	};

	this.getCountInputBucket = function () {
		return this.inputBucket.length;
	};
	this.resetComputerNumbers = function () {
		this.computerNumbers = getNthRandomNumbers(3);
	};

	this.getComputerNumbers = function () {
		return this.computerNumbers;
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
		computerInputNumbers = this.getComputerNumbers()
	) {
		this.insertInputBucket(userInputNumbers);
		const result = this.match(computerInputNumbers, userInputNumbers);
		this.res = result;
		if (this.isNothing()) {
			const returnString = "낫싱";
			return returnString;
		}
		if (this.isRight()) {
			const returnString = "🎉정답을 맞추셨습니다.🎉";
			return returnString;
		}
		let returnString = "";
		returnString += result.ball > 0 ? `${result.ball}볼 ` : "";
		returnString += result.strike > 0 ? `${result.strike}스트라이크` : "";
		return returnString;
	};
}

export const baseball = new BaseballGame();
