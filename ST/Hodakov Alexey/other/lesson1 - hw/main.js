const goods = [
  { title: "shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shores", price: 250 },
];
const renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><h3> ${title} </h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
  goodsList = goodsList.toString().replace( /,/g, " ");
  document.querySelector(".goods-list1").innerHTML = goodsList;
};

function getGoodsList() {
  placeToRender = document.querySelector(".goods-list2");
  let str = "";
  goods.forEach((element) => {
    str += `<div class="goods-item"><h3> ${element.title} </h3><p>${element.price}</p></div>`;
  });
  placeToRender.innerHTML = str;
}

renderGoodsList(goods);
getGoodsList();
