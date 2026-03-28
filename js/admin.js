// Admin Dashboard JavaScript - Red Zone

// Determine API URL based on environment
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '' || window.location.hostname.startsWith('192.168.');

// TODO: Replace 'redzone-backend.onrender.com' with your actual Render URL after deployment
const PRODUCTION_API_URL = 'https://redzone-backend.onrender.com/api';
const LOCAL_API_URL = `http://${window.location.hostname || '127.0.0.1'}:5000/api`;

// Auto-detect environment
const API_URL = isDevelopment ? LOCAL_API_URL : PRODUCTION_API_URL; 

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const pageTitle = document.getElementById('pageTitle');
const adminEmail = document.getElementById('adminEmail');

// Game Modal
const gameModal = document.getElementById('gameModal');
const gameForm = document.getElementById('gameForm');
const addGameBtn = document.getElementById('addGameBtn');
const closeGameModal = document.getElementById('closeGameModal');
const cancelGameBtn = document.getElementById('cancelGameBtn');
const addPriceBtn = document.getElementById('addPriceBtn');
const pricesContainer = document.getElementById('pricesContainer');

// Toast
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Auth State
let currentUser = JSON.parse(localStorage.getItem('adminUser') || 'null');

// ─── Page Guard ───────────────────────────────────────────────────────────────
//
// On every page load we verify authorization with the SERVER.
// localStorage is only used to read the token — the server decides if it's valid.
// A 401 (no/bad token) or 403 (not admin) both redirect to the login screen.
//
document.addEventListener('DOMContentLoaded', async () => {
    // Step 1: Try to verify with the server
    const verified = await verifyAdminAccess();

    if (verified) {
        // Access granted — show dashboard
        showDashboard();
    } else {
        // Not authorized — show login only
        showLogin();
    }

    setupEventListeners();
});

/**
 * Calls GET /admin/dashboard to verify the stored token is valid AND admin.
 * Returns true if access is granted, false otherwise.
 */
async function verifyAdminAccess() {
    try {
        const token = localStorage.getItem('token');
        
        const response = await fetch(`${API_URL}/admin/dashboard`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.user) {
                currentUser = { ...currentUser, ...data.user };
            }
            return true;
        }

        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem('adminUser');
            currentUser = null;
        }
        return false;
    } catch (error) {
        console.error('[Admin] Server verification failed:', error);
        return false;
    }
}


// Event Listeners
function setupEventListeners() {
    // Login
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    // Logout
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            switchSection(section);
        });
    });

    // Game Modal
    if (addGameBtn) addGameBtn.addEventListener('click', () => openGameModal());
    if (closeGameModal) closeGameModal.addEventListener('click', () => closeModal());
    if (cancelGameBtn) cancelGameBtn.addEventListener('click', () => closeModal());
    if (gameForm) gameForm.addEventListener('submit', handleGameSubmit);
    if (addPriceBtn) addPriceBtn.addEventListener('click', addPriceRow);

    // Settings
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) settingsForm.addEventListener('submit', handleSettingsSubmit);

    // Price row remove
    if (pricesContainer) {
        pricesContainer.addEventListener('click', (e) => {
            if (e.target.closest('.remove-price-btn')) {
                e.target.closest('.price-row').remove();
            }
        });
    }
}

