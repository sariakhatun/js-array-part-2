/**+
 * Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let sum='';
for(let i=0;i<numbers.length;i++){
    sum+=numbers[i]
}
console.log(sum)