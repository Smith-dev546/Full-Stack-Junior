import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Holiwis</h1>
   <button id="btnMagia">Magia!</button>
  </div>
`

const btnDOM = document.getElementById('btnMagia') as HTMLButtonElement;
console.log(btnDOM);

//Hacer que ese BOTON realice un alert  que diga Chauchis
btnDOM.addEventListener('click', () => {
  alert('Chauchis');
});