// Banco de nomes com identificação de gênero ("M" para masculino, "F" para feminino)
const bancoDeNomes = [
  { nome: "Aarao", genero: "M" }, { nome: "Abel", genero: "M" }, { nome: "Abigail", genero: "F" },
  { nome: "Acacio", genero: "M" }, { nome: "Ada", genero: "F" }, { nome: "Adalberto", genero: "M" },
  { nome: "Adao", genero: "M" }, { nome: "Adela", genero: "F" }, { nome: "Adelaide", genero: "F" },
  { nome: "Adelio", genero: "M" }, { nome: "Adhemar", genero: "M" }, { nome: "Adonis", genero: "M" },
  { nome: "Adriana", genero: "F" }, { nome: "Adriano", genero: "M" }, { nome: "Agata", genero: "F" },
  { nome: "Agnes", genero: "F" }, { nome: "Agostinho", genero: "M" }, { nome: "Aida", genero: "F" },
  { nome: "Ailton", genero: "M" }, { nome: "Airton", genero: "M" }, { nome: "Akira", genero: "M" },
  { nome: "Alan", genero: "M" }, { nome: "Alana", genero: "F" }, { nome: "Alba", genero: "F" },
  { nome: "Albert", genero: "M" }, { nome: "Alberta", genero: "F" }, { nome: "Alberto", genero: "M" },
  { nome: "Albino", genero: "M" }, { nome: "Alcides", genero: "M" }, { nome: "Aldo", genero: "M" },
  { nome: "Alef", genero: "M" }, { nome: "Alejandro", genero: "M" }, { nome: "Aleksander", genero: "M" },
  { nome: "Alessandra", genero: "F" }, { nome: "Alessandro", genero: "M" }, { nome: "Alex", genero: "M" },
  { nome: "Alexander", genero: "M" }, { nome: "Alexandra", genero: "F" }, { nome: "Alexandre", genero: "M" },
  { nome: "Alexia", genero: "F" }, { nome: "Alexis", genero: "M" }, { nome: "Alfredo", genero: "M" },
  { nome: "Alice", genero: "F" }, { nome: "Alicia", genero: "F" }, { nome: "Aline", genero: "F" },
  { nome: "Alison", genero: "M" }, { nome: "Alvaro", genero: "M" }, { nome: "Amanda", genero: "F" },
  { nome: "Amalia", genero: "F" }, { nome: "Amaro", genero: "M" }, { nome: "Amauri", genero: "M" },
  { nome: "Amelia", genero: "F" }, { nome: "Americo", genero: "M" }, { nome: "Amilcar", genero: "M" },
  { nome: "Ana", genero: "F" }, { nome: "Anabel", genero: "F" }, { nome: "Anabela", genero: "F" },
  { nome: "Anais", genero: "F" }, { nome: "Anastacia", genero: "F" }, { nome: "Anelise", genero: "F" },
  { nome: "Angel", genero: "M" }, { nome: "Angela", genero: "F" }, { nome: "Angelica", genero: "F" },
  { nome: "Angelina", genero: "F" }, { nome: "Angelo", genero: "M" }, { nome: "Anibal", genero: "M" },
  { nome: "Anise", genero: "F" }, { nome: "Anita", genero: "F" }, { nome: "Anisio", genero: "M" },
  { nome: "Anna", genero: "F" }, { nome: "Antonella", genero: "F" }, { nome: "Antonia", genero: "F" },
  { nome: "Antonio", genero: "M" }, { nome: "Antony", genero: "M" }, { nome: "Apollo", genero: "M" },
  { nome: "Apolo", genero: "M" }, { nome: "Aparecida", genero: "F" }, { nome: "Aparecido", genero: "M" },
  { name: "Aquiles", genero: "M" }, { nome: "Arnaldo", genero: "M" }, { nome: "Arthur", genero: "M" },
  { name: "Artur", genero: "M" }, { name: "Ariel", genero: "M" }, { name: "Ariela", genero: "F" },
  { name: "Ariane", genero: "F" }, { name: "Arlene", genero: "F" }, { name: "Armando", genero: "M" },
  { name: "Arnalda", genero: "F" }, { name: "Aron", genero: "M" }, { name: "Astrid", genero: "F" },
  { name: "Athena", genero: "F" }, { name: "Atena", genero: "F" }, { name: "Augusta", genero: "F" },
  { name: "Augusto", genero: "M" }, { name: "Aurea", genero: "F" }, { name: "Aurelio", genero: "M" },
  { name: "Aurora", genero: "F" }, { name: "Ayla", genero: "F" }, { name: "Aziz", genero: "M" },
  { name: "Bárbara", genero: "F" }, { name: "Baltazar", genero: "M" }, { name: "Barnabe", genero: "M" },
  { name: "Bartolomeu", genero: "M" }, { name: "Beatriz", genero: "F" }, { name: "Belinda", genero: "F" },
  { name: "Belisa", genero: "F" }, { name: "Bella", genero: "F" }, { name: "Benicio", genero: "M" },
  { name: "Benito", genero: "M" }, { name: "Benjamin", genero: "M" }, { name: "Bento", genero: "M" },
  { name: "Berenice", genero: "F" }, { name: "Bernadete", genero: "F" }, { name: "Bernardo", genero: "M" },
  { name: "Berta", genero: "F" }, { name: "Beto", genero: "M" }, { name: "Betina", genero: "F" },
  { name: "Bianca", genero: "F" }, { name: "Bibiana", genero: "F" }, { name: "Blanca", genero: "F" },
  { name: "Boaventura", genero: "M" }, { name: "Boris", genero: "M" }, { name: "Branca", genero: "F" },
  { name: "Brenda", genero: "F" }, { name: "Brendon", genero: "M" }, { name: "Breno", genero: "M" },
  { name: "Brian", genero: "M" }, { name: "Briana", genero: "F" }, { name: "Bridget", genero: "F" },
  { name: "Bruna", genero: "F" }, { name: "Brunilda", genero: "F" }, { name: "Bruno", genero: "M" },
  { name: "Bryan", genero: "M" }, { name: "Caio", genero: "M" }, { name: "Caleb", genero: "M" },
  { name: "Camila", genero: "F" }, { name: "Camilo", genero: "M" }, { name: "Carina", genero: "F" },
  { name: "Carla", genero: "F" }, { name: "Carlos", genero: "M" }, { name: "Catarina", genero: "F" },
  { name: "Cauã", genero: "M" }, { name: "Cecilia", genero: "F" }, { name: "Celeste", genero: "F" },
  { name: "Celia", genero: "F" }, { name: "Celso", genero: "M" }, { name: "Cesar", genero: "M" },
  { name: "Clara", genero: "F" }, { name: "Clarice", genero: "F" }, { name: "Claudio", genero: "M" },
  { name: "Cleber", genero: "M" }, { name: "Daniel", genero: "M" }, { name: "Daniela", genero: "F" },
  { name: "Danilo", genero: "M" }, { name: "Dante", genero: "M" }, { name: "Davi", genero: "M" },
  { name: "Debora", genero: "F" }, { name: "Denise", genero: "F" }, { name: "Diana", genero: "F" },
  { name: "Diego", genero: "M" }, { name: "Diogo", genero: "M" }, { name: "Douglas", genero: "M" },
  { name: "Eduarda", genero: "F" }, { name: "Eduardo", genero: "M" }, { name: "Elisa", genero: "F" },
  { name: "Emanuel", genero: "M" }, { name: "Emilia", genero: "F" }, { name: "Enzo", genero: "M" },
  { name: "Ester", genero: "F" }, { name: "Evandro", genero: "M" }, { name: "Fabiana", genero: "F" },
  { name: "Fabio", genero: "M" }, { name: "Fabricio", genero: "M" }, { name: "Felipe", genero: "M" },
  { name: "Fernanda", genero: "F" }, { name: "Fernando", genero: "M" }, { name: "Flavia", genero: "F" },
  { name: "Flavio", genero: "M" }, { name: "Gabriel", genero: "M" }, { name: "Gabriela", genero: "F" },
  { name: "Gael", genero: "M" }, { name: "Giovana", genero: "F" }, { name: "Guilherme", genero: "M" },
  { name: "Gustavo", genero: "M" }, { name: "Heitor", genero: "M" }, { name: "Helena", genero: "F" },
  { name: "Henrique", genero: "M" }, { name: "Igor", genero: "M" }, { name: "Isabel", genero: "F" },
  { name: "Isabela", genero: "F" }, { name: "Isadora", genero: "F" }, { name: "Ícaro", genero: "M" },
  { name: "João", genero: "M" }, { name: "Julia", genero: "F" }, { name: "Juliana", genero: "F" },
  { name: "Julio", genero: "M" }, { name: "Lara", genero: "F" }, { name: "Larissa", genero: "F" },
  { name: "Laura", genero: "F" }, { name: "Leo", genero: "M" }, { name: "Leonardo", genero: "M" },
  { name: "Leticia", genero: "F" }, { name: "Lucas", genero: "M" }, { name: "Luciana", genero: "F" },
  { name: "Luiz", genero: "M" }, { name: "Luiza", genero: "F" }, { name: "Manuela", genero: "F" },
  { name: "Marcelo", genero: "M" }, { name: "Marco", genero: "M" }, { name: "Maria", genero: "F" },
  { name: "Mariana", genero: "F" }, { name: "Mateus", genero: "M" }, { name: "Miguel", genero: "M" },
  { name: "Natalia", genero: "F" }, { name: "Nicolas", genero: "M" }, { name: "Nicole", genero: "F" },
  { name: "Otavio", genero: "M" }, { name: "Patricia", genero: "F" }, { name: "Paulo", genero: "M" },
  { name: "Pedro", genero: "M" }, { name: "Rafael", genero: "M" }, { name: "Rafaela", genero: "F" },
  { name: "Raquel", genero: "F" }, { name: "Renan", genero: "M" }, { name: "Renata", genero: "F" },
  { name: "Rodrigo", genero: "M" }, { name: "Samuel", genero: "M" }, { name: "Sofia", genero: "F" },
  { name: "Thiago", genero: "M" }, { name: "Tomas", genero: "M" }, { name: "Valentina", genero: "F" },
  { name: "Vanessa", genero: "F" }, { name: "Victor", genero: "M" }, { name: "Vinicius", genero: "M" },
  { name: "Vitor", genero: "M" }, { name: "Vitoria", genero: "F" }, { name: "Yasmin", genero: "F" }
];

