window.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json)
    .then((bookObj) => {
      const row = document.getElementById("bookImg");
      bookObj.forEach((book) => {
        if (book.img) {
          const col = document.createElement("div");
          col.className =
            "col-12 col-sm-6 col-md-4 col-lg-3 position-relative mb-2";

          const img = document.createElement("img");
          col.className = "w-100 object-fit-cover rounded shadow-sm";
          img.syle.height = "300px";
          img.src = char.img;

          const h3 = document.createElement("h3");
          h3.className =
            "position-absolute top-50 start-50 translate-middle fs-5 fw-bolder text-white";
          h3.innerText = book.title;

          col.appendChild(img);
          col.appendChild(h3);
          row.appendChild(col);
        }
      });
    })

    .catch((err) => console.log(err));
