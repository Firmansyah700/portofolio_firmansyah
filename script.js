document.addEventListener('DOMContentLoaded', function() {

    // --- Data Pengalaman Kerja ---
    const experiences = [
        {
            title: "Tax Assistant",
            company: "PT. Seacon Bintang Sejahtera",
            logo: "images/logos/logo-sbs.png",
            duration: "Nov 2021 - Saat Ini - 4 thn 2 bln",
            category: "tax",
            details: [
                "Responsible for issuing VAT Out (Output Tax Invoices) JAKARTA Branch (Cash Revenue).",
                "Responsible for issuing VAT Out (Output Tax Invoices) JAKARTA Branch (Billing Revenue).",
                "Responsible for issuing VAT Out (Output Tax Invoices) SURABAYA Branch (Cash Revenue).",
                "Responsible for issuing VAT Out (Output Tax Invoice) SURABAYA Branch (Billing Revenue).",
                "Responsible for issuing VAT Out (Output Tax Invoice) SEMARANG Branch (Cash Revenue).",
                "Responsible for issuing VAT Out (Output Tax Invoice) SEMARANG Branch (Billing Revenue).",
                "Revision/Correction of Tax Invoices & Invoices upon customer request.",
                "Daily Input of Customer Tax Identification Number Data.",
                "Responsible for Preparing Monthly & Annual VAT Equalization & Reconciliation on time.",
                "Understanding of tax regulations, particularly VAT (Laws, Government Regulations, and Minister of Finance Regulations) and their implementation."
            ]
        },
        {
            title: "Senior Tax Officer",
            company: "PT. Seacon Terminal",
            logo: "images/logos/logo-st.png",
            duration: "Agu 2017 - Nov 2021 - 4 thn 4 bln",
            categoty: "tax",
            details: [
                "Entered invoice and receipt data into the system and issued Output Tax Invoices (Faktur Pajak Keluaran) accordingly.",
                "Printed and distributed Output Tax Invoice documents based on daily invoice and receipt transactions.",
                "Received and processed PPH 23 reimbursement submissions, performed document validation, and executed cash reimbursement payments according to approved claims.",
                "Received and processed refund documentation submitted by customers or operational teams.",
                "Validated LOLO & Demurrage revenue reports, calculated daily cash revenue, and performed cash deposits to the bank according to the appropriate revenue account allocations."
            ]
        },
        {
            title: "Finance & Tax Officer",
            company: "PT. Seacon Terminal",
            logo: "images/logos/logo-st.png",
            duration: "Mei 2016 - Agu 2017 - 1 thn 4 bln",
            category: "tax",
            details: [
                "Entered invoice and receipt data into the system and issued Output Tax Invoices (Faktur Pajak Keluaran).",
                "Printed and distributed Output Tax Invoice documents based on daily invoice and receipt transactions.",
                "Received and processed PPH 23 reimbursement submissions, performed document validation, and executed cash reimbursement payments.",
                "Received and processed refund documentation submitted by customers or operational teams.",
                "Validated LOLO & Demurrage revenue reports, calculated daily cash revenue, and performed cash deposits to the bank."
            ]
        },
        {
            title: "Import & Finance Tax Administration",
            company: "PT. Seacon Terminal",
            logo: "images/logos/logo-st.png",
            duration: "Des 2015 - Mei 2016 - 6 bln",
            category: "finance",
            details: [
                "Entered container numbers and printed Equipment Interchange Receipt (EIR) for customers.",
                "Collected and distributed container seals to support daily operational activities.",
                "Performed daily cash deposit of operational revenue to the designated bank.",
                "Received and processed refund documentation submitted by customers or agents.",
                "Received and processed PPH 23 reimbursement documentation.",
                "Printed and issued VAT Output Tax Invoices (Faktur Pajak Keluaran) based on daily invoice/receipt transactions"
            ]
        },
        {
            title: "Import Documentation & Container Operational Administration",
            company: "PT. Seacon Terminal",
            logo: "images/logos/logo-st.png",
            duration: "Nov 2015 - Des 2015 - 2 bln",
            category: "operational",
            details: [
                "Prepared Outbound (OB) Empty Container documents for approval with the shipping line.",
                "Prepared Delivery Order (DO) documents and coordinated the issuance of Gate-In Cards.",
                "Prepared and submitted OB Empty Container documentation and container lists to Customs for clearance.",
                "Entered container numbers into the system and printed Equipment Interchange Receipt (EIR).",
                "Collected and distributed container seals for operational use.",
                "Printed invoices and receipts based on data provided by the Equipment Team.",
                "Handled cash payment collection for invoices and receipts."
            ]
        },
        {
            title: "Import Administration",
            company: "PT. Seacon Terminal",
            logo: "images/logos/logo-st.png",
            duration: "Okt 2015 - Okt 2015 - 1 bln",
            category: "operational",
            details: [
                "Input container numbers and printed Equipment Interchange Receipt (EIR).",
                "Collected container seals and ensured correct seal distribution for operational use.",
                "Printed invoices and receipts based on data provided by the Equipment Team.",
                "Handled cash payment collection for invoices/receipts and ensured proper documentation."
            ]
        },
        {
            title: "GA Operational Coordinator",
            company: "PT. Seacon Terminal",
            logo: "images/logos/logo-st.png",
            duration: "Apr 2015 - Sep 2015 - 6 bln",
            category: "operational",
            details: [
                "Coordinated Cleaning Service teams for outdoor and office areas (assignment, monitoring, supervision).",
                "Coordinated the Container Washing team (scheduling, planning, attendance control).",
                "Prepared and submitted daily and monthly reports related to cleanliness and workforce.",
                "Monitored and managed inventory of cleaning supplies, coffee, and refreshments.",
                "Performed fuel refilling for heavy equipment.",
                "Responsible for daily fuel stock control, usage tracking, and reporting.",
                "Conducted purchasing and procurement of cleaning materials and washing supplies."
            ]
        }
    ];

    const experienceList = document.getElementById('experience-list');
const expFilterBtns = document.querySelectorAll('.experience-filters .filter-btn');

    function renderExperience(filterValue = 'all') {
    // Kosongkan list sebelum render ulang
    experienceList.innerHTML = '';

    // Filter data
    const filteredExp = filterValue.toLowerCase() === 'all' 
        ? experiences 
        : experiences.filter(job => {
            // Kita gunakan logic: jika kategori data mengandung kata dari filter (misal: 'operational' mengandung 'operations')
            const cat = (job.category || job.categoty || "").toLowerCase(); // handle typo 'categoty'
            const filter = filterValue.toLowerCase();
            
            // Penyesuaian khusus jika tombol "Operations" ditekan tapi data bernama "operational"
            if (filter === 'operations') return cat.includes('operation');
            return cat === filter;
        });

    // Render ke HTML
    filteredExp.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        
        let detailsHtml = '<ul>' + job.details.map(detail => `<li>${detail}</li>`).join('') + '</ul>';
        
        jobItem.innerHTML = `
            <div class="company-logo">
                <img src="${job.logo}" alt="${job.company} Logo" onerror="this.src='https://via.placeholder.com/60?text=S'">
            </div>
            <div class="job-info">
                <div class="job-header">
                    <div>
                        <h4>${job.title}</h4>
                        <span class="company-name">${job.company}</span>
                    </div>
                    <span class="job-duration">${job.duration}</span>
                </div>
                ${detailsHtml}
            </div>
        `;
        experienceList.appendChild(jobItem);
    });
}

