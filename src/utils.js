function getRandomInt() {
	return Math.floor(Math.random() * 9) + 1;
}

export function get3RandomNumArr() {
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

export function stringToNumsArr(str) {
	const nums = str.split("");
	return nums.map((num) => parseInt(num));
}

export function isInputValidated(value) {
	if (value === "") {
		return true;
	}
	const regexp = /^[1-9]*$/;
	if (!regexp.test(value)) {
		alert("숫자가 아닙니다. 다시입력해주세요.");

		return true;
	}
	if (value.length !== 3) {
		alert("3자리 숫자를 입력하십시오.");
		return true;
	}
	const userInputNums = stringToNumsArr(value);
	if (
		userInputNums[0] === userInputNums[1] ||
		userInputNums[1] === userInputNums[2] ||
		userInputNums[0] === userInputNums[2]
	) {
		alert("서로 다른 숫자를 입력해 주십시오오.");
		return true;
	}
	return false;
}
