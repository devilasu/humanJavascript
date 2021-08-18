function viewReset(){
    $('#menuName').val('');
    $('#menuCount').val('');
    $('#totalPrice').val('');
}


$(document)
.ready(function(){

    $("#menuList").change(function() {
        viewReset();
    $('#menuName').val($(this).children('option:selected').text().split(' ')[0]);
    });
    
    $("#orderList").change(function() {
        viewReset()
    $('#menuName').val($(this).children('option:selected').text().split(' ')[0]);
    $('#menuCount').val($(this).children('option:selected').text().split(' ')[1].slice(0,-1));
    $('#totalPrice').val($(this).children('option:selected').text().split(' ')[2]);
    });
    
})
.on('blur','#menuCount',function(){
    let menu = $('#menuList option:selected').text();
    tmpMenu = menu.split(' ');
    $('#totalPrice').val(parseInt($(this).val())*parseInt(tmpMenu[1]));
})
.on('click','#btnAdd',function(){
    let text = '<option>';
    text += $('#menuName').val()+' ';
    text += $('#menuCount').val()+'잔 ';
    text += $('#totalPrice').val();
    text += '</option>'
    $('#orderList').append(text);
})
.on('click','#btnDel',function(){
    if(confirm('주문목록을 삭제하시겠습니까?')){
        $('#orderList').children('option:selected').remove();
    }
})
.on('click','#btnSellDel',function(){
    if(confirm('매출현황을 삭제하시겠습니까?')){
        $('#sellList').children('option:selected').remove();
    }
})
.on('click','#btnOrder',function(){
    let inMobile = prompt('주문자 모바일 번호');
    let text = '';
    $('#orderList').children().each(function(){
        text += '<option>';
        text += inMobile+' ';
        text += $(this).text().split(' ')[0]+' ';
        text += $(this).text().split(' ')[1];
        text+='</option>';
    });
    
    $('#sellList').append(text);
})
