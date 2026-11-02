$(function () {

  /* TASK 3 — combined search + category filtering */
  const $cards    = $('.char-card');
  const $search   = $('#char-search');
  const $category = $('#char-category');
  const $count    = $('#char-filter-count');
  const $noResult = $('#char-no-results');
  const total     = $cards.length;

  function applyFilters() {
    const query = $.trim($search.val()).toLowerCase();
    const cat   = $category.val();
    let visible = 0;

    $cards.each(function () {
      const $card = $(this);
      const element = String($card.data('element') || '').toLowerCase();
      const text    = String($card.text()).toLowerCase();

      const matchesSearch   = query === '' || text.includes(query);
      const matchesCategory = cat === 'all' || element === cat;

      const show = matchesSearch && matchesCategory;
      $card.toggleClass('is-hidden', !show);
      if (show) visible++;
    });

    if (visible === 0) {
      $count.text('0 characters match your filters');
      $noResult.prop('hidden', false);
    } else {
      $noResult.prop('hidden', true);
      $count.text(
        visible === total
          ? 'Showing all ' + total + ' characters'
          : 'Showing ' + visible + ' of ' + total + ' characters'
      );
    }
  }

  $search.on('input', applyFilters);   
  $category.on('change', applyFilters); 
  applyFilters();

  /*TASK 4 — dynamic favourites list with delegated remove*/
  const $favForm  = $('#fav-form');
  const $favInput = $('#fav-input');
  const $favError = $('#fav-error');
  const $favList  = $('#fav-list');
  const $favCount = $('#fav-count');
  const $favEmpty = $('#fav-empty');

  function updateFavState() {
    const n = $favList.children('.fav-item').length;
    $favCount.text(n + (n === 1 ? ' favourite' : ' favourites'));
    $favEmpty.prop('hidden', n !== 0);
  }

  function addFavourite(name) {
    const $item = $('<li>').addClass('fav-item');
    $('<span>').text(name).appendTo($item);       
    $('<button>')
      .attr('type', 'button')
      .addClass('fav-remove')
      .attr('aria-label', 'Remove ' + name)
      .text('Remove')
      .appendTo($item);
    $favList.append($item);
    updateFavState();
  }

  $favForm.on('submit', function (e) {
    e.preventDefault();
    const value = $.trim($favInput.val());

    if (value === '') {
      $favError.prop('hidden', false);
      $favInput.val('');            
      $favInput.trigger('focus');
      return;
    }

    $favError.prop('hidden', true);
    addFavourite(value);
    $favInput.val('');
    $favInput.trigger('focus');
  });

  $favInput.on('input', function () {
    if ($.trim($favInput.val()) !== '') $favError.prop('hidden', true);
  });

  $favList.on('click', '.fav-remove', function () {
    $(this).closest('.fav-item').remove();
    updateFavState();
  });

  updateFavState();
});