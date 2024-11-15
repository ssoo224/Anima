// استبدل 'your_token' برمز الـ API الخاص بك
const ipinfoToken = 'dd2570fe30711c';

// الكود بدون التحقق من الدولة
function checkCountry() {
    fetch(`https://ipinfo.io/json?token=${ipinfoToken}`)
        .then(response => response.json())
        .then(data => {
            console.log('Access granted for all countries.');
        })
        .catch(error => console.error('Error fetching IP information:', error));
}

checkCountry();

// منع الضغط المطول
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع السحب (اختياري، يمكن إضافة التأثيرات بناءً على الحاجة)
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

// باقي الكود كما هو...
function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    var icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

function searchEpisodes() {
    var input = document.getElementById('searchBar').value.toLowerCase();
    var episodes = document.querySelectorAll('.episode-item');
    var noResultsMessage = document.getElementById('noResultsMessage');
    var mainContent = document.getElementById('mainContent');

    var hasResults = false;

    episodes.forEach(function(episode) {
        var title = episode.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            episode.style.display = 'block';
            hasResults = true;
        } else {
            episode.style.display = 'none';
        }
    });

    if (hasResults) {
        noResultsMessage.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'block';
        mainContent.style.display = 'none';
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section-container');
    var searchContainer = document.querySelector('.search-container');
    var movieSections = document.querySelectorAll('.episode-list'); // أقسام الأفلام

    // إخفاء جميع الأقسام
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // عرض القسم المطلوب
    document.getElementById(sectionId).style.display = 'block';

    // تغيير العنوان بناءً على القسم المختار
    var pageTitle = document.getElementById('pageTitle');
    if (sectionId === 'developers' || sectionId === 'privacy-policy') {
        pageTitle.textContent = sectionId === 'developers' ? 'المطورين' : 'سياسة الخصوصية';
        searchContainer.classList.add('hide-search-bar');
        movieSections.forEach(function(section) {
            section.classList.add('hide-movie-sections');
        });
    } else {
        pageTitle.textContent = 'القائمة الرئيسية';
        searchContainer.classList.remove('hide-search-bar');
        movieSections.forEach(function(section) {
            section.classList.remove('hide-movie-sections');
        });
    }

    toggleSidebar(); // إغلاق الشريط الجانبي بعد اختيار القسم
}

function openModal(videoUrl) {
    var modal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');

    // تعيين رابط الفيديو
    modalVideo.src = videoUrl;

    // إظهار النافذة المنبثقة
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');

    // إخفاء النافذة المنبثقة
    modal.style.display = 'none';

    // إيقاف الفيديو
    modalVideo.pause();
    modalVideo.currentTime = 0;
}