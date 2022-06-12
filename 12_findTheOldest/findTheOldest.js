const findTheOldest = function(people) {
    let oldest = people.reduce((oldest, person) => {
        let personAge;
        if ("yearOfDeath" in person) {
            personAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            const thisYear = (new Date).getFullYear();
            personAge = thisYear - person.yearOfBirth;
        }
        if (personAge > oldest.age) {
            oldest.person = person;
            oldest.age = personAge;
        }
        return oldest;
    }, {person: {}, age: 0});
    return oldest.person;
};

// Do not edit below this line
module.exports = findTheOldest;
