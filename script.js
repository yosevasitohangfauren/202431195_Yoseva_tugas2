document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  const ys = document.querySelectorAll('#year, #year2, #year3');
  ys.forEach(el => { if(el) el.textContent = y });

  
  ['navToggle','navToggle2','navToggle3'].forEach(id=>{
    const btn = document.getElementById(id);
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const nav = btn.nextElementSibling && btn.nextElementSibling.classList.contains('nav') ? btn.nextElementSibling : document.querySelector('.nav');
      if(nav) nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  });

  const form = document.getElementById('projectForm');
  if(form){
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const service = form.elements['service'].value;
      const details = form.elements['details'].value.trim();
      const tos = form.elements['tos'].checked;

      const msgEl = document.getElementById('formMessage');
      if(!name || !email || !service || !details || !tos){
        msgEl.textContent = 'Mohon isi semua field yang wajib (*) dan setujui persyaratan.';
        msgEl.style.color = '#ffbaba';
        return;
      }

      msgEl.textContent = 'Terima kasih! Request Anda telah diterima. Saya akan menghubungi melalui email.';
      msgEl.style.color = '#bff0c7';
      form.reset();
    });
  }
});
