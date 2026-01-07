// Import de la feuille de style
import './assets/css/style.css';

const elH1 = document.createElement('h1');
elH1.textContent = 'Coucou !';

document.body.append( elH1 );

const elCanvas = document.createElement( 'canvas' );
elCanvas.width = 800;
elCanvas.height = 600;

document.body.append( elCanvas );

// Le contexte de dessin
const ctx = elCanvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = '#fc0';
ctx.arc(400, 300, 100, 0, Math.PI * 2 - Math.PI / 3);
ctx.closePath();
ctx.fill();
