class InformasiUmum extends HTMLElement {
    constructor(){
        super();
        //const shadow = this.attachShadow({mode : 'open'});
        const text = this.getAttribute('data-text');
        this.innerHTML = `
        <div id="accordion-open-y" data-accordion="open" data-active-classes="bg-primary hover:bg-primary-hover text-body-white" data-inactive-classes="bg-primary-hover hover:bg-primary text-white" class="mb-4 rounded-lg border border-primary-hover overflow-hidden" data-aos="fade-up">
        <h2 id="accordion-open-heading-y">
            <button type="button"
                class="flex justify-between items-center p-2 md:px-5 w-full font-medium text-left border-b-0 hover:bg-primary-hover bg-primary text-body-white"
                data-accordion-target="#accordion-open-body-y" aria-expanded="true"
                aria-controls="accordion-open-body-y">
                <span class="flex items-center md:text-xl">Informasi Umum</span>
                <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </h2>
        <div id="accordion-open-body-y" class="" aria-labelledby="accordion-open-heading-y">
            <div class="p-2 md:px-5">
                <p class="mb-2 pr-2 text-text-color text-sm md:text-base text-justify whitespace-pre-line">Subsektor tanaman pangan meliputi tanaman padi (gabah kering giling), jagung (pipilan kering), kedelai (biji kering), kacang tanah (biji kering), kacang hijau (biji kering), ubi kayu (umbi basah), dan ubi jalar (umbi basah). Sumber data yang utama digunakan dalam pengumpulan data tanaman pangan di Indonesia adalah melalui kegiatan Survei Pertanian (SP) and Survei Ubinan.

                  Informasi yang berkaitan dengan luas tanam, luas rusak (puso), dan luas panen dikumpulkan melalui Survei Pertanian yang dilakukan oleh petugas dari Dinas Pertanian. Ada dua jenis kuesioner yang digunakan: SP-PADI untuk mengumpulkan informasi tentang luas tanaman padi, dan SP-PALAWIJA untuk mengumpulkan informasi tentang luas tanaman palawija. Informasi ini dikumpulkan bulanan dari setiap kecamatan di Indonesia. Sementara itu, data produktivitas dikumpulkan dari Survei Ubinan yang dilakukan oleh petugas dari Dinas Pertanian and Koordinator Statistik Kecamatan. Waktu pelaksanaan Survei Ubinan disesuaikan dengan saat panen. Kuesioner yang digunakan untuk Survei Ubinan dinamakan SUB-S. Dari luas panen dan produktivitas yang didapat, dapat dikalikan untuk mendapatkan volume produksi padi dan palawija.</p>
            </div>
        </div>
      </div>
        `
    }
}