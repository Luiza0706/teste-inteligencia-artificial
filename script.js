// Banco de nomes embaralhado com identificação de gênero ("M" para masculino, "F" para feminino)
const bancoDeNomes = [
  { nome: "Catarina", genero: "F" }, { nome: "Gael", genero: "M" }, { nome: "Henrique", genero: "M" },
  { nome: "Valentina", genero: "F" }, { nome: "Lara", genero: "F" }, { nome: "Acacio", genero: "M" },
  { nome: "Diego", genero: "M" }, { nome: "Beatriz", genero: "F" }, { nome: "Davi", genero: "M" },
  { nome: "Anabela", genero: "F" }, { nome: "Igor", genero: "M" }, { nome: "Juliana", genero: "F" },
  { nome: "Arthur", genero: "M" }, { nome: "Renata", genero: "F" }, { nome: "Beno", genero: "M" },
  { nome: "Isabela", genero: "F" }, { nome: "Otavio", genero: "M" }, { nome: "Camila", genero: "F" },
  { nome: "Adriano", genero: "M" }, { nome: "Adelaide", genero: "F" }, { nome: "Cauã", genero: "M" },
  { nome: "Ester", genero: "F" }, { nome: "Felipe", genero: "M" }, { nome: "Cecilia", genero: "F" },
  { nome: "Lucas", genero: "M" }, { nome: "Bianca", genero: "F" }, { nome: "Thiago", genero: "M" },
  { nome: "Laura", genero: "F" }, { nome: "Leonardo", genero: "M" }, { nome: "Diana", genero: "F" },
  { nome: "Enzo", genero: "M" }, { nome: "Sofia", genero: "F" }, { nome: "Ailton", genero: "M" },
  { nome: "Helena", genero: "F" }, { nome: "Gustavo", genero: "M" }, { nome: "Mariana", genero: "F" },
  { nome: "Rafael", genero: "M" }, { nome: "Leticia", genero: "F" }, { nome: "Gabriel", genero: "M" },
  { nome: "Bruna", genero: "F" }, { nome: "Rodrigo", genero: "M" }, { nome: "Vanessa", genero: "F" },
  { nome: "Caio", genero: "M" }, { nome: "Alice", genero: "F" }, { nome: "Heitor", genero: "M" },
  { nome: "Luiza", genero: "F" }, { nome: "Matheus", genero: "M" }, { nome: "Isadora", genero: "F" },
  { nome: "Bernardo", genero: "M" }, { nome: "Clarice", genero: "F" }, { nome: "Daniel", genero: "M" },
  { nome: "Agata", genero: "F" }, { nome: "Adao", genero: "M" }, { nome: "Amanda", genero: "F" },
  { nome: "Alexandre", genero: "M" }, { nome: "Nicole", genero: "F" }, { nome: "Samuel", genero: "M" },
  { nome: "Debora", genero: "F" }, { nome: "Emanuel", genero: "M" }, { nome: "Aline", genero: "F" },
  { nome: "Vitor", genero: "M" }, { nome: "Patricia", genero: "F" }, { nome: "Vinicius", genero: "M" },
  { nome: "Raquel", genero: "F" }, { nome: "Ariel", genero: "M" }, { nome: "Gabriela", genero: "F" },
  { nome: "Danilo", genero: "M" }, { nome: "Giovana", genero: "F" }, { nome: "Guilherme", genero: "M" },
  { nome: "Larissa", genero: "F" }, { nome: "Pedro", genero: "M" }, { nome: "Carolina", genero: "F" },
  { nome: "Bruno", genero: "M" }, { nome: "Fernanda", genero: "F" }, { nome: "Fabio", genero: "M" },
  { nome: "Natalia", genero: "F" }, { nome: "Dante", genero: "M" }, { nome: "Manuela", genero: "F" },
  { nome: "Paulo", genero: "M" }, { nome: "Soraia", genero: "F" }, { nome: "Marcelo", genero: "M" },
  { nome: "Yasmin", genero: "F" }, { nome: "Renan", genero: "M" }, { nome: "Eduarda", genero: "F" },
  { nome: "Cesar", genero: "M" }, { nome: "Agnes", genero: "F" }, { nome: "Breno", genero: "M" },
  { nome: "Ayla", genero: "F" }, { nome: "Carlos", genero: "M" }, { nome: "Juliet", genero: "F" },
  { nome: "Elias", genero: "M" }, { nome: "Rafaela", genero: "F" }, { nome: "Marcos", genero: "M" },
  { nome: "Denise", genero: "F" }, { nome: "Ezequiel", genero: "M" }, { nome: "Elisa", genero: "F" },
  { nome: "Fernando", genero: "M" }, { name: "Vitoria", genero: "F" }, { nome: "Flavio", genero: "M" },
  { nome: "Maria", genero: "F" }, { nome: "João", genero: "M" }, { nome: "Ana", genero: "F" }
];

