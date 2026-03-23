/* ---------- ANIMATIONS ---------- */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section,
.welcome-row,
.testimonials {
  animation: fadeInUp 0.6s ease-out;
}
js/main.js (Create a folder named "js" and save this file inside it)
javascript
/**
 * Midnight Moon Tattoo - Main JavaScript
 * Interactive functionality for the website
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        
        // ============================================
        // Alert Messages
        // ============================================
        
        /**
         * Display APP verification details
         */
        function showVerifyDetails() {
            alert("✓ Midnight Moon Tattoo & Siren Body Piercing are proud APP Member Studio.\n✓ Verified by Association of Professional Piercers @safepiercing.org\n✓ Highest standards in body piercing & fine jewelry.\n✓ Implant-grade titanium, gold, and premium materials.");
        }
        
        /**
         * Display APP member studio information
         */
        function showAppInfo() {
            alert("Association of Professional Piercers Member Studio — Our piercers uphold the highest safety standards, using implant-grade fine jewelry. Located in Meredith, NH on Lake Winnipesaukee.");
        }
        
        /**
         * Display booking information
         */
        function showBookingInfo() {
            alert("📅 Booking Information:\n\n• Call: (603) 555-0123\n• Email: booking@midnightmoon.com\n• Walk-ins welcome!\n• Custom tattoos require consultation\n• Piercing appointments available Tuesday-Saturday");
        }
        
        /**
         * Display coming soon message for navigation links
         * @param {string} sectionName - Name of the section being clicked
         */
        function showComingSoon(sectionName) {
            alert(`✨ ${sectionName} section — coming soon.\n\nVisit our Meredith studio for full portfolio and more information.`);
        }
        
        // ============================================
        // Button Event Listeners
        // ============================================
        
        // Verify APP Membership buttons
        const verifyMainBtn = document.getElementById('verifyMainBtn');
        if (verifyMainBtn) {
            verifyMainBtn.addEventListener('click', showVerifyDetails);
        }
        
        const verifyFooterBtn = document.getElementById('verifyFooterBtn');
        if (verifyFooterBtn) {
            verifyFooterBtn.addEventListener('click', showVerifyDetails);
        }
        
        // APP Member Studio Details button
        const appMemberDetailBtn = document.getElementById('appMemberDetailBtn');
        if (appMemberDetailBtn) {
            appMemberDetailBtn.addEventListener('click', showAppInfo);
        }
        
        // Member Studio Badge (clickable)
        const memberBadgePro = document.getElementById('memberBadgePro');
        if (memberBadgePro) {
            memberBadgePro.addEventListener('click', showAppInfo);
        }
        
        // Booking Info navigation link
        const bookingNavBtn = document.getElementById('bookingNavBtn');
        if (bookingNavBtn) {
            bookingNavBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showBookingInfo();
            });
        }
        
        // ============================================
        // Navigation Links (except HOME and BOOKING)
        // ============================================
        
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const linkText = link.innerText.trim();
            // Skip HOME and BOOKING INFO (booking already handled separately)
            if (linkText !== 'HOME' && link.id !== 'bookingNavBtn') {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showComingSoon(linkText);
                });
            }
            // HOME link just shows a friendly welcome (optional)
            if (linkText === 'HOME') {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert("Welcome to Midnight Moon Tattoo! Explore our studio, artists, and services.");
                });
            }
        });
        
        // ============================================
        // Social Media Links (prevent default navigation)
        // ============================================
        
        const socialLinks = document.querySelectorAll('.social-icon-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.getAttribute('aria-label') || 'social media';
                alert(`Connect with us on ${platform}! Follow for updates, flash designs, and studio news.`);
            });
        });
        
        // ============================================
        // Image Hover Effects Enhancement
        // ============================================
        
        // Add smooth zoom effect to all images with img-elegant class
        const elegantImages = document.querySelectorAll('.img-elegant');
        elegantImages.forEach(img => {
            img.style.transition = 'transform 0.5s ease';
        });
        
        // ============================================
        // Dynamic Footer Year Update
        // ============================================
        
        const footerYearElement = document.querySelector('.footer-note div:last-child');
        if (footerYearElement) {
            const currentYear = new Date().getFullYear();
            const yearRegex = /\d{4}/;
            if (yearRegex.test(footerYearElement.innerHTML)) {
                footerYearElement.innerHTML = footerYearElement.innerHTML.replace(/\d{4}/, currentYear);
            }
        }
        
        // ============================================
        // Add Smooth Scroll Behavior for Anchor Links
        // ============================================
        
        // Add smooth scroll to any future anchor links (if added)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#' && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
        
        // ============================================
        // Console Log for Development
        // ============================================
        
        console.log('Midnight Moon Tattoo — Professional Website Loaded');
        console.log('APP Member Studio | Siren Body Piercing | Meredith, NH');
        
    }); // End DOMContentLoaded
    
})();
