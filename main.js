
// clik sul quadratino
$('.quadratini').click(function(){
console.log('click');

// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
var quadratino = $(this);
if (quadratino.text() == '') {
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success':function(data){
            // console.log(data);
            var numero_random = data.response;
            console.log(numero_random);
            // Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo;
            if (numero_random <= 5) {
                quadratino.addClass('giallo')
                // console.log(this);
                // se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
            } else {
               quadratino.addClass('verde')
                // console.log(this);
            }
            // In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
             quadratino.text(numero_random);
        }
    })
}
});

// BONUS

// var source = $('#entry-template').html();
// var template = Handlebars.compile(source);
//
// for (var i = 0; i < 36; i++) {
//     var html_generata = template();
//     $('#griglia').append(html_generata);
//
// }
