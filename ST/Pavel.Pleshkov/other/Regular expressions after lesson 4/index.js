let text = "\nJohn said: 'Goodbye, Ann!', and went out\n\nAnn look at him: 'See you tomorrow. I'm tied. This evening I'm at home'";

function changeQuotes(str) {
    let regexp = /'/gm;
    let regexp2 = /[a-z]"[a-z]/gi;

    console.log(`Input text: \n${str}`);
    str = str.replace(regexp, '"');
    str.match(regexp2).forEach(subStr => {
        str = str.replace(regexp2, `${subStr.charAt(0)}'${subStr.charAt(2)}`);
    });
    console.log(`Output text: \n${str}`);
    return str;
}

changeQuotes(text);