// Event Listener untuk Tombol Filter Experience
expFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update UI tombol aktif
        expFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Jalankan render berdasarkan teks tombol
        renderExperience(btn.innerText);
    });
});

   // --- Data Sertifikasi ---
const certifications = [
    {
        name:"Certified AI For Productivity",
        issuer: "MySkill",
        date: "Des 2025",
        type: "single",
        filePrefix: "Certified-AI-For-Productivity",
        fileExt: ".jpg"
    },
    {
        name:"Certified Data Science Introduction",
        issuer: "MySkill",
        date: "Des 2025",
        type: "single",
        filePrefix: "Certified-Data-Science-Introduction",
        fileExt: ".jpg"
    },
    {
        name:"Certified AI and Automation with n8n",
        issuer: "MySkill",
        date: "Nov 2025",
        type: "single",
        filePrefix: "Certified-AI-and-Automation-with-n8n",
        fileExt: ".jpg"
    },
    {
        name:"Certified Introduction to Financial Literacy",
        issuer: "Dicoding Indonesia",
        date: "Nov 2025 Expiration Nov 2028",
        type: "multi",
        filePrefix: "Certified-Introduction-to-Financial-Literacy",
        pageCount: 3,
        fileExt: ".jpg"
    },
    {
        name:"Certified Basic Financial Accounting",
        issuer: "ESAS Management",
        date: "Jul 2025",
        type: "multi",
        filePrefix: "Certified-Basic-Financial-Accounting",
        pageCount: 2,
        fileExt: ".jpg"
    },
    {
        name:"Certified Penerbitan Surat Ketetapan Pajak",
        issuer: "HBI COLLEGE",
        date: "Mei 2025",
        type: "single",
        filePrefix: "Certified-Penerbitan-Surat-Ketetapan-Pajak",
        fileExt: ".jpg"
    },
    {
        name:"Certified Microsoft Excel Index Match, Vlookup and Hlookup",
        issuer: "MySkill",
        date: "Des 2024",
        type: "single",
        filePrefix: "Certified-Microsoft-Excel-Index-Match-Vlookup-and-Hlookup",
        fileExt: ".jpg"
    },
    {
        name:"Certified Microsoft Excel Data Formatting & Cleansing",
        issuer: "MySkill",
        date: "Nov 2024",
        type: "single",
        filePrefix: "Certified-Microsoft-Excel-Data-Formatting-Cleansing",
        fileExt: ".jpg"
    },
    {
        name:"SPEAKING PARTNER - BASIC 1",
        issuer: "Speaking Partner Official Page",
        date: "Nov 2024",
        type: "multi",
        filePrefix: "SPEAKING-PARTNER-BASIC-1",
        pageCount: 2,
        fileExt: ".jpg"
    },
    {
        name:"Certified Microsoft Excel Data Visualization",
        issuer: "MySkill",
        date: "Okt 2024",
        type: "single",
        filePrefix: "Certified-Microsoft-Excel-Data-Visualization",
        fileExt: ".jpg"
    },
    {
        name:"Certified Microsoft Excel - Pivot Table",
        issuer: "MySkill x Deloitte",
        date: "Sep 2024",
        type: "single",
        filePrefix: "Certified-Microsoft-Excel-Pivot-Table",
        fileExt: ".jpg"
    },
    {
        name:"Strategi Tepat Menyambut Implementasi Coretax System",
        issuer: "satukelas",
        date: "Sep 2024",
        type: "single",
        filePrefix: "Strategi-Tepat-Menyambut-Implementasi-Coretax-System",
        fileExt: ".jpg"
    },
    {
        name:"Certified Microsoft Excel - Basic Microsoft Excel",
        issuer: "MySkill x Deloitte",
        date: "Agu 2024",
        type: "single",
        filePrefix: "Certified-Microsoft-Excel-Basic-Microsoft-Excel",
        fileExt: ".jpg"
    },
    {
        name:"BREVET A & B",
        issuer: "PT Edu Cipta Solusi",
        date: "Feb 2024",
        type: "multi",
        filePrefix: "BREVET-AB",
        pageCount: 2,
        fileExt: ".jpg"
    },
    {
        name:"Certified Mengoperasikan Komputer Dasar",
        issuer: "Sekolah.mu",
        date: "Sep 2020",
        type: "single",
        filePrefix: "Certified-Mengoperasikan-Komputer-Dasar",
        fileExt: ".jpg"},
    {
        name:"Certified Employee of the Month Award",
        issuer: "PT. Seacon Teminal",
        date: "Jan 2020",
        type: "single",
        filePrefix: "Certified-Employee-of-the-Month-Award",
        fileExt: ".jpg"
    },
];

