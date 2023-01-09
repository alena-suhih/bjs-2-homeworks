function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    } else if (arr1.every ((element, index) => element === arr2[index])) {
        return true
    } else return false
} 


function getUsersNamesInAgeRange(people, gender) {
    let result = 0
    if (people.length === 0) {result = 0}
    else if (gender === "мужской") {
        result = (people.filter(user => user.gender === "мужской").map(user => user.age).reduce((acc, age) => acc + age, 0)) / people.filter(user => user.gender === "мужской").length
    }   
    else if (gender === "женский") {
        result = (people.filter(user => user.gender === "женский").map(user => user.age).reduce((acc, age) => acc + age, 0)) / people.filter(user => user.gender === "женский").length
    }
    return result
}