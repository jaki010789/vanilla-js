let contador = {
  valor: 0,
  siguiente: function () {
    
    this.valor += 1;
    return this.valor;

  },
};


export { contador };