// Dalam script.js
// ... (Data Sertifikasi) ...

const certificationList = document.getElementById('certification-list');
const modal = document.getElementById('cert-modal');
const modalImageContainer = document.getElementById('modal-image-container');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

let currentCertData = null; // Menyimpan data sertifikat yang sedang dilihat
let currentPage = 1;        // Halaman yang sedang aktif

// Dalam script.js

function updateModalContent() {
    if (!currentCertData) return;

    const prefix = currentCertData.filePrefix;
    const ext = currentCertData.fileExt;

    // Menentukan nama file gambar berdasarkan tipe sertifikat
    let fileName;
    if (currentCertData.type === 'single') {
        fileName = prefix + ext;
        
        // Sembunyikan navigasi untuk sertifikat 1 halaman
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        pageInfo.textContent = ''; 
    } else {
        // Multi-page: Format nama file dengan nomor halaman (misal: 01, 02)
        const pageNumber = String(currentPage).padStart(2, '0'); 
        fileName = `${prefix}-${pageNumber}${ext}`;
        
        // Atur navigasi dan info halaman untuk multi-page
        prevBtn.style.display = (currentPage > 1) ? 'inline-block' : 'none';
        nextBtn.style.display = (currentPage < currentCertData.pageCount) ? 'inline-block' : 'none';
        pageInfo.textContent = `Halaman ${currentPage} dari ${currentCertData.pageCount}`;
    }
    
    // Path lengkap ke gambar (Pastikan folder images/certs/ sudah benar)
    // Perhatikan: path relatif dari index.html adalah images/certs/...
    const filePath = `images/certs/${fileName}`;
    
    // Tampilkan gambar
    modalImageContainer.innerHTML = `<img src="${filePath}" alt="${currentCertData.name} Halaman ${currentPage}">`;

    // Tampilkan modal
    modal.style.display = 'block'; 
}

