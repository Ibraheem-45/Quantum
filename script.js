// ============================================
// E-COMMERCE STORE - COMPLETE FIXED
// ============================================

let cart = JSON.parse(localStorage.getItem('shoppingCart')) || []
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

// ============================================
// MOBILE NAV TOGGLE
// ============================================
function toggleMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const navOverlay = document.getElementById('navOverlay');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileNav();
  } else {
    if (hamburger) hamburger.classList.add('open');
    drawer.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const navOverlay = document.getElementById('navOverlay');
  if (hamburger) hamburger.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
  if (navOverlay) navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Close nav on window resize to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) closeMobileNav();
});


// Complete Product Data
const productData = [
  {
    id: 1,
    name: 'Premium Cotton Henley T-Shirt',
    category: 'tshirt',
    price: 2499,
    originalPrice: 2999,
    images: { default: 'Clothes Images/img_black_1.1.jpg', hover: 'Clothes Images/img_black_1.3.jpg' },
    colors: [
      {
        name: 'Black',
        code: '#2d3436',
        gallery: [
          'Clothes Images/img_black_1.1.jpg',
          'Clothes Images/img_black_1.2.jpg',
          'Clothes Images/img_black_1.3.jpg',
          'Clothes Images/img_black_1.4.jpg',
        ]
      },
      {
        name: 'Blue',
        code: '#3498db',
        gallery: [
          'Clothes Images/img_blue_1.5.jpg',
          'Clothes Images/img_blue_1.6.jpg',
          'Clothes Images/img_blue_1.7.jpg',
          'Clothes Images/img_blue_1.8.jpg',
        ]
      },
      {
        name: 'Yellow',
        code: '#f1c40f',
        gallery: [
          'Clothes Images/img_yellow_1.9.jpg',
          'Clothes Images/img_yellow_2.0.jpg',
          'Clothes Images/img_yellow_2.1.jpg',
          'Clothes Images/img_yellow_2.2.jpg',
        ]
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    onSale: true,
    sku: 'MT0400R-MDM-GRN',
    rating: 4.5,
    reviews: 128,
    description: 'Premium Cotton Henley T-Shirt - Engineered for comfort and style with breathable fabric.',
    specs: { Material: '100% Cotton', Fit: 'Regular Fit', Neck: 'Henley Collar', Sleeve: 'Short Sleeve', Care: 'Machine Wash' },
  },
  {
    id: 2,
    name: 'Classic Oxford Shirt',
    category: 'shirt',
    price: 3499,
    originalPrice: 3999,
    images: { default: 'Clothes Images/img_darkblue_2.3.jpg', hover: 'Clothes Images/img_darkblue_2.4.jpg' },
    colors: [
      {
        name: 'Dark Blue',
        code: '#2c3e50',
        gallery: [
          'Clothes Images/img_darkblue_2.3.jpg',
          'Clothes Images/img_darkblue_2.4.jpg',
          'Clothes Images/img_darkblue_2.5.jpg',
          'Clothes Images/img_darkblue_2.6.jpg',
        ]
      },
      {
        name: 'Brown',
        code: '#8d6e63',
        gallery: [
          'Clothes Images/img_brown_2.7.jpg',
          'Clothes Images/img_brown_2.8.jpg',
          'Clothes Images/img_brown_2.9.jpg',
          'Clothes Images/img_brown_3.0.jpg',
        ]
      },
      {
        name: 'Red',
        code: '#e74c3c',
        gallery: [
          'Clothes Images/img_red_3.1.jpg',
          'Clothes Images/img_red_3.2.jpg',
          'Clothes Images/img_red_3.4.jpg',
          'Clothes Images/img_red_3.5.jpg',
        ]
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    onSale: true,
    sku: 'OXF002-WHT',
    rating: 4.8,
    reviews: 95,
    description: 'Classic Oxford Shirt - Timeless style meets modern comfort for any occasion.',
    specs: { Material: '100% Cotton', Fit: 'Slim Fit', Collar: 'Button Down', Care: 'Machine Wash' },
  },
  {
    id: 3,
    name: 'Slim Fit Chinos',
    category: 'pants',
    price: 2999,
    originalPrice: 3499,
    images: { default: 'Clothes Images/img_black_3.5.jpg', hover: 'Clothes Images/img_black_3.7.jpg' },
    colors: [
      {
        name: 'Black',
        code: '#2d3436',
        gallery: [
          'Clothes Images/img_black_3.5.jpg',
          'Clothes Images/img_black_3.6.jpg',
          'Clothes Images/img_black_3.7.jpg',
          'Clothes Images/img_black_3.8.jpg',
        ]
      },
      {
        name: 'Red',
        code: '#c0392b',
        gallery: [
          'Clothes Images/img_red_3.9.jpg',
          'Clothes Images/img_red_4.0.jpg',
          'Clothes Images/img_red_4.1.jpg',
          'Clothes Images/img_red_4.2.jpg',
        ]
      },
    ],
    sizes: ['30', '32', '34', '36', '38'],
    onSale: false,
    sku: 'CHN003-BGE',
    rating: 4.3,
    reviews: 67,
    description: 'Slim Fit Chinos - Perfect for casual and semi-formal occasions, offering a sleek look.',
    specs: { Material: '98% Cotton, 2% Elastane', Fit: 'Slim Fit', Closure: 'Zip Fly', Care: 'Machine Wash' },
  },
  {
    id: 4,
    name: 'Modern Denim Jacket',
    category: 'jacket',
    price: 4999,
    originalPrice: 5999,
    images: { default: 'Clothes Images/img_white_5.1.jpg', hover: 'Clothes Images/img_white_5.2.jpg' },
    colors: [
      {
        name: 'White',
        code: '#c4bfbf94',
        gallery: [
          'Clothes Images/img_white_5.1.jpg',
          'Clothes Images/img_white_5.2.jpg',
          'Clothes Images/img_white_5.3.jpg',
          'Clothes Images/img_white_5.4.jpg',
        ]
      },
      {
        name: 'Blue',
        code: '#2980b9',
        gallery: [
          'Clothes Images/img_blue_5.9.jpg',
          'Clothes Images/img_blue_6.0.jpg',
          'Clothes Images/img_blue_6.1.jpg',
          'Clothes Images/img_blue_6.2.jpg',
        ]
      },
      {
        name: 'Pink',
        code: '#000',
        gallery: [
          'Clothes Images/img_black_5.5.jpg',
          'Clothes Images/img_black_5.6.jpg',
          'Clothes Images/img_black_5.7.jpg',
          'Clothes Images/img_black_5.8.jpg',
        ]
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    onSale: true,
    sku: 'DNM004-BLU',
    rating: 4.7,
    reviews: 156,
    description: 'Classic Denim Jacket - A wardrobe essential for every season, durable and stylish.',
    specs: { Material: '100% Cotton Denim', Fit: 'Regular Fit', Closure: 'Button Front', Care: 'Machine Wash' },
  },
]

let currentProduct = null
let currentColorIndex = 0
let currentImageIndex = 0
let activeGallery = []
let lensActive = false

// Generate 4 Views from 1 Image or use Actual Gallery
function generateGallery(customGallery) {
  if (!currentProduct) return []

  const targetGallery =
    customGallery ||
    (currentProduct.colors && currentProduct.colors[currentColorIndex]
      ? currentProduct.colors[currentColorIndex].gallery
      : currentProduct.gallery)

  if (targetGallery && targetGallery.length > 0) {
    const labels = ['Front', 'Back', 'Side', 'Detail']
    return targetGallery.map((src, index) => ({
      src: src,
      label: labels[index] || 'View',
      transform: 'none',
      filter: 'none'
    }))
  }

  const baseImageSrc = currentProduct.images.default
  return [
    { src: baseImageSrc, label: 'Front', transform: 'none', filter: 'none' },
    { src: baseImageSrc, label: 'Back', transform: 'none', filter: 'none' },
    { src: baseImageSrc, label: 'Side', transform: 'none', filter: 'none' },
    { src: baseImageSrc, label: 'Detail', transform: 'none', filter: 'none' },
  ]
}

// ========== SLIDER LOGIC ==========
let currentSlide = 0
let slideInterval

function initSlider() {
  const slides = document.querySelectorAll('.slide')
  const slider = document.getElementById('heroSlider')
  if (slides.length === 0 || !slider) return
  startSlideTimer()

  // Mobile Touch Swipe
  let touchStartX = 0
  let touchEndX = 0

  slider.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX
    },
    { passive: true }
  )

  slider.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    },
    { passive: true }
  )

  function handleSwipe() {
    const diff = touchEndX - touchStartX
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }
}

function startSlideTimer() {
  stopSlideTimer()
  slideInterval = setInterval(nextSlide, 5000)
}

function stopSlideTimer() {
  if (slideInterval) clearInterval(slideInterval)
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide')
  const dots = document.querySelectorAll('.dot')
  if (slides.length === 0) return

  dots.forEach((d) => d.classList.remove('active'))

  if (index >= slides.length) currentSlide = 0
  else if (index < 0) currentSlide = slides.length - 1
  else currentSlide = index

  slides.forEach((s) => s.classList.remove('active'))

  if (dots[currentSlide]) {
    dots[currentSlide].classList.add('active')
  }

  if (slides[currentSlide]) {
    slides[currentSlide].classList.add('active')
  }
}

function nextSlide() {
  showSlide(currentSlide + 1)
  startSlideTimer()
}

function prevSlide() {
  showSlide(currentSlide - 1)
  startSlideTimer()
}

function goToSlide(index) {
  showSlide(index)
  startSlideTimer()
}

// ========== HEADER LOGIC ==========
window.addEventListener('scroll', function () {
  const header = document.querySelector('.main-header')
  if (window.scrollY > 50) header.classList.add('scrolled')
  else header.classList.remove('scrolled')
})

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge()
  initSlider()

  const isHomePage = document.getElementById('productGrid')
  const isProductPage = document.querySelector('.product-detail-container')
  const isCartPage = document.getElementById('cartItems')

  if (isHomePage) {
    loadProducts()
    setupFilters()
  }
  if (isProductPage) {
    setupProductPage()
    loadRelatedProducts()
    initLens()
    initTabs()
  }
  if (isCartPage) {
    loadCartPage()
  }
})

