const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib']
const sortedPersons = persons.sort();
console.log(sortedPersons)
const num = [15,12,33,54,35,26,77,58,19,5,111]
//const num_asc = num.sort()//not working properly
const num_asc = num.sort(function(a,b) {return a - b})
console.log(num_asc)