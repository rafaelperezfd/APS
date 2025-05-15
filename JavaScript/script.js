// calculadora de CDI
document.getElementById("calcular").addEventListener("click", 
    function () {
    const valor = parseFloat(document.getElementById("valor").value);
    const meses = parseInt(document.getElementById("periodo").value);
    const taxaCDI = parseFloat(document.getElementById("taxa").value) / 100;
    const rendimentoCDI = parseFloat(document.getElementById("rendimento").value) / 100;
    
    const taxaEfetivaAno = taxaCDI * rendimentoCDI;
    const taxaMensal = Math.pow(1 + taxaEfetivaAno, 1 / 12) - 1;
    
    const montante = valor * Math.pow(1 + taxaMensal, meses);
    const retorno = (montante - valor).toFixed(2);
    
    document.getElementById("retorno").textContent = `R$ ${retorno}`;
});
  
// efeito de rolagem
ScrollReveal().reveal('.reveal', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});
