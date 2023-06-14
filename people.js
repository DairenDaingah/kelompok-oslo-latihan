let people = ["Greg", "Mary", "Devon", "James"];

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}

/*
2. let people = ["Greg", "Mary", "Devon", "James"];

people.forEach(function (data) {console.log(data)});

3. let people = ["Greg", "Mary", "Devon", "James"];

people.forEach(function (data) { console.log(data) });

let removeElement = people.shift();

people.forEach(function (removeElement) { console.log(removeElement) });

4. let people = ["Greg", "Mary", "Devon", "James"];

people.forEach(function (data) { console.log(data) });

let removeElement = people.pop();

people.forEach(function (removeElement) { console.log(removeElement) });

5. let people = ["Greg", "Mary", "Devon", "James"];

people.forEach(function (data) { console.log(data) });

let removeElement = people.unshift("Matt");

people.forEach(function (removeElement) { console.log(removeElement) });
6. let people = ["Greg", "Mary", "Devon", "James"];

people.forEach(function (data) { console.log(data) });

let removeElement = people.push("Janitra");

people.forEach(function (removeElement) { console.log(removeElement) });
7. let people = ["Greg", "Mary", "Devon", "James"];

for (i = 0; i < people.length; i++) {
    if (people[i] == "Mary") {
        break;
    }
    console.log(people[i]);
}
8. let people = ["Matt", "Greg", "Mary", "Devon", "James"];

let People = people.slice(1, 2);
let Peoplee = people.slice(3, 5);


let peoplee = People.concat(Peoplee);
console.log(peoplee);
9. let people = ["Devon", "Matt", "Mary"];

people.shift();

people.splice(3, 0, "Artie", "Elizabeth", "Janitra");

console.log(people);
10. let people = ["Matt", "Mary", "Artie", "Elizabeth", "Janitra"];
let withBob = ["Bob"]

let array = people.concat(withBob);
console.log(array);

OBJECT:
let programming = {
    languages : ["Javascript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes:""
};

programming.languages.push("Go");
programming["difficulty"] = 7;
delete programming.jokes;
programming.isFun = true;

console.log(programming.languages);
console.log(programming.difficulty);
console.log(programming);

let updatedLanguages = programming.languages.map((language, index) => { 'return ${index} - ${language}';});

console.log(updatedLanguages);
 */