let personagens = {
  avo: { nome: "", genero: "M" },
  padaria: { nome: "", genero: "M" },
  mecanico: { nome: "", genero: "M" }
};

// Função para embaralhar uma lista (Fisher-Yates Shuffle)
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Sorteio totalmente aleatório sem repetição entre os personagens da mesma rodada
function sortearNomes() {
  const disponiveis = embaralhar([...bancoDeNomes]);

  personagens.avo = disponiveis.pop();
  personagens.padaria = disponiveis.pop();
  personagens.mecanico = disponiveis.pop();
}

function flexionar(personagem, tipo) {
  const isM = personagem.genero === "M";
  
  const mapa = {
    "avo": isM ? "avô" : "avó",
    "AVO": isM ? "AVÔ" : "AVÓ",
    "do_avo": isM ? "do seu avô" : "da sua avó",
    "DO_AVO": isM ? "DO SEU AVÔ" : "DA SUA AVÓ",
    "mecanico": isM ? "mecânico" : "mecânica",
    "padeiro": isM ? "padeiro" : "padeira",
    "senhor": isM ? "senhor" : "senhora",
    "engenheiro": isM ? "engenheiro-chefe" : "engenheira-chefe",
    "o": isM ? "o" : "a",
    "O": isM ? "O" : "A",
    "do": isM ? "do" : "da",
    "ao": isM ? "ao" : "à",
    "ele": isM ? "ele" : "ela",
    "dele": isM ? "dele" : "dela",
    "sozinho": isM ? "sozinho" : "sozinha",
    "unico": isM ? "único" : "única"
  };

  return mapa[tipo] || tipo;
}

