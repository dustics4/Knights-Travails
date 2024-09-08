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
    
    let queue = [[start,[start]]];
    let visitedPosition = {};
    visitedPosition[start] = true;

    console.log(queue);

    while(queue.length > 0){
        let current = queue.shift(); // dequeue from front
        let currentPosition = current[0];
        let path = current[1];

        console.log(path);

        if(currentPosition[0] === target[0] && currentPosition[1] === target[1]){
            console.log("You have made it in " + path.length - 1 + "moves");
        }

    }
}

knightMoves([0,0],[7,7]);