// ========== PRODUCT PAGE FUNCTIONS ==========
// ========== PRODUCT PAGE FUNCTIONS ==========
function setupProductPage() {
  const productId = parseInt(localStorage.getItem('selectedProduct')) || 1
  currentProduct = productData.find((p) => p.id === productId)
  if (!currentProduct) return

  document.title = `${currentProduct.name} - StyleStore`
  const breadcrumb = document.getElementById('breadcrumbProduct')
  if (breadcrumb) breadcrumb.textContent = currentProduct.name

  renderProductDetails()
  loadGallery()
}

function renderProductDetails() {
  const container = document.getElementById('productInfo')
  if (!container) return

  const p = currentProduct
  container.innerHTML = `
    <h1 class="product-title">${p.name}</h1>
    <div class="product-rating">${generateStars(p.rating)} <span>(${p.reviews} Reviews)</span></div>
    
    <div class="price-display">
        <span class="price">Rs. ${p.price.toLocaleString()}</span>
        ${p.originalPrice > p.price ? `<span class="old-price">Rs. ${p.originalPrice.toLocaleString()}</span>` : ''}
    </div>
    <p class="product-description" style="font-size:14px; line-height:1.8; color:#666; margin-bottom:40px;">${p.description}</p>
    
    <div class="option-section">
        <span class="option-label">Color: <span id="selectedColorName" style="color:#000;">${p.colors[currentColorIndex].name}</span></span>
        <div class="color-swatches">
            ${p.colors
      .map(
        (c, i) => `
                <div class="color-swatch ${i === currentColorIndex ? 'active' : ''}" 
                     style="background: ${c.code}" 
                     onclick="selectColor(${i})"
                     title="${c.name}"></div>
            `
      )
      .join('')}
        </div>
    </div>

    <div class="option-section">
        <span class="option-label">Size</span>
        <div class="size-chips">
            ${p.sizes
      .map(
        (s, i) => `
                <div class="size-chip ${i === 1 ? 'active' : ''}" onclick="selectSize(this)">${s}</div>
            `
      )
      .join('')}
        </div>
    </div>

    <div class="product-actions">
        <div class="quantity-control">
            <button class="qty-btn" onclick="decreaseQty()"><i class="fas fa-minus"></i></button>
            <input type="text" class="qty-input" value="1" id="productQty" readonly>
            <button class="qty-btn" onclick="increaseQty()"><i class="fas fa-plus"></i></button>
        </div>
        <button class="btn-add-to-cart" onclick="addToCart()">
            <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button class="btn-wishlist" onclick="addToWishlist()">
            <i class="far fa-heart"></i>
        </button>
    </div>

    <div class="product-specs-grid" style="margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; border-top: 1px solid #eee; padding-top: 30px;">
        ${Object.entries(p.specs)
      .map(
        ([k, v]) => `
            <div>
                <span style="display:block; font-size:11px; color:#999; font-weight:700; text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${k}</span>
                <span style="font-weight:600; font-size:14px; color:var(--secondary);">${v}</span>
            </div>
        `
      )
      .join('')}
    </div>
  `
}

