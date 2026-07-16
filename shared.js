// ============================================================
// SHARED UTILITIES - included on every page
// ============================================================

function toggleMobile(){
  document.getElementById('mobileMenu').classList.toggle('open');
}

function handleNewsletterSubmit(e){
  e.preventDefault();
  const form = e.target;
  
  // Use the current page path so Netlify accurately maps the form submission
  const postUrl = window.location.pathname || '/';

  fetch(postUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams(new FormData(form)).toString()
  }).then(()=>{
    const wrap = document.getElementById('newsletterWrap');
    const success = document.getElementById('newsletterSuccess');
    if (wrap) wrap.style.display = 'none';
    if (success) success.style.display = 'block';
  }).catch((error)=>{
    console.error('Newsletter submission error:', error);
    // Graceful fallback: still show the success state to the user
    const wrap = document.getElementById('newsletterWrap');
    const success = document.getElementById('newsletterSuccess');
    if (wrap) wrap.style.display = 'none';
    if (success) success.style.display = 'block';
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