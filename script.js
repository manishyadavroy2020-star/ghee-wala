/* ===== GHEE WALA - Premium JavaScript ===== */
(function() {
  'use strict';

  // ===== PRODUCT DATA =====
  const IMG_BASE = 'https://raw.githubusercontent.com/manishyadavroy2020-star/ghee-wala/main/';
  const products = [
    { id:1, name:'Buffalo Ghee 1kg', price:800, weight:'1 kg', category:'ghee', desc:'Pure buffalo ghee with rich aroma', img:IMG_BASE+'buffalo-ghee.png', badge:'Popular' },
    { id:2, name:'Buffalo Ghee 500g', price:400, weight:'500 g', category:'ghee', desc:'Pure buffalo ghee, half pack', img:IMG_BASE+'buffalo-ghee.png' },
    { id:3, name:'Buffalo Ghee 250g', price:200, weight:'250 g', category:'ghee', desc:'Pure buffalo ghee, small pack', img:IMG_BASE+'buffalo-ghee.png' },
    { id:4, name:'Cow Ghee Cream 1kg', price:600, weight:'1 kg', category:'ghee', desc:'Premium cow ghee cream, authentic taste', img:IMG_BASE+'cow-ghee-cream.png', badge:'Best Seller' },
    { id:5, name:'Cow Ghee Cream 500g', price:300, weight:'500 g', category:'ghee', desc:'Cow ghee cream, half pack', img:IMG_BASE+'cow-ghee-cream.png' },
    { id:6, name:'Cow Ghee Cream 250g', price:150, weight:'250 g', category:'ghee', desc:'Cow ghee cream, small pack', img:IMG_BASE+'cow-ghee-cream.png' },
    { id:7, name:'Cow Ghee Malai 1kg', price:1000, weight:'1 kg', category:'ghee', desc:'Premium cow ghee malai, top quality', img:IMG_BASE+'cow-ghee-malai.png', badge:'Premium' },
    { id:8, name:'Cow Ghee Malai 500g', price:500, weight:'500 g', category:'ghee', desc:'Cow ghee malai, half pack', img:IMG_BASE+'cow-ghee-malai.png' },
    { id:9, name:'Cow Ghee Malai 250g', price:250, weight:'250 g', category:'ghee', desc:'Cow ghee malai, small pack', img:IMG_BASE+'cow-ghee-malai.png' },
    { id:10, name:'Puja Ghee', price:250, weight:'', category:'ghee', desc:'Special ghee for puja & rituals', img:IMG_BASE+'puja-ghee.png', badge:'Puja Special' },
    { id:11, name:'Plain Lassi', price:20, weight:'Glass', category:'lassi', desc:'Traditional refreshing plain lassi', img:IMG_BASE+'plain-lassi.png' },
    { id:12, name:'Special Lassi', price:40, weight:'Glass', category:'lassi', desc:'Creamy special lassi with dry fruits', img:IMG_BASE+'special-lassi.png', badge:'Popular' },
    { id:13, name:'Mango Lassi', price:40, weight:'Glass', category:'lassi', desc:'Delicious mango-flavoured lassi', img:IMG_BASE+'mango-lassi.png' },
    { id:14, name:'Ghee Vaja Lengcha', price:10, weight:'1 pc', category:'sweets', desc:'Traditional ghee-fried lengcha sweet', img:IMG_BASE+'ghee-vaja-lengcha.png' },
    { id:15, name:'Pantua', price:10, weight:'1 pc', category:'sweets', desc:'Soft & juicy Bengali pantua sweet', img:IMG_BASE+'pantua.png' },
    { id:16, name:'Dahi Bada', price:40, weight:'4 pcs', category:'sweets', desc:'Crispy dahi bada with yogurt topping', img:IMG_BASE+'dahi-bada.png', badge:'Must Try' },
    { id:17, name:'Paneer 1kg', price:280, weight:'1 kg', category:'ghee', desc:'Fresh and soft pure paneer', img:IMG_BASE+'paneer.png', badge:'New' },
    { id:18, name:'Mawa 1kg', price:400, weight:'1 kg', category:'sweets', desc:'Authentic fresh mawa (khoya) for sweets', img:IMG_BASE+'mawa.png', badge:'New' }
  ];

  const PHONE = '918637575281';
  let cart = JSON.parse(localStorage.getItem('gheeWalaCart') || '[]');
  let currentFilter = 'all';

  // ===== DOM READY =====
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    hidePreloader();
    renderProducts();
    renderCart();
    updateCartCount();
    setupNavbar();
    setupMobileNav();
    setupScrollAnimations();
    setupCartUI();
    setupFilters();
    setupBackToTop();
    createHeroParticles();
    animateHeroStats();
    setupOrderForm();
    setupThemeToggle();
  }

  // ===== THEME TOGGLE =====
  function setupThemeToggle() {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    const currentTheme = localStorage.getItem('gheeWalaTheme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    toggleBtn.addEventListener('click', function() {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('gheeWalaTheme', 'light');
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('gheeWalaTheme', 'dark');
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }
    });
  }

  // ===== PRELOADER =====
  function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    window.addEventListener('load', function() {
      setTimeout(function() { preloader.classList.add('hidden'); }, 600);
    });
    // Fallback - hide after 3 seconds max
    setTimeout(function() { preloader.classList.add('hidden'); }, 3000);
  }

  // ===== HERO PARTICLES =====
  function createHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = (Math.random() * 6) + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = (0.15 + Math.random() * 0.3).toString();
      container.appendChild(particle);
    }
  }

  // ===== HERO STATS COUNTER =====
  function animateHeroStats() {
    const stats = document.querySelectorAll('.hero-stat-num');
    if (!stats.length) return;
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count')) || 0;
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(function(s) { observer.observe(s); });
  }

  function animateCounter(el, target) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const suffix = el.textContent.includes('+') ? '+' : '';
    const timer = setInterval(function() {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current + suffix;
    }, 25);
  }

  // ===== RENDER PRODUCTS =====
  function renderProducts(filter) {
    filter = filter || currentFilter;
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const filtered = filter === 'all' ? products : products.filter(function(p) { return p.category === filter; });
    grid.innerHTML = filtered.map(function(p) {
      return '<div class="product-card animate-on-scroll" data-category="' + p.category + '">' +
        '<div class="product-img-wrap">' +
          (p.badge ? '<div class="product-badge">' + p.badge + '</div>' : '') +
          '<img class="product-img" src="' + p.img + '" alt="' + p.name + '" loading="lazy" width="300" height="300">' +
        '</div>' +
        '<div class="product-info">' +
          '<div class="product-name">' + p.name + '</div>' +
          '<div class="product-desc">' + p.desc + '</div>' +
          '<div class="product-price-row">' +
            '<div class="product-price">₹' + p.price + '</div>' +
            (p.weight ? '<div class="product-weight">' + p.weight + '</div>' : '') +
          '</div>' +
          '<div class="product-actions">' +
            '<button class="btn btn-outline" onclick="GW.addToCart(' + p.id + ')"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>' +
            '<button class="btn btn-gold" onclick="GW.buyNow(' + p.id + ')">Buy Now</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
    // Re-observe new elements for scroll animation
    setupScrollAnimations();
  }

  // ===== PRODUCT FILTERS =====
  function setupFilters() {
    var filterContainer = document.getElementById('productsFilter');
    if (!filterContainer) return;
    filterContainer.addEventListener('click', function(e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      currentFilter = btn.getAttribute('data-filter');
      filterContainer.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProducts(currentFilter);
    });
  }

  // ===== CART FUNCTIONS =====
  function addToCart(id) {
    var product = products.find(function(p) { return p.id === id; });
    if (!product) return;
    var existing = cart.find(function(c) { return c.id === id; });
    if (existing) { existing.qty++; } else { cart.push({ id:product.id, name:product.name, price:product.price, weight:product.weight, img:product.img, qty:1 }); }
    saveCart();
    updateCartCount();
    renderCart();
    showToast('✓ ' + product.name + ' added to cart!');
  }

  function removeFromCart(id) {
    cart = cart.filter(function(c) { return c.id !== id; });
    saveCart(); updateCartCount(); renderCart();
  }

  function updateQty(id, delta) {
    var item = cart.find(function(c) { return c.id === id; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(id); return; }
    saveCart(); updateCartCount(); renderCart();
  }

  function saveCart() { localStorage.setItem('gheeWalaCart', JSON.stringify(cart)); }

  function updateCartCount() {
    var total = cart.reduce(function(s, c) { return s + c.qty; }, 0);
    document.querySelectorAll('.cart-count, .float-count').forEach(function(el) {
      el.textContent = total;
      el.style.display = total > 0 ? 'flex' : 'none';
    });
  }

  function getCartTotal() { return cart.reduce(function(s, c) { return s + c.price * c.qty; }, 0); }

  function renderCart() {
    var container = document.getElementById('cartItems');
    var totalEl = document.getElementById('cartTotal');
    if (!container) return;
    if (cart.length === 0) {
      container.innerHTML = '<div class="cart-empty"><span><i class="fa-solid fa-cart-shopping"></i></span><p>Your cart is empty</p></div>';
    } else {
      container.innerHTML = cart.map(function(c) {
        return '<div class="cart-item">' +
          '<img src="' + c.img + '" alt="' + c.name + '" width="68" height="68" loading="lazy">' +
          '<div class="cart-item-info">' +
            '<div class="cart-item-name">' + c.name + '</div>' +
            '<div class="cart-item-price">₹' + (c.price * c.qty) + '</div>' +
            '<div class="cart-item-qty">' +
              '<button class="qty-btn" onclick="GW.updateQty(' + c.id + ',-1)">−</button>' +
              '<span>' + c.qty + '</span>' +
              '<button class="qty-btn" onclick="GW.updateQty(' + c.id + ',1)">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="cart-item-remove" onclick="GW.removeFromCart(' + c.id + ')" aria-label="Remove">✕</button>' +
        '</div>';
      }).join('');
    }
    if (totalEl) totalEl.textContent = '₹' + getCartTotal();
  }

  // ===== ORDER FORM MODAL =====
  var pendingOrder = null; // { items: [{name, price, qty, weight}], total: number }

  function openOrderModal(items, total) {
    pendingOrder = { items: items, total: total };
    var summaryEl = document.getElementById('orderSummary');
    if (summaryEl) {
      var html = '<h4><i class="fa-solid fa-cart-shopping"></i> Order Summary</h4>';
      items.forEach(function(item, i) {
        html += '<div class="order-summary-item">' +
          '<span>' + (i + 1) + '. ' + item.name + (item.qty > 1 ? ' x' + item.qty : '') + '</span>' +
          '<span>₹' + (item.price * item.qty) + '</span>' +
          '</div>';
      });
      html += '<div class="order-summary-total"><span>Total</span><span>₹' + total + '</span></div>';
      summaryEl.innerHTML = html;
    }
    var modal = document.getElementById('orderModal');
    var overlay = document.getElementById('orderOverlay');
    if (modal) modal.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderModal() {
    var modal = document.getElementById('orderModal');
    var overlay = document.getElementById('orderOverlay');
    if (modal) modal.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
    pendingOrder = null;
  }

  function setupOrderForm() {
    var closeBtn = document.getElementById('orderModalClose');
    var overlay = document.getElementById('orderOverlay');
    var form = document.getElementById('orderForm');

    if (closeBtn) closeBtn.addEventListener('click', closeOrderModal);
    if (overlay) overlay.addEventListener('click', closeOrderModal);

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!pendingOrder) return;

        var name = document.getElementById('orderName').value.trim();
        var phone = document.getElementById('orderPhone').value.trim();
        var street = document.getElementById('orderAddress').value.trim();
        var city = document.getElementById('orderCity').value.trim();
        var state = document.getElementById('orderState').value.trim();
        var pincode = document.getElementById('orderPincode').value.trim();
        var country = document.getElementById('orderCountry').value.trim();
        var payment = form.querySelector('input[name="payment"]:checked').value;

        if (!name || !phone || !street || !city || !state || !pincode || !country) {
          showToast('Please fill all address fields!');
          return;
        }

        var fullAddress = street + '\n' + city + ', ' + state + ' ' + pincode + '\n' + country;

        var msg = 'Hello Ghee Wala, I want to place an order:\n\n' +
          '👤 *Name:* ' + name + '\n' +
          '📞 *Phone:* ' + phone + '\n' +
          '📍 *Address:*\n' + fullAddress + '\n\n' +
          '🛒 *Order Details:*\n\n';

        pendingOrder.items.forEach(function(item, i) {
          msg += (i + 1) + '. ' + item.name + (item.qty > 1 ? ' x' + item.qty : '') + ' — ₹' + (item.price * item.qty) + '\n';
        });

        msg += '\n💰 *Total: ₹' + pendingOrder.total + '*\n' +
          '💳 *Payment: ' + payment + '*\n\n' +
          'Please confirm my order. Thank you!';

        window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg), '_blank');
        closeOrderModal();
        form.reset();
        showToast('Order sent to WhatsApp!');
      });
    }
  }

  // ===== WHATSAPP ORDER =====
  function buyNow(id) {
    var p = products.find(function(pr) { return pr.id === id; });
    if (!p) return;
    openOrderModal([{ name: p.name, price: p.price, qty: 1, weight: p.weight }], p.price);
  }

  function orderViaWhatsApp() {
    if (cart.length === 0) { showToast('Your cart is empty!'); return; }
    var items = cart.map(function(c) {
      return { name: c.name, price: c.price, qty: c.qty, weight: c.weight };
    });
    openOrderModal(items, getCartTotal());
  }

  // ===== TOAST =====
  function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function() {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity .3s ease';
      setTimeout(function() { toast.remove(); }, 300);
    }, 2500);
  }

  // ===== NAVBAR =====
  function setupNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          navbar.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ===== MOBILE NAV =====
  function setupMobileNav() {
    var hamburger = document.getElementById('hamburger');
    var mobileNav = document.getElementById('mobileNav');
    var closeBtn = document.getElementById('mobileNavClose');
    var overlay = document.getElementById('mobileOverlay');
    if (!hamburger || !mobileNav) return;

    function openNav() {
      mobileNav.classList.add('open');
      hamburger.classList.add('active');
      if (overlay) { overlay.classList.add('open'); overlay.style.display = 'block'; }
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('active');
      if (overlay) { overlay.classList.remove('open'); setTimeout(function() { overlay.style.display = 'none'; }, 350); }
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    if (overlay) overlay.addEventListener('click', closeNav);
    mobileNav.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', closeNav); });
  }

  // ===== CART UI =====
  function setupCartUI() {
    var overlay = document.getElementById('cartOverlay');
    var sidebar = document.getElementById('cartSidebar');
    var closeBtn = document.getElementById('cartClose');
    var orderBtn = document.getElementById('orderWhatsApp');

    function openCart() {
      if (sidebar) sidebar.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeCart() {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.open-cart').forEach(function(b) { b.addEventListener('click', openCart); });
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);
    if (orderBtn) orderBtn.addEventListener('click', orderViaWhatsApp);
  }

  // ===== SCROLL ANIMATIONS =====
  function setupScrollAnimations() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(function(el) { observer.observe(el); });
  }

  // ===== BACK TO TOP =====
  function setupBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          btn.classList.toggle('visible', window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== GLOBAL API =====
  window.GW = { addToCart: addToCart, removeFromCart: removeFromCart, updateQty: updateQty, buyNow: buyNow, orderViaWhatsApp: orderViaWhatsApp };
})();