function loadGallery(customGallery) {
  if (!currentProduct) return
  const thumbnailsContainer = document.getElementById('thumbnailsContainer')
  const mainImg = document.getElementById('main-img')
  const imageLabel = document.getElementById('imageLabel')
  if (!thumbnailsContainer || !mainImg) return

  activeGallery = generateGallery(customGallery)
  const gallery = activeGallery

  mainImg.src = gallery[0].src
  if (imageLabel) imageLabel.textContent = gallery[0].label + ' View'

  thumbnailsContainer.innerHTML = ''
  gallery.forEach((img, index) => {
    const thumbItem = document.createElement('div')
    thumbItem.className = `thumbnail-item ${index === 0 ? 'active' : ''}`
    thumbItem.onclick = () => changeImage(index)
    thumbItem.innerHTML = `<img src="${img.src}" alt="${img.label}">`
    thumbnailsContainer.appendChild(thumbItem)
  })
  updateLensBackground(gallery[0].src)
}

function changeImage(index) {
  if (!currentProduct || !activeGallery[index]) return
  currentImageIndex = index
  const mainImg = document.getElementById('main-img')
  const imageLabel = document.getElementById('imageLabel')
  const gallery = activeGallery

  mainImg.src = gallery[index].src
  if (imageLabel) imageLabel.textContent = gallery[index].label + ' View'

  document
    .querySelectorAll('.thumbnail-item')
    .forEach((item, i) => item.classList.toggle('active', i === index))
  updateLensBackground(gallery[index].src)
}

function selectColor(index) {
  currentColorIndex = index
  renderProductDetails()
  if (currentProduct.colors[index].gallery) {
    loadGallery(currentProduct.colors[index].gallery)
  }
}

function selectSize(btn) {
  document
    .querySelectorAll('.size-chip')
    .forEach((b) => b.classList.remove('active'))
  btn.classList.add('active')
}

function toggleSidebar() {
  const sidebar = document.getElementById('cartSidebar')
  const overlay = document.getElementById('sidebarOverlay')
  if (sidebar && overlay) {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
  }
}

function updateSidebarCart() {
  const sidebarItems = document.getElementById('sidebarCartItems')
  const sidebarCount = document.getElementById('sidebarCartCount')
  const sidebarTotal = document.getElementById('sidebarTotal')
  if (!sidebarItems) return

  sidebarCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (cart.length === 0) {
    sidebarItems.innerHTML =
      '<div style="text-align:center; padding:40px; color:#999;">Your bag is empty</div>'
    sidebarTotal.textContent = 'Rs. 0'
    return
  }

  sidebarItems.innerHTML = cart
    .map(
      (item) => `
        <div class="sidebar-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="sidebar-item-info">
                <h4>${item.name}</h4>
                <p>Size: ${item.size} | Qty: ${item.quantity}</p>
                <div class="sidebar-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
            </div>
        </div>
    `
    )
    .join('')

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  sidebarTotal.textContent = `Rs. ${subtotal.toLocaleString()}`
}

