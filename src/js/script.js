document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating input[type="radio"]');
    
    stars.forEach(function(star) {
      star.addEventListener('change', function() {
        const rating = this.value;
        console.log('Avaliação:', rating);
        // Aqui você pode adicionar código para enviar a avaliação para o servidor ou realizar outras ações com ela.
      });
    });
  });