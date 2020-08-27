const wordSearch = (letters, word) => {
    if (!letters) {
        return false
    }
    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))



    for (l of horizontalJoin) {
        // console.log(l, typeof l);
        const array = l.split('');
        const reverse = array.reverse();
        const backwardsString = reverse.join('');
        if(backwardsString.includes(word)) return true;
    }

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //Vertical check
    for (let col = 0; col < letters[0].length; col++) {
        let verticalString = ""
        for (let row of letters) {
            verticalString += row[col];
        }
        if (verticalString.includes(word)) {
            return true;
        }

        const array = verticalString.split('');
        const reverse = array.reverse();
        const backwardsString = reverse.join('');
        if(backwardsString.includes(word)){
            return true;
        }
    }
    return false;
}

module.exports = wordSearch