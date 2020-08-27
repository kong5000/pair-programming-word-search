const wordSearch = (letters, word) => {
    if (!letters) {
        return false
    }
    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
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

    // Diagonal Check

    // [0][0] [1][1] [2][2] etc...
    // keep doing x = x + 1 and y = y + 1  until you reach the edge
        //If letter === undefined => check the string for the word
        //
    let x = 0;
    let y = 0;
    const width = letters[0].length;
    const height = letters.length;

    let getDiagonal = (x, y) => {
        let xIndex = x;
        let yIndex = y;
        let result = "";
        while(xIndex < width && yIndex < height){
            result += letters[xIndex][yIndex];
            xIndex++;
            yIndex++;
        }
        if(result.includes(word)){
            return true;
        }
        
        let array = result.split();
        array = array.reverse();
        let reverseString = array.join('');
        if(reverseString.includes(word)){
            return true;
        }
    }

    for (let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++){
            getDiagonal(x, y);
        }
    }

    return false;
}

module.exports = wordSearch