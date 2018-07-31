$(document).ready(() => {
  /**
   * Alerts
   */
  setTimeout(() => {
    const alert = document.querySelector('.alert');

    if (alert) alert.className += ' alert-hidden';
  }, 3000);

  /**
   * MDE Editor
   */
  $('.mde').each(function () {
    const simplemde = new SimpleMDE({
      element: this,
      spellChecker: false,
      status: false,
    });
    // simplemde.render();
  });

  /**
   * Modals
   */
  $('[data-modal-open]').click(function (event) {
    event.preventDefault();

    $($(this).data('modal-open')).addClass('active');
    $(document).scrollTop(0);
    $('body').css('overflow', 'hidden');
  });

  $('[data-modal-close]').click(function (event) {
    event.preventDefault();

    $($(this).data('modal-close')).removeClass('active');
    $('body').css('overflow', 'auto');
  });

  $(document).keydown((e) => {
    e = e || window.event;
    if (e.keyCode == 27) {
      $('.modal').removeClass('active');
    }
  });
});
