// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------


// function creatGrid(){
//     let screen = $('.app-screen').append('<div class="pixel"></div>'.repeat(1024));
//     let pixel = $('.pixel');
//     pixel.click(function(){
//         $(this).css("background", "red")
//     })
    
// }

// @@@
// fonction qui crée les div pixel
// @@@

function creatGrid(){
    let div = ('<div class="pixel"></div>');
    let screen = $('.app-screen');
    screen.append(div.repeat(1024));
    
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
    








$(function(){
    creatGrid();
    clickPixel();
})