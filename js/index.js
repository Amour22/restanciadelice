/*****************AUTHOR:amour dahou********************/
/*************GITHUB:http://github.com/Amour22**********/
/*******************COPYRIGHT 2022**********************/
/**************ALL RIGHT RESERVED**********************/

//declaration et initialisation de variables
const cart=document.querySelector('#cartBox a');
const hamburger=document.querySelector('.menuToggle');
const header=document.querySelector('header');
const nav=document.querySelector('.navigation');
const copyYear=document.querySelector('.copyYear');

//STICKY HEADER
window.addEventListener('scroll',sticky_header);
function sticky_header(){
	header.classList.toggle('sticky',window.scrollY>10);
}

//RESPONSIVE QUERY
function responsiv() {
	//on change l'emplacement des icones de contact
	if (window.matchMedia("(max-width:991px)").matches) {
		let social=document.querySelector('.social');
		let footer=document.querySelector('.copyrightText');
		document.body.insertBefore(social,footer);
	}else{
		let social=document.querySelector('.social');
		let contact=document.querySelector('.formBox');
		contact.appendChild(social);
	}
}
//invocation de la function responsive
responsiv();
// un appel à la function resonsive  pour chaque remendissionnement du naviguateur
window.addEventListener('resize',responsiv);

//gestion d'ouverture du menu pour mobile
hamburger.addEventListener('click',function showMenu(){
		nav.classList.toggle('showNav');
		hamburger.classList.toggle('closeNav');
});

//GESTION DE FERMETURE DU MENU POUR MOBILE
//fermeture par click sur un lien du menu
let navLink=document.querySelectorAll('.navigation li a');
navLink.forEach(i => {
	i.addEventListener('click',()=>{
		nav.classList.remove('showNav'); 
		hamburger.classList.remove('closeNav');})
});

//mise à jour de l'année du copyright
let actualDate=new Date();
copyYear.textContent=actualDate.getFullYear();
