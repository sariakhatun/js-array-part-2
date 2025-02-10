/**
 * Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
 */
const colors = ['red', 'blue', 'green','yellow', 'orange']
const rev_num=[]
for(let i=0;i<colors.length;i++){
    const n = colors[i]
    rev_num.unshift(n)
}
console.log(rev_num)
for(let i=colors.length-1;i>=0;i--){
    //console.log(colors[i])
}
