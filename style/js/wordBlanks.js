function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));