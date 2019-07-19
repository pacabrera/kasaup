document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const acctset = document.querySelectorAll('.side-form');
  M.Sidenav.init(acctset, {edge: 'left'});
  // add recipe form
  const forms = document.querySelectorAll('.modal');
  M.Modal.init(forms, {dismissible: 'true'});
});