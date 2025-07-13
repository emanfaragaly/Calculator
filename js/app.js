let number = document.querySelectorAll(".number");
let operation = document.querySelectorAll(".op");

let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let result = document.querySelector(".result");
let dark = document.querySelector(".dark");
let ligth = document.querySelector(".ligth");
let calc = document.querySelector(".calc");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    result.value += +number[i].textContent;
  });
}

for (let x = 0; x < operation.length; x++) {
  operation[x].addEventListener("click", () => {
    result.value += operation[x].textContent;
  });
}

equal.addEventListener("click", () => {
  result.value = eval(result.value);
  return result.value;
});

clear.addEventListener("click", () => {
  if (result.value !== "") {
    result.value = "";
  }
});


result.addEventListener("input", () => {
  result.value=result.value.replace(/[a-z]/i, "");
  
});


window.addEventListener("load", () => {
  result.focus();
});

// theme calculator

ligth.addEventListener("click", () => {
  result.style.cssText = "color: black;";
  number.forEach((number) => {
    number.style.cssText = "color:rgb(255, 255, 255)";
  });
  operation.forEach((op) => {
    op.style.cssText = "color: #53aeeb;";
  });
  calc.style.cssText =
    " background-color:rgba(250, 250, 237, 0.3); box-shadow: 0 4px 8px #53aeeb;";
  equal.style.cssText = "background-color:rgb(83, 174, 235);";
});

dark.addEventListener("click", () => {
  result.style.cssText = "color: white;";
  number.forEach((number) => {
    number.style.cssText = "color:#53aeeb;";
  });

  operation.forEach((op) => {
    op.style.cssText = "color:white; background-color:rgb(83, 174, 235);";
  });

  calc.style.cssText =
    " background-color: #16160c; box-shadow: 0 4px 8px #394044;";
  equal.style.cssText = "background-color:rgb(83, 174, 235);";
});
