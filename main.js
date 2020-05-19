
// clik sul quadratino
$('.quadratini').click(function(){
console.log('click');
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
 $.ajax({
     'url': 'https://flynn.boolean.careers/exercises/api/random/int',
     'method': 'GET',
     'success':function(data){
         console.log(data);
         var numero_random = data.response;
         console.log(numero_random);
         // Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo;
         if (numero_random <= 5) {
             $(this).addClass('giallo')
             console.log(this);
             // se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
         } else {
             $(this).addClass('verde')
             console.log(this);
         }
          // $(this).append(numero_random);
     }
 })
});

// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
