// Daftar Publikasi

class Publikasi extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
  <a href="https://st2013.bps.go.id/st2013esya/booklet/bt0000.pdf" target="_blank" class="publikasi">
    <div
      class="flex flex-col flex-initial bg-primary-hover rounded-lg w-44 h-64 sm:w-56 sm:h-72 sm:rounded-xl space-y-3 overflow-hidden transition hover:-translate-y-2 shadow-xl">
      <img class="object-cover" src="./img/publikasi1.png" alt="Potret Usaha Pertanian">
      <p class="font-semibold px-2">Potret Usaha Pertanian Indonesia Menurut Subsektor</p>
    </div>
  </a>
  <a href="https://st2013.bps.go.id/st2013esya/booklet/at0000.pdf" target="_blank" class="publikasi">
    <div
      class="flex flex-col flex-initial bg-primary-hover rounded-lg w-44 h-64 sm:w-56 sm:h-72 sm:rounded-xl space-y-3 overflow-hidden transition hover:-translate-y-2 shadow-xl">
      <img class="object-cover" src="./img/publikasi2.png" alt="Potret Usaha Pertanian">
      <p class="font-semibold px-2">Laporan Hasil ST2013 (Pencacahan Lengkap)</p>
    </div>
  </a>
  <a href="https://st2013.bps.go.id/st2013esya/booklet/st1100.pdf" target="_blank" class="publikasi">
    <div
      class="flex flex-col flex-initial bg-primary-hover rounded-lg w-44 h-64 sm:w-56 sm:h-72 sm:rounded-xl space-y-3 overflow-hidden transition hover:-translate-y-2 shadow-xl">
      <img class="object-cover" src="./img/publikasi3.png" alt="Potret Usaha Pertanian">
      <p class="font-semibold px-2">Booklet ST2013 Provinsi Aceh</p>
    </div>
  </a>
  <a href="https://st2013.bps.go.id/st2013esya/booklet/st1200.pdf" target="_blank" class="publikasi mb-4">
    <div
      class="flex flex-col flex-initial bg-primary-hover rounded-lg w-44 h-64 sm:w-56 sm:h-72 sm:rounded-xl space-y-3 overflow-hidden transition hover:-translate-y-2 shadow-xl">
      <img class="object-cover" src="./img/publikasi4.png" alt="Potret Usaha Pertanian">
      <p class="font-semibold px-2">Booklet ST2013 Provinsi Sumatera Utara</p>
    </div>
  </a>
        `
    }
}
customElements.define('my-publikasi', Publikasi)