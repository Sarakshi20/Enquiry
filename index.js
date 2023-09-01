// products
let products_electronics = ['Laptop', 'Smartphone', 'Tablet', 'Headphone'];
let product_clothing = ['T-Shirt', 'Pants', 'Hat', 'Shirt', 'Dress'];
let product_books = ['Fiction Novel', 'Self-Help Guide', 'Mystery Thriller'];
let home_Appliances = ['Refrigerator', 'Vacuum Cleaner', 'Air Conditioner', 'Microwave Oven', 'Washing Machine'];
let sports_equipment = ['Soccer Ball', 'Tennis Racket', 'Yoga Mat', 'Basketball Hoop', 'Running Shoes'];


let selected_item = document.querySelector("#category");
let arr = [];
let list = document.querySelectorAll("#dropdown-content-1 li");
let list2 = [];
let selected_item_2 = document.querySelector("#product");

list.forEach(ele => {
    ele.addEventListener("click", () => {

        // working of dropdown
        selected_item_2.textContent = "Select Product"; // chnage dropdown2 heading to select product
        selected_item.textContent = ele.textContent;
        let selected_category = document.getElementById("category").textContent;

        // filtering products based on category
        switch (selected_category) {
            case 'Electronics':
                arr = products_electronics;
                break;
            case 'Clothing':
                arr = product_clothing;
                break;
            case 'Books':
                arr = product_books;
                break;
            case 'Home Appliances':
                arr = home_Appliances;
                break;
            case 'Sports Equipment':
                arr = sports_equipment;
                break;
        }

        // working of dropdown 1
        DropDown1();

        // displaying filtered products according to category
        FilterProduct();

        // working of dropdown 2
        DropDown2();

    });
});




function DropDown1() {
    let changeItem = document.querySelector(".drop #dropdown-content-2");
    changeItem.innerHTML = " ";
    arr.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element;
        changeItem.append(li);
    })
}


function DropDown2() {
    list2 = document.querySelectorAll(".drop #dropdown-content-2 li");
    selected_item_2 = document.querySelector("#product");

    list2.forEach((ele) => {
        ele.addEventListener("click", () => {
            selected_item_2.textContent = ele.textContent;
        })
    })
}

function FilterProduct() {
    let changeItem = document.querySelector(".drop #dropdown-content-2");
    changeItem.innerHTML = " ";
    arr.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element;
        changeItem.append(li);
    })
}




// Displaying content on right side
var li = [];
var num = [];

var form = document.querySelector("form");

form.addEventListener('submit', handleForm);

function handleForm(event) {
    let title = document.getElementById("title").value;
    document.querySelector("#display-box h2").textContent = title;

    let prod = document.getElementById("product").textContent;
    li.push(prod);

    let quantity = document.getElementById("quantity").value;
    num.push(quantity);

    document.getElementById("display").innerHTML = ' ';
    li.forEach((element, i) => {
        var item = document.createElement('div');
        item.innerHTML = `<h3>${element}</h3> <h3>${num[i]}</h3> <button class="del" type="button" onclick="del(${i})">Delete</button>`;
        document.getElementById("display").appendChild(item);
    });

    event.preventDefault();
}

// deleting enquiry
function del(index) {
    li.splice(index, 1);
    num.splice(index, 1);

    document.getElementById("display").innerHTML = ' ';
    li.forEach((element, i) => {
        var item = document.createElement('div');
        item.innerHTML = `<h3>${element}</h3> <h3>${num[i]}</h3> <button class="del" type="button" onclick="del(${i})">Delete</button>`;
        document.getElementById("display").appendChild(item);
    });
}


document.getElementById("Submit").addEventListener("click",() => {
    document.getElementById("display").innerHTML = ' ';
    li.forEach((element, i) => {
        var item = document.createElement('div');
        item.innerHTML = `<h3>${element}</h3> <h3>${num[i]}</h3>`;
        document.getElementById("display").appendChild(item);
    });

    document.getElementById("Submit").style.display = "none";
    document.getElementById("circle").style.display = "none";
});