let personagens = {
  avo: { nome: "", genero: "M" },
  padaria: { nome: "", genero: "M" },
  mecanico: { nome: "", genero: "M" }
};

function sortearNomes() {
  const nomesCopia = [...bancoDeNomes];

  function pegarNomeAleatorio() {
    const index = Math.floor(Math.random() * nomesCopia.length);
    return nomesCopia.splice(index, 1)[0];
  }

  personagens.avo = pegarNomeAleatorio();
  personagens.padaria = pegarNomeAleatorio();
  personagens.mecanico = pegarNomeAleatorio();
}

// Retorna palavras flexionadas no gênero correto
function flexionar(personagem, mas) {
  const g = personagem.genero;
  const mapa = {
    "avô": g === "M" ? "avô" : "avó",
    "AVÔ": g === "M" ? "AVÔ" : "AVÓ",
    "mecânico": g === "M" ? "mecânico" : "mecânica",
    "padeiro": g === "M" ? "padeiro" : "padeira",
    "dono da padaria": g === "M" ? "dono da padaria" : "dona da padaria",
    "senhor": g === "M" ? "senhor" : "senhora",
    "engenheiro-chefe": g === "M" ? "engenheiro-chefe" : "engenheira-chefe",
    "o": g === "M" ? "o" : "a",
    "ele": g === "M" ? "ele" : "ela",
    "dele": g === "M" ? "dele" : "dela",
    "ao": g === "M" ? "ao" : "à",
    "neto": g === "M" ? "neto" : "neta"
  };
  return mapa[mas] || mas;
}

