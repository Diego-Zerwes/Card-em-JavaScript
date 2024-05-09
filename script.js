const Produto = {
  nome: "Smartphone XYZ",
  preco: 999.99,
  descricao: "Um smartphone poderoso com camera de alta resolução e processador rápido",
  imagem: "facul/Xiaomi.jpg",
  disponivel: true,
  avaliacao: 4.5,
  caracteristica: ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"],
  tags: ["tecnologia", "Smartphone", "Eletronicos"],
  desconto: "10%"
}


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
let produto2 = new product("Smartphone XYZ", 999.99, "Um smartphone poderoso com camera de alta resolução e processador rápido", "facul/Xiaomi.jpg", false, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", " Eletronicos"], 10);
let produto3 = new product("Smartphone XYZ", 999.99, "Um smartphone poderoso com camera de alta resolução e processador rápido", "facul/Xiaomi.jpg", true, 4.5, ["Tela de 6 polegadas", "Memoria de 128GB", "Camera principal de 48MP"], ["tecnologia", " Smartphone", "Eletronicos"], 15);


function createHtmlCard(product){
  let container = document.createElement("div");
  container.id = "container";
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
  h1.appendChild(document.createTextNode(this.nome));
  h2.appendChild(document.createTextNode(this.descricao));
  h3.appendChild(document.createTextNode(this.disponivel ? "Disponivel" : "Indisponivel"));
  img.src = "/Xiaomi.jpg";
 if(typeof this.tags !== 'number'){
  console.error("é um numero");
 }
  p.appendChild(document.createTextNode(this.tags));
  p2.appendChild(document.createTextNode(this.caracteristica));
  this.aplicaDesconto();
  p3.appendChild(document.createTextNode(`R$ ${this.preco.toFixed(2)}`));
  if(this.desconto > 0){
    this.desconto = `  Desconto ${this.desconto}%`;
  }
  span.appendChild(document.createTextNode(this.desconto));

  document.body.appendChild(container);
 
}

// createHtmlCard(product);
createHtmlCard.call(produto);
createHtmlCard.call(produto2);
createHtmlCard.call(produto3);

