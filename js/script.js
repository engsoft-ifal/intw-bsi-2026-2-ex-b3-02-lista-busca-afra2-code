// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");


function render(texto) {
  const termo = texto.trim().toLowerCase();

  const filtrados = cursos.filter((c) =>
    c.nome.toLowerCase().includes(termo)
  );

  if (filtrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
    return;
  }

  lista.innerHTML = filtrados.map((c) => `<li>${c.nome}</li>`).join("");
}

// Ao carregar, mostra os 3 cursos
render("");

// 2. OUVIR o evento input
busca.addEventListener("input", () => render(busca.value));