// ------------------------------------------------
// 2. Fungsi Navigasi (Next/Prev)
// ------------------------------------------------

function navigate(direction) {
    if (!currentCertData || currentCertData.type === 'single') return;

    if (direction === 'next' && currentPage < currentCertData.pageCount) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }
    updateModalContent();
}

// ------------------------------------------------
// 3. Event Listeners Modal
// ------------------------------------------------

// Event untuk tombol Tutup (X)
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

// Event untuk navigasi Next/Prev
prevBtn.onclick = () => navigate('prev');
nextBtn.onclick = () => navigate('next');
debugger;

// Event untuk menutup modal jika klik di luar area modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// ------------------------------------------------
// 4. Render Item Sertifikat
// ------------------------------------------------

certifications.forEach(cert => {
    const certItem = document.createElement('div');
    certItem.classList.add('cert-item');
    
    // Teks yang akan muncul di item grid
    const viewText = (cert.type === 'multi') ? 'Lihat Galeri Halaman' : 'Lihat Sertifikat';
    
    certItem.innerHTML = `
        <h5>${cert.name}</h5>
        <p class="source">${cert.issuer}</p>
        <p class="date">Published: ${cert.date}</p>
        
        <div class="cert-preview view-link-preview">
            <i class="fas fa-eye"></i>
            <p>${viewText}</p>
        </div>
    `;

    // Ketika item sertifikat diklik (Membuka Modal)
    certItem.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        currentCertData = cert;
        currentPage = 1; // Selalu mulai dari halaman 1 saat modal dibuka
        
        // Tampilkan Modal
        updateModalContent();
    });
    // ... kode sebelumnya ...

// Event Listener untuk Tombol Filter Experience
expFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update UI tombol aktif
        expFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Jalankan render berdasarkan teks tombol
        renderExperience(btn.innerText);
    });
});

// --- TAMBAHKAN BARIS INI AGAR MUNCUL OTOMATIS ---
renderExperience('all'); 

// ... (lanjut ke data sertifikasi) ...

    certificationList.appendChild(certItem);
});

