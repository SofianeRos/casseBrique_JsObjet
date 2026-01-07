// Import de la feuille de style
import '../assets/css/style.css';

// import sprite de la balle
import ballImgSrc from '../assets/img/ball.png';



class Game {
    //context de dessin canvas
    ctx;
    //Images 
    ballImg;

    // temporaire position de la balle 
    ballX = 400;
    ballY = 300;
    ballSpeed = 10;
    ballVelocity ={
        x: this.ballSpeed * Math.cos(Math.PI / 6) ,
        y: -1 * this.ballSpeed * Math.sin(Math.PI / 6)

    };
    

    


    start() {
        console.log("jeu demarré");
        // initialisation de l'interface html
        this.initHtmlUI();
        // initialisation des objets du jeu
        this.initGameObjects();
        // demarrage de la boucle de jeu
        requestAnimationFrame(this.loop.bind(this));
        //apres la boucle de jeu




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

    // mise en places des objets du jeu sur la scene 
    initGameObjects() {
        // 1 on cree une balise html img qui ne sera jamais ajoutee au dom 
        this.ballImg = new Image();
        // 2 on recupere le nom de l'image
        this.ballImg.src = ballImgSrc;
        // 3 on demande au contexte de dessin de dessiner limage une fois quelle est chargée
        // une fois limage chargée on peut la dessiner 
        this.ctx.drawImage(this.ballImg, this.ballX, this.ballY);


    }


    // boucle de jeu
    loop() {
        // effacement de la scene
        this.ctx.clearRect(0, 0, 800, 600);

        // mise a jour position de la balle
        this.ballX+= this.ballVelocity.x;
        this.ballY+= this.ballVelocity.y;
        //TODO : Detections des collisions 
        // collision avec le cote droite ou gauche de la scene 
        if(this.ballX +20>=800 || this.ballX <= 0 ){
            this.ballVelocity.x *=-1;
        }
        // collision avec le cote haut ou bas de la scene
        if(this.ballY +20>=600 || this.ballY <= 0 ){
            this.ballVelocity.y *=-1;
        }

        this.ctx.drawImage(this.ballImg, this.ballX, this.ballY);

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