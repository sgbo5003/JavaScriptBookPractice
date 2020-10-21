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

        switch(userValue){
            case SCISSORS :
                switch(comValue){
                    case SCISSORS :
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터와 비겼습니다.');
                        break;
                    case ROCK :
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터에게 졌습니다.');
                        break;
                    default:
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터를 이겼습니다.');
                        break;
                }
                break;
            case ROCK :
                switch(comValue){
                    case SCISSORS :
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터를 이겼습니다.');
                        break;
                    case ROCK :
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터와 비겼습니다.');
                        break;
                    default:
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터에게 졌습니다.');
                        break;
                }
                break;
            default:
                switch(comValue){
                    case SCISSORS :
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터에게 졌습니다.');
                        break;
                    case ROCK :
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터를 이겼습니다.');
                        break;
                    default:
                        alert('컴퓨터: ' + comValue + ' - 컴퓨터와 비겼습니다.');
                        break;
            }
            break;
        }
    }