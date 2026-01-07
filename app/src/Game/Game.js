// Import de la feuille de style
import '../assets/css/style.css';

// import sprite de la balle
import ballImgSrc from '../assets/img/ball.png';



class Game {
    //context de dessin canvas
    ctx;

    // temporaire position de la balle 
    ballX = 400;
    ballY = 300;


    start() {
        console.log("jeu demarré");
        this.initHtmlUI();
        requestAnimationFrame(this.loop.bind(this));


        
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
    // boucle de jeu
    loop() {
        
        // temporaire :dessin de la balle a partir dune image 
        // 1 on cree une balise html img qui ne sera jamais ajoutee au dom 
        const ballImg = new Image();
        // 2 on recupere le nom de l'image
        ballImg.src = ballImgSrc;
        // 3 on demande au contexte de dessin de dessiner limage une fois quelle est chargée
        ballImg.addEventListener('load', () => {
            // une fois limage chargée on peut la dessiner 
            this.ctx.drawImage(ballImg, this.ballX, this.ballY  );
        });
        // mise a jour position de la balle
        this.ballX ++;
        this.ballY --;

        // appel de la frame suivante 
        requestAnimationFrame(this.loop.bind(this));
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