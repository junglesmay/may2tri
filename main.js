const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um livro que parece conter todos os segredos do universo. Qual sua reação?",
        alternativas: [
            {
                texto: "Estou curioso para ler tudo!",
                afirmacao: "Sua curiosidade pelo desconhecido é grande e você adora conhecer coisa novas."
            },
            {
                texto: "Parece muito assustador para mim.",
                afirmacao: "Você prefere se manter longe de mistérios e coisas desconhecidas."
            }
        ]
    },
    {
        enunciado: "Você descobre uma nova habilidade que pode aprender em apenas uma semana. O que você escolhe?",
        alternativas: [
            {
                texto: "Aprender a tocar um instrumento musical.",
                afirmacao: "Você tem uma paixão pela música e quer expandir suas habilidades musicais."
            },
            {
                texto: "Aprender um novo idioma.",
                afirmacao: "Você adora se comunicar com pessoas de diferentes culturas e quer expandir suas habilidades linguísticas."
            }
        ]
    },
    {
        enunciado: "Durante uma viagem, você encontra um robô que pode responder qualquer pergunta. O que você pergunta?",
        alternativas: [
            {
                texto: "Qual é o segredo da felicidade?",
                afirmacao: "Você está sempre em busca de conhecimento que possa melhorar sua vida."
            },
            {
                texto: "Como funciona a inteligência artificial?",
                afirmacao: "Você tem uma curiosidade natural por tecnologia e quer entender mais sobre como ela funciona."
            }
        ]
    },
    {
        enunciado: "Você tem oportunidade de viajar para qualquer lugar do mundo. Para onde você vai?",
        alternativas: [
            {
                texto: "Para um lugar histórico e cheio de cultura.",
                afirmacao: "Você adora aprender sobre o passado e explorar novas culturas."
            },
            {
                texto: "Para uma ilha paradisíaca e relaxante.",
                afirmacao: "Você valoriza momentos de relaxamento e gosta de estar em contato com a natureza."
            }
        ]
    },
    {
        enunciado: "Você pode escolher um superpoder. Qual você escolhe? ",
        alternativas: [
            {
                texto: "A habilidade de voar.",
                afirmacao: "Você gosta da ideia de liberdade ."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();