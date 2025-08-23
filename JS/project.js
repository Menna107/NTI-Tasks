function filterSelection(category) {
  let items = document.getElementsByClassName("filter-item");
  if (category === "all") category = "";

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("show");
    if (items[i].className.indexOf(category) > -1) {
      items[i].classList.add("show");
    }
  }
}

