class Kisah extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <div class="2xl:container 2xl:mx-auto py-24 px-4 md:px-28 flex justify-center items-center">
            <div
                class="w-auto max-w-3xl relative flex flex-col items-center bg-white text-text-color rounded-xl py-4 px-4 md:px-10 xl:py-8 xl:px-12 h-[450px] overflow-auto touch-pan-x touch-pan-y scrollbar-thin scrollbar-thumb-primary-hover scrollbar-track-emerald-600 transition-all space-y-4">
                <img src="./img/kisah.webp" loading="lazy" alt="Kisah Sensus" class="w-48 md:w-64 lg:w-80 rounded-lg shadow-lg">
                <div class="leading-none lg:leading-5 space-y-1">
                    <h3 class="font-medium lg:text-lg text-center">Awal Sensus Pertanian 2023 (ST2023) Dengan Pemutakhiran Kerangka Geospasial Dan Muatan Wilkerstat</h3>
                    <div class="flex gap-2 justify-center">
                        <span class="iconify text-sm" data-icon="heroicons-outline:calendar"></span>
                        <p class="text-xs">31 Maret 2022</p>
                    </div>
                    <p class="font-light text-sm text-justify">Sensus Pertanian 2023 (ST2023) Akan Dilaksanakan Kembali Oleh BPS Pada Tahun 2023. Salah Satu Upaya Dalam Mencapai Data ST2023 Yang Berkualitas Adalah Penyediaan Kerangka Induk Wilayah Kerja Statistik (Wilkerstat) Yang Mutakhir. Oleh Karenanya BPS Di Tahun 2022 Ini Melaksanakan Pemutakhiran Kerangka Induk Sebagai Dasar Perencanaan Dalam Pelaksanaan ST2023. Kerangka Induk Yang Dibangun Tidak Hanya Pada Muatan Wilayah Kerja Statistik (Wilkerstat) Saja, Tetapi Juga Terkait Penyusunan Kerangka Geospasial Lahan Pertanian.Agar Dapat Dimanfaatkan Secara Lebih Luas Untuk Berbagai Kebutuhan Statistik Pertanian. Sebagaimana Direkomendasikan Oleh Food And Agriculture Organization (FAO), Penyusunan Peta Klasifikasi Ini Dilakukan Dengan Memanfaatkan Teknologi Penginderaan Jauh (Remote Sensing) Yang Dipadukan Dengan Proses Pengambilan Titik Koordinat Dari Sampel Tutupan Lahan Untuk Memproduksi Statistik Pertanian Yang Lebih Efektif. Kegiatan Pemutakhiran Kerangka Geospasial Dan Muatan Wilayah Kerja Statistik Dilaksanakan Secara Serentak Di Seluruh Indonesia, Termasuk Di Wilayah Kabupaten Barito Timur. Kegiatan Pemetaan Di Lapangan Dilaksanakan Pada Bulan Maret 2022. Sebanyak 48 Orang Petugas Lapangan Yang Melaksanakan Kegiatan Pemetaan Lapangan Di Seluruh Desa/Kelurahan Di Wilayah Barito Timur. Berbagai Tantangan Dihadapi Oleh Petugas Selama Di Lapangan, Khususnya Kondisi Alam. Namun Hal Ini Tidak Menyurutkan Semangat Mereka Untuk Menghasilkan Data Yang Berkualitas.</p>
                </div>
                <div>
                <h3 class="text-center text-sm font-medium">Bagikan ke :</h3>
                <bagikan-ke class="text-primary-hover"></bagikan-ke>  
                </div>
                 
                <button onclick="show_kisah(true)"
                    class="absolute top-2 right-4 xl:right-8" aria-label="close">
                    <span class="iconify text-2xl" data-icon="heroicons-solid:x"></span>
                </button>
                <div class="text-center mb-2 px-4">
                    <button onclick="show_kisah(true)" class="w-full bg-primary-hover py-2 px-4 rounded-md text-body-white text-sm font-medium border-2 border-primary-hover hover:bg-body-white hover:text-primary-hover transition cursor-pointer">Tutup</button>
                </div>                
            </div>
        </div>
        `
    }
}
customElements.define('kisah-sensus', Kisah)

class TabKisah extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <div id="kisah" class="bg-white rounded-lg shadow-md hover:shadow-xl items-center p-2 cursor-pointer flex sm:flex-col lg:flex-row gap-4" onclick="show_kisah(true)">
            <img src="./img/kisah.webp" loading="lazy" alt="Kisah Sensus" class="w-48 rounded-lg">
            <div class="leading-none lg:leading-5 space-y-1">
                <h3 class="font-medium text-sm lg:text-base">Awal Sensus Pertanian 2023 (ST2023) Dengan Pemutakhiran Kerangka Geospasial Dan Muatan Wilkerstat</h3>
                <div class="flex gap-2">
                    <span class="iconify text-sm" data-icon="heroicons-outline:calendar"></span>
                    <p class="text-xs">31 Maret 2022</p>
                </div>
                <p class="font-thin text-xs lg:text-sm">Sensus Pertanian 2023 (ST2023) Akan Dilaksanakan Kembali Oleh BPS Pada Tahun 2023. Salah Satu Upaya... </p>
            </div>  
        </div>
        `
    }
}
customElements.define('tab-kisah', TabKisah)