// ========== CART FUNCTIONS ==========
function loadCartPage() {
  const cartItems = document.getElementById('cartItems')
  const emptyCart = document.getElementById('emptyCart')
  const cartItemCount = document.getElementById('cartItemCount')
  const cartHeaderCount = document.getElementById('cartHeaderCount')
  const cartSummaryCard = document.getElementById('cartSummaryCard')
  if (!cartItems) return

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0)
  if (cartItemCount) cartItemCount.textContent = totalQty
  if (cartHeaderCount) cartHeaderCount.textContent = `${totalQty} Item${totalQty === 1 ? '' : 's'}`

  if (cart.length === 0) {
    cartItems.innerHTML = ''
    if (emptyCart) emptyCart.style.display = 'block'
    if (cartSummaryCard) cartSummaryCard.style.opacity = '0.6'
    updateCartSummary()
    return
  }

  if (emptyCart) emptyCart.style.display = 'none'
  if (cartSummaryCard) cartSummaryCard.style.opacity = '1'

  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-card">
          <div class="cart-card-img-wrap" onclick="goToProduct(${item.id})">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/120x150/f5f5f5/333?text=Product'">
          </div>
          <div class="cart-card-content">
            <div class="cart-card-header">
              <div class="cart-card-meta">
                <span class="cart-card-cat">${item.category ? item.category.toUpperCase() : 'PREMIUM APPAREL'}</span>
                <h4 class="cart-card-title" onclick="goToProduct(${item.id})">${item.name}</h4>
              </div>
              <button class="cart-card-del" onclick="removeCartItem(${index})" title="Remove item">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>

            <div class="cart-card-tags">
              <span class="cart-tag">Size: <strong>${item.size || 'M'}</strong></span>
              <span class="cart-tag">Color: <strong>${item.color || 'Default'}</strong></span>
              <span class="cart-tag stock-tag"><i class="fas fa-check"></i> In Stock</span>
            </div>

            <div class="cart-card-footer">
              <div class="cart-stepper">
                <button onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease" class="stepper-btn ${item.quantity <= 1 ? 'disabled' : ''}">
                  <i class="fas fa-minus"></i>
                </button>
                <span class="stepper-count">${item.quantity}</span>
                <button onclick="updateCartQuantity(${index}, 1)" aria-label="Increase" class="stepper-btn">
                  <i class="fas fa-plus"></i>
                </button>
              </div>

              <div class="cart-card-price-block">
                <span class="cart-card-each">Rs. ${item.price.toLocaleString()} each</span>
                <span class="cart-card-total">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join('')

  updateCartSummary()
  loadRecentProducts()
}

function updateCartQuantity(index, change) {
  if (index >= 0 && index < cart.length) {
    cart[index].quantity += change
    if (cart[index].quantity <= 0) cart.splice(index, 1)
  }
  saveCart()
  loadCartPage()
  updateCartBadge()
  updateSidebarCart()
}

function removeCartItem(index) {
  if (index >= 0 && index < cart.length) {
    const itemName = cart[index].name
    cart.splice(index, 1)
    saveCart()
    loadCartPage()
    updateCartBadge()
    updateSidebarCart()
    Swal.fire({
      icon: 'success',
      title: 'Item Removed',
      text: `${itemName} removed from cart.`,
      timer: 1500,
      showConfirmButton: false,
      toast: true,
      position: 'top-end'
    })
  }
}

