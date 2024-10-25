

//////////////////////////Rekursiv funksiyaga oid////////////////////////////////////

// 1
// let sum = 0;
// function test(arg){
//         if (arg == 0) {
//             returnarg;
//         }
    
//         console.log(sum += arg);
//         test(arg - 1)
        
//     }
    
//     test(5)




// 2
// function factorial(num){
//     if (num ==  1) {
//         return 1;
//     }

//     return num * factorial(num - 1)
// }

// console.log(factorial(5));


///////////////////////////Class ga oid.///////////////////////////


// 1
// class Car {
//     constructor(name, age, color){
//        this. name = name;
//        this.age = age;
//        this.color = color;
//     }
// }

// let Mercedes = new Car ('Mercedes', '2024', 'black')

// console.log(Mercedes);


// let car = {
//    name: "Mercedes",
//    age: 2024,
//    color: "black",
// }
// console.log(car);


// 2
// class Rectangle {
//     constructor (uzunlik, kenglik){
//         this.uzunlik = uzunlik;
//         this.kenglik = kenglik;
//     }

//     getArea() {
//         return this.uzunlik * this.kenglik;
//     }
// }
// const myRectangle = new Rectangle(5, 10); 
//  console.log( myRectangle.getArea());


/////////////////////////////String metodlariga oid.//////////////////////////
//  `charAt`

// 1

// let str = 'slalom'
// console.log(str.charAt(2));

// 2
// let str = 'slalom'
// console.log(str.charAt(5));

// 3
// let str = 'loop';

// for(let i = 0 ; i < str.length; i++){
//     console.log(str.charAt(i));
    
// }


//charCodeAt//

// 1
// let str = 'slalom';
// let index = 2;

// console.log(str.charCodeAt(index));


// 2
//  let str = 'slalom';
//  let arr = [];
// for (let i = 0; i < str.length; i++) {
//       arr.push(str.charCodeAt(i))
// }
// console.log(arr);


// 3
// let str = 'slalom';
// let index = 3;

// for (let i = index + 1; i <= index + 3 && i < str.length; i++) {
//     console.log( str.charCodeAt(i));
// }


// `at`

// 1
// let str = 'slalom'

// console.log(str.at(2));


// 2
// let str = 'salomm'; 
// let son = str.at(5);

// if (son !== undefined && typeof son === 'string') {
//     console.log('string');
// } else {
//     console.log('Berilgan indeks mavjud emas');
// }


//  `slice`

// 1
// let str = "nimadur";
// console.log(str.slice(2, 5));


// 2
// let str = "nimadur";
// console.log(str.slice(0, 3));

// 3
// let str = "nimadur kimdur";
// console.log(str.slice(-6));


// `substring`

// 1
// let str = "nimadur";

// let startIndex = 2; 
// let endIndex = 5;  

// let result = str.substring(startIndex, endIndex);
// console.log(result);


// 2
// let str = "nimadur";

// let startIndex = 3; 


// let result = str.substring(startIndex);
// console.log(result);


// 3

// let str = "MercedesBenz";

// let startIndex = 6; 


// let result = str.substring(startIndex);
// console.log(result);


// substr`

// 1
// let str = "MercedesBenz";
// console.log(str.substr(2, 3));


// 2
// let str = "MercedesBenz";
// console.log(str.substr(2, 5));

// 3
// let str = "MercedesBenz";
// console.log(str.substr(6, 10));


// `trim`, `trimStart`, `trimEnd`

// 1
// let str = "            hello world          ";
// console.log(str.trim());


// 2
// let str = "            hello world          ";
// console.log(str.trimStart());


// 3
// let str = "            hello world          ";
// console.log(str.trimEnd());


// `padEnd`, `padStart`

// 1
// let str = "qish";

// let str1 = str.padEnd(10, '!');
// console.log(str1);


// 2
// let str = "qish";

// let str1 = str.padStart(15, 'kirb keldi  ');
// console.log(str1);


// 3
// let son = "99-829-14-62";

// let son1 = son.padStart(17, '+998.');
// console.log(son1);



// `repeat`


// 1
// let str = "salom,";

// let str1 = str.repeat(3);
// console.log(str1);


// 2
// let str = "salom,";
// let str1 = "";

// for (let i = 0; i < str.length; i++) {
//     str1 += str.charAt(i).repeat(2);
// }

// console.log(str1);


// 3
// let str = "salom,";

// let str1 = str.repeat(5);
// console.log(str1);



//  `replace`

// 1
// let str = "salom"; 
// let oldstr = "s"; 
// let newstr = "S";

// let str1 = str.replace(oldstr, newstr);
// console.log(str1);


// 2
// let str = "salom xayr"; 
// let oldstr = "salom"; 
// let newstr = "bopti"

// let str1 = str.replace(oldstr, newstr);
// console.log(str1);


// 3
// let str = "salom xayr"; 
// let oldstr = "salom"; 
// let newstr = "*"

// let str1 = str.replace(oldstr, newstr);
// console.log(str1);


// `replaceAll`


// 1
// let str = "salom";

// let str1 = str.replaceAll("a", "o");
// console.log(str1);


// 2
// let str = "Men kitob o'qiyapman. Kitobni juda yaxshi ko'raman."

// let str1 = str.replaceAll("kitob o'qiyapman", "dars qilyapan")

// console.log(str1);


// 3
// let str = "Men kitob3 o'qiyapman4. Kitob2ni juda y1axshi ko'raman.";

// let str1 = str.replaceAll(/[0-9]/g, "*");

// console.log(str1);


// `split`

// 1

// let str = "salom, world, kitob, kim, nimadur"; 

// let newstr = str.split(", ");
// console.log(newstr);


// 2
// let str = "salom"; 

// let newstr = str.split("");
// console.log(newstr);


// `indexOf`


// 1
// let str = "salom, hello, world";
// let index = "o";

// let index1 = str.indexOf(index);
// console.log(index1);


// 2
// let str = "salom, hello, world";
// let index = "xayr";

// let index1 = str.indexOf(index);
// console.log(index1);


// 3
// let str = "salom, hello, world"; 
// let charToFind = "o"; 

// let index = str.indexOf(charToFind);
// console.log(index);


// `includes`

// 1
// let str = "salom, hello, world"; 
// let char = "hello"; 

// let str1 = str.includes(char);
// console.log(str1);



// 2
// let str = prompt("Stringni kiriting:");

// let raqamlar = '0123456789';

// let raqamBor = false;
// for (let i = 0; i < raqamlar.length; i++) {
//     if (str.includes(raqamlar[i])) {
//         raqamBor = true;
//         break;
//     }
// }

// console.log(raqamBor ? "Stringda raqamlar bor." : "Stringda raqamlar yo'q.");


// 3