// Auth Functions
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    try {
        if (loginError) loginError.textContent = 'جاري تسجيل الدخول...';
        
        const response = await fetch(`${API_URL}/admin/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();

        if (response.status === 429) {
            throw new Error('محاولات كثيرة جداً. يرجى الانتظار قليلاً.');
        }

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        if (data.role !== 'admin') {
            throw new Error('هذا الحساب ليس لديه صلاحيات مدير');
        }

        // Success
        currentUser = data;
        localStorage.setItem('adminUser', JSON.stringify(currentUser));
        if (data.token) {
            localStorage.setItem('token', data.token);
        }

        // Let the cookie/localStorage settle
        setTimeout(() => {
            showDashboard();
        }, 100);
        
        if (loginError) loginError.textContent = '';
        
    } catch (error) {
        if (loginError) loginError.textContent = error.message;
    }
}

async function handleLogout() {
    try {
        await fetch(`${API_URL}/users/logout`, { method: 'POST', credentials: 'include' });
    } catch (err) { }
    currentUser = null;
    localStorage.removeItem('adminUser');
    localStorage.removeItem('token');
    showLogin();
}

function showLogin() {
    if (loginScreen) loginScreen.style.display = 'flex';
    if (dashboard) dashboard.style.display = 'none';
}

function showDashboard() {
    if (loginScreen) loginScreen.style.display = 'none';
    if (dashboard) dashboard.style.display = 'flex';
    if (adminEmail && currentUser) adminEmail.textContent = currentUser.email;
    loadDashboardData();
}

// Navigation
function switchSection(sectionName) {
    // Update nav
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionName);
    });

    // Update content
    contentSections.forEach(section => {
        section.classList.toggle('active', section.id === `${sectionName}Section`);
    });

    // Update title
    const titles = {
        overview: 'نظرة عامة',
        games: 'إدارة الألعاب',
        users: 'إدارة المستخدمين',
        orders: 'إدارة الطلبات',
        settings: 'إعدادات الحساب'
    };
    if (pageTitle) pageTitle.textContent = titles[sectionName];

    // Load data
    switch (sectionName) {
        case 'overview':
            loadDashboardData();
            break;
        case 'games':
            loadGames();
            break;
        case 'users':
            loadUsers();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'settings':
            loadSettings();
            break;
    }
}

// API Helpers
async function apiRequest(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const config = {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options.headers
        }
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, config);
        
        if (response.status === 429) {
            showToast('محاولات كثيرة جداً. يرجى المحاولة لاحقاً.', true);
            throw new Error('Rate limit exceeded');
        }

        const data = await response.json();

        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                // Only logout if we are not in the middle of a manual login process
                // Or if it's a repeated failure
                console.warn('[Admin] Auth failure:', response.status);
                handleLogout(); 
            }
            throw new Error(data.message || 'مشكلة في الاتصال بالخادم');
        }

        return data;
    } catch (error) {
        if (error.message !== 'Rate limit exceeded') {
            console.error(`API Error on ${endpoint}:`, error);
        }
        throw error;
    }
}

// Dashboard Data
async function loadDashboardData() {
    try {
        const stats = await apiRequest('/admin/stats');

        document.getElementById('totalGames').textContent = stats.totalGames;
        document.getElementById('totalUsers').textContent = stats.totalUsers;
        document.getElementById('totalOrders').textContent = stats.totalOrders;
        const revenue = (stats && stats.totalRevenue) ? stats.totalRevenue : 0;
        document.getElementById('totalRevenue').textContent = `${revenue.toLocaleString()} ج.م`;
        const todaySales = (stats && stats.todaySales) ? stats.todaySales : 0;
        document.getElementById('todaySales').textContent = `${todaySales.toLocaleString()} ج.م`;
        const monthSales = (stats && stats.monthSales) ? stats.monthSales : 0;
        document.getElementById('monthSales').textContent = `${monthSales.toLocaleString()} ج.م`;
        document.getElementById('pendingOrders').textContent = stats.pendingOrders;
        document.getElementById('paidOrders').textContent = stats.paidOrders;
        document.getElementById('canceledOrders').textContent = stats.canceledOrders;

        // Recent orders
        const recentTable = document.getElementById('recentOrdersTable');
        if (stats.recentOrders && stats.recentOrders.length > 0) {
            recentTable.innerHTML = stats.recentOrders.map(order => `
                <tr>
                    <td>#${(order.id || order._id).toString().slice(-6)}</td>
                    <td>${order.userId?.email || order.User?.email || 'N/A'}</td>
                    <td>${order.totalPrice.toLocaleString()} ج.م</td>
                    <td><span class="status-badge ${order.status}">${getStatusArabic(order.status)}</span></td>
                    <td>${formatDate(order.createdAt)}</td>
                </tr>
            `).join('');
        } else {
            recentTable.innerHTML = '<tr><td colspan="5" class="loading">لا توجد طلبات حديثة</td></tr>';
        }
    } catch (error) {
        console.error('Error loading dashboard:', error);
        if (error.message.includes('fetch')) {
            showToast('خطأ في الاتصال بالسيرفر. تأكد من تشغيل الباك إند.', true);
        }
    }
}

// Games Management
async function loadGames() {
    try {
        const games = await apiRequest('/admin/games');
        const table = document.getElementById('gamesTable');

        if (games && games.length > 0) {
            table.innerHTML = games.map(game => `
                <tr>
                    <td>${game.id}</td>
                    <td><img src="${game.image}" alt="${game.title}" class="game-img" onerror="this.src='assets/images/placeholder.jpg'"></td>
                    <td>${game.title}</td>
                    <td>${game.category}</td>
                    <td>${game.platform}</td>
                    <td>${game.prices ? (Array.isArray(game.prices) ? game.prices.map(p => `${p.label}: ${p.value}`).join('<br>') : JSON.stringify(game.prices)) : 'N/A'}</td>
                    <td>
                        <div class="action-btns">
                            <button class="action-btn edit" onclick="editGame(${game.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn delete" onclick="deleteGame(${game.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            table.innerHTML = '<tr><td colspan="7" class="loading">لا توجد ألعاب</td></tr>';
        }
    } catch (error) {
        console.error('Error loading games:', error);
    }
}

