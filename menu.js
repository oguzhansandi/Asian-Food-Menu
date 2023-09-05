"use strict"
const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    // {
    //   id: 4,
    //   title: "Dan Dan Mian",
    //   category: "China",
    //   price: 5.99,
    //   img:
    //     "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    //   desc: `Dan dan noodle, serving with green onion `,
    // },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];


const section = document.querySelector(".section")


const categories = [...new Set(menu.map(item => item.category ))];
categories.unshift("All");

const btnContainer = document.querySelector('.btn-container');
categories.forEach(category => {
  const button = document.createElement('button');
  button.classList.add('btn-item', 'btn', 'btn-outline-dark');
  button.setAttribute("id", `${category}`)
  button.innerHTML = category;
  button.addEventListener('click', () => filterMenu(category));
  btnContainer.appendChild(button);
});

let selectedCategory = "All";

function filterMenu(category){
    selectedCategory = category
    const cardGroup = document.querySelector(".card-deck")
    cardGroup.innerHTML=""  
    console.log(category)
    if(category==="All" ){
     showMenuItems(menu) 
    }else{
      let filteredMenu = menu.filter(item => item.category === category);
      showMenuItems(filteredMenu);
    }
    
};

filterMenu(selectedCategory)

function showMenuItems(menuList){
  const cardGroup = document.querySelector(".card-deck")
  menuList.forEach(item =>{
      const card = document.createElement("div")
      card.classList.add("card","col-sm-12" ,"col-lg-6", "border-0")
      card.style.width = '30rem'
      card.innerHTML =
      `   
      <div class="row no-gutters mb-3">
        <div class="card-body col-4 " >
          <img src=" ${item.img} " alt=" ${item.title} " class="card-img border border-4 border-dark ">
        </div>
        <div class="col-8">
          <div class="card-body">
            <div class="card-title d-flex justify-content-between border-bottom border-dark">
              <h4 class="card-text" style="color : #e00a00" >${item.title}</h4>
              <h4 class="card-text" style="color : #e00a00">${item.price}₺</h4>
            </div>
            <div class="card-text">
               ${item.desc}
            </div>
          </div>
        </div>
      </div>
      `
      cardGroup.appendChild(card)
    })
}


 












