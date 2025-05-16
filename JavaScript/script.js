const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
hamburger.addEventListener('click', () => {
  sideMenu.style.right = '0';
});
closeBtn.addEventListener('click', () => {
  sideMenu.style.right = '-300px';
});
// Gráfico de Pizza
new Chart(document.getElementById("graficoPizza"), {
  type: 'pie',
  data: {
    labels: ["Renda Fixa", "Ações", "Fundos Imobiliários"],
    datasets: [{
      label: "Distribuição de Carteira",
      backgroundColor: ["#00c767", "#00bfa5", "#00e676"],
      data: [40, 35, 25]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});
// Gráfico de Barras
new Chart(document.getElementById("graficoBarra"), {
  type: 'bar',
  data: {
    labels: ["2021", "2022", "2023"],
    datasets: [{
      label: "Investimento de João (R$)",
      backgroundColor: "#00bfa5",
      data: [5000, 8500, 12000]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
// Gráfico de Linha
new Chart(document.getElementById("graficoLinha"), {
  type: 'line',
  data: {
    labels: ["2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Evolução Patrimonial da Ana (R$)",
      borderColor: "#00e676",
      fill: false,
      data: [1000, 3000, 7000, 15000]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

ScrollReveal().reveal('.reveal', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});
