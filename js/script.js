// ** ЗАДАЧА 57 - Трансформация массива объектов
//  *
//  * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
//  *
//  * 2. Обратите внимание, что
//  *  - некоторые имена свойств в каждом сообщении изменены
//  *  - ID каждого сообщения увеличен на 1000
//  *
//  * 3. Исходный массив постов должен остаться без изменений
//  */

const testPosts = [
    {
        postId: 234,
        author: 'robd',
        commentsQty: 5,
    },
    {
        postId: 823,
        author: 'sady',
    },
    {
        postId: 161,
        author: 'merryl',
        commentsQty: 8,
    },
]





console.log(testPosts)




let processPosts = []



for (let item of testPosts) {
    item.postId = item.postId + 1000
    processPosts.push(item)
}

console.log(processPosts);


/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/


// оригинальный массив должен остаться без изменений



























let hotel = [
  [
    {
      room: 1,
      price: 300,
      brand: "Luxe",
      children: false,
    },
    {
      room: 2,
      price: 4000,
      brand: "Deluxe",
      children: true,
    },
    {
      room: 3,
      price: 1000,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 4,
      price: 900,
      brand: "Luxe",
      children: true,
    },
  ],
  [
    {
      room: 5,
      price: 700,
      brand: "Luxe",
      children: true,
    },
    {
      room: 6,
      price: 79000,
      brand: "President",
      children: true,
    },
    {
      room: 7,
      price: 600,
      brand: "Luxe",
      children: false,
    },
    {
      room: 8,
      price: 950,
      brand: "Luxe",
      children: true,
    },
  ],
  [
    {
      room: 9,
      price: 1900,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 10,
      price: 5000,
      brand: "Deluxe",
      children: true,
    },
    {
      room: 11,
      price: 1000,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 12,
      price: 250,
      brand: "Luxe",
      children: false,
    },
  ],
  [
    {
      room: 13,
      price: 10000,
      brand: "President",
      children: true,
    },
    {
      room: 14,
      price: 8000,
      brand: "President",
      children: false,
    },
  ],
];

let rooms = {
  all_roms: [],
  rooms: 0,
};
let brands = {
  president: [],
  deluxe: [],
  luxe: [],
};

let room_level = {
  perviy: 0,
  vtoroy: 0,
  tretiy: 0,
  chetvertiy: 0,
};

let children = []
let bogaty1 = []
let bogaty = []
let obshiy = []
let room_money = []
let room_money1 = []
let room_money2 =[]
let room_money3 =[]
let room_money4 =[]
let room_money5 =[]
let room_money6 =[]
let room_money7 =[]

for (let item of hotel) {
  for (let it of item) {
    if (it.brand == "President") {
      brands.president.push(it)
    }
    if (it.brand == "Deluxe") {
      brands.deluxe.push(it)
    }
    if (it.brand == "Luxe") {
      brands.luxe.push(it)
    }
    it.eting = true
    rooms.all_roms.push(it)
    if (it.children == true) {
      children.push(it)
    }
    if (50000 <= it.price) {
      bogaty.push(it)
    }
    let r = it.price
    bogaty1.push(r)
    let t = bogaty1.reduce((a, b) => a + b, 0)
    obshiy.push(t)
    if (it.room == 1 || it.room == 2 || it.room == 3 || it.room == 4) {
      let rt = it.price
      room_money.push(rt)
      let tr = room_money.reduce((a, b) => a + b)
      room_money1.push(tr)
      room_money1 = room_money1.splice(room_money1.length - 1)
      room_level.perviy =  room_money1

    }
    if (it.room == 5 || it.room == 6 || it.room == 7 || it.room == 8) {
      let rt = it.price
      room_money3.push(rt)
      let tr = room_money3.reduce((a, b) => a + b)
      room_money2.push(tr)
      room_money2 = room_money2.splice(room_money2.length - 1)
      room_level.vtoroy = room_money2
    }
    if (it.room == 9 || it.room == 10 || it.room == 11 || it.room == 12) {
      let rt = it.price
      room_money4.push(rt)
      let tr = room_money4.reduce((a, b) => a + b)
      room_money5.push(tr)
      room_money5 = room_money5.splice(room_money5.length - 1)
      room_level.tretiy = room_money5
    }
    if (it.room == 13 || it.room == 14) {
      let rt = it.price
      room_money6.push(rt)
      let tr = room_money6.reduce((a, b) => a + b)
      room_money7.push(tr)
      room_money7 = room_money7.splice(room_money7.length - 1)
      room_level.chetvertiy = room_money7
    }
  }



}



let u = rooms.all_roms.length
rooms.rooms = rooms.rooms + u

console.log(children);

console.log(rooms);

console.log(brands);

console.log(hotel);

console.log(bogaty);

console.log(obshiy.splice(obshiy.length - 1));

console.log(room_level);

//1 отфильтровать по категориям
//2 добавить ключ eting с буленовым значением в каждый номер
//3 посчитать и красиво раставить все команты переменную rooms
//4 найти самую дорогую комнату
//5 посчитать сколько стоит каждый этаж
//6 посчитать сколько стоят все комнаты вместе взятые
//7 найти все комнаты в которых живут дети