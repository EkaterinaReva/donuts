const pics = document.querySelectorAll(".pic");

pics.forEach(pic => {
pic.addEventListener("mouseover", () => {
    
removeFocus();
pic.classList.add("selected");
})

removeFocus = () => {
    pics.forEach (pic => {
        pic.classList.remove("selected");
    })
}
})

let text ="Sale 15% every Monday!";
let i = 0;
let speed = 200;

function type() {
    if (i < text.length) {
        document.querySelector("#monday"). textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

gsap.from(".nav", {duration: 2, delay: 2.5, y: 100, opacity: 0})








