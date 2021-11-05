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
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Mayne Barznetti',
        Role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
];


// renderizzazione team
const container = document.querySelector('.team-container');

draw_team(team, container);

// aggiunta card membro
const add_btn = document.getElementById('addMemberButton');
const name_input = document.getElementById('name');
const role_input = document.getElementById('role');
const image_input = document.getElementById('image');

add_btn.addEventListener('click', function(){
  const new_member = gen_member(name_input, role_input, image_input);

  team.push(new_member);

  draw_team(team, container)
});



// funzione di stampa oggetti
function draw_team(team, container) {
  container.innerHTML = '';

  for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);

    container.innerHTML += `
    <div class="team-card">
      <div class="card-image">
        <img
          src="../img/${member.image}"
          alt="${member.name}"
        />
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.Role}</p>
      </div>
    </div>`
  };
};


// funzione di aggiunta oggetti
function gen_member(name, role, image) {
  const new_member = {
    name : name.value,
    Role : role.value,
    image : image.value
  };

  // reset dei valori
  name.value = '';
  role.value = '';
  image.value = '';

  return new_member
}