$(function(){
    var id = parseId(window.location.search);
    console.log('id',id);

    getDetail(id);
});






function getDetail(id){
    var url = 'https://javascript-basic.appspot.com/locationDetail';

    $.getJSON(url,{
        id: id
    }, function(r){
        $('.detial-header-name').html(r.name);
        $('.detial-header-city-name').html(r.cityName);
        $('.detial-desc-text').html(r.desc);
    });
}



function parseId(str){
    var s = str.substring(1);
    var args = s.split('&');

    for(var i =0; i< args.length; i++){
        var arg = args[i];
        var tokens = arg.split('=');

        if(tokens[0] === 'id')
        return tokens[1];
    }
    return null;
}