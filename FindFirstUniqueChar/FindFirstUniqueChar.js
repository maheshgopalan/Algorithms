let GetUniqueCharcter = function (inputString)
{
    let returnchar = null;
    let counts = {};
    let retIndex = 0;
    
    for( let i = 0; i < inputString.length ;i++)
    {
      if(!(inputString[i] in counts))
      {
        counts[inputString[i]] = 0;
      }
      counts[inputString[i]]++;

    }
    while(counts[inputString[retIndex]] > 1)
        retIndex++;

    returnchar = inputString[retIndex];
    return returnchar;
}

let sampleString = "supercalifragilisticexpialidocious";
let uniqueChar = GetUniqueCharcter(sampleString);
console.log(uniqueChar);


