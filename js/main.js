// Animate smoooth scroll
$('#know-more').on('click', ()=>{
    const imagePost = $('#images').position().top;

    $('html, body').animate({
        scrollTop: imagePost
    }, 600);
})

$('#go-top').on('click', ()=>{
    const imagePost = $('#landing').position().top;

    $('html, body').animate({
        scrollTop: imagePost
    }, 700);
})

$('#hire-me').on('click', ()=>{
    const imagePost = $('#footer').position().top;

    $('html, body').animate({
        scrollTop: imagePost
    }, 700);
})