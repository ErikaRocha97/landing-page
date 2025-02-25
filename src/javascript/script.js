// chamar JQUERY e configurar botão

$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    //
    $("#mobile_menu").toggleClass("active");
    // mudar o ícone que está dentro do btn de lista para X
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
});