// Update data dengan daftar file gambar spesifik
const shortClassData = [
    { 
        title: "AI and Automation with n8n", 
        platform: "MySkill", 
        category: "ai", 
        icon: "fa-robot", 
        images: ["AI-and-Automation-with-n8n-01.JPG", "AI-and-Automation-with-n8n-02.JPG", "AI-and-Automation-with-n8n-03.JPG", "AI-and-Automation-with-n8n-04.JPG", "AI-and-Automation-with-n8n-05.JPG", "AI-and-Automation-with-n8n-06.JPG", "AI-and-Automation-with-n8n-07.JPG"] // 7 Portofolio
    },
    { 
        title: "AI for Productivity", 
        platform: "MySkill", 
        category: "ai", 
        icon: "fa-bolt", 
        images: ["AI-for-Productivity-01.jpg", "AI-for-Productivity-02.jpg", "AI-for-Productivity-03.jpg", "AI-for-Productivity-04.jpg", "AI-for-Productivity-05.jpg", "AI-for-Productivity-06.jpg", "AI-for-Productivity-07.jpg", "AI-for-Productivity-08.jpg"] 
    },
    { 
        title: "Data Science Introduction", 
        platform: "MySkill", 
        category: "data", 
        icon: "fa-chart-pie", 
        images: ["Data-Science-Introduction-01.jpg", "Data-Science-Introduction-02.jpg", "Data-Science-Introduction-03.jpg", "Data-Science-Introduction-04.jpg", "Data-Science-Introduction-05.jpg"] 
    },
    { 
        title: "Excel Basic", 
        platform: "MySkill x Deloitte", 
        category: "excel", 
        icon: "fa-file-excel", 
        images: ["BasicMicrosoftExcel-01.jpg", "BasicMicrosoftExcel-02.jpg", "BasicMicrosoftExcel-03.jpg", "BasicMicrosoftExcel-04.jpg", "BasicMicrosoftExcel-05.jpg", "BasicMicrosoftExcel-06.jpg", "BasicMicrosoftExcel-07.jpg", "BasicMicrosoftExcel-08.jpg", "BasicMicrosoftExcel-09.jpg", "BasicMicrosoftExcel-10.jpg"] 
    },
    { 
        title: "Data Formatting & Cleansing", 
        platform: "MySkill", 
        category: "excel", 
        icon: "fa-broom", 
        images: ["FormattingCleansing-01.jpg", "FormattingCleansing-02.jpg", "FormattingCleansing-03.jpg", "FormattingCleansing-04.jpg", "FormattingCleansing-05.jpg", "FormattingCleansing-06.jpg"]
    },
    { 
        title: "Data Visualization", 
        platform: "MySkill", 
        category: "excel", 
        icon: "fa-chart-line", 
        images: ["DataVisualization-01.jpg", "DataVisualization-02.jpg", "DataVisualization-03.jpg", "DataVisualization-04.jpg", "DataVisualization-05.jpg", "DataVisualization-06.jpg", "DataVisualization-07.jpg"] 
    },
    { 
        title: "Index Match, VLOOKUP and HLOOKUP", 
        platform: "MySkill x Lion Parcel", 
        category: "excel", 
        icon: "fa-search", 
        images: ["index-match-vlookup-hlookup-01.jpg", "index-match-vlookup-hlookup-02.jpg", "index-match-vlookup-hlookup-03.jpg", "index-match-vlookup-hlookup-04.jpg", "index-match-vlookup-hlookup-05.jpg", "index-match-vlookup-hlookup-06.jpg", "index-match-vlookup-hlookup-07.jpg", "index-match-vlookup-hlookup-08.jpg"] 
    },
    { 
        title: "Pivot Table", 
        platform: "MySkill x Deloitte", 
        category: "excel", 
        icon: "fa-table", 
        images: ["PivotTable-01.jpg", "PivotTable-02.jpg", "PivotTable-03.jpg", "PivotTable-04.jpg", "PivotTable-05.jpg", "PivotTable-06.jpg", "PivotTable-07.jpg"] 
    },
    { 
        title: "Financial Audit Fundamental", 
        platform: "MySkill", 
        category: "finance", 
        icon: "fa-calculator", 
        images: ["Financial-Audit-Fundamental-01.jpg", "Financial-Audit-Fundamental-02.jpg", "Financial-Audit-Fundamental-03.jpg", "Financial-Audit-Fundamental-04.jpg", "Financial-Audit-Fundamental-05.jpg", "Financial-Audit-Fundamental-06.jpg", "Financial-Audit-Fundamental-07.jpg"] 
    },
    { 
        title: "Web Development Frontend Introduction", 
        platform: "MySkill x Lion Parcel", 
        category: "software", 
        icon: "fa-code", 
        images: ["Web-Development-frontend-01.jpg", "Web-Development-frontend-02.jpg", "Web-Development-frontend-03.jpg", "Web-Development-frontend-04.jpg", "Web-Development-frontend-05.jpg", "Web-Development-frontend-06.jpg", "Web-Development-frontend-07.jpg", "Web-Development-frontend-08.jpg", "Web-Development-frontend-09.jpg"] 
    },
    { 
        title: "UX Writing Introduction", 
        platform: "MySkill", 
        category: "design", 
        icon: "fa-pen-nib", 
        images: ["UX-Writing-01.jpg", "UX-Writing-02.jpg", "UX-Writing-03.jpg", "UX-Writing-04.jpg", "UX-Writing-05.jpg"]
    }
];

