// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField);

// Quando clicar no botão...

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    // - Quais campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    // Pegar os campos a serem limpos
    // - Quais campos?
    const fields = newFieldContainer.querySelectorAll("input");

    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pega o field do momento e limpa
        field.value = "";
    });

    // Add na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
};