let a = "anana";

console.log("the word is: " + a);

let al = a.length;
let count = 0;

for( let i = 0; i < al; i++ ) {
    if( ( a.slice(i, i+1) == ( a.slice(al-(i+1), al-i) ) ) ) {
        count++;
    } else {
        break;
    }
}
if(count == al) {
    console.log(`Cuvantul ${a} este polindrom`);
} else { 
    console.log(`Cuvantul ${a} nu  este polindrom`);
}