var employees: string[] = ["Bob", "Sally", "James"]

employees.push(5); // compile error

document.write(employees.toString() + "<br />")

interface SuperHero {
    realName: String;
    superName: String;
}

var superHeroes: SuperHero[] = [];

superHeroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
})

document.write(superHeroes[0].realName + " is " + superHeroes[0].superName + "<br />")