function updateCartSummary() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const freeThreshold = 3000
  const isFree = subtotal >= freeThreshold
  const shipping = isFree || subtotal === 0 ? 0 : 200
  const total = subtotal + shipping

  const subtotalEl = document.getElementById('subtotal')
  const shippingEl = document.getElementById('shipping')
  const totalEl = document.getElementById('total')
  const trackerText = document.getElementById('shippingTrackerText')
  const trackerBar = document.getElementById('shippingProgressBar')

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`
  if (shippingEl) {
    if (shipping === 0) {
      shippingEl.innerHTML = '<span class="free-shipping-tag">FREE</span>'
    } else {
      shippingEl.textContent = `Rs. ${shipping}`
    }
  }
  if (totalEl) totalEl.textContent = `Rs. ${total.toLocaleString()}`

  if (trackerText && trackerBar) {
    if (subtotal === 0) {
      trackerText.innerHTML = '<i class="fas fa-truck"></i> Free Shipping on orders over <strong>Rs. 3,000</strong>'
      trackerBar.style.width = '0%'
      trackerBar.style.backgroundColor = '#000000'
    } else if (isFree) {
      trackerText.innerHTML = '<i class="fas fa-check-circle"></i> <strong>CONGRATULATIONS!</strong> You have unlocked <strong>FREE SHIPPING</strong>!'
      trackerBar.style.width = '100%'
      trackerBar.style.backgroundColor = '#000000'
    } else {
      const remaining = freeThreshold - subtotal
      const percent = Math.min(100, Math.round((subtotal / freeThreshold) * 100))
      trackerText.innerHTML = `<i class="fas fa-truck"></i> Add <strong>Rs. ${remaining.toLocaleString()}</strong> more to get <strong>FREE Shipping!</strong>`
      trackerBar.style.width = `${percent}%`
      trackerBar.style.backgroundColor = '#000000'
    }
  }
}

function quickApplyCoupon(code) {
  const couponInput = document.getElementById('couponInput')
  if (couponInput) {
    couponInput.value = code
    applyCoupon()
  }
}

function applyCoupon() {
  const couponInput = document.getElementById('couponInput')
  const couponCode = couponInput.value.trim().toUpperCase()
  const validCoupons = {
    WELCOME10: 0.1,
    SAVE20: 0.2,
    STYLE50: 0.5,
    FREESHIP: 'shipping',
  }

  if (cart.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Cart Empty',
      text: 'Add items to cart first!',
      confirmButtonColor: '#000000',
    })
    return
  }

  if (validCoupons.hasOwnProperty(couponCode)) {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    let discount = 0
    let shipping = subtotal > 3000 ? 0 : 200

    if (validCoupons[couponCode] === 'shipping') {
      shipping = 0
      document.getElementById('shipping').textContent = 'FREE'
      Swal.fire({
        icon: 'success',
        title: 'Free Shipping Applied!',
        text: 'Shipping charges waived off!',
        confirmButtonColor: '#000000',
      })
    } else {
      discount = Math.round(subtotal * validCoupons[couponCode])
      document.getElementById('discountRow').style.display = 'flex'
      document.getElementById('discountAmount').textContent =
        `-Rs. ${discount.toLocaleString()}`
      Swal.fire({
        icon: 'success',
        title: 'Coupon Applied!',
        text: `${validCoupons[couponCode] * 100}% discount applied!`,
        confirmButtonColor: '#000000',
      })
    }
    document.getElementById('total').textContent =
      `Rs. ${(subtotal - discount + shipping).toLocaleString()}`
    couponInput.value = ''
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Coupon',
      text: 'Please enter a valid coupon code.',
      confirmButtonColor: '#000000',
    })
  }
}

// ============================================
// STRIPE PAYMENT GATEWAY (SANDBOX MODE)
// ============================================
function openStripeModal() {
  if (cart.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Cart is Empty',
      text: 'Please add items to your cart before proceeding to checkout.',
      confirmButtonColor: '#000000',
    })
    return
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 3000 ? 0 : 200
  const total = subtotal + shipping
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const modal = document.getElementById('stripeModalOverlay')
  const countEl = document.getElementById('stripeItemCount')
  const totalEl = document.getElementById('stripeTotalAmount')
  const btnAmountEl = document.getElementById('btnPayAmount')

  if (countEl) countEl.textContent = `${itemCount} Item${itemCount === 1 ? '' : 's'}`
  if (totalEl) totalEl.textContent = `Rs. ${total.toLocaleString()}`
  if (btnAmountEl) btnAmountEl.textContent = `Rs. ${total.toLocaleString()}`

  if (modal) {
    modal.classList.add('active')
    document.body.style.overflow = 'hidden'
  }
}

function closeStripeModal() {
  const modal = document.getElementById('stripeModalOverlay')
  if (modal) {
    modal.classList.remove('active')
    document.body.style.overflow = ''
  }
}

function autoFillTestCard() {
  const cardInput = document.getElementById('stripeCardNumber')
  const expiryInput = document.getElementById('stripeExpiry')
  const cvcInput = document.getElementById('stripeCVC')
  const brandIcon = document.getElementById('cardBrandIcon')

  if (cardInput) cardInput.value = '4242 4242 4242 4242'
  if (expiryInput) expiryInput.value = '12 / 28'
  if (cvcInput) cvcInput.value = '888'
  if (brandIcon) {
    brandIcon.className = 'fab fa-cc-visa input-icon'
    brandIcon.style.color = '#000000'
  }
}

function handleCardNumberInput(input) {
  let val = input.value.replace(/\D/g, '')
  if (val.length > 16) val = val.substring(0, 16)
  
  let formatted = val.match(/.{1,4}/g)?.join(' ') || val
  input.value = formatted

  const brandIcon = document.getElementById('cardBrandIcon')
  if (!brandIcon) return

  if (val.startsWith('4')) {
    brandIcon.className = 'fab fa-cc-visa input-icon'
    brandIcon.style.color = '#000000'
  } else if (val.startsWith('5')) {
    brandIcon.className = 'fab fa-cc-mastercard input-icon'
    brandIcon.style.color = '#000000'
  } else if (val.startsWith('3')) {
    brandIcon.className = 'fab fa-cc-amex input-icon'
    brandIcon.style.color = '#000000'
  } else {
    brandIcon.className = 'far fa-credit-card input-icon'
    brandIcon.style.color = '#888888'
  }
}

function handleExpiryInput(input) {
  let val = input.value.replace(/\D/g, '')
  if (val.length >= 3) {
    input.value = val.substring(0, 2) + ' / ' + val.substring(2, 4)
  } else {
    input.value = val
  }
}

function handleCVCInput(input) {
  input.value = input.value.replace(/\D/g, '').substring(0, 4)
}

function processStripePayment(event) {
  if (event) event.preventDefault()

  const cardInput = document.getElementById('stripeCardNumber')
  const emailInput = document.getElementById('stripeEmail')
  const nameInput = document.getElementById('stripeName')
  const btnPay = document.getElementById('btnStripePay')
  const btnPayText = document.getElementById('btnPayText')
  const spinner = document.getElementById('stripeSpinner')

  const cleanCard = cardInput ? cardInput.value.replace(/\s/g, '') : ''
  if (cleanCard.length < 16) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Card Number',
      text: 'Please enter a valid 16-digit card number (e.g. 4242 4242 4242 4242).',
      confirmButtonColor: '#000000',
    })
    return
  }

  if (btnPay) btnPay.disabled = true
  if (btnPayText) btnPayText.innerHTML = '<i class="fas fa-lock"></i> Processing Payment...'
  if (spinner) spinner.style.display = 'inline-block'

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 3000 ? 0 : 200
  const total = subtotal + shipping
  const customerName = nameInput ? nameInput.value : 'Valued Customer'
  const customerEmail = emailInput ? emailInput.value : 'customer@example.com'
  const last4 = cleanCard.slice(-4)

  setTimeout(() => {
    if (btnPay) btnPay.disabled = false
    if (btnPayText) btnPayText.innerHTML = `<i class="fas fa-lock"></i> Pay Rs. ${total.toLocaleString()}`
    if (spinner) spinner.style.display = 'none'

    closeStripeModal()

    const chargeId = 'ch_' + Math.random().toString(36).substring(2, 11) + Math.random().toString(36).substring(2, 8)
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000)

    cart = []
    saveCart()
    updateCartBadge()
    loadCartPage()
    updateSidebarCart()

    Swal.fire({
      icon: 'success',
      title: 'Payment Successful! 🎉',
      html: `
        <div style="text-align: left; padding: 10px; font-size: 13px; line-height: 1.6;">
          <div style="background:#f8f8f8; padding:12px 16px; border-radius:4px; margin-bottom:15px; border:1px solid #eeeeee;">
            <div style="font-size:11px; font-weight:800; color:#555; text-transform:uppercase; letter-spacing:1px;"><i class="fab fa-stripe" style="font-size:18px; color:#000;"></i> Stripe Sandbox Verified</div>
            <div style="font-size:22px; font-weight:900; color:#000; margin:4px 0;">Rs. ${total.toLocaleString()}</div>
            <div style="font-size:12px; color:#666;">Paid with card ending in •••• ${last4}</div>
          </div>
          <p><strong>Order ID:</strong> <code>#${orderId}</code></p>
          <p><strong>Charge ID:</strong> <code>${chargeId}</code></p>
          <p><strong>Customer:</strong> ${customerName}</p>
          <p><strong>Receipt Email:</strong> ${customerEmail}</p>
          <hr style="margin: 12px 0; border: none; border-top: 1px solid #eee;">
          <p style="color:#000000; font-weight:700;"><i class="fas fa-check-circle"></i> Thank you! Your order has been placed and will be delivered shortly.</p>
        </div>
      `,
      confirmButtonText: 'Continue Shopping',
      confirmButtonColor: '#000000',
    })
  }, 1500)
}

function checkout() {
  openStripeModal()
}

function loadRecentProducts() {
  const recentGrid = document.getElementById('recentGrid')
  if (!recentGrid) return
  const recentIds = JSON.parse(localStorage.getItem('recentlyViewed')) || []
  const recentProducts = recentIds
    .map((id) => productData.find((p) => p.id === id))
    .filter((p) => p)
    .slice(0, 4)
  const displayProducts = recentProducts.length
    ? recentProducts
    : productData.slice(0, 4)
  recentGrid.innerHTML = displayProducts
    .map((product) => createProductCardHTML(product))
    .join('')
}

function loadRelatedProducts() {
  const grid = document.getElementById('relatedGrid')
  if (!grid) return
  const currentId = currentProduct ? currentProduct.id : 1
  const related = productData.filter((p) => p.id !== currentId).slice(0, 4)
  grid.innerHTML = related.map((p) => createProductCardHTML(p)).join('')
}

// ========== HOME PAGE FUNCTIONS ==========
function loadProducts(filterCategory = 'all', sortBy = 'default') {
  const grid = document.getElementById('productGrid')
  if (!grid) return
  let filtered = [...productData]
  if (filterCategory !== 'all')
    filtered = filtered.filter((p) => p.category === filterCategory)
  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price)
  else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price)
  const countEl = document.getElementById('productCount')
  if (countEl) countEl.textContent = filtered.length
  grid.innerHTML = filtered
    .map((product) => createProductCardHTML(product))
    .join('')
}

function setupFilters() {
  document
    .getElementById('categoryFilter')
    ?.addEventListener('change', function () {
      loadProducts(this.value, document.getElementById('sortFilter').value)
    })
  document
    .getElementById('sortFilter')
    ?.addEventListener('change', function () {
      loadProducts(document.getElementById('categoryFilter').value, this.value)
    })
}

// ========== HELPER FUNCTIONS ==========
function createProductCardHTML(product) {
  return `<div class="product-card" onclick="goToProduct(${product.id})">
        ${product.onSale ? '<span class="product-badge">SALE</span>' : ''}
        <div class="product-image-wrapper">
            <img src="${product.images.default}" class="img-default">
            <div class="card-actions">
                <button class="action-btn" onclick="event.stopPropagation(); quickAddToCart(${product.id})" title="Add to Bag">
                    <i class="fas fa-shopping-bag"></i>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); addToWishlistFromGrid(${product.id})" title="Wishlist">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <p class="product-category">${product.category}</p>
            <h3>${product.name}</h3>
            <div class="product-price">
                <span class="current-price">Rs. ${product.price.toLocaleString()}</span>
                ${product.originalPrice > product.price ? `<span class="original-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
        </div>
    </div>`
}

