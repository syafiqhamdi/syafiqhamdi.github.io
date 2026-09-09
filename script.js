// ===============================
// CV WEBSITE RENDERER
// ===============================

// Helper
const $ = (id) => document.getElementById(id);

// Render semua section
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderHero();
  renderSummary();
  renderExperience("all");
  renderProjects();
  renderEducation();
  renderSkills();
  renderCertificates();
});



// ===============================
// PROFILE
// ===============================

function renderProfile(){

  const p = profile.personal;

  document.getElementById("profile").innerHTML = `
  <div class="profile-card">

        <div class="profile-photo-wrapper profile-avatar-frame">
          <img src="${p.photo}" class="profile-photo profile-avatar" alt="${p.name}">
      </div>

        <div class="profile-badge profile-role">
          MAHASISWA TEKNIK ELEKTRO
      </div>

        <h1 class="profile-name profile-card-name">${p.name}</h1>

        <div class="contact profile-contact">

          <div class="contact-item profile-contact-item">
              ${iconMapPin()}
              <span>${p.location}</span>
          </div>

          <div class="contact-item profile-contact-item">
              ${iconPhone()}
              <span>${p.phone}</span>
          </div>

          <div class="contact-item profile-contact-item">
              ${iconMail()}
              <span>${p.email}</span>
          </div>

      </div>

      <a href="${p.cv}" download class="btn profile-cv">
          Download Curriculum Vitae
      </a>

      <div class="social profile-social">

          <a href="${p.social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            ${iconLinkedIn()}
          </a>

          <a href="${p.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            ${iconInstagram()}
          </a>

          <a href="${p.social.x}" target="_blank" rel="noopener noreferrer" aria-label="X">
            ${iconX()}
          </a>

      </div>

  </div>
  `;
}

function iconLinkedIn(){
return `
<svg viewBox="0 0 24 24" aria-hidden="true">
<path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.85c0-3.76-2-5.51-4.67-5.51-2.15 0-3.11 1.18-3.65 2.01V8.5H9.38V21h3.3v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.31V21H21v-7.15Z" fill="currentColor"/>
</svg>`;
}

function iconInstagram(){
return `
<svg viewBox="0 0 24 24" aria-hidden="true">
<rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="17.5" cy="6.6" r="1.1" fill="currentColor"/>
</svg>`;
}

function iconX(){
return `
<svg viewBox="0 0 24 24" aria-hidden="true">
<path d="M5 4h3.8l3.45 4.55L16.2 4H19l-5.45 6.25L19.5 20h-3.8l-3.85-5.08L7.2 20H4.4l5.8-6.78L5 4Zm3.3 1.8H8l8.25 12.4h.3L8.3 5.8Z" fill="currentColor"/>
</svg>`;
}

function iconMapPin(){
return `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
<path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11z"
stroke="#0F766E" stroke-width="2"/>
<circle cx="12" cy="10" r="2.5" fill="#0F766E"/>
</svg>`;
}

function iconPhone(){
return `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
<path d="M22 16.9v3a2 2 0 0 1-2.2 2
A19.8 19.8 0 0 1 3.1 5.2
2 2 0 0 1 5.1 3h3
a2 2 0 0 1 2 1.7l.5 3
a2 2 0 0 1-.6 1.8l-1.3 1.3
a16 16 0 0 0 6.2 6.2l1.3-1.3
a2 2 0 0 1 1.8-.6l3 .5
A2 2 0 0 1 22 16.9z"
stroke="#0F766E" stroke-width="1.8"
stroke-linecap="round"/>
</svg>`;
}

function iconMail(){
return `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
<rect x="3" y="5" width="18" height="14" rx="2"
stroke="#0F766E" stroke-width="2"/>
<path d="M3 7l9 6 9-6"
stroke="#0F766E" stroke-width="2"
stroke-linecap="round"/>
</svg>`;
}

function renderHero(){

  const p = profile.personal;
  const s = profile.stats;
  const experienceCounts = {
    work: profile.experience.length,
    organization: profile.organization.length,
    committee: profile.committee.length
  };

  document.getElementById("hero").innerHTML = `

    <div class="hero-banner">

      <div class="hero-text">

        <span class="hero-label">
          MAHASISWA TEKNIK ELEKTRO
        </span>

        <h1>${p.name}</h1>

        <p>
          Maintenance • Engineering • Graphic Design
        </p>

        <div class="hero-action">

          <a class="hero-btn" href="${p.cv}" download>
            Download CV
          </a>

          <a class="hero-outline"
             href="${p.social.linkedin}"
             target="_blank">
            LinkedIn
          </a>

        </div>

        <div class="hero-stat">

          <span>${experienceCounts.work} Pengalaman Kerja</span>
          <span>${experienceCounts.organization} Pengalaman Organisasi</span>
          <span>${experienceCounts.committee} Pengalaman Kepanitiaan</span>

        </div>

      </div>

    </div>

  `;

}