function getStory() {
  const avo = personagens.avo;
  const padaria = personagens.padaria;
  const mecanico = personagens.mecanico;

  return {
    start: {
      title: `O SEGREDO ${flexionar(avo, "DO_AVO")} ${avo.nome.toUpperCase()}`,
      narrative: `Você herdou o diário ${flexionar(avo, "do_avo")} ${avo.nome}. Enquanto ajuda diferentes pessoas na cidade, começa a perceber que as vidas delas estão interligadas por um evento misterioso do passado... e ${flexionar(avo, "o")} seu ${flexionar(avo, "avo")} estava no centro de tudo.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      sceneText: "Hoje pela manhã, duas pessoas pediram sua ajuda. Cada uma carrega um pedaço do passado.",
      choices: [
        { text: `Ajudar ${padaria.nome} na padaria`, next: "padaria" },
        { text: `Ajudar ${mecanico.nome} na oficina`, next: "mecanico" }
      ]
    },

    padaria: {
      narrative: `${flexionar(padaria, "O")} ${flexionar(padaria, "senhor")} ${padaria.nome} da padaria segura uma carta amarelada. As mãos tremem enquanto fala.`,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      sceneText: `\"Seu ${flexionar(avo, "avo")} ${avo.nome} me deu esta carta em 1987. Disse que um dia alguém da família viria buscá-la. Dentro há um nome... e um endereço que não existe mais.\" Você lê: o nome é o mesmo que ${flexionar(mecanico, "o")} ${flexionar(mecanico, "mecanico")} ${mecanico.nome} mencionou ontem.`,
      choices: [
        { text: "Perguntar sobre o endereço", next: "endereco" },
        { text: "Ir até a oficina agora", next: "oficina" }
      ]
    },

    mecanico: {
      narrative: `${flexionar(mecanico, "O")} ${flexionar(mecanico, "mecanico")} ${mecanico.nome} limpa as mãos sujas de graxa e aponta para uma foto antiga pregada na parede da oficina.`,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      sceneText: `\"Seu ${flexionar(avo, "avo")} ${avo.nome} salvou esta oficina em 1987. Depois do incêndio na antiga fábrica, ${flexionar(avo, "ele")} chegou com documentos e um acordo estranho. Nunca quis falar sobre o que realmente aconteceu naquela noite.\"`,
      choices: [
        { text: "Perguntar sobre a fábrica", next: "fabrica" },
        { text: "Ir até a padaria agora", next: "padaria2" }
      ]
    },

    endereco: {
      narrative: "O endereço na carta leva a um terreno vazio onde antes ficava a Fábrica Aurora. As pessoas mais velhas ainda baixam a voz ao falar do lugar.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      sceneText: `Uma placa enferrujada ainda resiste: \"Projeto Aurora - Pesquisa & Desenvolvimento\". No diário ${flexionar(avo, "do_avo")} ${avo.nome}, a mesma palavra aparece sublinhada dezenas de vezes.`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Procurar testemunhas da época", next: "testemunhas" }
      ]
    },

    oficina: {
      narrative: `Você chega à oficina. ${flexionar(mecanico, "O")} ${flexionar(mecanico, "mecanico")} ${mecanico.nome} reconhece a carta imediatamente.`,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      sceneText: `\"Então ${flexionar(padaria, "ele")} finalmente te entregou... Seu ${flexionar(avo, "avo")} ${avo.nome} prometeu que o segredo só seria revelado quando as peças se encaissassem. A fábrica, a carta e o incêndio não foram acidente.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Perguntar o que sabe do incêndio", next: "incendio" }
      ]
    },

    fabrica: {
      narrative: "A Fábrica Aurora era oficialmente uma indústria têxtil. Mas quem trabalhou lá conta outra história.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      sceneText: `\"Eles desenvolviam máquinas que 'aprendiam sozinhas'. Seu ${flexionar(avo, "avo")} ${avo.nome} era ${flexionar(avo, "o")} ${flexionar(avo, "engenheiro")}. Na noite do incêndio, ${flexionar(avo, "ele")} foi ${flexionar(avo, "o")} ${flexionar(avo, "unico")} que saiu carregando caixas de documentos... e nunca mais falou sobre o projeto.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Procurar mais testemunhas", next: "testemunhas" }
      ]
    },

    padaria2: {
      narrative: `${padaria.nome} te recebe com um olhar de alívio. Parece que esperava por este momento há décadas.`,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      sceneText: `\"${mecanico.nome} te mandou, não foi? Então as coisas estão se alinhando. Seu ${flexionar(avo, "avo")} ${avo.nome} disse que quando a família ajudasse tanto a padaria quanto a oficina, o ciclo se fecharia.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Perguntar sobre o ciclo", next: "ciclo" }
      ]
    },

    testemunhas: {
      narrative: "Você encontra três pessoas que trabalharam na Fábrica Aurora. Todas contam a mesma versão, com detalhes diferentes.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      sceneText: `O projeto não era sobre tecidos. Era sobre uma máquina capaz de prever padrões humanos. Seu ${flexionar(avo, "avo")} ${avo.nome} descobriu algo perigoso demais... e preferiu apagar os rastros no fogo.`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    incendio: {
      narrative: `${mecanico.nome} baixa a voz, mesmo estando a sós na oficina.`,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
      sceneText: `\"O fogo começou no laboratório. Seu ${flexionar(avo, "avo")} ${avo.nome} gritou para todos saírem. Depois voltou ${flexionar(avo, "sozinho")} e trancou a porta. Quando os bombeiros chegaram, só restavam cinzas e ${flexionar(avo, "ele")}... com o diário debaixo do braço.\"`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    ciclo: {
      narrative: `${padaria.nome} segura suas mãos com carinho.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      sceneText: `\"Seu ${flexionar(avo, "avo")} ${avo.nome} acreditava que o conhecimento só deveria voltar quando alguém da família demonstrasse empatia suficiente. Ajudar pessoas diferentes, sem interesse... era o teste. Você passou.\"`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    diario: {
      narrative: `Você abre o diário na página marcada com uma fita vermelha. A letra ${flexionar(avo, "do_avo")} ${avo.nome} está trêmula, mas determinada.`,
      image: "https://images.unsplash.com/photo-1456513080880-7d93aaa2ba29?w=800&q=80",
      sceneText: "\"Se você está lendo isto, significa que ajudou pessoas cujas vidas eu toquei em 1987. A Fábrica Aurora não fabricava tecidos. Criávamos o protótipo de uma inteligência que aprendia com o comportamento humano. Eu vi o perigo. Por isso queimei o laboratório. Mas guardei o essencial: a ideia de que a tecnologia só deve existir se servir às pessoas... nunca o contrário. Agora o segredo é seu.\"",
      choices: [
        { text: `Aceitar o legado ${flexionar(avo, "do_avo")} ${avo.nome}`, next: "final" }
      ]
    },

    final: {
      narrative: "O diário se fecha. Pela primeira vez, todas as peças se encaixam.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      sceneText: `As pessoas que você ajudou não eram coincidências. Seu ${flexionar(avo, "avo")} ${avo.nome} preparou o caminho décadas atrás. O verdadeiro segredo não era a máquina... era a prova de que você escolheria o lado humano. O legado agora é seu.`,
      choices: []
    }
  };
}