async function editGame(gameId) {
    try {
        const games = await apiRequest('/admin/games');
        const game = games.find(g => g.id === gameId);

        if (!game) {
            showToast('اللعبة غير موجودة', true);
            return;
        }

        document.getElementById('gameModalTitle').textContent = 'تعديل اللعبة';
        document.getElementById('gameId').value = game.id;
        document.getElementById('gameTitle').value = game.title;
        document.getElementById('gameCategory').value = game.category;
        document.getElementById('gamePlatform').value = game.platform;
        document.getElementById('gameRating').value = game.rating || 5;
        document.getElementById('gameImage').value = game.image || '';
        document.getElementById('gameDesc').value = game.desc || '';

        // Load prices
        pricesContainer.innerHTML = '';
        if (game.prices && Array.isArray(game.prices)) {
            game.prices.forEach(price => {
                addPriceRow(price.label, price.value);
            });
        } else {
            addPriceRow();
        }

        gameModal.classList.add('active');
    } catch (error) {
        console.error('Error editing game:', error);
    }
}

async function deleteGame(gameId) {
    if (!confirm('هل أنت متأكد من حذف هذه اللعبة؟')) return;

    try {
        await apiRequest(`/admin/games/${gameId}`, { method: 'DELETE' });
        showToast('تم حذف اللعبة بنجاح');
        loadGames();
    } catch (error) {
        showToast('حدث خطأ أثناء الحذف', true);
    }
}

function openGameModal() {
    if (pageTitle) document.getElementById('gameModalTitle').textContent = 'إضافة لعبة جديدة';
    if (gameForm) gameForm.reset();
    document.getElementById('gameId').value = '';
    if (pricesContainer) {
        pricesContainer.innerHTML = '';
        addPriceRow();
    }
    gameModal.classList.add('active');
}

function closeModal() {
    gameModal.classList.remove('active');
}

function addPriceRow(label = '', value = '') {
    const row = document.createElement('div');
    row.className = 'price-row';
    row.innerHTML = `
        <input type="text" placeholder="النوع (مثال: Primary)" class="price-label" value="${label}">
        <input type="number" placeholder="السعر" class="price-value" value="${value}">
        <button type="button" class="remove-price-btn"><i class="fas fa-times"></i></button>
    `;
    pricesContainer.appendChild(row);
}