// ===============================
// SUMMARY
// ===============================

function renderSummary() {

  const s = profile.stats;

  document.getElementById("summary").innerHTML = `
    <div class="section-tag">Tentang Saya</div>

    <h2>Ringkasan</h2>

    <div class="summary-grid">

      <div class="summary-text">
        <p>${profile.summary}</p>
      </div>

      <div class="summary-info">

        <div class="info-card highlight">
          <span>IPK</span>
          <h3>${s.gpa}</h3>
        </div>

        <div class="info-row">

          <div class="info-card">
            <span>Kerja</span>
            <h3>${s.workExperience}</h3>
          </div>

          <div class="info-card">
            <span>Organisasi</span>
            <h3>${s.organizations}</h3>
          </div>

        </div>

        <div class="info-card">
          <span>Domisili</span>
          <h3>${s.location}</h3>
        </div>

      </div>

    </div>
  `;
}

// ===============================
// EXPERIENCE
// ===============================

function renderExperience(filter = "all", expanded = false) {

  const sourceMap = {
    all: [...profile.experience, ...profile.organization, ...profile.committee],
    work: profile.experience,
    org: profile.organization,
    committee: profile.committee
  };

  const titleMap = {
    all: "Semua Pengalaman",
    work: "Pengalaman Kerja",
    org: "Pengalaman Organisasi",
    committee: "Pengalaman Kepanitiaan"
  };

  const fullData = sourceMap[filter] || sourceMap.all;
  const isAll = filter === "all";
  const data = isAll && !expanded ? fullData.slice(0, 4) : fullData;

  const timeline = data.map(item => {

    const name = item.company || item.name;

    return `
      <div class="timeline-item">

        <div class="year">${item.period}</div>

        <div class="timeline-content">

          <h3>${name}</h3>

          <p class="role">${item.role}</p>

          <ul>
            ${item.achievements.map(a => `<li>${a}</li>`).join("")}
          </ul>

        </div>

      </div>
    `;

  }).join("");

  document.getElementById("experience").innerHTML = `

    <div class="section-tag">Pengalaman</div>

    <h2>${titleMap[filter] || titleMap.all}</h2>

    <div class="filter-group">

      <button
        class="filter-btn ${filter==="all"?"active":""}"
        onclick="renderExperience('all')">
        Semua
      </button>

      <button
        class="filter-btn ${filter==="work"?"active":""}"
        onclick="renderExperience('work')">
        Kerja
      </button>

      <button
        class="filter-btn ${filter==="org"?"active":""}"
        onclick="renderExperience('org')">
        Organisasi
      </button>

      <button
        class="filter-btn ${filter==="committee"?"active":""}"
        onclick="renderExperience('committee')">
        Kepanitiaan
      </button>

    </div>

    <div class="timeline">
      ${timeline}
    </div>

    ${isAll && fullData.length > 4 ? `
      <button class="experience-more" type="button" onclick="renderExperience('all', ${!expanded})">
        <span>${expanded ? "Tampilkan lebih sedikit" : "Selengkapnya"}</span>
        <span class="experience-more-icon" aria-hidden="true">${expanded ? "↑" : "↓"}</span>
      </button>
    ` : ""}

  `;

}

// ===============================
// PROJECTS
// ===============================

function renderProjects() {

  const projects = profile.projects || [];

  const cards = projects.map(project => `
    <div class="project-card">
      <div class="project-top">
        <span class="project-type">${project.type}</span>
        <span class="project-year">${project.year}</span>
      </div>

      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="project-tags">
        ${project.stack.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
    </div>
  `).join("");

  document.getElementById("projects").innerHTML = `
    <div class="section-tag">Project</div>

    <h2>Project yang Sudah Dibuat</h2>

    <div class="project-grid">
      ${cards}
    </div>
  `;
}

// ===============================
// EDUCATION
// ===============================

function renderEducation(){

  const edu = profile.education[0];

  document.getElementById("education").innerHTML = `
    <div class="section-tag">Pendidikan</div>

    <h2>Education</h2>

    <div class="edu-card">

      <div class="edu-icon">🎓</div>

      <div class="edu-content">

        <h3>${edu.institution}</h3>

        <p>${edu.major}</p>

        <span>${edu.period}</span>

      </div>

      <div class="edu-gpa">
        <small>IPK</small>
        <h2>${edu.gpa}</h2>
      </div>

    </div>
  `;

}

// ===============================
// SKILLS
// ===============================

