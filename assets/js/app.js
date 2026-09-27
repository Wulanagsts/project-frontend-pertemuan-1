// Inisialisasi Data Manifestasi Pembelajaran Client-Side
const academicContext = {
  institution: "STIKOM PGRI Banyuwangi",
  studyProgram: "S1 Teknik Informatika",
  courseCode: "KK112104",
  courseName: "Dasar Pemrograman Frontend",
  targetBackendApi: "http://127.0.0.1:5000/api/v1/status",
  isClientReady: true
};

// Data profil mahasiswa
const studentProfile = {
  name: "Sindi Agustiya Wulandari",
  nim: "1125102198",
  prodi: "S1 Teknik Informatika",
  interest: "Desain Grafis"
}; false

// Event Listener saat DOM telah siap dirender
document.addEventListener('DOMContentLoaded', () => {
  console.log("=== Frontend Engineering Client Initialization ===");
  console.log(`Institusi   : ${academicContext.institution}`);
  console.log(`Modul MK    : ${academicContext.courseName} (${academicContext.courseCode})`);
  console.log(`Target API  : ${academicContext.targetBackendApi}`);
  console.log("--- Data Diri Mahasiswa ---");
  console.log(`Nama        : ${studentProfile.name}`);
  console.log(`NIM         : ${studentProfile.nim}`);
  console.log(`Prodi       : ${studentProfile.prodi}`);
  console.log(`Minat       : ${studentProfile.interest}`);

  // Isi elemen profil mahasiswa di halaman
  document.getElementById('student-name').textContent = studentProfile.name;
  document.getElementById('student-nim').textContent = studentProfile.nim;
  document.getElementById('student-prodi').textContent = studentProfile.prodi;
  document.getElementById('student-interest').textContent = studentProfile.interest;
  document.getElementById('endpoint-url').textContent = academicContext.targetBackendApi;

  // Verifikasi kesiapan client-side
  if (academicContext.isClientReady) {
    const statusElem = document.getElementById('status-text');
    if (statusElem) {
      statusElem.textContent = "Client UI Siap Terhubung ke Layanan Backend API STIKOM";
    }
  }
});