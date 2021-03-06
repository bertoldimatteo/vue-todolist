let app = new Vue({
    el: '#root',
    data: {
        todo: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Fare il bucato',
                done: false,
            },
            {
                text: "Fare l'esercizio pomeridiano di Boolean",
                done: false,
            },
            {
                text: 'Andare in palestra',
                done: false,
            },
        ],
        newTodo: '',
        darkMode: false,
    },
    methods: {
        taskDone(i) {
            this.todo[i].done = !this.todo[i].done;
        },
        remove(i) {
            this.todo.splice(i, 1);
        },
        addList() {
            if (this.newTodo !== ' ' ){
                const newObj = {text: this.newTodo , done: false}
                this.todo.push(newObj);
                this.newTodo = '';
            }
        },
        mode() {
            this.darkMode = !this.darkMode;
        },
    },
})

let dark = false;

const button = document.getElementById("darkMode");
const element = document.getElementById("body");
button.addEventListener("click", function(){
    if(dark === false){
        dark = !dark;
        element.classList.add('darkMode');
    } else if ( dark === true){
        dark = !dark;
        element.classList.remove('darkMode');
    }
})
// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)