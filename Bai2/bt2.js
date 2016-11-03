var myvar = '<tr class="data">'+
'					<td class="image"><a href="https://www.facebook.com/bich.ngoc.13795" class="exit_trigger_set"><img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/13528960_870217489754898_7010048163109759641_n.jpg?oh=a57cbd7167718d00df5ff211c04963a7&oe=58D2DA41" alt=""></a></td>'+
'					<td class="rank">#1 </td>'+
'					<td class="name"><a href="https://www.facebook.com/bich.ngoc.13795" class="exit_trigger_set">Phung Bich Ngoc</a></td>'+
'					<td>Viet Nam</td>'+
'					<td>22</td>'+
'			</tr>';



var list_table = $('.list-table-body');
var dataArr = $('#data');
var j=0;
for(j = 0; j< dataArr.length; j++){
    if(isNaN(j) == false) {
    $('.rank:eq('+j+')').text(function(i, origText){ 
    var int_rank = parseInt(origText.trim()[1]) + 1;
     var new_rank = '#'+int_rank.toString();

     return new_rank;} )  
    }
}

$('#list-table-body').prepend(myvar);