// Kiểu dữ liệu String

//cách khai báo kiểu dữ liệu string
var q = "Hello";

var d = "hello";

var a = `hello ${q} ${d}`;

// toán tử trong string

console.log(a + " " + d + " " + q);

// escape sequences in string

// \n: xuống dòng
// \t : = 8 kí tự
// \'
// \"
// \\

console.log("Day 22\n04\t2001");

// khai báo biến a =
// khai báo biến b =
// "THe sum of two number {bieens a} and {biến b} is: kết quả"

// kiểm tra độ dài của chuỗi
a.length;

// index trong string
// Giống như trong array index trong string cũng sẽ bằng chiều dài của string - 1 ví dụ string a có chiều dài n thì idnex cuối cùng sẽ bằng n -1

const string = `The sum of two number 2 and 3 is: 5`;

//phần tử cuối cùng trong string
string[string.length - 1];

//phần tử đầu 
string[0]


// viết hoa 
string.toUpperCase();

//vuieets thường
string.toLowerCase();

// xóa khoảng trắng
string.trim();

// formal case string for search 
string.toLowerCase().trim();

// cắt chuỗi đối số thứ nhất là vị trí index bắt đầu, đối số thứ 2 là vị trí index+ 1 kết thúc
string.substring(1, 4)

// chuyển string ->  array đối số là kí tự cần được phân tách
string.split()

//includes kiểm cha substring có trong string hay không
string.includes("")

// indexOf kiểm cha substring có trong string hay không và trả lại kết quả là ví trí kí tự đầu tiên của substring
string.indexOf("")

//concat string nối chuỗi
string.concat("")

//replace tìm kiếm string đó sau đó thay thế nó đi
string.replace()
string.replaceAll()