$(function(){
    generateYears($('#sel-birth'));
    //셀렉트 박스 변형
    var birthSelect = $('#sel-birth').selectmenu();
    //selectmenu() 함수는 menuWidget 라는 문자열을 인자로 넣어주면 목록 엘리먼트를 리턴.
    birthSelect.selectmenu("menuWidget").addClass('overflow');

    $('#form-register').submit(function(e){
        //기본동작을 실행하지 못하게 막아줌
        e.preventDefault();

        //#from-register 안에서 txt.warning 클래스들을 찾아 지우고 감춰준다.
        $(this).find('.txt.warning').empty().hide();

        var email = $('#inp-email').val();

        if(!validateEmail(eamil)){
            $('#inp-email').next().html('잘못된 형식입니다.').show();
            return;
        }

        var password = $('#inp-password').val();

        if(!validatePassword(password)){
            $('#inp-password').next().html('대문자와 숫자가 포함된 최소 8자의 문자열이여야 합니다.').show();
            return;
        }

        var confirm = $('inp-confirm').val();

        if(confirm !== password){
            $('#inp-confirm').next().html('비밀번호와 일치하지 않습니다.').show();
            return;
        }

        var gender = $('input[name="gender"]:checked').val();

        if(!gender){
            $('#inp-female').siblings('.txt-warning').html('필수 항목입니다.').show();
            return;
        }

        var birth = $('inp-birth').val();

        if(!birth){
            $('#inp-birth').siblings('.txt-warning').html('필수 항목입니다.').show();
            return;
        }

        var accept = $('#inp-accept:checked').val();

        if(!accept){
            $('inp-accept').next().next().html('필수 항목입니다.').show();
            return;
        }

        submit(email, password, gender, birth);
    });   
});

//출생년도 설정
function generateYears($select){
    for(var i =  1970; i<= 2010; i++){
        $select.append('<option value="' + i + '">' + i + '</option>');
    }
}

//서버로 폼을 전송하는 부분
function submit(email, password, gender, birth){
    var params = {
        email : email,
        password : password,
        gender : gender,
        birth : birth
    };

    $.post('some-api-url', params, function(r){
        console.log(r);
    });
}