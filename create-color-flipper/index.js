const colors = ['green', 'red', 'rgba(133, 122, 200)', "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", () => {
    // get Random Number between 0-3 colors[3]
    const randomNumber = getRandomColor();
    console.log(randomNumber);
    // document.body.style.backgroundColor = colors[randomNumber];
    document.body.style.backgroundColor = randomNumber;
    // color.textContent = colors[getRandomColor];
    color.textContent = randomNumber;
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgba(${r}, ${g}, ${b})`;
}
// function getRandomNumber() {
//     return Math.random();          
// }