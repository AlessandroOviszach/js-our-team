// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.



// strutura dati card
const team = [
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : '../img/wayne-barnett-founder-ceo.jpg'
    },
];


// renderizzazione team
const container = document.querySelector('.team-container');

draw_team(team, container);

// funzione di aggiunta oggetto
function draw_team(team, container) {
  for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);

    container.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${member.image}"
          alt="${member.name}"
        />
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.Role}</p>
      </div>
    </div>`
  }
}
