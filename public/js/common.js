// Common Component di semua Halaman

// Logo di atas
class Logo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="flex justify-between md:text-lg mx-5 sm:mx-10">
          <a href="./index.html">
              <div class="flex justify-start transition">
                  <img src="./img/bps.png" alt="Logo BPS" class="w-8">
                  <p class="ml-2 font-bold italic uppercase">Badan Pusat Statistik</p>
              </div>
          </a>
          <div class="hidden sm:block transition">
              <div class="flex justify-end">
                  <img src="./img/st2023.png" alt="Logo ST2023" class="w-24">
              </div>
          </div>
        </div>
        `
    }
}
customElements.define('my-logo', Logo)

// Pencarian dan Button Lokasi
class PencarianLokasi extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="flex px-0 xss:justify-start items-center justify-between">
            <div class="w-full py-0 transition">
                <form action="./pencarian.html">
                    <input type="search" name="cari"
                        class="rounded w-full py-1 text-primary-hover text-sm border-slate-500 focus:ring-emerald-200 focus:border-emerald-200 border"
                        placeholder="Cari...">
                </form>
            </div>
            <div class="ml-5 items-center transition">
                <div class="flex">
                    <button onclick="showLocation(true)" class="flex items-center">
                        <span class="iconify text-2xl" data-icon="heroicons-solid:location-marker"></span>
                        <span
                            class="ml-1 uppercase text-base md:text-base hidden xss:block hover:underline">
                            Indonesia</span>
                    </button>
                </div>
            </div>
          </div>
        `
    }
}
customElements.define('pencarian-lokasi', PencarianLokasi)
// Modal Lokasi
class ModalLokasi extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <!-- Modal Lokasi -->
        <div class="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
        <div
            class="w-96 md:w-auto relative flex flex-col justify-center items-center bg-body-white text-text-color rounded-xl py-4 px-4 md:px-10 xl:py-8 xl:px-12">
            <h1 class="text-base font-medium">
                Ubah Wilayah
            </h1>
            <form action="./belumtersedia.html" class="py-4 px-2">
                <label for="wilayah" class="text-sm font-normal">Pilih Wilayah :</label>
                <select name="wilayah" id="wilayah" class="w-full rounded-md mb-3">
                    <option value="indonesia">Indonesia</option>
                    <option value="aceh">Provinsi Aceh</option>
                    <option value="sumut">Provinsi Sumatera Utara</option>
                    <option value="sumbar">Provinsi Sumatera Barat</option>
                </select>
                <div class="text-center">
                    <input type="submit" value="Ubah"
                        class="bg-primary-hover py-2 px-4 rounded-md text-body-white text-sm font-medium border-2 border-primary-hover hover:bg-body-white hover:text-primary-hover transition">
                </div>

            </form>
            <button onclick="showLocation(true)" class="absolute top-4 right-4 xl:right-8" aria-label="close">
                <span class="iconify text-xl" data-icon="heroicons-solid:x"></span>
            </button>
        </div>
        </div>                
        `
    }
}
customElements.define('modal-lokasi', ModalLokasi)

// Tombol Up ke Atas
class TopButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <button onclick="topFunction()" id="onTopBtn" data-tooltip-target="up" data-tooltip-placement="left"
            class="fixed bottom-16 sm:bottom-20 md:bottom-5 right-4 md:right-8 w-10 h-10 p-1 cursor-pointer rounded-full border border-primary-hover focus:outline-none z-1 bg-body-white items-center">
            <span class="iconify text-primary-hover mx-auto text-3xl" data-icon="heroicons-solid:chevron-up"></span>
            <div id="up" role="tooltip"
                class="inline-block absolute invisible z-10 py-1 px-2 text-sm font-medium text-body-white bg-text-color rounded-lg opacity-0 transition-opacity duration-300 tooltip w-max">
                Kembali ke atas
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </button>
        `
    }
}
customElements.define('my-topbutton', TopButton)

