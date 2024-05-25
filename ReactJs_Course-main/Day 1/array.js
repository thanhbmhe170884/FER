/* Phương thức xử lý mảng (array) phổ biến trong JavaScript mà người ta thường sử dụng:

push: Thêm một phần tử mới vào cuối mảng.
VD:
const array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]
pop: Xóa phần tử cuối cùng của mảng và trả về giá trị đó.
VD:
const array = [1, 2, 3];
const lastElement = array.pop();
console.log(array); // [1, 2]
console.log(lastElement); // 3

shift: Xóa phần tử đầu tiên của mảng và trả về giá trị đó.
VD:
const array = [1, 2, 3];
const firstElement = array.shift();
console.log(array); // [2, 3]
console.log(firstElement); // 1

unshift: Thêm một phần tử mới vào đầu mảng.
VD:
const array = [1, 2, 3];
array.unshift(0);
console.log(array); // [0, 1, 2, 3]

concat: Kết hợp hai mảng lại với nhau để tạo một mảng mới.
VD:
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2);
console.log(newArray); // [1, 2, 3, 4]

slice: Sao chép một phần của mảng và trả về một mảng mới.
VD:
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 4);
console.log(newArray); // [2, 3, 4]

splice: Thay đổi nội dung của mảng bằng cách xóa, thêm hoặc thay thế phần tử.
VD:
const array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Xóa 1 phần tử từ vị trí có chỉ số 2
console.log(array); // [1, 2, 4, 5]
array.splice(1, 0, 'a', 'b'); // Thêm 'a' và 'b' vào vị trí có chỉ số 1
console.log(array); // [1, 'a', 'b', 2, 4, 5]
array.splice(4, 2, 'x', 'y', 'z'); // Thay thế 2 phần tử từ vị trí có chỉ số 4 bằng 'x', 'y' và 'z'
console.log(array); // [1, 'a', 'b', 2, 'x', 'y', 'z']

forEach: Thực hiện một hành động cho từng phần tử trong mảng.
const array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
// Output:
// 1
// 2
// 3

map: Tạo một mảng mới bằng cách thực hiện một hàm trên từng phần tử của mảng gốc.
const array = [1, 2, 3];
const newArray = array.map((element) => {
  return element * 2;
});
console.log(newArray); // [2, 4, 6]

*/