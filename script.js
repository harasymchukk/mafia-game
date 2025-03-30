const roles = {
    "Мирний житель": "roles/civilian.png",
    "Лікар": "roles/doctor.png",
    "Шериф": "roles/sheriff.png",
    "Лола": "roles/lola.png",
    "Дон": "roles/don.png",
    "Мафія": "roles/mafia.png"
};

function assignRoles() {
    let playersCount = parseInt(document.getElementById("playersCount").value);
    if (isNaN(playersCount) || playersCount < 6) {
        alert("Мінімальна кількість гравців — 6");
        return;
    }

    let roleList = ["Лікар", "Шериф", "Лола", "Дон", "Мафія"];
    let civiliansCount = playersCount - roleList.length;
    
    for (let i = 0; i < civiliansCount; i++) {
        roleList.push("Мирний житель");
    }

    roleList = roleList.sort(() => Math.random() - 0.5);

    let rolesContainer = document.getElementById("rolesContainer");
    rolesContainer.innerHTML = "";

    roleList.forEach((role, index) => {
        let card = document.createElement("div");
        card.classList.add("role-card");
        card.innerHTML = `
            <h3>Гравець ${index + 1}</h3>
            <img src="${roles[role]}" alt="${role}">
            <p>${role}</p>
        `;
        rolesContainer.appendChild(card);
    });
}