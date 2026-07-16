// ============================================================
// SHARED UTILITIES - included on every page
// ============================================================

function toggleMobile(){
  document.getElementById('mobileMenu').classList.toggle('open');
}

function handleNewsletterSubmit(e){
  e.preventDefault();
  const form = e.target;
  fetch('/', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams(new FormData(form)).toString()
  }).then(()=>{
    document.getElementById('newsletterWrap').style.display='none';
    document.getElementById('newsletterSuccess').style.display='block';
  }).catch(()=>{
    document.getElementById('newsletterWrap').style.display='none';
    document.getElementById('newsletterSuccess').style.display='block';
  });
}

function shareTest(btn){
  const url=window.location.href.split('?')[0].split('#')[0];
  navigator.clipboard.writeText(url).then(()=>{
    const orig=btn.textContent;
    btn.textContent='✓ Copied!';
    setTimeout(()=>{btn.textContent=orig;},2500);
  }).catch(()=>{
    btn.textContent='thephantasiaproject.com';
    setTimeout(()=>{btn.textContent='Copy the test link →';},3000);
  });
}
