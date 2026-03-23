 (function() {
      // professional interactive functions
      function showVerifyDetails() {
        alert("✓ Midnight Moon Tattoo & Siren Body Piercing are proud APP Member Studio.\n✓ Verified by Association of Professional Piercers @safepiercing.org\n✓ Highest standards in body piercing & fine jewelry.\n✓ Implant-grade titanium, gold, and premium materials.");
      }
      
      function showAppInfo() {
        alert("Association of Professional Piercers Member Studio — Our piercers uphold the highest safety standards, using implant-grade fine jewelry. Located in Meredith, NH on Lake Winnipesaukee.");
      }
      
      const verifyMain = document.getElementById('verifyMainBtn');
      if(verifyMain) verifyMain.addEventListener('click', showVerifyDetails);
      
      const appDetail = document.getElementById('appMemberDetailBtn');
      if(appDetail) appDetail.addEventListener('click', showAppInfo);
      
      const memberBadgePro = document.getElementById('memberBadgePro');
      if(memberBadgePro) {
        memberBadgePro.addEventListener('click', showAppInfo);
      }
      
      const footerVerify = document.getElementById('verifyFooterBtn');
      if(footerVerify) footerVerify.addEventListener('click', showVerifyDetails);
      
      const bookingNav = document.getElementById('bookingNavBtn');
      if(bookingNav) {
        bookingNav.addEventListener('click', (e) => {
          e.preventDefault();
          alert("📅 Booking: Call (603) 555-0123 or email booking@midnightmoon.com. Walk-ins welcome! We require consultation for custom tattoos.");
        });
      }
      
      // smooth hover and elevate navigation
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        if(link.id !== 'bookingNavBtn') {
          link.addEventListener('click', (e) => {
            if(link.innerText !== 'HOME') {
              e.preventDefault();
              alert(`✨ ${link.innerText} section — coming soon. Visit our Meredith studio for full portfolio.`);
            }
          });
        }
      });
      
      // additional premium interactive - add year to footer automatically
      const footerYear = document.querySelector('.footer-note div:last-child');
      if(footerYear) {
        const year = new Date().getFullYear();
        if(footerYear.innerHTML.includes('2025')) {
          footerYear.innerHTML = footerYear.innerHTML.replace('2025', year);
        }
      }
      
      // subtle effect: all buttons have professional cursor and imagery
      console.log("Midnight Moon Tattoo — Professional website with APP certification, fine jewelry and exceptional service.");
    })();
