describe('DOM tests - Boton Creditos ', function () {
    var formElem = document.forms[0];
    var creditosButton = document.getElementById('creditos');
    var titulo = document.getElementById('titulo')


    it('El boton creditos tiene el texto correcto', function () {
        expect(creditosButton.innerHTML).to.equal('Creditos');
    });
    
    it('La etiqueta titulo tiene el nombre correcto', function () {
        expect(titulo.innerHTML).to.equal('Miauhistory');
    });
  
 
});
