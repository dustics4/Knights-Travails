function knightMoves(start, target){
    let directions = [ //lists all possible moves for the knight in chess
        [2,1], [1,2], [-1,2], [-2, 1],
        [-2,-1] , [-1,-2], [1, -2], [2, -1]
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

    while(queue.length > 0){
        let current = queue.shift(); // dequeue from front
        let currentPosition = current[0]; //current position of knight
        let path = current[1]; //The path taken to reach the current position

        if (currentPosition[0] === target[0] && currentPosition[1] === target[1]) { //Checks if current position is the target position
            console.log("You have made it in " + (path.length - 1) + " moves. Here is your path:"); //removes the starting position and displays
            for (let i = 0; i < path.length; i++) { 
                console.log(path[i]);
            }
            return path;
        }

        //loop through all possible directions
        for(let i = 0; i < directions.length; i++){
            let newX = currentPosition[0] + directions[i][0]; //Represents the new positions after the knight is moved;
            let newY = currentPosition[1] + directions[i][1];

            if(isValidPosition(newX, newY) && !visitedPosition[newX + "," + newY]){ //check if poisiton is not viisted and within bounds of board
                visitedPosition[newX + "," + newY] = true; //Mark position is visited
                queue.push([[newX, newY], path.concat([[newX, newY]])]); //ad the new position and updated path to the queue
            }
        }

    }
}

knightMoves([0,0],[7,7]);