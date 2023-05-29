let team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

for (let i = 1; i < team.length; i++){
    console.log(team[i].name + ", " + team[i].role + ", " + team[i].photo);
}

function fillCard(index, nameID, roleID, cardID){
    //recupero nome, ruolo e immagine in tre variabili, poi recupero gli elementi dom a cui vanno aggiunte le stringhe create
    let memberCard = document.getElementById(cardID);
    let memberName = document.getElementById(nameID).innerHTML = team[index].name;
    let memberRole = document.getElementById(roleID).innerHTML = team[index].role;
    let memberPic = document.createElement("img");
    memberPic.src = "img/" + team[index].photo;
    memberCard.appendChild(memberPic);
}

fillCard(0, "firstMemberName", "firstMemberRole", "firstCard");
fillCard(1, "secondMemberName", "secondMemberRole", "secondCard");
fillCard(2, "thirdMemberName", "thirdMemberRole", "thirdCard");
fillCard(3, "fourthMemberName", "fourthMemberRole", "fourthCard");
fillCard(4, "fifthMemberName", "fifthMemberRole", "fifthCard");
fillCard(5, "sixthMemberName", "sixthMemberRole", "sixthCard");