function addToWishlistFromGrid(id) {
  const product = productData.find((p) => p.id === id)
  if (!product) return
  if (wishlist.some((item) => item.id === id)) {
    Swal.fire({
      icon: 'info',
      title: 'Already in Wishlist',
      text: `${product.name} is already in your wishlist!`,
      timer: 2000,
      showConfirmButton: false
    })
    return
  }
  wishlist.push(product)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  Swal.fire({
    icon: 'success',
    title: 'Added to Wishlist',
    text: `${product.name} added to your wishlist!`,
    timer: 2000,
    showConfirmButton: false
  })
}

function goToProduct(productId) {
  let recentIds = JSON.parse(localStorage.getItem('recentlyViewed')) || []
  recentIds = recentIds.filter((id) => id !== productId)
  recentIds.unshift(productId)
  localStorage.setItem('recentlyViewed', JSON.stringify(recentIds.slice(0, 10)))
  localStorage.setItem('selectedProduct', productId)
  window.location.href = 'product.html'
}

function addToCart() {
  if (!currentProduct) return
  const qtyInput = document.getElementById('productQty')
  const qty = qtyInput ? parseInt(qtyInput.value) : 1
  const size = document.querySelector('.size-chip.active')?.textContent || 'L'
  const color = currentProduct.colors ? currentProduct.colors[currentColorIndex].name : 'Default'

  const cartItem = {
    id: currentProduct.id,
    name: currentProduct.name,
    price: currentProduct.price,
    image: currentProduct.colors ? currentProduct.colors[currentColorIndex].gallery[0] : currentProduct.images.default,
    size: size,
    color: color,
    quantity: qty
  }

  const existing = cart.findIndex(
    (i) => i.id === cartItem.id && i.size === size && i.color === color
  )
  if (existing > -1) cart[existing].quantity += qty
  else cart.push(cartItem)

  saveCart()
  updateCartBadge()
  updateSidebarCart()
  toggleSidebar()

  Swal.fire({
    icon: 'success',
    title: 'Added to Bag',
    text: `${currentProduct.name} added.`,
    timer: 2000,
    showConfirmButton: false,
    toast: true,
    position: 'top-end'
  })
}

