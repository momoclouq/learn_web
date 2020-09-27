//nested arrays exercises
//rotate function
function rotate(arr, offset){
    if (offset < 0 || !Number.isInteger(offset)){
        console.log("offset is negative or not integer");
    } else {
        let temp = arr.slice();

        for (let i = 0; i < arr.length; i++){
            arr[(i+offset) % arr.length] = temp[i];
        }
    }

    console.log(arr);
}

rotate([1,2,3,4], -1);

//makeXOGrid function
function nextSymbol(value){
    if (value) return "X";
    return "0";
}

function makeXOGrid(row, col){
    let grid = [];
    let bina = true;

    for (let r = 0; r < row; r++){
        let tempR = [];
        for (let c = 0; c < col; c++){
            tempR.push(nextSymbol(bina));
            bina = !bina;
        }
        grid.push(tempR);
    }

    return grid;
}

console.log(makeXOGrid(4,3));