async function handleGameSubmit(e) {
    e.preventDefault();

    const gameId = document.getElementById('gameId').value;
    const priceRows = pricesContainer.querySelectorAll('.price-row');
    const prices = [];

    priceRows.forEach(row => {
        const label = row.querySelector('.price-label').value.trim();
        const value = parseInt(row.querySelector('.price-value').value);
        if (label && value) {
            prices.push({ label, value });
        }
    });

    const gameData = {
        title: document.getElementById('gameTitle').value,
        category: document.getElementById('gameCategory').value,
        platform: document.getElementById('gamePlatform').value,
        rating: parseInt(document.getElementById('gameRating').value),
        image: document.getElementById('gameImage').value,
        desc: document.getElementById('gameDesc').value,
        prices: prices
    };

    try {
        if (gameId) {
            await apiRequest(`/admin/games/${gameId}`, {
                method: 'PUT',
                body: JSON.stringify(gameData)
            });
            showToast('تم تحديث اللعبة بنجاح');
        } else {
            await apiRequest('/admin/games', {
                method: 'POST',
                body: JSON.stringify(gameData)
            });
            showToast('تمت إضافة اللعبة بنجاح');
        }

        closeModal();
        loadGames();
    } catch (error) {
        showToast(error.message || 'حدث خطأ أثناء الحفظ', true);
    }
}

