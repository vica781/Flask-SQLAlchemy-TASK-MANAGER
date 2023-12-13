document.addEventListener("DOMContentLoaded", function() {
  // sidenav initialization
  let sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);
});

// Modal initialization
let modal = document.querySelectorAll(".modal");
M.Modal.init(modal);

// Datepicker initialization
let datepicker = document.querySelectorAll(".datepicker");
M.Datepicker.init(datepicker, {
  format: "dd mmmm, yyyy",
  yearRange: 3,
  i18n: {done: "Select"}
});

// Select initialization
let selects = document.querySelectorAll("select");
M.FormSelect.init(selects);










