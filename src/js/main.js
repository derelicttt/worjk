// import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';



new fullpage('#fullPage', {
    //options here
    autoScrolling:false, //якщо поставите true то чомусь секціїї не будуть відображатись
    navigation: true,
    verticalCentered: false,
    showActiveTooltip: true,
    scrollingSpeed: 1000,
});

AOS.init({duration:5600,
});
