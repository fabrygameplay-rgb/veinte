const animation = document.querySelectorAll(".animated");
    
    animation.forEach(navTitle => {
        navTitle.addEventListener("mouseover", () => {
            navTitle.style.transform = "scale(1.2)";
        });

        navTitle.addEventListener("mouseout", () => {
            navTitle.style.transform = "scale(1)";
        });
    });

const paintedFood = document.querySelectorAll("#producto li");

    paintedFood.forEach(foodie => {
        foodie.addEventListener("mouseover", () => {
            foodie.style.background = "linear-gradient(to top, rgba(218, 165, 32, 0.35), rgba(240, 200, 90, 0.15))";
        });

        foodie.addEventListener("mouseout", () => {
            foodie.style.background = "transparent";
        });
    });

const goal = document.querySelectorAll("#logro_pic");

    goal.forEach(zoomPic => {
        zoomPic.addEventListener("mouseover", () => {
            zoomPic.style.transform = "scale(1.05)";
        });

        zoomPic.addEventListener("mouseout", () => {
            zoomPic.style.transform = "scale(1)";
        });
    });

const buttonPages = document.getElementById("tresBarras");
const pagesOn = document.getElementById("menú");

if (buttonPages && pagesOn) {
    buttonPages.addEventListener("click", () => {
        pagesOn.classList.toggle("oculto");
    });
};

const buttonPages2 = document.querySelector(".tresBarras2");
const pagesOn2 = document.querySelector(".menú2");

if (buttonPages2 && pagesOn2) {
    buttonPages2.addEventListener("click", () => {
        pagesOn2.classList.toggle("oculto");
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = formulario.querySelectorAll("input");

    const costumer = inputs[0].value;
    const quantity = inputs[1].value;
    const product = inputs[2].value;
    const date = formulario.querySelector("select").value;
    
    const sub_product = document.createElement("li");

    sub_product.innerHTML = `
    <strong>${costumer}</strong> pidió
    <span>${product}</span>
    (x${quantity}) - ${date}
    `;

    lista.appendChild(sub_product);

    formulario.reset();
});

fetch("http://localhost:3000/productos")
    .then(res =>res.json())
    .then(data => {

        const lista = document.querySelector("#producto ul");
        lista.innerHTML = "";

        data.forEach(producto => {
            const li = document.createElement("li");

        li.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>$${producto.descripción}</p>
        <img class ="food" src="Fotos/${producto.imagen} alt="${prodcuto.nombre}">
        
        `;
        
        li.addEventListener("mouseenter", () => {
            li.style.background = "linear-gradient(to top, rgba(218, 165, 32, 0.35), rgba(240, 200, 90, 0.15))";
        });

        li.addEventListener("mouseleave", () => {
            li.style.background = "transparent";
        });
        
        lista.appendChild(li);
    });
});