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
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
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
/*
find div id products
divin içine img menu i nin 4.cüsü
divin içine div .menu-info
-menu info içine div .menu-title
--.menu-title içine h4başlık
-- menu title içine h4 .price
-menu info içine div .menu-text
*/


// Ana Sayfada  Tüm ürünlerin listelenmesi
for (let i = 0; i < menu.length; i++) {
  var divDOM = document.querySelector(".section-center.row")
  var menuItemsDiv = document.createElement("DIV")
  menuItemsDiv.className = "menu-items col-lg-6 col-sm-12"
  menuItemsDiv.id = "products"
  divDOM.appendChild(menuItemsDiv)

  var img = document.createElement("img")
  img.className = "photo"
  img.src = menu[i]['img']
  img.alt = menu[i]['title']
  menuItemsDiv.appendChild(img)

  var menu_info = document.createElement("DIV")
  menu_info.className = "menu-info"

  var baslik = document.createElement("h4")
  var price = document.createElement("h4")

  menuItemsDiv.appendChild(menu_info)
  var divMenuInfo = document.getElementsByClassName("menu-info")

  var menu_text = document.createElement("DIV")
  menu_text.className = "menu-text"
  menu_text.textContent = menu[i]['desc']

  var menu_title = document.createElement("DIV")
  menu_title.className = "menu-title"
  menu_info.appendChild(menu_title)
  menu_info.appendChild(menu_text)


  baslik.textContent = menu[i]['title']
  price.className = "price"
  price.textContent = menu[i]['price']
  var divMenuTitle = document.getElementsByClassName("menu-title")

  menu_title.appendChild(baslik)
  menu_title.appendChild(price)
}

