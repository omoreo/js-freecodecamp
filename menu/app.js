// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are available

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-10.jpeg",
      desc: `steak dinner skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing`,
    },
  ];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container")

//load items dislay all item when page load
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);

    const categories = menu.reduce((values,item) => {
      if(!values.includes(item.category)){
        values.push(item.category)
      }
      return values
    },['all'])
    // console.log(categories)
    const categoryBtns = categories.map(category => {
      return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    }).join("")
    // console.log(categoryBtns) call all container-btn
    btnContainer.innerHTML = categoryBtns
    const filterBtns = document.querySelectorAll(".filter-btn")
    //filter items
    filterBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset)
        const category = e.currentTarget.dataset.id //all, breakfast, lunch, shake
        const menuCategory = menu.filter(menuItem => {
          // console.log(menuItem.category)
          // console.log(category)
          if(menuItem.category === category){
            // console.log(menuItem.category)
            return menuItem
          }
        })
        // console.log(menuCategory)
        if(category === "all"){
          displayMenuItems(menu)
        } else {
          displayMenuItems(menuCategory)
        }
      })
    })
})


const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map(item => { // array ดึงข้อมูลทั้งหมด
    // console.log(item)
    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`
})
displayMenu = displayMenu.join(""); // method returns an array as string method not change og
sectionCenter.innerHTML = displayMenu // The text content of the element, including all spacing and inner HTML tags.
// console.log(displayMenu)
}