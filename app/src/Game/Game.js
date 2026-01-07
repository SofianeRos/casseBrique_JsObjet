// Import de la feuille de style
import '../assets/css/style.css';



class Game {
    //context de dessin canvas
    ctx;


    start() {
        console.log("jeu demarré");
        this.initHtmlUI();
    }

    // methodes "privees"

    initHtmlUI() {
        const elH1 = document.createElement('h1');
        elH1.textContent = 'Arkanoid';

        document.body.append(elH1);

        const elCanvas = document.createElement('canvas');
        elCanvas.width = 800;
        elCanvas.height = 600;

        document.body.append(elH1, elCanvas);

        // recuperation du context de dessin 
        this.ctx = elCanvas.getContext('2d');
    }
    // fonction  de test 
    //drawTestCircle() {
    // this.ctx.beginPath();
    //this.ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    //this.ctx.arc(400, 300, 100, 0, Math.PI * 2 - Math.PI / 3);
    //this.ctx.closePath();
    //this.ctx.fill();
    //}
}
const theGame = new Game();

export default theGame;