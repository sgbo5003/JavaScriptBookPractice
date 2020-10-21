var computer = {
    score : 0,
    percent2 : 0.5,
    percent3 : 0.33
};

var user = {
    score : 0,
    percent2 : 0.5,
    percent3 : 0.33
};

var game = {
    isComputerTurn : true,
    shotsLeft : 15
};

function showText(s){
    var $textElem = $('#text');

    $textElem.fadeOut(300, function(){
        $textElem.html(s);
        $textElem.fadeIn(100);
    });
}
    

function updateComputerScore(score){
    computer.score += score;       
    var $comScoreElem = $('#computer-score');
    $comScoreElem.animateNumber({
        number: computer.score
    });
}

//컴퓨터
function onComputerShoot(){
    if(!game.isComputerTurn){
        return;
    }
    updateAI();

    var shootType = Math.random() < 0.5 ? 2 : 3;

        if(Math.random() < computer['percent' + shootType]){
            showText('컴퓨터가' + shootType + '점슛을 성공시켰습니다.');
            updateComputerScore(shootType);
        } else{
            showText('컴퓨터가' + shootType + '점슛을 실패했습니다.');
        }
    
    game.isComputerTurn = false;

    disableCompuerButtons(true);
    disableUserButtons(false);
}

function updateAI(){
    var diff = user.score - computer.score;

    if(diff >= 10){
        computer.percent2 = 0.7;
        computer.percent3 = 0.43;
    } else if(diff >= 6){
        computer.percent2 = 0.6;
        computer.percent3 = 0.38;
    } else if(diff <= -10){
        computer.percent2 = 0.3;
        computer.percent3 = 0.23;
    } else if(diff <= -6){
        computer.percent2 = 0.4;
        computer.percent3 = 0.28;
    }
}

function disableCompuerButtons(flag){
    /*var computerButtons = document.getElementsByClassName('btn-computer');

    for(var i =0; i<computerButtons.length; i++){
        computerButtons[i].disabled = flag;
    }
    */
   $('.btn-computer').prop('disabled', flag);

}

function disableUserButtons(flag){
    /*var userButtons = document.getElementsByClassName('btn-user');

    for(var i =0; i<userButtons.length; i++){
        userButtons[i].disabled = flag;
    }
    */
   $('.btn-user').prop('disabled', flag);
}

function updateUserScore(score){
    user.score += score;

    var $userScoreElem = $('#user-score');

    $userScoreElem.animateNumber({
        number: user.score
    });
}
//사용자
function onUserShoot(shootType){
    if(game.isComputerTurn){
        return;
    }

        if(Math.random() < user['percent' + shootType]){
            showText(shootType + '점슛을 성공시켰습니다.');
            updateUserScore(shootType);
        } else{
            showText(shootType + '점슛이 실패했습니다.');
        }

    game.isComputerTurn =true;

    disableCompuerButtons(false);
    disableUserButtons(true);

    game.shotsLeft--;

    var $shotsLeftElem = $('#shots-left');

    $shotsLeftElem.html(game.shotsLeft);

    if(game.shotsLeft    === 0){
        if(user.score > computer.score){
           showText('승리했습니다!');
        } else if(user.score < computer.score){
           showText('패배했습니다...');
        } else{
           showText('비겼습니다.');
        }

        disableCompuerButtons(true);
        disableUserButtons(true);
    }
}

$(function(){
    showText(3);

    setTimeout(function(){
        showText(2);

        setTimeout(function(){
            showText(1);

            setTimeout(function(){
                showText('컴퓨터부터 시작합니다!');
                disableCompuerButtons(false);
            },1000);
        },1000);
    }, 1000);
});

