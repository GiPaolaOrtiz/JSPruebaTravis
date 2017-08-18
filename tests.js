describe('DOM tests - Boton Creditos ', function() {
  var formElem = document.forms[0];
  var creditosButton = document.getElementById('creditos');
 
  
  it('El boton creditos tiene el texto correcto', function() {
    expect(creditosButton.innerHTML).to.equal('Creditos');
  });
});