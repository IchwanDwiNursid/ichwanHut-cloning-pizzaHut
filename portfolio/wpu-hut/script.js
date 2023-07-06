
$.getJSON("data/pizza.json",(data) =>{
  const response = data.menu
  $.each(response,(i,data) =>{
    $('#daftar-menu').append('<div class="col-md-4"><div class="card"><img src="pizza/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">'+data.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
  });
});

$('.nav-link').on('click',function(){
  $('.nav-link').removeClass('active'); 
  $(this).addClass('active')

  const kategori = $(this).html();
  $('h1').html(kategori);

  $.getJSON('data/pizza.json',function(data){
    const menu = data.menu;
    const content = '';

    
    $.each(menu,function(i,data){
      if(data.kategori == kategori.toLowerCase()){
        content += '<div class="col-md-4"><div class="card"><img src="pizza/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">'+data.harga+'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      }
    });
    $('#daftar-menu').html(content)
  });
});
