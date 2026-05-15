const botaoMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const busca = document.getElementById("campoBusca");

busca.addEventListener("keyup", () => {

    let texto = busca.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let conteudo = card.innerText.toLowerCase();

        if (conteudo.includes(texto)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});