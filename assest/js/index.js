import header from "../utilis/utilis.js";
const inputs = document.querySelectorAll('#productForm input');
const form = document.querySelector('#productForm');
const productList = document.querySelector('#productList');
inputs[0].focus();
let data = {};
let editId = null;
const search = document.getElementById("search");

const defaultProducts = [
    {
        id: 1,
        productName: "PUMA",
        productPrice: "3359",
        productCategory: "Men",
        description: "Softride Enzo Evo Better Rem Running Shoes For Men",
        productImage: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/311887/01/sv01/fnd/IND/fmt/png/Softride-Premier-Men's-Slip-On-Shoes"
    },
    {
        id: 2,
        productName: "YUVRATO BAXI",
        productPrice: "4001",
        productCategory: "Men",
        description: "Men's 9 Cm Hidden Height Increasing Black Casual Sneaker",
        productImage: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/x/k/e/5-1004a-5-yuvrato-baxi-white-original-imahfg7fc5cv4ant.jpeg?q=90"
    },
    {
        id: 3,
        productName: "NIKE ",
        productPrice: "10110",
        productCategory: "Women",
        description: "Structure 26 Running Shoes For Women",
        productImage: "https://en-ae.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8f25665d/sss/SSS2/N/K/H/J/8/SSS2_NKHJ8485_601_197862900484_2.jpg?sw=400&sh=400&sm=fit"
    },
    {
        id: 4,
        productName: "Skechers",
        productPrice: "3369",
        productCategory: "Women",
        description: "D'LUX WALKER-INFINITE MOTION Casuals For Women",
        productImage: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/b/q/5-149023-8-skechers-navy-original-imahg3kgcsnz9ucw.jpeg?q=70"
    },
    {
        id: 5,
        productName: "Partner",
        productPrice: "1189",
        productCategory: "Kids",
        description: "Velcro Sneakers For Boys & Girls",
        productImage: "https://t3.ftcdn.net/jpg/05/02/20/82/360_F_502208226_wn8UCWkBLahAxjLZpVKXqf1ruWwchY8i.jpg"
    },
    {
        id: 6,
        productName: "NIKE",
        productPrice: "3295",
        productCategory: "Kids",
        description: "Velcro Sneakers For Boys",
        productImage: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/ed84ab53-691f-41b5-8da3-79e71163e612/NIKE+STELLAR+RIDE+%28PSV%29.png"
    },
    {
        id: 7,
        productName: "ADIDAS",
        productPrice: "3299",
        productCategory: "Men",
        description: "90S CUT - FLUX Sneakers For Men",
        productImage: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3e284855bb4907ac453b2e425e6aaf_9366/racer-tr23-shoes.jpg"
    }
];

let products = JSON.parse(localStorage.getItem('products'));

if (!products || products.length === 0) {
    products = defaultProducts;
    localStorage.setItem("products", JSON.stringify(products));
}


const loadCategories = () => {
    let categories = [...new Set(products.map(p => p.productCategory))];

    filterCategory.innerHTML = `<option value="">All Categories</option>`;

    categories.forEach(cat => {
        let option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        filterCategory.appendChild(option);
    });
};

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        let { name, value } = e.target;
        data = { ...data, [name]: value };
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (editId) {
        products = products.map((item) =>
            item.id === editId ? { ...data, id: editId } : item
        );
        editId = null;
        submitBtn.textContent = "Add Product";
    } else {
        products.push({ ...data, id: Date.now() });
    }

    localStorage.setItem('products', JSON.stringify(products));
    form.reset();
    data = {};
    inputs[0].focus();
    displayProduct();
    loadCategories();
})

const displayProduct = (data = products) => {
    productList.innerHTML = "";
    let filteredProducts = data;
    if (filterCategory.value !== "") {
        filteredProducts = filteredProducts.filter(product =>
            product.productCategory === filterCategory.value
        );
    }
    if (sortPrice.value === "low-high") {
        filteredProducts.sort((a, b) => a.productPrice - b.productPrice);
    }
    else if (sortPrice.value === "high-low") {
        filteredProducts.sort((a, b) => b.productPrice - a.productPrice);
    }
    filteredProducts.forEach(product => {
        const { productImage, productName, productPrice, productCategory, description, id } = product;

        let col = document.createElement("div");
        col.classList.add("col-md-3", "mb-4");
        col.innerHTML = `
            <div class="card h-100">
                <img src="${productImage}" class="card-img-top position-relative" height="250px" alt="${productName}">
                <span class="position-absolute top-0 end-0 bg-dark text-white rounded m-1 p-1">${productCategory}</span>
                <div class="card-body">
                    <h5 class="card-title">${productName}</h5>
                    <h6 class="card-subtitle pt-2">₹ ${productPrice}</h6>
                    <p class="card-text pt-2">${description}</p>
                </div>
                <div class="card-footer border-0 text-center d-flex justify-content-between">
                    <button class="btn btn-outline-dark" onclick="deleteProduct(${id})">Delete</button>
                    <button class="btn btn-outline-dark" onclick="editProduct(${id})">Edit</button>
                </div>
            </div>
        `;

        productList.appendChild(col);
    });
};

filterCategory.addEventListener("change", () => {
    displayProduct();
});

sortPrice.addEventListener("change", () => {
    displayProduct();
});

displayProduct();
loadCategories();

const deleteProduct = (id) => {
    products = products.filter((val) => val.id != id);
    localStorage.setItem('products', JSON.stringify(products));
    displayProduct();
}

window.deleteProduct = deleteProduct;

const editProduct = (id) => {
    let product = products.find((val) => val.id == id);
    inputs.forEach((input) => {
        input.value = product[input.name];
    });
    data = { ...product };
    editId = id;
    submitBtn.textContent = "Update Product";
    inputs[0].focus();
}

window.editProduct = editProduct;

search.addEventListener("input", function () {

    let filterData = products.filter(product =>
        product.productName.toLowerCase().includes(this.value.toLowerCase())
    );

    displayProduct(filterData);
});

window.addEventListener("scroll", function () {
    const header = document.getElementById("header-nav");

    if (window.scrollY > 50) {
        header.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
    }
});