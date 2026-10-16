(function () {
  var lb, img, cap;
  function build() {
    lb = document.createElement('div');
    lb.id = 'lb';
    lb.innerHTML = '<img alt=""><div class="cap"></div><div class="hint">คลิกพื้นที่ใดก็ได้เพื่อปิด · ล้อเมาส์/นิ้วซูมได้ตามเบราว์เซอร์</div>';
    document.body.appendChild(lb);
    img = lb.querySelector('img');
    cap = lb.querySelector('.cap');
    lb.addEventListener('click', function () { lb.classList.remove('on'); img.src = ''; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { lb.classList.remove('on'); img.src = ''; } });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a.zoomlink') : null;
    if (!a) return;
    var im = a.querySelector('img');
    if (!im) return;
    e.preventDefault();
    if (!lb) build();
    img.src = im.getAttribute('data-full') || a.getAttribute('href');
    img.alt = im.getAttribute('alt') || '';
    cap.textContent = img.alt;
    lb.classList.add('on');
  });
})();
