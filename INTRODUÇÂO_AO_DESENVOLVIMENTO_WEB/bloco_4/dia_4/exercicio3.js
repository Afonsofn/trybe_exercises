//verificar se é palindrome
function verificaPalindrome(word) {
    let reverse = word.split('').reverse().join('');
    if (word === reverse) {
        return true
    } else {
        return false
    }
}
console.log(verificaPalindrome("arara"))
console.log(verificaPalindrome("desenvolvimento"))