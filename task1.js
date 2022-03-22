function findTheLongestWord(str) {
    let strHolder = [''];
    let strVowelCount = 0;
    let longestStr;
    let strArr = str.replace(/,/g, '').split(' ');

    strArr.forEach(str => {
       if (str.length > strHolder[0].length) {
           strHolder[0] = str;
       } else if(str.length === strHolder[0].length) {
           strHolder.push(str)
       }
    });

    if(strHolder.length > 1) {
        strHolder.forEach(str => {
            let count = str.match(/[aeiou]/gi).length
            if(count > strVowelCount) {
                strVowelCount = count;
                longestStr = str
            }
        });
    }

    console.log(longestStr)
}

findTheLongestWord('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers')