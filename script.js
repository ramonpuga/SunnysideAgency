// Menu Mobile Events
document.querySelector('.menumobile img').addEventListener('click', () => {
    if (document.querySelector('.menu').style.display == "none") {
    document.querySelector('.menu').style.display = "flex";
    } else {
        document.querySelector('.menu').style.display = "none"
    }
});

// Page Reload function
function pagereload() {
    setTimeout(() => {
    window.location.reload(true);
    window.scrollTo(0, 0);
    pagereload();
    }, 1000); // 1 second
};

// Menu Clicks Events
document.querySelectorAll('.menu h3').forEach((item, index) => {
    item.addEventListener('click', () => {
    pagereload();
    });
});

document.querySelector('.menu button').addEventListener('click', (e) => {
    e.preventDefault();
    pagereload();
});

// Footer Menu Click Events
document.querySelectorAll('.footmenu h3').forEach((item, index) => {
    item.addEventListener('click', (e) => {
      pagereload();
    })
});

// Social Icons Click Events
document.querySelectorAll('.social img').forEach((item, index) => {
    item.addEventListener('click', (e) => {
        pagereload();
    })
});