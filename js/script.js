var SCISSORS = '가위';
        var ROCK = '바위';
        var PAPER = '보';
        var userValue = prompt('가위, 바위, 보!');

        if(userValue !== SCISSORS && userValue !== ROCK && userValue !== PAPER){
            alert('가위, 바위, 보 중 하나를 입력해야 합니다.');
        } else{
        var comValue;

        var randomValue = Math.random();

        if(randomValue < 0.33){
            comValue = SCISSORS;
        } else if(randomValue < 0.66){
            comValue = ROCK;
        } else{
            comValue = PAPER;
        }

        if(userValue === SCISSORS){
            if(comValue === SCISSORS){
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 비겼습니다.');
            } else if(comValue === ROCK){
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 졌습니다.');
            } else{
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 이겼습니다.');
            }
        } else if(userValue === ROCK){
            if(comValue === ROCK){
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 비겼습니다.');
            } else if(comValue === SCISSORS){
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 졌습니다.');
            } else{
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 이겼습니다.');
            }
        } else{
            if(comValue === PAPER){
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 비겼습니다.');
            } else if(comValue === SCISSORS){
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 졌습니다.');
            } else{
                alert('컴퓨터:' + comValue + ' - 컴퓨터와 이겼습니다.');
            }
            
        }
    }