$(function(){
    //스크롤을 내렸을때 
    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top > 0){
            $('#header').addClass('inverted');          //클래스 추가
        } else{
            $('#header').removeClass('inverted');       //클래스 제거
        }
    });

    $(window).trigger('scroll');

    var dpFrom = $('#from').datepicker({
        dateFormat: 'yy-mm-dd',      //우리나라 식으로 날짜 형식 변경
        minDate: 0,                  //최소 날짜 오늘로 설정
        onSelect: function(){
            dpTo.datepicker('option', 'minDate', dpFrom.datepicker('getDate'));
        }
    });
    dpFrom.datepicker('setDate', new Date());       //날짜 오늘로 설정

    var dpTo = $('#to').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
    });
    dpTo.datepicker('setDate', 4);      //4일뒤로 설정

    function search(from, to){
        var url = 'https://javascript-basic.appspot.com/searchLocation';

        $.getJSON(url, {
            from: from,
            to: to
        }, function(r){
            var $list = $('#list-panel');

            for(var i=0; i<r.length; i++){
                var data = r[i];
                var $item = createListItem(data);

                $list.append($item);
            }

            $('#list-bg').show();
        });
    }

    $('#form-search').submit(function(e){
        e.preventDefault();          //기본값으로 설정하는걸 막는다

        var from = $('#from').val();
        var to = $('#to').val();

        search(from, to);
    })

    function createListItem(data){
        //id가 중복되는걸 막기 위해 id제거
        var $tmpl = $('#list-item-template').clone().removeAttr('id');     
        
        $tmpl.find('.list-item-image').attr('src', data.titleImageUrl);
        $tmpl.find('.list-item-name').html(data.name);
        $tmpl.find('.list-item-city-name').html(data.cityName);

        $tmpl.click(function(e){
            var url = 'detail.html?id=' + data.id;
            window.location = url;
        });

        return $tmpl;
    }
});