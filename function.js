import { generate2 } from "./helpers.js";
import data from "./data.js";
let arr = data();


let setHome = () => {
    let container = document.querySelector('.container');
    container.innerHTML = `
    <main class="start">

    <h1>Bine ati venit!</h1>

    <button class="joaca">Joaca!</button>
</main>
    `

    let btn = document.querySelector(".joaca");
    btn.addEventListener("click", () => {

        setPlay();
    })
}


function createDiv() {

    let div = "";
    for (let i of arr) {
        div += `  <div>
        <h3 class="name">${i.name}</h3>
        <img src="${i.imag}">
        </div>`
    }

    console.log(div);

    return div;

}



let setPlay = () => {

    let container = document.querySelector('.container');
    container.innerHTML = `
    <main class="choose">
    <h1>Choose two teams</h1>

    <section class="teams">
       ${createDiv()}


    </section>
</main>


    `

    let btn = document.addEventListener("click", (e) => {
        let obj = e.target;

        if (obj.tagName == "DIV") {

            let name = obj.querySelector(".name").textContent;
            console.log(name);
        }
    })


}
export { setHome, setPlay };