// FAQ
class FAQ extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Tombol FAQ -->
    <button onclick="showFAQ(true)" id="faq" data-tooltip-target="faqq" data-tooltip-placement="left"
    class="fixed bottom-28 sm:bottom-32 md:bottom-16 right-4 md:right-8 w-10 h-10 p-1 cursor-pointer rounded-full border border-primary-hover focus:outline-none z-1 bg-body-white items-center">
    <span class="iconify text-primary-hover mx-auto text-3xl" data-icon="bi:question-lg"></span>
    <div id="faqq" role="tooltip"
        class="inline-block absolute invisible z-10 py-1 px-2 text-sm font-medium text-body-white bg-text-color rounded-lg opacity-0 transition-opacity duration-300 tooltip w-max">
        FAQ
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    </button>
        `
    }
}
customElements.define('my-faq', FAQ)
// Modal FAQ
class ModalFAQ extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <!-- Modal FAQ -->
        <div class="2xl:container 2xl:mx-auto py-10 px-4 sm:px-10 md:px-28 flex justify-center items-center">
        <div
            class="w-auto relative flex flex-col justify-center items-center bg-primary-hover text-text-color rounded-xl">
            <div
                class="bg-primary-hover flex items-center text-body-white w-full justify-center rounded-t-xl py-3 pr-4">
                <h2 class="ml-4 font-semibold md:text-lg">Daftar FAQ</h2>
                <button onclick="showFAQ(true)" class="absolute md:top-4 right-4 xl:right-8" aria-label="close">
                    <span class="iconify text-xl" data-icon="heroicons-solid:x"></span>
                </button>
            </div>
            <div
                class="bg-body-white w-fit max-w-3xl h-[450px] text-primary-hover rounded-b-lg overflow-auto touch-pan-x touch-pan-y scrollbar-thin scrollbar-thumb-primary-hover scrollbar-track-emerald-600 transition-all">
                <div id="accordion-open" data-accordion="open">
                    <h2 id="accordion-open-heading-1">
                        <button type="button"
                            class="flex justify-between items-center p-2 md:px-5 w-full font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-gray-900"
                            data-accordion-target="#accordion-open-body-1" aria-expanded="true"
                            aria-controls="accordion-open-body-1">
                            <span class="flex items-center">Apa itu Sensus Pertanian 2023 (ST2023)?</span>
                            <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-open-body-1" class="" aria-labelledby="accordion-open-heading-1">
                        <div class="p-2 md:px-5 border border-b-0 border-gray-200">
                            <p class="mb-2 pr-2 text-text-body text-sm text-justify">Sensus Pertanian 2023
                                (ST2023) merupakan Sensus Pertanian ketujuh yang dilakukan oleh Badan Pusat
                                Statistik. Sensus Pertanian sebelumnya dilaksanakan pada tahun 1963, 1973, 1983,
                                1993, 2003, dan 2013. Sensus Pertanian 2023 merujuk pada World Programme for The
                                Census of Agriculture 2020 yang dibuat oleh Food and Agriculture Organization of
                                the United Nations (FAO).</p>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-2">
                        <button type="button"
                            class="flex justify-between items-center p-2 md:px-5 w-full font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-gray-900"
                            data-accordion-target="#accordion-open-body-2" aria-expanded="true"
                            aria-controls="accordion-open-body-2">
                            <span class="flex items-center">Apa tujuan dilaksanakannya ST2023?</span>
                            <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-open-body-2" class="" aria-labelledby="accordion-open-heading-2">
                        <div class="p-2 md:px-5 border border-b-0 border-gray-200">
                            <ol class="mb-2 pl-4 pr-2 text-text-body text-sm text-justify list-decimal">
                                <li>Menyediakan data struktur pertanian, terutama untuk unit-unit administrasi
                                    terkecil</li>
                                <li>Menyediakan data yang dapat digunakan sebagai tolok ukur statistik pertanian
                                    saat ini</li>
                                <li>Menyediakan kerangka sampel untuk survei pertanian lanjutan</li>
                            </ol>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-3">
                        <button type="button"
                            class="flex justify-between items-center p-2 md:px-5 w-full font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-gray-900"
                            data-accordion-target="#accordion-open-body-3" aria-expanded="true"
                            aria-controls="accordion-open-body-3">
                            <span class="flex items-center">Apa dasar hukum pelaksanaan ST2023?</span>
                            <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-open-body-3" class="" aria-labelledby="accordion-open-heading-3">
                        <div class="p-2 md:px-5 border border-b-0 border-gray-200">
                            <p class="mb-1 pr-2 text-text-body text-sm text-justify">Dasar hukum pelaksanaan
                                ST2023 adalah sebagai berikut :
                            </p>
                            <ol class="mb-2 pl-4 pr-2 text-text-body text-sm text-justify list-decimal">
                                <li>UU No. 16 Tahun 1997 tentang Statistik</li>
                                <li>PP No. 51 Tahun 1999 tentang Penyelenggaraan Statistik</li>
                            </ol>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-4">
                        <button type="button"
                            class="flex justify-between items-center p-2 md:px-5 w-full font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-gray-900"
                            data-accordion-target="#accordion-open-body-4" aria-expanded="true"
                            aria-controls="accordion-open-body-4">
                            <span class="flex items-center">Kapan ST2023 dilaksanakan?</span>
                            <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-open-body-4" class="" aria-labelledby="accordion-open-heading-4">
                        <div class="p-2 md:px-5 border border-b-0 border-gray-200">
                            <p class="mb-2 pr-2 text-text-body text-sm text-justify">Pencacahan lengkap ST2023
                                akan dilaksanakan pada 1-31 Mei 2023 dimana akan dilakukan pendataan oleh
                                petugas menggunakan Paper Assisted Personal Interviewing (PAPI) dan Computer
                                Assisted Personal Interviewing (CAPI) ataupun pendataan mandiri melalui Computer
                                Aided Web Interviewing (CAWI).
                            </p>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-5">
                        <button type="button"
                            class="flex justify-between items-center p-2 md:px-5 w-full font-medium text-left border border-b-0 border-gray-200 focus:ring-5 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-gray-900"
                            data-accordion-target="#accordion-open-body-5" aria-expanded="true"
                            aria-controls="accordion-open-body-5">
                            <span class="flex items-center">Mengapa ST2023 penting?</span>
                            <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-open-body-5" class="" aria-labelledby="accordion-open-heading-5">
                        <div class="p-2 md:px-5 border border-b-0 border-gray-200">
                            <p class="mb-2 pr-2 text-text-body text-sm text-justify">Sensus Pertanian 2023
                                dilaksanakan untuk mendapatkan data statistik pertanian yang lengkap dan akurat
                                untuk bahan perencanaan dan evaluasi hasil-hasil pembangunan khususnya di sektor
                                pertanian. Selain itu, ST2023 juga menjadi langkah awal pemerintah untuk
                                mewujudkan kedaulatan pangan dan kesejahteraan petani
                            </p>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-6">
                        <button type="button"
                            class="flex justify-between items-center p-2 md:px-5 w-full font-medium text-left border border-b-0 border-gray-200 focus:ring-6 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-gray-900"
                            data-accordion-target="#accordion-open-body-6" aria-expanded="true"
                            aria-controls="accordion-open-body-6">
                            <span class="flex items-center">Bagaimana metode pelaksanaan ST2023?</span>
                            <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-open-body-6" class="" aria-labelledby="accordion-open-heading-6">
                        <div class="p-2 md:px-5 border border-b-0 border-gray-200">
                            <p class="mb-2 pr-2 text-text-body text-sm text-justify">Pelaksanaan ST2023 dengan
                                menanyakan secara langsung ke responden dari rumah ke rumah (door-to-door) untuk
                                pendataan di wilayah konsentrasi, selain itu dilakukan dengan hanya mengunjungi
                                responden yang menjadi target pendataan ST2023 berdasarkan informasi yang
                                diperoleh dari kunjungan ke narasumber misalnya ketua SLS, ketua kelompok tani,
                                dll (snowballing) untuk pendataan di wilayah nonkonsentrasi.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
        `
    }
}
customElements.define('modal-faq', ModalFAQ)

class Tes extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        
        `
    }
}
customElements.define('my-tes', Tes)