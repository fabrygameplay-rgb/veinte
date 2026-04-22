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
        <img class ="food" src="Fotos/${producto.imagen} alt="${prodcuto.nombre}">;
        
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