// Users Management
async function loadUsers() {
    try {
        const users = await apiRequest('/admin/users');
        const table = document.getElementById('usersTable');

        if (users && users.length > 0) {
            table.innerHTML = users.map(user => `
                <tr>
                    <td>${user.email}</td>
                    <td><span class="role-badge ${user.role}">${user.role}</span></td>
                    <td>${formatDate(user.createdAt)}</td>
                    <td>
                        <div class="action-btns">
                            ${user.role !== 'admin' ? `
                                <button class="action-btn delete" onclick="deleteUser('${user.id || user._id}')">
                                    <i class="fas fa-trash"></i>
                                </button>
                            ` : ''}
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            table.innerHTML = '<tr><td colspan="4" class="loading">لا يوجد مستخدمين</td></tr>';
        }
    } catch (error) {
        console.error('Error loading users:', error);
    }
}

async function deleteUser(userId) {
    if (!confirm('هل أنت متأكد من حذف هذا المستخدم؟')) return;

    try {
        await apiRequest(`/admin/users/${userId}`, { method: 'DELETE' });
        showToast('تم حذف المستخدم بنجاح');
        loadUsers();
    } catch (error) {
        showToast('حدث خطأ أثناء الحذف', true);
    }
}

// Orders Management
async function loadOrders() {
    try {
        const orders = await apiRequest('/admin/orders');
        const table = document.getElementById('ordersTable');

        if (orders && orders.length > 0) {
            table.innerHTML = orders.map(order => `
                <tr>
                    <td>#${(order.id || order._id).toString().slice(-6)}</td>
                    <td>${order.userId?.email || order.User?.email || 'N/A'}</td>
                    <td>${order.items && order.items.length > 0 ? order.items.map(i => `${i.title}${i.variant && i.variant !== 'Standard' ? ' (' + i.variant + ')' : ''}`).join(', ') : 'N/A'}</td>
                    <td>${order.totalPrice.toLocaleString()} ج.م</td>
                    <td><span class="status-badge ${order.status}">${getStatusArabic(order.status)}</span></td>
                    <td>${formatDate(order.createdAt)}</td>
                    <td>
                        <div class="order-actions">
                            <select class="status-select" onchange="updateOrderStatus('${order.id || order._id}', this.value)">
                                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>قيد الإنتظار</option>
                                <option value="paid" ${order.status === 'paid' ? 'selected' : ''}>مدفوع</option>
                                <option value="canceled" ${order.status === 'canceled' ? 'selected' : ''}>ملغي</option>
                            </select>
                        </div>
                    </td>
                </tr>
            `).join('');
        } else {
            table.innerHTML = '<tr><td colspan="7" class="loading">لا توجد طلبات</td></tr>';
        }
    } catch (error) {
        console.error('Error loading orders:', error);
    }
}

async function updateOrderStatus(orderId, status) {
    try {
        await apiRequest(`/admin/orders/${orderId}`, {
            method: 'PUT',
            body: JSON.stringify({ status })
        });
        showToast('تم تحديث حالة الطلب');
        loadOrders();
    } catch (error) {
        showToast('حدث خطأ أثناء التحديث', true);
        loadOrders();
    }
}

function getStatusArabic(status) {
    const statuses = {
        pending: 'قيد الإنتظار',
        paid: 'مدفوع',
        canceled: 'ملغي'
    };
    return statuses[status] || status;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function showToast(message, isError = false) {
    if (!toastMessage || !toast) return;
    toastMessage.textContent = message;
    toast.classList.toggle('error', isError);
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Make functions globally accessible
window.editGame = editGame;
window.deleteGame = deleteGame;

// Reset Sales Button Handler
const resetSalesBtn = document.getElementById('resetSalesBtn');
if (resetSalesBtn) {
    resetSalesBtn.addEventListener('click', async () => {
        if (!confirm('هل أنت متأكد أنك تريد مسح جميع المبيعات والطلبات الوهمية وتصفير اللوحة؟')) return;
        try {
            await apiRequest('/admin/sales/reset', { method: 'DELETE' });
            showToast('تم تصفير المبيعات بنجاح');
            loadDashboardData();
            loadOrders();
        } catch (error) {
            showToast('حدث خطأ أثناء تصفير المبيعات', true);
        }
    });
}

// Reset Users Button Handler
const resetUsersBtn = document.getElementById('resetUsersBtn');
if (resetUsersBtn) {
    resetUsersBtn.addEventListener('click', async () => {
        if (!confirm('هل أنت متأكد أنك تريد مسح جميع الحسابات والمستخدمين الوهميين من لوحة التحكم؟')) return;
        try {
            await apiRequest('/admin/users/reset', { method: 'DELETE' });
            showToast('تم مسح جميع المستخدمين الوهميين بنجاح');
            loadDashboardData();
            loadUsers();
        } catch (error) {
            showToast('حدث خطأ أثناء مسح المستخدمين', true);
        }
    });
}

window.deleteUser = deleteUser;
window.updateOrderStatus = updateOrderStatus;

// Settings Management
async function loadSettings() {
    try {
        const adminData = await apiRequest('/admin/profile');
        const emailInput = document.getElementById('adminNewEmail');
        if (emailInput && adminData.email) {
            emailInput.value = adminData.email;
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
}

async function handleSettingsSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('adminNewEmail').value.trim();
    const password = document.getElementById('adminNewPassword').value;
    const confirmPassword = document.getElementById('adminConfirmPassword').value;
    const messageEl = document.getElementById('settingsMessage');

    if (password && password !== confirmPassword) {
        if (messageEl) {
            messageEl.textContent = 'كلمات المرور غير متطابقة';
            messageEl.style.color = 'var(--accent-red)';
        }
        showToast('كلمات المرور غير متطابقة', true);
        return;
    }

    try {
        const payload = {};
        if (email) payload.email = email;
        if (password) payload.password = password;

        await apiRequest('/admin/profile', {
            method: 'PUT',
            body: JSON.stringify(payload)
        });

        if (messageEl) {
            messageEl.textContent = 'تم تحديث البيانات بنجاح';
            messageEl.style.color = '#4CAF50';
        }
        showToast('تم تحديث بياناتك الحصينة بنجاح');
        
        // Update stored email if changed
        if (email && currentUser) {
            currentUser.email = email;
            localStorage.setItem('adminUser', JSON.stringify(currentUser));
            if (adminEmail) adminEmail.textContent = email;
        }

        // Clear password fields
        document.getElementById('adminNewPassword').value = '';
        document.getElementById('adminConfirmPassword').value = '';

    } catch (error) {
        if (messageEl) {
            messageEl.textContent = error.message || 'حدث خطأ أثناء التحديث';
            messageEl.style.color = 'var(--accent-red)';
        }
        showToast('حدث خطأ أثناء التحديث', true);
    }
}
