<?php
    $page = 'home';
    include 'topo.php';
?>

<!--

    PARAMETROS PARA O JS DO SLIDER
    - classContainer
    - classImage
    - classThumb
    - classTitThumb
    - classSubTitThumb
    - classPalco

-->

<!-- SLIDER -->
<section class="slider-home" id="slider-home">
    <!-- PALCO -->
    <nav class="sli-home-palco">
        <a class="item-slider-tributaria sl-home-1">
            <img src="images/slider-1.png" alt="Consultoria Tributária" class="foto-slider">
            <p class="tit-depoimento-slider">
                "Disponibilizamos dados estratégicos e confidenciais das nossas empresas somente para pessoas extremamente competentes e da nossa máxima confiança. A SM Consultoria tem esses atributos, além de competência e criatividade."
                <span class="autor-slider">Pio Rolim - Presidente do Grupo C. Rolim p/ Consultoria Societária</span>
            </p>
        </a>
        <a class="item-slider-societaria sl-home-2">
            <img src="images/slider-2.png" alt="Consultoria Societária" class="foto-slider">
            <p class="tit-depoimento-slider">
                "Disponibilizamos dados estratégicos e confidenciais das nossas empresas somente para pessoas extremamente competentes e da nossa máxima confiança. A SM Consultoria tem esses atributos, além de competência e criatividade."
                <span class="autor-slider">Pio Rolim - Presidente do Grupo C. Rolim p/ Consultoria Societária</span>
            </p>
        </a>
        <a class="item-slider-financeira sl-home-3">
            <img src="images/slider-3.png" alt="Consultoria Economico-Financeira" class="foto-slider">
            <p class="tit-depoimento-slider">
                "Disponibilizamos dados estratégicos e confidenciais das nossas empresas somente para pessoas extremamente competentes e da nossa máxima confiança. A SM Consultoria tem esses atributos, além de competência e criatividade."
                <span class="autor-slider">Pio Rolim - Presidente do Grupo C. Rolim p/ Consultoria Societária</span>
            </p>
        </a>
        <a class="item-slider-ceara sl-home-4">
            <img src="images/slider-4.png" alt="Invista no Ceará" class="foto-slider">
            <p class="tit-depoimento-slider">
                "Disponibilizamos dados estratégicos e confidenciais das nossas empresas somente para pessoas extremamente competentes e da nossa máxima confiança. A SM Consultoria tem esses atributos, além de competência e criatividade."
                <span class="autor-slider">Pio Rolim - Presidente do Grupo C. Rolim p/ Consultoria Societária</span>
            </p>
        </a>
    </nav>

    <!-- THUMBS -->
    <nav class="sli-thumbs">
        <a href="consultoria-tributaria" class="l-sli-thumb-tributaria">Consultoria Tributária</a>
        <a href="consultoria-societaria" class="l-sli-thumb-societaria">Consultoria Societária</a>
        <a href="consultoria-economico-Financeira" class="l-sli-thumb-financeira">Consultoria Econômico-Financeira</a>
        <a href="invista-no-ceara" class="l-sli-thumb-ceara">Invista no Ceará</a>
    </nav>
</section>
<!-- /SLIDER -->

<?php include 'rodape.php'; ?>