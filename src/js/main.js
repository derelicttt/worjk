// import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';


new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    navigation: true,
    verticalCentered: false,
}),

AOS.init({duration:1600,
});