function quickAddToCart(id) {
  const product = productData.find((p) => p.id === id)
  if (!product) return

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images.default,
    size: 'M',
    color: product.colors[0].name,
    quantity: 1
  }

  const existing = cart.findIndex(
    (i) => i.id === cartItem.id && i.size === 'M' && i.color === product.colors[0].name
  )
  if (existing > -1) cart[existing].quantity += 1
  else cart.push(cartItem)

  saveCart()
  updateCartBadge()
  updateSidebarCart()
  toggleSidebar()

  Swal.fire({
    icon: 'success',
    title: 'Added to Bag',
    text: `${product.name} added.`,
    timer: 2000,
    showConfirmButton: false,
    toast: true,
    position: 'top-end'
  })
}

function buyNow() {
  addToCart()
  window.location.href = 'cart.html'
}
function addToWishlist() {
  if (!currentProduct) return
  const exists = wishlist.find((w) => w.id === currentProduct.id)
  if (!exists) {
    wishlist.push({ id: currentProduct.id, name: currentProduct.name })
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    Swal.fire({
      icon: 'success',
      title: 'Added to Wishlist!',
      timer: 1500,
      showConfirmButton: false,
    })
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Already in Wishlist',
      timer: 1500,
      showConfirmButton: false,
    })
  }
}
function increaseQty() {
  const q = document.getElementById('productQty')
  if (q) q.value = parseInt(q.value) + 1
}
function decreaseQty() {
  const q = document.getElementById('productQty')
  if (q && parseInt(q.value) > 1) q.value = parseInt(q.value) - 1
}
function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart))
}
function updateCartBadge() {
  const badges = document.querySelectorAll('#cartBadge, .cart-badge, .mobileCartBadge')
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  badges.forEach((el) => {
    el.textContent = count
    el.classList.remove('bump')
    void el.offsetWidth
    el.classList.add('bump')
    setTimeout(() => el.classList.remove('bump'), 300)
  })
}
function generateStars(r) {
  const f = Math.floor(r),
    h = r % 1 >= 0.5
  return `${'<i class="fas fa-star"></i>'.repeat(f)}${h ? '<i class="fas fa-star-half-alt"></i>' : ''}${'<i class="far fa-star"></i>'.repeat(5 - f - (h ? 1 : 0))}`
}
function initTabs() {
  document.querySelectorAll('.tab-header').forEach((t) =>
    t.addEventListener('click', function () {
      const target = this.dataset.tab
      document
        .querySelectorAll('.tab-header')
        .forEach((h) => h.classList.remove('active'))
      document
        .querySelectorAll('.tab-pane')
        .forEach((p) => p.classList.remove('active'))
      this.classList.add('active')
      document.getElementById(target).classList.add('active')
    })
  )
}
function initLens() {
  const img = document.getElementById('main-img')
  const lens = document.getElementById('lens')
  const zoomResult = document.getElementById('zoom-result')
  const imgWrapper = document.querySelector('.main-image-wrapper')

  if (!img || !lens || !zoomResult || !imgWrapper) return

  const LENS_W = 160
  const LENS_H = 160

  function hideZoom() {
    lens.style.display = 'none'
    zoomResult.classList.remove('active')
    setTimeout(() => {
      if (!zoomResult.classList.contains('active')) {
        zoomResult.style.display = 'none'
      }
    }, 150)
  }

  function showZoom() {
    const currentSrc = img.currentSrc || img.src
    if (!currentSrc) return

    lens.style.width = LENS_W + 'px'
    lens.style.height = LENS_H + 'px'
    lens.style.display = 'block'
    
    // Auto-adjust zoomResult position based on available screen space (Amazon Style)
    const rect = imgWrapper.getBoundingClientRect()
    const spaceOnRight = window.innerWidth - rect.right
    
    if (spaceOnRight >= 360) {
      zoomResult.style.position = 'absolute'
      zoomResult.style.top = '0'
      zoomResult.style.left = 'calc(100% + 20px)'
      zoomResult.style.width = Math.min(640, spaceOnRight - 25) + 'px'
      zoomResult.style.height = rect.height + 'px'
    } else {
      // In narrow screens, show magnified view overlay directly
      zoomResult.style.position = 'absolute'
      zoomResult.style.top = '0'
      zoomResult.style.left = '0'
      zoomResult.style.width = '100%'
      zoomResult.style.height = '100%'
    }

    zoomResult.style.display = 'block'
    zoomResult.style.backgroundImage = `url("${currentSrc}")`
    zoomResult.style.backgroundRepeat = 'no-repeat'
    
    // Trigger smooth fade-in
    requestAnimationFrame(() => {
      zoomResult.classList.add('active')
    })
  }

  imgWrapper.addEventListener('mouseenter', showZoom)
  imgWrapper.addEventListener('mouseleave', hideZoom)

  imgWrapper.addEventListener('mousemove', (e) => {
    const currentSrc = img.currentSrc || img.src
    if (!currentSrc) {
      hideZoom()
      return
    }

    if (lens.style.display !== 'block' || zoomResult.style.display !== 'block') {
      showZoom()
    }

    const rect = imgWrapper.getBoundingClientRect()
    const resultW = zoomResult.offsetWidth || 620
    const resultH = zoomResult.offsetHeight || 520

    let lx = e.clientX - rect.left - LENS_W / 2
    let ly = e.clientY - rect.top - LENS_H / 2

    lx = Math.max(0, Math.min(lx, rect.width - LENS_W))
    ly = Math.max(0, Math.min(ly, rect.height - LENS_H))

    lens.style.left = lx + 'px'
    lens.style.top = ly + 'px'

    const rx = resultW / LENS_W
    const ry = resultH / LENS_H

    zoomResult.style.backgroundImage = `url("${currentSrc}")`
    zoomResult.style.backgroundSize = `${rect.width * rx}px ${rect.height * ry}px`
    zoomResult.style.backgroundPosition = `-${lx * rx}px -${ly * ry}px`
  })
}

