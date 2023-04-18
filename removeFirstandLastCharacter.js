
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



//answer:

//p:remove first and last char in string, no strings less that 2 char,
//r: return string with out first and last char
//e:


function removeChar(str){
    return str.slice(1, str.length - 1)
    };
    
    //removeChar('happy')('app')
    //removeChar('tired')('ire')