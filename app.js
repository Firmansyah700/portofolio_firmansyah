document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('collapse-btn');
    const darkBtn = document.getElementById('toggle-dark');
    const yearEl = document.getElementById('year');
    
    // --- ELEMEN BARU UNTUK DASHBOARD PORTOFOLIO ---
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.section-content');
    const applicationTable = document.getElementById('application-table');
    const refreshBtn = document.getElementById('refresh');
    // --- END BARU ---

    yearEl.textContent = new Date().getFullYear();
    // Pastikan plugin GSAP ScrollTo dimuat jika ada error:
    // gsap.registerPlugin(ScrollToPlugin);

    // ---------------------------------------------
    // 1. CONTENT SWITCHING / NAVIGASI SIDEBAR
    // ---------------------------------------------
    function showSection(targetId) {
        // Sembunyikan semua section konten
        contentSections.forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
        });

        const targetSection = document.querySelector(`[data-id="${targetId}"]`);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
            
            // Animasi untuk bagian baru yang muncul
            gsap.from(targetSection.children, {opacity:0, y:12, duration:0.5, stagger:0.05});
            // Scroll ke atas area konten
            gsap.to(window, {duration: 0.5, scrollTo: {y: document.querySelector('.main') || 0}}); 
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.dataset.section;
            
            // Set active class pada menu
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Cek jika ini adalah tautan navigasi internal, bukan log-out
            if (targetId) { 
                showSection(targetId);
            }
        });
    });

    // Tampilkan Dashboard saat pertama kali dimuat
    showSection('dashboard');


    // ---------------------------------------------
    // 2. DASHBOARD FUNCTIONALITY (Tabel Aplikasi & Export)
    // ---------------------------------------------
    
    // Fungsionalitas Export CSV
    document.getElementById('export-applications').addEventListener('click', ()=>{
        // Ambil data dari tabel HTML yang sudah ada
        const rows = applicationTable.querySelectorAll('tr');
        const data = Array.from(rows).map(row => {
            const cells = row.querySelectorAll('td');
            // Pastikan data tidak kosong
            if(cells.length > 0) return `${cells[0].textContent},${cells[1].textContent},${cells[2].textContent}`;
            return null;
        }).filter(item => item !== null); // Hapus baris kosong

        const csv = ['Perusahaan,Posisi,Status', ...data].join('\n');
        const blob = new Blob([csv], {type:'text/csv'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = 'applications_data.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    });
    
    // ---------------------------------------------
    // 3. SIDEBAR DAN MODE GELAP
    // ---------------------------------------------
    
    // sidebar collapse
    collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const collapsed = sidebar.classList.contains('collapsed');
        
        // --- PERUBAHAN DI SINI: HAPUS MARGIN MANIPULASI ---
        // Biarkan CSS/Flexbox yang menangani layout, HANYA atur tampilan text
        // gsap.to('#main', {duration: 0.35, marginLeft: collapsed ? 90 : 280}); // BARIS INI DIHAPUS
        
        document.querySelectorAll('.nav-item span').forEach(s => s.style.display = collapsed ? 'none' : 'inline');
    });

    // dark mode
    darkBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        darkBtn.setAttribute('aria-pressed', String(isDark));
        gsap.fromTo('body', {opacity:0.96}, {opacity:1, duration:0.4});
    });

    // refresh action (dummy animation)
    refreshBtn && refreshBtn.addEventListener('click', () => {
        gsap.fromTo('.card', {y:8, opacity:0.7}, {y:0, opacity:1, duration:0.6, stagger:0.06});
    });
    
    // ---------------------------------------------
    // 4. CHART — modern gradient line
    // ---------------------------------------------
    const overviewCtx = document.getElementById('overviewChart').getContext('2d');
    const months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
    // Data Penguasaan Skill (Disesuaikan untuk Portofolio)
    const dataValues = [60, 65, 70, 75, 80, 85, 88, 90, 92, 94, 95, 96]; 

    const gradient = overviewCtx.createLinearGradient(0,0,0,240);
    gradient.addColorStop(0, 'rgba(123,97,255,0.28)');
    gradient.addColorStop(1, 'rgba(102,209,209,0.04)');

    new Chart(overviewCtx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Skill Mastery %',
                data: dataValues,
                borderWidth: 2.5,
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-1') || '#7b61ff',
                backgroundColor: gradient,
                tension: 0.35,
                pointRadius: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-1') || '#7b61ff',
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false } },
                y: { 
                    grid: { color: 'rgba(15,23,42,0.04)' },
                    suggestedMin: 50,
                    suggestedMax: 100
                } 
            }
        }
    });

    // entry animations
    gsap.from('.card', {opacity:0, y:18, duration:0.6, stagger:0.12});
    gsap.from('.panel-left, .panel-right', {opacity:0, y:12, duration:0.6, stagger:0.06, delay:0.12});
});