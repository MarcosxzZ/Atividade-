/*Array unidimensional*/
var Array1 =["HTML",1993,"CSS", 1996,"Bootstrap",2011,"JS", 1995,"React", 2013,"Java",1995]
console.log(Array1)

console.log(Array1.length)

console.log(Array1[6])

var x= Array1.toString();
console.log(typeof x)
console.log(typeof Array1)
console.log(Array1)
console.log(x)

var y =Array1.join("?")
console.log(Array1)
console.log(x)
console.log(y)

var u =Array1.push('IOS')
console.log(Array1)
console.log(u)

/*array bidimensional*/
var array2 = [ ["HTML", 1993, "CSS", 1996],
            ["BOOTSTRAP", 2011, "JS", 1995],
            ["REACT", 2013, "JAVA", 1995]
]
console.log(array2)
console.log(array2.length)
console.log(array2[2][1])

array2[1][2] = "JAVASCRIPT";
delete array2 [2][2]
var t = array2.push("pipoca")
console.log(array2)