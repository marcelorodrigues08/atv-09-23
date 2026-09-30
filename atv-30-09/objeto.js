const livro = {
  titulo: "O mito da Beleza",
  autor: "Naomi Wolf",
  paginas: 256,

  resumo() {
    return `${this.titulo} foi escrito por ${this.autor} e possui ${this.paginas} páginas.`;
  }
};

console.log(livro.resumo());
