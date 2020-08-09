// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando clicar no botão

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Boolean: true or false

    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')


    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field atual e o limpe
        field.value = ""
    })

    //Colocar na página: onde????
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
