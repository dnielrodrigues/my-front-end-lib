//BIBLIOTECA GIBEE
/*
 * Copyright: www.gibee.com.br
 * Author: @dnielrodrigues
 */

var gibeeLib = {

    clearCache : function (){
        //limpar cache do browser
        window.location.reload(true);
    },
    
    //EXCLUIR ELEMENTO HTML
    deleteNodeElement : function(e){
        e.parentNode.removeChild(e);
    },
    
    //INSERIR CLASSE NO MAPA DO GOOGLE PARA PERMITIR ESTILO
    googlemapsIncludeClass : function(parentElementId,mapClass){
        var parent = document.getElementById(parentElementId);
        if (parent!=null) {,
            var childrens = parent.childNodes;
            childrens[0].className = mapClass;
        };
    },

    changeClassOnClick : function(args){
        /*
         * TROCA CLASSE DE UM ELEMENTO HTML AO CLICAR NO BOTAO
         * atributos do objeto/parametro "args":
         *      bId : id do botao para clique
         *      targetId : id do elemento alvo que terá a classe trocada
         *      newClass : classe para troca
         */
        var argsExemplo = {
            bId : "button-element-id",
            targetId : "element-target-id-1",
            newClass : "initial-class"
        };

        if ( gibeeLib.testElement(args.bId) & gibeeLib.testElement(args.targetId) ) {
            //carrega elementos em variaveis
            var $b = document.getElementById(args.bId);
            var $target = document.getElementById(args.targetId);
            //dispara evento clique
            $b.addEventListener('click', function() {
                //seta a classe correta
                if ( $target.className == args.class1) {
                    $target.className = args.class1;
                } else{
                    $target.className = args.class2;
                };
            }, true);
        };
    },

    DoubleChangeClassOnClick : function(args){
        /*
         * TROCA CLASSE DE UM ELEMENTO HTML AO CLICAR NO BOTAO E RETORNA AO CLICAR NOVAMENTE
         * atributos do objeto/parametro "args":
         *      bId : id do botao para clique
         *      targetId : id do elemento alvo que terá a classe trocada
         *      class1 : classe para troca 1
         *      class2 : classe para troca 2
         */
        var argsExemplo = {
            bId : "button-element-id",
            targetId : "element-target-id-1",
            class1 : "initial-class",
            class2 : "changed-class"
        };

        if ( gibeeLib.testElement(args.bId) & gibeeLib.testElement(args.targetId) ) {
            //carrega elementos em variaveis
            var $b = document.getElementById(args.bId);
            var $target = document.getElementById(args.targetId);
            //dispara evento clique
            $b.addEventListener('click', function() {
                //seta a classe correta
                if ( $target.className == args.class1) {
                    $target.className = args.class1;
                } else{
                    $target.className = args.class2;
                };
            }, true);
        };
    },

    testElement : function( elemId ){
        //testa se elemento html existe
        if (document.getElementById(elemId)!=null) {
            return true;
        }else{
            return false;
        }
    },

    setHeight : function( elemId, h, unit ){        
        /*
         * Setar altura do elemento
         *
         * var elemId = id do elemento que recebera altura
         * var h = altura
         * var unit = unidade da altura (%, px, em)
         */

        if ( unit == null ) {
            unit = "px";
        };
        var e = document.getElementById(elemId);
        e.style.height = h + unit;
    },

    setHeightToScreen : function(elemId,others){
        /*
         * Seta altura do elemento para encaixar na altura da janela
         *
         * var elemId = id do elemento que recebera a altura
         * var others = [ id_dos_demais_elementos , id_dos_demais_elementos ]
         * e = elemento DOM que receberá altura
         * h = altura
         */

        var hOthers = 0;

        //loop para somar alturas dos outros elementos
        for (var i = others.length - 1; i >= 0; i--) {
            if ( this.testElement(others[i]) ) {
                hOthers += document.getElementById(others[i]).offsetHeight;
            }
        }

        //calcular e seta a altura
        var hScreen = window.innerHeight;
        var hElem = ( hScreen - hOthers - 1 );
        this.setHeight( elemId,hElem );
    }

}


