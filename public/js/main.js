


$(document).ready(() => {

  // Cache var for reuse.
  const $search = $('#search');
  const $user = $('#user');
  const $result = $('#result');
  const $loading = $('#loading').hide();

  // Generate our HTML
  // TODO: Throw this in a template engine.
  function createHtml(items) {
    let html = '';
    items.forEach((item) => {
      html += `<li class="media" data-repo="${item.name}"><div class="media-left"> <a href="#"> <img class="media-object" src="${item.owner.avatar_url}"> </a> </div> <div class="media-body"> <h4 class="media-heading">${item.name}</h4> </div></li>`;
    });

    $result.html(html);
    $loading.fadeIn();
  }

  function getData(user) {
    const api = $.get(`https://api.github.com/users/${user}/repos`);
    api.then((data) => {
      createHtml(data);
    });
  }

  // filter function
  // Store our data in a state
  // Iterate through or data to filter our data.

  // Handle search button when clicked.
  $search.click((e) => {
    e.preventDefault();

    $loading.hide();
    getData($user.val());

  });

});