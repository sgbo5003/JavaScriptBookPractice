// var SCISSORS = '가위';
// var ROCK = '바위';
// var PAPER = '보';
// var comValue;
// var randomValue = Math.random();

//     function onButtonClick(userInput){
//         if(randomValue < 0.33){
//             comValue = SCISSORS;
//         } else if(randomValue < 0.66){
//             comValue = ROCK;
//         } else{
//             comValue = PAPER;
//         }

//         var result = '컴퓨터: ' + comValue;

//         if(userInput === SCISSORS){
//             if(comValue === SCISSORS){
//                 result += '- 비겼습니다.';
//             } else if(comValue === ROCK){
//                 result += '- 졌습니다.';
//             } else{
//                 result += '- 이겼습니다.'
//             }
//         } else if(userInput === ROCK){
//             if(comValue === ROCK){
//                 result += '- 비겼습니다.';
//             } else if(comValue === SCISSORS){
//                 result += '- 이겼습니다.'
//             } else{
//                 result += '- 졌습니다.';
//             }
//         } else{
//             if(comValue === PAPER){
//                 result += '- 비겼습니다.';
//             } else if(comValue === SCISSORS){
//                 result += '- 졌습니다.';
//             } else{
//                 result += '- 이겼습니다.'
//             }
//         }
//         alert(result);
//     }

var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';
var comValue;
var randomValue = Math.random();

function onButtonClick(userInput){
    if(randomValue < 0.33){
        comValue = SCISSORS;
    } else if(randomValue < 0.66){
        comValue = ROCK;
    } else{
        comValue = PAPER;
    }

    var result = '컴퓨터: ' + comValue

    if(userInput === SCISSORS){
        if(comValue === SCISSORS){
            result += ' - 비겼습니다.';
        } else if(comValue === ROCK){
            result += ' - 졌습니다.';
        } else{
            result += ' - 이겼습니다.';
        }
    } else if(userInput === ROCK){
        if(comValue === ROCK){
            result += ' - 비겼습니다.';
        } else if(comValue === PAPER){
            result += ' - 졌습니다.';
        } else{
            result += ' - 이겼습니다.';
        }
    } else{
        if(comValue === PAPER){
            result += ' - 비겼습니다.';
        } else if(comValue === SCISSORS){
            result += ' - 졌습니다.';
        } else{
            result += ' - 이겼습니다.';
        }
    }
    alert(result);
}
    