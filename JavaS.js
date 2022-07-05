//Inicio Grafico Pizza
const cty = document.getElementById('grafPizza').getContext('2d');

const myCharty = new Chart(cty, {
    type: 'pie',
    data: {
        labels: [
          'Etiópia',
          ' Somália',
          'Sudão',
          'Moçambique',
          'Malavi',
          'Libéria',
          'Angola'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 40, 25, 90, 135],
          backgroundColor: [
            'rgb(255, 15, 132)',
            'rgb(54, 162, 2)',
            'rgb(5, 205, 86)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 0, 0)'
          ],
          hoverOffset: 4
        }]
      },
    
});
//Fim Grafico Pizza

//Inicio Grafico Linha
const ctx = document.getElementById('grafLinha').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
            '2022'
        ],
        datasets: [{
            label: 'Evolução da fome ao longo dos anos (em milhões)',
            data: [ 280, 320, 420,600 ,650 ,700 ,800 , 950,1050,1000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//Fim grafico linha

//começo do formulario

emailInput.addEventListener('change', (label) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        // alert('Por favor, insira um e-mail válido.');
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);
    }
    });

//final do formulario