const bancoDeNomes = [
  "Aarao", "Abel", "Abigail", "Acacio", "Ada", "Adalberto", "Adao", "Adela", "Adelaide", "Adelio",
  "Adhemar", "Adonis", "Adriana", "Adriano", "Agata", "Agnes", "Agostinho", "Aida", "Ailton", "Airton",
  "Akira", "Alan", "Alana", "Alba", "Albert", "Alberta", "Alberto", "Albino", "Alcides", "Aldo",
  "Alef", "Alejandro", "Aleksander", "Alessandra", "Alessandro", "Alex", "Alexander", "Alexandra", "Alexandre", "Alexia",
  "Alexis", "Alfredo", "Alice", "Alicia", "Aline", "Alison", "Alvaro", "Amanda", "Amalia", "Amaro",
  "Amauri", "Amelia", "Americo", "Amilcar", "Ana", "Anabel", "Anabela", "Anais", "Anastacia",
  "Anelise", "Angel", "Angela", "Angelica", "Angelina", "Angelo", "Anibal", "Anise", "Anita", "Anisio",
  "Anna", "Antonella", "Antonia", "Antonio", "Antony", "Apollo", "Apolo", "Aparecida", "Aparecido", "Aquiles",
  "Arnaldo", "Arthur", "Artur", "Ariel", "Ariela", "Ariane", "Arlene", "Armando", "Arnalda", "Aron",
  "Astrid", "Athena", "Atena", "Augusta", "Augusto", "Aurea", "Aurelio", "Aurora", "Ayla", "Aziz",
  "Bárbara", "Baltazar", "Barnabe", "Bartolomeu", "Bastos", "Beatriz", "Belinda", "Belisa", "Bella", "Belle",
  "Benicio", "Benito", "Benjamin", "Bento", "Berenice", "Bernadete", "Bernardo", "Berta", "Beto", "Betina",
  "Bianca", "Bibiana", "Blanca", "Boaventura", "Boris", "Branca", "Brenda", "Brendon", "Breno", "Brian",
  "Briana", "Bridget", "Bruna", "Brunilda", "Bruno", "Bryan", "Caique", "Caio", "Caleb", "Calel",
  "Calista", "Calixto", "Camila", "Camilo", "Candida", "Candido", "Carina", "Carla", "Carlo", "Carlos",
  "Carlota", "Carmem", "Carola", "Carolina", "Caroline", "Cassia", "Cassiano", "Cassio", "Catarina", "Celia",
  "Celina", "Celso", "Cesar", "Charles", "Charlotte", "Christian", "Christiane", "Christopher", "Cicero", "Cidia",
  "Cilene", "Cora", "Coraçao", "Coraline", "Cordelia", "Cintia", "Cirilo", "Ciro", "Clara",
  "Clarice", "Clarissa", "Claudio", "Cleber", "Clementina", "Cleo", "Cleopatra", "Clovis", "Conrado", "Constança",
  "Constancio", "Cristiana", "Cristiano", "Cristina", "Cristovao", "Dafne", "Dagmar", "Daisy", "Dalila", "Dalva", "Damiao", "Daniel", "Daniela", "Daniele", "Danilo", "Dante", "Dara", "Darcio", "Daria",
  "Dario", "Davi", "David", "Davina", "Dayana", "Debora", "Decio", "Deise", "Delia", "Delmar",
  "Demétrio", "Denis", "Denise", "Desiree", "Diana", "Diego", "Dilma", "Dina", "Diogo",
  "Dionisio", "Dirce", "Dirceu", "Dora", "Doralice", "Dorian", "Doroteia", "Douglas", "Dulce", "Eder",
  "Edgard", "Edgar", "Edite", "Edna", "Edson", "Eduarda", "Eduardo", "Edvaldo", "Efraim", "Eileen",
  "Elaine", "Elba", "Eleanor", "Elena", "Eleonora", "Eleni", "Eliana", "Eliane", "Elias", "Elisa",
  "Elisabeth", "Eliseu", "Eliza", "Elizabeth", "Ellen", "Eloá", "Eloisa", "Elton", "Elvira", "Emanuel",
  "Emanuela", "Emilia", "Emiliano", "Emilio", "Emily", "Emma", "Ena", "Eneida", "Enio", "Enzo",
  "Eric", "Erica", "Erick", "Erico", "Erik", "Erika", "Ernesto", "Esdras", "Esequiel", "Ester",
  "Estevao", "Estela", "Esther", "Eunice", "Eva", "Evandro", "Evelyn", "Everton", "Ezequiel", "Fabia",
  "Fabiana", "Fabiano", "Fabio", "Fabiola", "Fabricio", "Fagner", "Fara", "Fatima", "Fausto", "Felicia",
  "Felipe", "Felix", "Fernando", "Fernanda", "Fernao", "Filipe", "Fiona", "Flavia", "Flavio", "Flora",
  "Florian", "Florinda", "Franca", "Francis", "Francisca", "Francisco", "Franco", "Gabriel", "Gabriela", "Gabriele",
  "Gael", "Gaela", "Galia", "Gaspard", "Gaspar", "Gaston", "Gedeao", "Gemma", "Genaro", "Genebra",
  "Genoveva", "Geovanna", "Geraldo", "Gerardo", "Gerson", "Gertrudes", "Gia", "Giba", "Gideon", "Gil",
  "Gilberto", "Gilmar", "Gilson", "Gina", "Giordano", "Giovana", "Giovanni", "Gisela", "Gisele", "Giuliana",
  "Giulia", "Glaucia", "Glaucio", "Glória", "Godefroi", "Gonzalo", "Grace", "Gracia", "Graciela", "Graziela",
  "Gregorio", "Greta", "Guido", "Guilherme", "Guilhermina", "Guiomar", "Gustavo", "Hadassa", "Hamilton", "Hanna",
  "Hannah", "Hans", "Harold", "Haroldo", "Harrison", "Harry", "Hector", "Heitor", "Helena",
  "Heleno", "Helga", "Helio", "Heloisa", "Henry", "Heraldo", "Herbert", "Hercules", "Hermano", "Hermes",
  "Hilda", "Homer", "Homero", "Horacio", "Hortencia", "Hugo", "Humberto", "Iana", "Igor",
  "Ilan", "Ilana", "Inacio", "Ines", "Ingrid", "Iara", "Irene", "Iris", "Irina", "Irma",
  "Isa", "Isaac", "Isabel", "Isabela", "Isabella", "Isadora", "Isaias", "Isolda", "Israel", "Italo",
  "Iure", "Iuri", "Ivã", "Ivan", "Ivana", "Ivete", "Ivo", "Ivone", "Izabel", "Jaci",
  "Jacinto", "Jack", "Jackson", "Jacqueline", "Jade", "Jader", "Jadir", "Jaime", "Jair", "Jairo",
  "Jamil", "Jamila", "Janaïna", "Jane", "Janete", "Janaina", "Jardel", "Jasmin", "Jasmim", "Jason",
  "Javier", "Jean", "Jeane", "Jefferson", "Jeferson", "Jemima", "Jennifer", "Jeremias", "Jeronimo", "Jessica",
  "Jesus", "Jil", "Joana", "Joao", "Joaquim", "Joel", "Joelma", "John", "Joi", "Jonas",
  "Jonathan", "Jonatas", "Jorge", "Jorgina", "Jose", "Josefina", "Joshua", "Josue", "Joyce", "Juares",
  "Juarez", "Jucelia", "Judite", "Julia", "Julian", "Juliana", "Juliano", "Juliet", "Julieta", "Julio",
  "Junes", "Junior", "Jurema", "Jussara", "Justin", "Justino", "Kael", "Kai", "Kaio", "Kaira",
  "Kareem", "Karen", "Karina", "Karine", "Karla", "Kate", "Katia", "Katiuscia", "Kauan", "Kelvin",
  "Kenia", "Keno", "Kevin", "Kiara", "Kiko", "Klara", "Klaus", "Klayton", "Kora", "Kylian",
  "Lara", "Larissa", "Lauana", "Laura", "Lauro", "Laercio", "Lais", "Laila", "Laisa", "Lana",
  "Lari", "Laurindo", "Lavinia", "Layla", "Lazaro", "Leandra", "Leandro", "Leda", "Leila", "Lelia",
  "Leni", "Lenita", "Leo", "Leonardo", "Leonel", "Leonor", "Leopoldo", "Leticia", "Levy", "Levi",
  "Lia", "Liana", "Lidia", "Lidiane", "Ligia", "Lilian", "Liliana", "Liliane", "Lina", "Lincoln",
  "Linda", "Linn", "Lino", "Lionel", "Lisa", "Lisandra", "Livio", "Livia", "Liz", "Liza",
  "Lorena", "Lorenzo", "Loris", "Lourdes", "Luan", "Luana", "Luara", "Luca", "Lucas", "Lucia",
  "Luciana", "Luciano", "Lucien", "Luciene", "Lucio", "Lucrecia", "Ludmila", "Luis", "Luisa", "Luiz",
  "Luiza", "Luma", "Luna", "Luzia", "Lycio"
];