function renderSkills(){

  const hard = profile.skills.hard.map(skill=>`
    <div class="chip hard">${skill}</div>
  `).join("");

  const soft = profile.skills.soft.map(skill=>`
    <div class="chip soft">${skill}</div>
  `).join("");

  document.getElementById("skills").innerHTML = `
    <div class="section-tag">Kompetensi</div>

    <h2>Skills</h2>

    <div class="skill-section">

      <h3>Hard Skill</h3>

      <div class="chip-grid">
        ${hard}
      </div>

    </div>

    <div class="skill-section">

      <h3>Soft Skill</h3>

      <div class="chip-grid">
        ${soft}
      </div>

    </div>
  `;

}

// ===============================
// CERTIFICATES
// ===============================

function renderCertificates(filter = "Semua", carouselIndex = 0){

  const certificates = profile.certificates || [];

  if(certificates.length === 0){

    $("certificate").innerHTML=`
      <div class="section-tag">Sertifikat</div>

      <h2>Certificates</h2>

      <p style="color:#64748B;">
        Sertifikat akan ditambahkan pada pembaruan berikutnya.
      </p>
    `;

    return;
  }

  const categories = ["Semua", ...new Set(certificates.map(cert => cert.category))];
  const visibleCertificates = filter === "Semua"
    ? certificates
    : certificates.filter(cert => cert.category === filter);

  const createCertificateCard = cert => {
    const isImage = [".png", ".jpg", ".jpeg", ".webp"].some(ext =>
      cert.file.toLowerCase().endsWith(ext)
    );

    return `
      <a class="certificate-card" href="${cert.file}" target="_blank" rel="noopener noreferrer">
        ${isImage
          ? `<img src="${cert.file}" alt="${cert.title}">`
          : `<div class="certificate-preview"><span>PDF</span></div>`}
        <div class="certificate-card-body">
          <span class="certificate-category">${cert.category}</span>
          <p>${cert.title}</p>
          <span class="certificate-link">Lihat sertifikat <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    `;
  };

  const cards = visibleCertificates.map(createCertificateCard).join("");
  const isCarousel = filter === "Semua";
  const isMobile = typeof window !== "undefined"
    && typeof window.matchMedia === "function"
    && window.matchMedia("(max-width: 600px)").matches;
  const carouselWindowSize = isMobile ? 1 : 3;
  const maxCarouselIndex = Math.max(0, visibleCertificates.length - carouselWindowSize);
  const activeCarouselIndex = Math.min(Math.max(carouselIndex, 0), maxCarouselIndex);
  const carouselCards = visibleCertificates
    .slice(activeCarouselIndex, activeCarouselIndex + carouselWindowSize)
    .map(createCertificateCard)
    .join("");

  $("certificate").innerHTML = `
    <div class="section-tag">Sertifikat</div>

    <div class="certificate-heading">
      <div>
        <h2>Certificates</h2>
        <p class="certificate-count">${certificates.length} dokumen tersusun dalam beberapa kategori</p>
      </div>
    </div>

    <div class="certificate-filters" role="tablist" aria-label="Filter sertifikat">
      ${categories.map(category => `
        <button class="certificate-filter ${filter === category ? "active" : ""}"
          type="button" onclick="renderCertificates('${category}')">
          ${category}
          <span>${category === "Semua" ? certificates.length : certificates.filter(cert => cert.category === category).length}</span>
        </button>
      `).join("")}
    </div>

    ${isCarousel ? `
      <div class="certificate-carousel">
        <button class="certificate-arrow" type="button"
          aria-label="Sertifikat sebelumnya"
          ${activeCarouselIndex === 0 ? "disabled" : ""}
          onclick="renderCertificates('Semua', ${activeCarouselIndex - 1})">
          <span aria-hidden="true">←</span>
        </button>

        <div class="certificate-viewport">
          <div class="certificate-track">
            ${carouselCards}
          </div>
        </div>

        <button class="certificate-arrow" type="button"
          aria-label="Sertifikat selanjutnya"
          ${activeCarouselIndex === maxCarouselIndex ? "disabled" : ""}
          onclick="renderCertificates('Semua', ${activeCarouselIndex + 1})">
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p class="certificate-carousel-status">${activeCarouselIndex + 1}-${Math.min(activeCarouselIndex + carouselWindowSize, visibleCertificates.length)} dari ${visibleCertificates.length} sertifikat</p>
    ` : `
      <div class="certificate-grid">
        ${cards}
      </div>
    `}
  `;

}

// ===================
// MOBILE MENU
// ===================

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{threshold:0.15});

document.querySelectorAll(".section").forEach(section=>{
  observer.observe(section);
});
