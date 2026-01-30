const getAdultPeople = (people) => {
    const tempArr = people.filter((el) => el.age >= 18)
    return tempArr.map((el) => {
        return el.name;
    })
}

const people = [
{ name: "Ahmed", age: 23 },
{ name: "Sara", age: 16 },
{ name: "Mona", age: 19}
]

const adultPeople = getAdultPeople(people);
console.log(adultPeople);
