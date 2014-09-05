//APLICAÇÃO PARA gruposm.com.br
/*
 * Copyright: www.gibee.com.br
 * Author: @dnielrodrigues
 */

var gibeeApp = {

    //SLIDER HOME
    setSliderHeight : function(){
        //SETA A ALTURA DO SLIDER PARA ENCAIXAR NA ALTURA DA TELA
        if ( gibeeLib.testElement('slider-home') ) {
            //calcula altura ao carregar a página
            gibeeLib.setHeightToScreen('slider-home',['topo','rodape']);
            //calcula altura ao redimencionar a janela
            window.addEventListener('resize', function() {
                gibeeLib.setHeightToScreen('slider-home',['topo','rodape']);
            }, true);
        };
    },

    function2 : function{
        //
    }
    //FIM _ SLIDER HOME

};

//Inicializa a Aplicação
(function(){
    for (var i in gibeeApp) {
        gibeeApp[i]();
    }
})();