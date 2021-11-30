function addItem() {
  let input = document.getElementById("input").value;

  if (input.trim() == "") {
    document.getElementById("error").innerHTML = "Please enter a valid task";
  } else {
    document.getElementById("error").innerHTML = "";

    let ul = document.getElementById("ul");
    let li = document.createElement("li");

    li.textContent = input;

    let a = document.createElement("a");
    a.textContent = "X";
    a.href = "javaScript:void(0)";
    a.class = "remove";
    li.appendChild(a);

    let index = ul.firstChild;

    if (index == null) {
      ul.appendChild(li);
    } else {
      ul.insertBefore(li, index);
    }
  }
  document.getElementById("input").value = "";
}

let removeBtn = document.getElementById("ul");
removeBtn.addEventListener("click", function (e) {
  let ul = document.getElementById("ul");
  let li = e.target.parentNode;
  ul.removeChild(li);
});
