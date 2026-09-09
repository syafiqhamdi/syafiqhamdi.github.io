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

      <div class="profile-photo-wrapper">
          <img src="${p.photo}" class="profile-photo" alt="${p.name}">
      </div>

      <div class="profile-badge">
          MAHASISWA TEKNIK ELEKTRO
      </div>

      <h1 class="profile-name">${p.name}</h1>

      <div class="contact">

          <div class="contact-item">
              ${iconMapPin()}
              <span>${p.location}</span>
          </div>

          <div class="contact-item">
              ${iconPhone()}
              <span>${p.phone}</span>
          </div>

          <div class="contact-item">
              ${iconMail()}
              <span>${p.email}</span>
          </div>

      </div>

      <a href="${p.cv}" download class="btn">
          Download Curriculum Vitae
      </a>

      <div class="social">

          <a href="${p.social.linkedin}" target="_blank">in</a>

          <a href="${p.social.instagram}" target="_blank">ig</a>

          <a href="${p.social.x}" target="_blank">X</a>

      </div>

  </div>
  `;
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

          <span>IPK ${s.gpa}</span>
          <span>${s.workExperience} Pengalaman</span>
          <span>${s.location}</span>

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

function renderExperience(filter = "all") {

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

  const data = sourceMap[filter] || sourceMap.all;

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

function renderCertificates(filter = "Semua"){

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

  const cards = visibleCertificates.map(cert => {
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
  }).join("");

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

    <div class="certificate-grid">
      ${cards}
    </div>
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
