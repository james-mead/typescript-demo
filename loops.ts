var randArray = [5,6,7,8]

for (var val in randArray) {
    document.write(val + "<br />")
}
var strArray = randArray.map(String)

for (var val of strArray) {
    document.write(val + "<br />")
}
