// The goal is to putput numbers that are odd

var nums - [1, 32, 55, 96, 12, 66, 43, 81];

for(var i = 0; i < nums.length; i++) {
	if(nums[i] % 2 !== 0) {
		console.log(nums[i] + " is odd");
	}
}