function updateLensBackground(s) {
  const z = document.getElementById('zoom-result')
  if (z && s) {
    z.style.backgroundImage = `url("${s}")`
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('cartSidebar')
  const overlay = document.getElementById('sidebarOverlay')
  if (sidebar && overlay) {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
  }
}

function updateSidebarCart() {
  const sidebarItems = document.getElementById('sidebarCartItems')
  const sidebarCount = document.getElementById('sidebarCartCount')
  const sidebarTotal = document.getElementById('sidebarTotal')
  if (!sidebarItems) return

  sidebarCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (cart.length === 0) {
    sidebarItems.innerHTML = '<div style="text-align:center; padding:40px; color:#999;">Your bag is empty</div>'
    sidebarTotal.textContent = 'Rs. 0'
    return
  }

  sidebarItems.innerHTML = cart
    .map(
      (item) => `
        <div class="sidebar-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="sidebar-item-info">
                <h4>${item.name}</h4>
                <p>Size: ${item.size} | Qty: ${item.quantity}</p>
                <div class="sidebar-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
            </div>
        </div>
    `
    )
    .join('')

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  sidebarTotal.textContent = `Rs. ${subtotal.toLocaleString()}`
}

// Global Exports
window.changeImage = changeImage
window.selectColor = selectColor
window.selectSize = selectSize
window.increaseQty = increaseQty
window.decreaseQty = decreaseQty
window.addToCart = addToCart
window.buyNow = buyNow
window.addToWishlist = addToWishlist
window.goToProduct = goToProduct
window.quickAddToCart = quickAddToCart
window.updateCartQuantity = updateCartQuantity
window.removeCartItem = removeCartItem
window.applyCoupon = applyCoupon
window.quickApplyCoupon = quickApplyCoupon
window.checkout = checkout
window.toggleSidebar = toggleSidebar
window.nextSlide = nextSlide
window.prevSlide = prevSlide
window.goToSlide = goToSlide
window.toggleMobileNav = toggleMobileNav
window.closeMobileNav = closeMobileNav
window.openStripeModal = openStripeModal
window.closeStripeModal = closeStripeModal
window.autoFillTestCard = autoFillTestCard
window.handleCardNumberInput = handleCardNumberInput
window.handleExpiryInput = handleExpiryInput
window.handleCVCInput = handleCVCInput
window.processStripePayment = processStripePayment

