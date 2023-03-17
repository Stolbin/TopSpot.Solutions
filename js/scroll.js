var $page = $("html, body");
$('a[href*="#home"]').scroll(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    300
  );
  return false;
});

var $page = $("html, body");
$('a[href*="#about"]').scroll(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    300
  );
  return false;
});

var $page = $("html, body");
$('a[href*="#services"]').scroll(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    300
  );
  return false;
});

var $page = $("html, body");
$('a[href*="#markets"]').scroll(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    300
  );
  return false;
});

var $page = $("html, body");
$('a[href*="#contacts"]').scroll(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    300
  );
  return false;
});
