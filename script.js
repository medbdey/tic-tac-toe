let title = document.getElementById('title');
let head = document.getElementById('head');
let card = document.querySelectorAll('.square');
let squares = [];
let turn = 'x';
let playerOne = document.getElementById('playerOne');
let playerTwo = document.getElementById('playerTwo');
let playAgain = document.getElementById('playAgain');
let playerOneScore = document.getElementById('playerOneScore');
let playerTwoScore = document.getElementById('playerTwoScore');
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
let gameOver = false;
function winning(){
    for (let i = 1; i <= 9; i++) { 
        squares[i] = document.getElementById('item' + i).textContent;
    }
  

    
    if (squares[1] !== '' && squares[1] === squares[2] && squares[2] === squares[3]) {
  
        playAgain.style.display = 'block';
        let winner = squares[1];
        if (winner == 'x'){
         head.textContent = playerOne.textContent + '  you win';
         gameOver = true
         Number(playerOneScore.textContent++)  
        }else if (winner == 'o'){
            head.textContent = playerTwo.textContent + '  you win'
            Number(playerTwoScore.textContent++)
            gameOver = true
        }
        
    }
    
    else if (squares[4] !== '' && squares[4] === squares[5] && squares[5] === squares[6]) {
        playAgain.style.display = 'block';
        let winner = squares[4]
         if (winner == 'x'){
         head.textContent = playerOne.textContent + '  you win';  
         gameOver = true
         Number(playerOneScore.textContent++)
        }else if (winner == 'o'){
            head.textContent = playerTwo.textContent + '  you win'
            Number(playerTwoScore.textContent++)
            gameOver = true
        }
        
    }
    
    else if (squares[7] !== '' && squares[7] === squares[8] && squares[8] === squares[9]) {
        let winner = squares[7];
         if (winner == 'x'){
         head.textContent = playerOne.textContent + '  you win'; 
          Number(playerOneScore.textContent++) 
          gameOver = true
        }else if (winner == 'o'){
            head.textContent = playerTwo.textContent + '  you win';
             Number(playerTwoScore.textContent++) 
             gameOver = true
        }
        playAgain.style.display = 'block'
    }else if (squares[1] !== '' && squares[1] === squares[5] && squares[5] === squares[9]) {
            let winner = squares[1];
             if (winner == 'x'){
         head.textContent = playerOne.textContent + '  you win';  
          Number(playerOneScore.textContent++) 
          gameOver = true
        }else if (winner == 'o'){
            head.textContent = playerTwo.textContent + '  you win'
             Number(playerTwoScore.textContent++) 
             gameOver = true
        }
        
        playAgain.style.display = 'block'
    }else if (squares[3]!= '' && squares[3] === squares[5] && squares[5] === squares[7]){
        let winner = squares[3];
         if (winner == 'x'){
         head.textContent = playerOne.textContent + '  you win'; 
          Number(playerOneScore.textContent++)  
          gameOver = true
        }else if (winner == 'o'){
            head.textContent = playerTwo.textContent + '  you win'
             Number(playerTwoScore.textContent++) 
             gameOver = true
        }
        
        playAgain.style.display = 'block'
    }
    else{
        playAgain.style.display = 'none';
    }
}
function names(name, name2){
   let name1 = prompt('write your name player one');
   let nameTwo = prompt('write your name player two');
   playerOne.textContent = name1;
   playerTwo.textContent = nameTwo;
}

names()
function game(id){
    let element = document.getElementById(id);
    if(gameOver) return;
    if(turn === 'x' && element.textContent === ''){
        element.textContent = 'x';
        turn = 'o';
        title.textContent = playerTwo.textContent +  " turn";
    } else if (turn === 'o' && element.textContent === ''){
        element.textContent = 'o';
        turn = 'x';
        title.textContent = playerOne.textContent + " turn";
    }
    playAgain.addEventListener('click', ()=>{
        element.textContent = '';
        head.textContent = 'New game'
        gameOver = false
    })
    winning();
}