const portfolioGrid = document.getElementById('portfolio-grid');
const filterBtns = document.querySelectorAll('.filter-btn-p');
debugger;

function renderPortfolio(filter = 'all') {
    portfolioGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? shortClassData 
        : shortClassData.filter(item => item.category === filter);

    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
            <div class="card-image">
                <span class="card-badge">${item.category.toUpperCase()}</span>
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="card-content">
                <p class="platform">${item.platform}</p>
                <h4>${item.title}</h4>
            </div>
            <div class="card-footer">
                <span class="item-count"><i class="far fa-images"></i> ${item.items} Portfolio</span>
                <a href="#" class="btn-view-port">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        portfolioGrid.appendChild(card);
    });
}

// Event Listeners for Filters
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        renderPortfolio(filterValue);
    });
});

// Variabel global untuk navigasi modal
let currentPortfolioImages = [];
let currentImgIndex = 0;

function openPortfolioLightbox(index, filteredData) {
    const item = filteredData[index];
    currentPortfolioImages = item.images;
    currentImgIndex = 0;
    
    showPortfolioImage();
    document.getElementById('cert-modal').style.display = "block";
}

function showPortfolioImage() {
    const container = document.getElementById('modal-image-container');
    const pageInfo = document.getElementById('page-info');
    
    // Pastikan path folder ini sesuai dengan lokasi file JPG Anda
    const imgPath = `images/portofolio/${currentPortfolioImages[currentImgIndex]}`;
    
    // Gunakan template literal untuk merender img
    container.innerHTML = `
        <img src="${imgPath}" 
             class="modal-content-img" 
             style="max-width:100%; height:auto;" 
             alt="Portfolio Image"
             onerror="this.src='https://via.placeholder.com/800x500?text=File+Tidak+Ditemukan'">
    `;
    
    pageInfo.innerText = `Halaman ${currentImgIndex + 1} dari ${currentPortfolioImages.length}`;
    
    // Gunakan display block/none agar konsisten dengan CSS modal sertifikat
    const pBtn = document.getElementById('prev-btn');
    const nBtn = document.getElementById('next-btn');
    
    pBtn.style.display = (currentImgIndex > 0) ? 'inline-block' : 'none';
    nBtn.style.display = (currentImgIndex < currentPortfolioImages.length - 1) ? 'inline-block' : 'none';
    
    // Memastikan visibility tetap terlihat jika display sudah inline
    pBtn.style.visibility = 'visible';
    nBtn.style.visibility = 'visible';
}

// Update fungsi render untuk menambahkan event click
function renderPortfolio(filter = 'all') {
    portfolioGrid.innerHTML = '';
    const filteredData = filter === 'all' ? shortClassData : shortClassData.filter(item => item.category === filter);

    filteredData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.style.cursor = 'pointer'; // Agar user tahu bisa diklik
        card.innerHTML = `
            <div class="card-image">
                <span class="card-badge">${item.category.toUpperCase()}</span>
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="card-content">
                <p class="platform">${item.platform}</p>
                <h4>${item.title}</h4>
            </div>
            <div class="card-footer">
                <span class="item-count"><i class="far fa-images"></i> ${item.images.length} Portfolio</span>
                <span class="btn-view-port">Open View <i class="fas fa-expand"></i></span>
            </div>
        `;
        
        // Event click untuk membuka modal
        card.addEventListener('click', () => openPortfolioLightbox(index, filteredData));
        portfolioGrid.appendChild(card);
    });
}

// Event Listener untuk tombol navigasi modal (Next/Prev)
document.getElementById('next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentImgIndex < currentPortfolioImages.length - 1) {
        currentImgIndex++;
        showPortfolioImage();
    }
});

document.getElementById('prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentImgIndex > 0) {
        currentImgIndex--;
        showPortfolioImage();
    }
});

// Close Modal saat klik tombol X atau luar gambar
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('cert-modal').style.display = "none";
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('cert-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
// Initial Render
renderPortfolio();
// ... (sisa kode JavaScript)
});