// Procurar o botão e add evento ao botão criado dinamicamente (event delegation)
document.addEventListener('click',function(e){
    if (e.target && e.target.classList.contains("remove-time")) {

        const buttonIndex = getButtonIndex(e.target);   // Pega index do botão clicado
        removeScheduleContainer(buttonIndex);           // Chama função que remove o container de horário

    };
});

function getButtonIndex(el) {

    let removeButtons, removeButtonsIndex, buttonIndex;

    removeButtons = document.querySelectorAll('.remove-time');          // Pega todos os botões
    removeButtons.forEach(function(button) {                            // Para cada botão, limpar class clicked
        button.classList.remove("clicked");
    });
    
    el.classList.add("clicked");                                        // Add class clicked no botão clicado
    
    removeButtonsIndex = Array.prototype.slice.call(removeButtons),     // Atribui e busca index do botão clicado
    clickedButton= document.getElementsByClassName('clicked')[0];

    return buttonIndex = removeButtonsIndex.indexOf(clickedButton);
};

function removeScheduleContainer(index) {
    
    const fieldContainer = document.querySelectorAll('.schedule-item');             // Pegar os containers dos campos de horários
    document.querySelector('#schedule-items').removeChild(fieldContainer[index]);   // Remove o container do botão clicado

};