function getStory() {
  const avo = personagens.avo;
  const padaria = personagens.padaria;
  const mecanico = personagens.mecanico;

  const avoRotulo = flexionar(avo, "avô");
  const avoRotuloCap = flexionar(avo, "AVÔ");
  const mecanicoRotulo = flexionar(mecanico, "mecânico");
  const padariaRotulo = flexionar(padaria, "dono da padaria");
  const padariaTratamento = flexionar(padaria, "senhor");

  return {
    start: {
      title: `O SEGREDO D${flexionar(avo, "o").toUpperCase()} ${avoRotuloCap} ${avo.nome.toUpperCase()}`,
      narrative: `Você herdou o diário d${flexionar(avo, "o")} seu ${avoRotulo} ${avo.nome}. Enquanto ajuda diferentes pessoas na cidade, começa a perceber que as vidas delas estão interligadas por um evento misterioso do passado... e ${flexionar(avo, "o")} seu ${avoRotulo} estava no centro de tudo.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      sceneText: "Hoje pela manhã, duas pessoas pediram sua ajuda. Cada uma carrega um pedaço do passado.",
      choices: [
        { text: `Ajudar ${padaria.nome} na padaria`, next: "padaria" },
        { text: `Ajudar ${mecanico.nome} na oficina`, next: "mecanico" }
      ]
    },

    padaria: {
      narrative: `O ${padariaTratamento} ${padaria.nome} da padaria segura uma carta amarelada. As mãos tremem enquanto fala.`,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      sceneText: `\"Seu ${avoRotulo} ${avo.nome} me deu esta carta em 1987. Disse que um dia alguém da família viria buscá-la. Dentro há um nome... e um endereço que não existe mais.\" Você lê: o nome é o mesmo que ${flexionar(mecanico, "o")} ${mecanicoRotulo} ${mecanico.nome} mencionou ontem.`,
      choices: [
        { text: "Perguntar sobre o endereço", next: "endereco" },
        { text: "Ir até a oficina agora", next: "oficina" }
      ]
    },

    mecanico: {
      narrative: `${mecanico.nome} limpa as mãos sujas de graxa e aponta para uma foto antiga pregada na parede da oficina.`,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      sceneText: `\"Seu ${avoRotulo} ${avo.nome} salvou esta oficina em 1987. Depois do incêndio na antiga fábrica, ${flexionar(avo, "ele")} chegou com documentos e um acordo estranho. Nunca quis falar sobre o que realmente aconteceu naquela noite.\"`,
      choices: [
        { text: "Perguntar sobre a fábrica", next: "fabrica" },
        { text: "Ir até a padaria agora", next: "padaria2" }
      ]
    },

    endereco: {
      narrative: "O endereço na carta leva a um terreno vazio onde antes ficava a Fábrica Aurora. As pessoas mais velhas ainda baixam a voz ao falar do lugar.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      sceneText: `Uma placa enferrujada ainda resiste: \"Projeto Aurora - Pesquisa & Desenvolvimento\". No diário d${flexionar(avo, "o")} seu ${avoRotulo} ${avo.nome}, a mesma palavra aparece sublinhada dezenas de vezes.`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Procurar testemunhas da época", next: "testemunhas" }
      ]
    },

    oficina: {
      narrative: `Você chega à oficina. ${mecanico.nome} reconhece a carta imediatamente.`,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      sceneText: `\"Então ${flexionar(padaria, "ele")} finalmente te entregou... Seu ${avoRotulo} ${avo.nome} prometeu que o segredo só seria revelado quando as peças se encaissassem. A fábrica, a carta e o incêndio não foram acidente.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Perguntar o que ele sabe do incêndio", next: "incendio" }
      ]
    },

    fabrica: {
      narrative: "A Fábrica Aurora era oficialmente uma indústria têxtil. Mas quem trabalhou lá conta outra história.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      sceneText: `\"Eles desenvolviam máquinas que 'aprendiam sozinhas'. Seu ${avoRotulo} ${avo.nome} era ${flexionar(avo, "o")} ${flexionar(avo, "engenheiro-chefe")}. Na noite do incêndio, ${flexionar(avo, "ele")} foi ${flexionar(avo, "o")} único que saiu carregando caixas de documentos... e nunca mais falou sobre o projeto.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Procurar mais testemunhas", next: "testemunhas" }
      ]
    },

    padaria2: {
      narrative: `${padaria.nome} te recebe com um olhar de alívio. Parece que esperava por este momento há décadas.`,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      sceneText: `\"${mecanico.nome} te mandou, não foi? Então as coisas estão se alinhando. Seu ${avoRotulo} ${avo.nome} disse que quando o neto ajudasse tanto a padaria quanto a oficina, o ciclo se fecharia.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Perguntar sobre o ciclo", next: "ciclo" }
      ]
    },

    testemunhas: {
      narrative: "Você encontra três pessoas que trabalharam na Fábrica Aurora. Todas contam a mesma versão, com detalhes diferentes.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      sceneText: `O projeto não era sobre tecidos. Era sobre uma máquina capaz de prever padrões humanos. Seu ${avoRotulo} ${avo.nome} descobriu algo perigoso demais... e preferiu apagar os rastros no fogo.`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    incendio: {
      narrative: `${mecanico.nome} baixa a voz, mesmo estando sozinho na oficina.`,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
      sceneText: `\"O fogo começou no laboratório. Seu ${avoRotulo} ${avo.nome} gritou para todos saírem. Depois voltou sozinho e trancou a porta. Quando os bombeiros chegaram, só restavam cinzas e ${flexionar(avo, "ele")}... com o diário debaixo do braço.\"`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    ciclo: {
      narrative: `${padaria.nome} segura suas mãos com carinho.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      sceneText: `\"Seu ${avoRotulo} ${avo.nome} acreditava que o conhecimento só deveria voltar quando alguém da família demonstrasse empatia suficiente. Ajudar pessoas diferentes, sem interesse... era o teste. Você passou.\"`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    diario: {
      narrative: `Você abre o diário na página marcada com uma fita vermelha. A letra d${flexionar(avo, "o")} seu ${avoRotulo} ${avo.nome} está trêmula, mas determinada.`,
      image: "https://images.unsplash.com/photo-1456513080880-7d93aaa2ba29?w=800&q=80",
      sceneText: "\"Se você está lendo isto, significa que ajudou pessoas cujas vidas eu toquei em 1987. A Fábrica Aurora não fabricava tecidos. Criávamos o protótipo de uma inteligência que aprendia com o comportamento humano. Eu vi o perigo. Por isso queimei o laboratório. Mas guardei o essencial: a ideia de que a tecnologia só deve existir se servir às pessoas... nunca o contrário. Agora o segredo é seu.\"",
      choices: [
        { text: `Aceitar o legado d${flexionar(avo, "o")} ${avoRotulo} ${avo.nome}`, next: "final" }
      ]
    },

    final: {
      narrative: "O diário se fecha. Pela primeira vez, todas as peças se encaixam.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      sceneText: `As pessoas que você ajudou não eram coincidências. Seu ${avoRotulo} ${avo.nome} preparou o caminho décadas atrás. O verdadeiro segredo não era a máquina... era a prova de que você escolheria o lado humano. O legado agora é seu.`,
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
const globalRestartBtn = document.getElementById("global-restart-btn");

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
    const avoRotulo = flexionar(personagens.avo, "avô");
    const finalBox = document.createElement("div");
    finalBox.className = "final-reveal";
    finalBox.innerHTML = `<strong>Fim da aventura.</strong><br>O segredo d${flexionar(personagens.avo, "o")} ${avoRotulo} ${personagens.avo.nome} foi revelado.`;
    choicesEl.appendChild(finalBox);
  }
}

function reiniciarHistoria() {
  sortearNomes();
  renderScene("start");
}

document.addEventListener("DOMContentLoaded", function () {
  if (globalRestartBtn) {
    globalRestartBtn.addEventListener("click", reiniciarHistoria);
  }
  reiniciarHistoria();
});