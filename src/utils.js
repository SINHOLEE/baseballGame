function getRandomInt() {
	return Math.floor(Math.random() * 9) + 1;
}

export function getNthRandomNumbers(n) {
	let nums = "";
	for (let i = 0; i < n; i++) {
		while (1) {
			const randomNum = getRandomInt();
			if (!nums.includes(randomNum)) {
				nums += randomNum.toString();
				break;
			}
		}
	}
	return nums;
}

// export function stringToNumsArr(str) {
// 	const nums = str.split("");
// 	return nums.map((num) => parseInt(num));
// }

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
	// const userInputNums = stringToNumsArr(value);
	if (value[0] === value[1] || value[1] === value[2] || value[0] === value[2]) {
		alert("서로 다른 숫자를 입력해 주십시오오.");
		return true;
	}
	return false;
}
