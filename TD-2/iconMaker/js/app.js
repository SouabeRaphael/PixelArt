// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

// @@@
// fonction qui crée les div pixel
// @@@

function creatGrid(){
    let div = ('<div class="pixel"></div>');
    let screen = $('.app-screen');
    screen.append(div.repeat(1696));
    // for (let i = 0; i < 1696; i++){
    //     screen.append(div);
    // }   
}

// @@@
// fonction qui va gérer les couleur des pixels au click
// @@@

function clickPixel(){
    let colorBlue = $('#paint_darkestgreen');
    let colorGreenDark = $('#paint_darkgreen');
    let colorGreenLight = $('#paint_green');
    let colorLight = $('#paint_lightgreen');

    // --------------------------------------------------------
    // couleur vert foncé
    // --------------------------------------------------------
    colorBlue.click(function(){
        let currentShow = document.querySelector('.is-active');
        currentShow.classList.remove('is-active');
        colorBlue.addClass('is-active');

        let pixel = $('.pixel');
        let color = $('#paint_darkestgreen').css('background-color');
        pixel.click(function(){
            $(this).css("background", color);
            // $(this).addClass('bg_darkestgreen');
        })
    })

    // --------------------------------------------------------
    // couleur vert foncé
    // --------------------------------------------------------
    colorGreenDark.click(function(){
        let currentShow = document.querySelector('.is-active');
        currentShow.classList.remove('is-active');
        colorGreenDark.addClass('is-active');

        let pixel = $('.pixel');
        let color = $('#paint_darkgreen').css('background-color');
        pixel.click(function(){
            $(this).css("background", color);
        })
    })

    // --------------------------------------------------------
    // couleur vert foncé
    // --------------------------------------------------------
    colorGreenLight.click(function(){
        let currentShow = document.querySelector('.is-active');
        currentShow.classList.remove('is-active');
        colorGreenLight.addClass('is-active');

        let pixel = $('.pixel');
        let color = $('#paint_green').css('background-color');
        pixel.click(function(){
            $(this).css("background", color);
        })
    })

    // --------------------------------------------------------
    // couleur vert foncé
    // --------------------------------------------------------
    colorLight.click(function(){
        let currentShow = document.querySelector('.is-active');
        currentShow.classList.remove('is-active');
        colorLight.addClass('is-active');

        let pixel = $('.pixel');
        let color = $('#paint_lightgreen').css('background-color');
        pixel.click(function(){
            $(this).css("background", color);
        })
    })
}

// @@@
// fonction qui supprimer la couleur de pixel au double click
// @@@

function dblClick(){
    let pixel = $('.pixel');
    pixel.dblclick (function(){
        $(this).css('background', 'none');
        // $(this).removeClass();
    })
}

// @@@
// fonction qui supprime la couleur de tout les pixels de la page
// @@@

function btnRemove(){
    let reset = $('#reset');
    let allDiv = $('.app-screen').children();
    // console.log(allDiv)
    reset.click(function(){
        allDiv.css('background', 'none');
    }) 
}

// @@@
// fonction qui exporte et enregistre le pixel-art
// @@@

function btnExport(){
    let exp = $('#export');
    exp.click(function(){
        domtoimage.toJpeg(document.getElementById('content'))
        .then(function(dataUrl){
            let link = document.createElement('a');
            link.download = 'image.jpeg';
            link.href = dataUrl;
            link.click();
        })
    })
}


// @@@
// fonction qui agrandi l'écran du pixel art
// @@@

// petit problème sur le reset des color quand on agrandi l'écran

function largeScreen(){
    let btntest = $('#large-screen');
    let div = ('<div class="pixel"></div>');
    let screen = $('.app-screen');
    btntest.click(function(){
        screen.css({
            'height': '80vmin',
            'width': '130vmin',
            'display': 'grid',
            'grid-template-columns': 'repeat(63, 2vmin)',
            'grid-template-rows': 'repeat(40, 2vmin)',
        });   
        screen.append(div.repeat(824));
    })
}



// @@@
// appel de tout les fonctions
// @@@

$(function(){
    creatGrid();
    clickPixel();
    btnRemove();
    dblClick();
    btnExport();
    largeScreen();
})