//Butonlara göre listeleme yapılması
var button1 = document.querySelector('.btn-container')
button1.addEventListener('click', function (e) {
  tag = e.target.textContent
  console.log(tag)
  if (tag == 'China') {
    document.querySelector(".section-center.row").innerHTML = ''
    for (let i = 0; i < chinaItem.length; i++) {
      
      var divDOM = document.querySelector(".section-center.row")
      var menuItemsDiv = document.createElement("DIV")
      menuItemsDiv.className = "menu-items col-lg-6 col-sm-12"
      menuItemsDiv.id = "products"
      divDOM.appendChild(menuItemsDiv)

      var img = document.createElement("img")
      img.className = "photo"
      img.src = chinaItem[i]['img']
      img.alt = chinaItem[i]['title']
      menuItemsDiv.appendChild(img)

      var menu_info = document.createElement("DIV")
      menu_info.className = "menu-info"

      var baslik = document.createElement("h4")
      var price = document.createElement("h4")

      menuItemsDiv.appendChild(menu_info)
      var divMenuInfo = document.getElementsByClassName("menu-info")

      var menu_text = document.createElement("DIV")
      menu_text.className = "menu-text"
      menu_text.textContent = chinaItem[i]['desc']

      var menu_title = document.createElement("DIV")
      menu_title.className = "menu-title"
      menu_info.appendChild(menu_title)
      menu_info.appendChild(menu_text)


      baslik.textContent = chinaItem[i]['title']
      price.className = "price"
      price.textContent = chinaItem[i]['price']
      var divMenuTitle = document.getElementsByClassName("menu-title")

      menu_title.appendChild(baslik)
      menu_title.appendChild(price)
    }
  } else if (tag == 'Korea') {
    document.querySelector(".section-center.row").innerHTML = ''
    for (let i = 0; i < koreaItem.length; i++) {

      var divDOM = document.querySelector(".section-center.row")
      var menuItemsDiv = document.createElement("DIV")
      menuItemsDiv.className = "menu-items col-lg-6 col-sm-12"
      menuItemsDiv.id = "products"
      divDOM.appendChild(menuItemsDiv)

      var img = document.createElement("img")
      img.className = "photo"
      img.src = koreaItem[i]['img']
      img.alt = koreaItem[i]['title']
      menuItemsDiv.appendChild(img)

      var menu_info = document.createElement("DIV")
      menu_info.className = "menu-info"

      var baslik = document.createElement("h4")
      var price = document.createElement("h4")

      menuItemsDiv.appendChild(menu_info)
      var divMenuInfo = document.getElementsByClassName("menu-info")

      var menu_text = document.createElement("DIV")
      menu_text.className = "menu-text"
      menu_text.textContent = koreaItem[i]['desc']

      var menu_title = document.createElement("DIV")
      menu_title.className = "menu-title"
      menu_info.appendChild(menu_title)
      menu_info.appendChild(menu_text)


      baslik.textContent = koreaItem[i]['title']
      price.className = "price"
      price.textContent = koreaItem[i]['price']
      var divMenuTitle = document.getElementsByClassName("menu-title")

      menu_title.appendChild(baslik)
      menu_title.appendChild(price)
    }
  } else if (tag == 'Japan') {
    document.querySelector(".section-center.row").innerHTML = ''
    for (let i = 0; i < japanItem.length; i++) {

      var divDOM = document.querySelector(".section-center.row")
      var menuItemsDiv = document.createElement("DIV")
      menuItemsDiv.className = "menu-items col-lg-6 col-sm-12"
      menuItemsDiv.id = "products"
      divDOM.appendChild(menuItemsDiv)

      var img = document.createElement("img")
      img.className = "photo"
      img.src = japanItem[i]['img']
      img.alt = japanItem[i]['title']
      menuItemsDiv.appendChild(img)

      var menu_info = document.createElement("DIV")
      menu_info.className = "menu-info"

      var baslik = document.createElement("h4")
      var price = document.createElement("h4")

      menuItemsDiv.appendChild(menu_info)
      var divMenuInfo = document.getElementsByClassName("menu-info")

      var menu_text = document.createElement("DIV")
      menu_text.className = "menu-text"
      menu_text.textContent = japanItem[i]['desc']

      var menu_title = document.createElement("DIV")
      menu_title.className = "menu-title"
      menu_info.appendChild(menu_title)
      menu_info.appendChild(menu_text)


      baslik.textContent = japanItem[i]['title']
      price.className = "price"
      price.textContent = japanItem[i]['price']
      var divMenuTitle = document.getElementsByClassName("menu-title")

      menu_title.appendChild(baslik)
      menu_title.appendChild(price)
    }

  } else {
    document.querySelector(".section-center.row").innerHTML = ''
    for (let i = 0; i < menu.length; i++) {

      var divDOM = document.querySelector(".section-center.row")
      var menuItemsDiv = document.createElement("DIV")
      menuItemsDiv.className = "menu-items col-lg-6 col-sm-12"
      menuItemsDiv.id = "products"
      divDOM.appendChild(menuItemsDiv)

      var img = document.createElement("img")
      img.className = "photo"
      img.src = menu[i]['img']
      img.alt = menu[i]['title']
      menuItemsDiv.appendChild(img)

      var menu_info = document.createElement("DIV")
      menu_info.className = "menu-info"

      var baslik = document.createElement("h4")
      var price = document.createElement("h4")

      menuItemsDiv.appendChild(menu_info)
      var divMenuInfo = document.getElementsByClassName("menu-info")

      var menu_text = document.createElement("DIV")
      menu_text.className = "menu-text"
      menu_text.textContent = menu[i]['desc']

      var menu_title = document.createElement("DIV")
      menu_title.className = "menu-title"
      menu_info.appendChild(menu_title)
      menu_info.appendChild(menu_text)


      baslik.textContent = menu[i]['title']
      price.className = "price"
      price.textContent = menu[i]['price']
      var divMenuTitle = document.getElementsByClassName("menu-title")

      menu_title.appendChild(baslik)
      menu_title.appendChild(price)
    }

  }

}
)

// Buton filtrelerine göre yeni nesneler
const chinaItem = menu.filter(item => item['category'] == 'China')
const koreaItem = menu.filter(item => item['category'] == 'Korea')
const japanItem = menu.filter(item => item['category'] == 'Japan')



