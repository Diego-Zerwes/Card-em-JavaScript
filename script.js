function product(nome,preco,descricao,imagem,disponivel,avaliacao,caracteristica,tags,desconto){
  this.nome = nome;
  this.preco = preco;
  this.descricao = descricao;
  this.imagem = imagem;
  this.disponivel = disponivel;
  this.avaliacao = avaliacao;
  this.caracteristica = caracteristica;
  this.tags = tags;
  this.desconto = desconto;

  this.aplicaDesconto = function(){
    if(this.desconto > 0){
      let Desconto = this.preco * (this.desconto / 100);
      this.preco -= Desconto;
    }

  };

}

let produto = new product("Smartphone XYZ", 999.99, "Um smartphone poderoso com camera de alta resolução e processador rápido", "facul/Xiaomi.jpg", true, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", " Eletronicos"], 10);
let produto2 = new product("Smartphone XYZ", 999.99, "Um smartphone poderoso com camera de alta resolução e processador rápido", "facul/Xiaomi.jpg", false, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", " Eletronicos"], 20);
let produto3 = new product("Smartphone XYZ", 999.99, "Um smartphone poderoso com camera de alta resolução e processador rápido", "facul/Xiaomi.jpg", true, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", "Eletronicos"], 15);
let listaDeProdutos = document.createElement("div")
listaDeProdutos.classList.add('lista-de-cards')

function createHtmlCard(product){
  
  let container = document.createElement("div");
  container.classList.add("container");
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let span = document.createElement("span");

  p3.classList.add("preco");

  container.appendChild(h1);
  container.appendChild(h2);
  container.appendChild(h3);
  container.appendChild(img);
  container.appendChild(p);
  container.appendChild(p2);
  container.appendChild(p3);
  container.appendChild(span);
  h1.appendChild(document.createTextNode(product.nome));
  h2.appendChild(document.createTextNode(product.descricao));
  h3.appendChild(document.createTextNode(product.disponivel ? "Disponivel" : "Indisponivel"));
  img.src = "/Xiaomi.jpg";
 if(typeof product.tags !== 'number'){
  console.error("é um numero");
 }
  p.appendChild(document.createTextNode(product.tags));
  p2.appendChild(document.createTextNode(product.caracteristica));
  product.aplicaDesconto();
  p3.appendChild(document.createTextNode(`R$ ${product.preco.toFixed(2)}`));
  if(product.desconto > 0){
    product.desconto = `  Desconto ${product.desconto}%`;
  }

  span.appendChild(document.createTextNode(product.desconto));
  listaDeProdutos.appendChild(container);
}
document.body.appendChild(listaDeProdutos);

let arrayCards = [];

  arrayCards.push(produto,produto2,produto3)

  function gerarCardList(array){
    array.forEach(card => {
      return createHtmlCard(card)
    })
  }
  gerarCardList(arrayCards);
function insertProdutoCard(array){
  let ul = document.querySelector(".lista-de-cards")
  console.log(array)
  
    gerarCardList(array)
   
}

let listaProdutos = [produto,produto2,produto3];

localStorage.setItem("Produtos", JSON.stringify(listaProdutos))

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
function setTheme() {
  const currentTheme = body.classList.contains('active') ? 'active' : 'inactive';
  localStorage.setItem('theme', currentTheme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'active') {
    body.classList.add('active');
    toggle.classList.add('active');
  } else {
    body.classList.remove('active');
    toggle.classList.remove('active');
  }
}

toggle.onclick = function() {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  setTheme();
}

loadTheme();