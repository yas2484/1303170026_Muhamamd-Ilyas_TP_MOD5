$('li').click(function() {
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
$('#semangat').append(
  "<audio controls autoplay hidden> <source src='../css/semangat.mp3' type='audio/mpeg' /></audio>"
);

// buatlah jquery untuk menekan tombol akan menjadikan data sebagai list
//  code Here...
$('#plus').on('click', function(){
  if($('#task').val()!= null && $('#task').val()!=''){
    let inputan = $('#task').val();
    let isi = `<li>
						<span><i class="fa fa-trash"></i></span>${inputan}
				   </li>`;
    $('#todos').append(isi);
    $('#task').val('');
  }
  })