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