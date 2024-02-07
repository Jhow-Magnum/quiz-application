const perguntas = [
    {
      pergunta: "Qual é a função principal do JavaScript?",
      respostas: [
        "Manipulação de banco de dados",
        "Estilização de páginas web",
        "Programação do lado do cliente",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um estilo de codificação",
        "Um modelo de objeto para interagir com elementos HTML",
        "Uma linguagem de programação",
      ],
      correta: 1,
    },
    {
      pergunta: "O que significa 'NaN' em JavaScript?",
      respostas: [
        "Não é nada",
        "Nada agora",
        "Not a Number",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "v = 10",
        "variavel = 10",
        "let variavel = 10",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Um bloco de código dentro de uma função",
        "Um tipo de variável",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "JavaScript Object Notation",
        "Java Standard Object Notation",
        "JavaScript Ordered Numbers",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é uma promise em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um objeto que representa um valor eventualmente disponível",
        "Uma função assíncrona",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o operador '===' em JavaScript?",
      respostas: [
        "Igual em valor e tipo",
        "Igual em valor, mas não em tipo",
        "Diferente em valor e tipo",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
      respostas: [
        "Converter uma string para um número inteiro",
        "Arredondar um número para o inteiro mais próximo",
        "Encontrar a parte decimal de um número",
      ],
      correta: 0,
    },
  ];
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
   
  
  // Loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true); //Clona o template
    quizItem.querySelector('h3').textContent = item.pergunta; // Modifica h3
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent =resposta
  
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove();
  
    quiz.appendChild(quizItem); // Coloca a pergunta na tela
   
  
  };
  