const span_anim = document.querySelectorAll("ol > li");
span_anim.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("s");
    dot_cursor.animate(
      [
        {
          height: `100px`,
          width: `100px`,
          background: `transparent`,
          transform: `translateX(-50px) translateY(-50px)`,
          border: `none`,
        },
      ],
      { duration: 150, fill: "forwards" }
    );
    setTimeout(() => {
      e.classList.remove("s");
    }, 1500);
  });
});

const dot_cursor = document.getElementById("cursor");
const astronaut = document.getElementById("astronaut");
// const astronaut_container = document.getElementById("astronaut-container");

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  // console.log(yValue + " " + xValue);

  dot_cursor.style.left = `${posX}px`;
  dot_cursor.style.top = `${posY}px`;

  const deltaX = posX - astronaut.offsetLeft;
  const deltaY = posY - astronaut.offsetTop;
  const angleInDegrees = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  astronaut.animate(
    [
      {
        left: `${posX}px`,
        top: `${posY}px`,
        transform: `rotate(${angleInDegrees}deg)`,
      },
    ],
    { duration: 6000, fill: "forwards" }
  );
});

const all_a = document.querySelectorAll("a");
all_a.forEach((el) => {
  el.addEventListener("mouseover", function (e) {
    dot_cursor.animate(
      [
        {
          height: `40px`,
          width: `40px`,
          transform: `translateX(-20px) translateY(-20px)`,
          opacity: `100%`,
          background: `#fff`,
          border: `2px solid #fff`,
        },
      ],
      { duration: 250, fill: "forwards" }
    );
  });
});

all_a.forEach((el) => {
  el.addEventListener("mouseout", function (e) {
    dot_cursor.animate(
      [
        {
          height: `10px`,
          width: `10px`,
          transform: `translateX(0px) translateY(0px)`,
          opacity: `100%`,
          background: `transparent`,
        },
      ],
      { duration: 250, fill: "forwards" }
    );
  });
});

// console.log(dot_cursor);

document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".star").forEach(function (move) {
    let moving_value = move.getAttribute("data-value");
    let x1 = (e.clientX * moving_value) / 250;
    let y1 = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x1 + "px) translateY(" + y1 + "px)";
  });
  document.querySelectorAll(".text").forEach(function (move) {
    let moving_value = move.getAttribute("data-value");
    let x = (e.clientX * moving_value) / 250;
    let y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
