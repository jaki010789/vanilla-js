class contador {
  valor= 0;

  siguiente() {
    this.valor += 1;
  }
}
const instancia = new contador();

export { instancia }