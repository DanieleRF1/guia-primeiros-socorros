const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "") {
        mensagem.innerText = "Preencha todos os campos.";
    } else {
        mensagem.innerText = "Mensagem enviada com sucesso!";
    }

});