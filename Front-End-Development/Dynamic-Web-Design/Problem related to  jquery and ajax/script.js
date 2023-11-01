let mainArea = $(".container");
$.ajax({
  type: "GET",
  url: "./new_data.json",
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function (response) {
    response.forEach((element) => {
      const navItem = $("<div>");
      const headings = $("<h1>").text(element.title);
      const paragraphs = $("<p>").text(element.description).hide();
      const buttons = $("<a>").attr("href", "#").text("Read More");;
      navItem.append(headings, paragraphs, buttons);
      mainArea.append(navItem);
      navItem.on("click", function () {
        paragraphs.slideToggle();
      });
    });
  },
});
