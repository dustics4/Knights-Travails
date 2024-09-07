function knightMoves(start, target){
    let directions = [ //lists all possible moves for the knight in chess
        [2,1], [1,2], [-1,2], [-2, 1],
        [-2,-1] , [-1,-2], [1, -2], [2,1]
    ]

    console.log(directions);

    function isValidPosition(x,y){ //Checks if a possition is within the chessboard boundries
        return ( x >= 0 && x <= 8 && y >= 0 && y <= 8);
    }

    console.log(isValidPosition(0,0));    
    console.log(isValidPosition(9,1));  
}

knightMoves([0,0],[7,7]);