// Objeto global de nomes dos personagens da rodada atual
let personagens = {
  avo: "",
  padaria: "",
  mecanico: ""
};

// Função para sortear nomes aleatórios sem repetição
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

// Função que retorna a história atualizada com os novos nomes
function getStory() {
  const avo = personagens.avo;
  const padaria = personagens.padaria;
  const mecanico = personagens.mecanico;

  return {
    start: {
      title: `O SEGREDO DO AVÔ ${avo.toUpperCase()}`,
      narrative: `Você herdou o diário do seu avô ${avo}. Enquanto ajuda diferentes pessoas na cidade, começa a perceber que as vidas delas estão interligadas por um evento misterioso do passado... e o seu avô estava no centro de tudo.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      sceneText: "Hoje pela manhã, duas pessoas pediram sua ajuda. Cada uma carrega um pedaço do passado.",
      choices: [
        { text: `Ajudar ${padaria} na padaria`, next: "padaria" },
        { text: `Ajudar ${mecanico} na oficina`, next: "mecanico" }
      ]
    },

    padaria: {
      narrative: `A senhora ${padaria} da padaria segura uma carta amarelada. As mãos tremem enquanto fala.`,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      sceneText: `\"Seu avô ${avo} me deu esta carta em 1987. Disse que um dia alguém da família viria buscá-la. Dentro há um nome... e um endereço que não existe mais.\" Você lê: o nome é o mesmo que o mecânico ${mecanico} mencionou ontem.`,
      choices: [
        { text: "Perguntar sobre o endereço", next: "endereco" },
        { text: "Ir até a oficina agora", next: "oficina" }
      ]
    },

    mecanico: {
      narrative: `${mecanico} limpa as mãos sujas de graxa e aponta para uma foto antiga pregada na parede da oficina.`,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      sceneText: `\"Seu avô ${avo} salvou esta oficina em 1987. Depois do incêndio na antiga fábrica, ele chegou com documentos e um acordo estranho. Nunca quis falar sobre o que realmente aconteceu naquela noite.\"`,
      choices: [
        { text: "Perguntar sobre a fábrica", next: "fabrica" },
        { text: "Ir até a padaria agora", next: "padaria2" }
      ]
    },

    endereco: {
      narrative: "O endereço na carta leva a um terreno vazio onde antes ficava a Fábrica Aurora. As pessoas mais velhas ainda baixam a voz ao falar do lugar.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      sceneText: `Uma placa enferrujada ainda resiste: \"Projeto Aurora - Pesquisa & Desenvolvimento\". No diário do seu avô ${avo}, a mesma palavra aparece sublinhada dezenas de vezes.`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Procurar testemunhas da época", next: "testemunhas" }
      ]
    },

    oficina: {
      narrative: `Você chega à oficina. ${mecanico} reconhece a carta imediatamente.`,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      sceneText: `\"Então ela finalmente te entregou... Seu avô ${avo} prometeu que o segredo só seria revelado quando as peças se encaissassem. A fábrica, a carta e o incêndio não foram acidente.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Perguntar o que ele sabe do incêndio", next: "incendio" }
      ]
    },

    fabrica: {
      narrative: "A Fábrica Aurora era oficialmente uma indústria têxtil. Mas quem trabalhou lá conta outra história.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      sceneText: `\"Eles desenvolviam máquinas que 'aprendiam sozinhas'. Seu avô ${avo} era o engenheiro-chefe. Na noite do incêndio, ele foi o único que saiu carregando caixas de documentos... e nunca mais falou sobre o projeto.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Procurar mais testemunhas", next: "testemunhas" }
      ]
    },

    padaria2: {
      narrative: `${padaria} te recebe com um olhar de alívio. Parece que esperava por este momento há décadas.`,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      sceneText: `\"${mecanico} te mandou, não foi? Então as coisas estão se alinhando. Seu avô ${avo} disse que quando o neto ajudasse tanto a padaria quanto a oficina, o ciclo se fecharia.\"`,
      choices: [
        { text: "Abrir o diário na página marcada", next: "diario" },
        { text: "Perguntar sobre o ciclo", next: "ciclo" }
      ]
    },

    testemunhas: {
      narrative: "Você encontra três pessoas que trabalharam na Fábrica Aurora. Todas contam a mesma versão, com detalhes diferentes.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      sceneText: `O projeto não era sobre tecidos. Era sobre uma máquina capaz de prever padrões humanos. Seu avô ${avo} descobriu algo perigoso demais... e preferiu apagar os rastros no fogo.`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    incendio: {
      narrative: `${mecanico} baixa a voz, mesmo estando sozinho na oficina.`,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80",
      sceneText: `\"O fogo começou no laboratório. Seu avô ${avo} gritou para todos saírem. Depois voltou sozinho e trancou a porta. Quando os bombeiros chegaram, só restavam cinzas e ele... com o diário debaixo do braço.\"`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    ciclo: {
      narrative: `${padaria} segura suas mãos com carinho.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      sceneText: `\"Seu avô ${avo} acreditava que o conhecimento só deveria voltar quando alguém da família demonstrasse empatia suficiente. Ajudar pessoas diferentes, sem interesse... era o teste. Você passou.\"`,
      choices: [
        { text: "Ler a última entrada do diário", next: "diario" }
      ]
    },

    diario: {
      narrative: `Você abre o diário na página marcada com uma fita vermelha. A letra do seu avô ${avo} está trêmula, mas determinada.`,
      image: "https://images.unsplash.com/photo-1456513080880-7d93aaa2ba29?w=800&q=80",
      sceneText: "\"Se você está lendo isto, significa que ajudou pessoas cujas vidas eu toquei em 1987. A Fábrica Aurora não fabricava tecidos. Criávamos o protótipo de uma inteligência que aprendia com o comportamento humano. Eu vi o perigo. Por isso queimei o laboratório. Mas guardei o essencial: a ideia de que a tecnologia só deve existir se servir às pessoas... nunca o contrário. Agora o segredo é seu.\"",
      choices: [
        { text: `Aceitar o legado do avô ${avo}`, next: "final" }
      ]
    },

    final: {
      narrative: "O diário se fecha. Pela primeira vez, todas as peças se encaixam.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      sceneText: `As pessoas que você ajudou não eram coincidências. Seu avô ${avo} preparou o caminho décadas atrás. O verdadeiro segredo não era a máquina... era a prova de que você escolheria o lado humano. O legado agora é seu.`,
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

  // Animação de entrada
  contentEl.classList.remove("fade-in");
  void contentEl.offsetWidth; // força reflow
  contentEl.classList.add("fade-in");

  if (scene.title) {
    titleEl.textContent = scene.title;
  }

  narrativeEl.textContent = scene.narrative;
  imageEl.src = scene.image;
  imageEl.alt = "Cena da história";
  sceneTextEl.textContent = scene.sceneText;

  // Limpa escolhas anteriores
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
    // Tela final
    const finalBox = document.createElement("div");
    finalBox.className = "final-reveal";
    finalBox.innerHTML = `<strong>Fim da aventura.</strong><br>O segredo do avô ${personagens.avo} foi revelado.`;
    choicesEl.appendChild(finalBox);

    const restart = document.createElement("button");
    restart.className = "restart-btn visible";
    restart.type = "button";
    restart.textContent = "Recomeçar a história";
    restart.addEventListener("click", function () {
      reiniciarHistoria();
    });
    choicesEl.appendChild(restart);
  }
}

// Função para recomeçar do zero sorteando novos nomes
function reiniciarHistoria() {
  sortearNomes();
  renderScene("start");
}

// Inicia a história quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  reiniciarHistoria();
});