const titleEl = document.getElementById("title");
const narrativeEl = document.getElementById("narrative");
const imageEl = document.getElementById("story-image");
const sceneTextEl = document.getElementById("scene-text");
const choicesEl = document.getElementById("choices");
const contentEl = document.getElementById("content");

function renderScene(sceneKey) {
  const currentStory = getStory();
  const scene = currentStory[sceneKey];

  if (!scene) {
    console.error("Cena não encontrada:", sceneKey);
    return;
  }

  contentEl.classList.remove("fade-in");
  void contentEl.offsetWidth;
  contentEl.classList.add("fade-in");

  if (scene.title) {
    titleEl.textContent = scene.title;
  }

  narrativeEl.textContent = scene.narrative;
  imageEl.src = scene.image;
  imageEl.alt = "Cena da história";
  sceneTextEl.textContent = scene.sceneText;

  choicesEl.innerHTML = "";

  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach(function (choice) {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.type = "button";
      btn.textContent = choice.text;

      btn.addEventListener("click", function () {
        renderScene(choice.next);
      });

      choicesEl.appendChild(btn);
    });
  } else {
    const finalBox = document.createElement("div");
    finalBox.className = "final-reveal";
    finalBox.innerHTML = `<strong>Fim da aventura.</strong><br>O segredo ${flexionar(personagens.avo, "do_avo")} ${personagens.avo.nome} foi revelado.`;
    choicesEl.appendChild(finalBox);
  }
}

function reiniciarHistoria() {
  sortearNomes();
  renderScene("start");
}

document.addEventListener("DOMContentLoaded", function () {
  const globalRestartBtn = document.getElementById("global-restart-btn");
  if (globalRestartBtn) {
    globalRestartBtn.addEventListener("click", reiniciarHistoria);
  }
  reiniciarHistoria();
});