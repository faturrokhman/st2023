class ModalTabel1 extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <div
            class="w-full h-full bg-gray-900 bg-opacity-80 top-0 inset-0 fixed sticky-0 z-50 ">
            <div class="2xl:container  2xl:mx-auto py-36 px-4 md:px-28 flex justify-center items-center">
                <div
                    class="w-96 relative flex flex-col justify-center items-center bg-primary-hover text-text-color rounded-xl">
                    <div
                        class="bg-primary-hover flex items-center text-body-white w-full justify-center rounded-t-xl py-1 md:py-3 pr-4">
                        <h2 class="font-semibold md:text-lg text-center py-2">Hasil ST 2023</h2>
                        <button onclick="showHasil1(true)" class="absolute md:top-4 right-4 xl:right-8"
                            aria-label="close">
                            <span class="iconify text-xl" data-icon="heroicons-solid:x"></span>
                        </button>
                    </div>
                    <div
                        class="bg-body-white w-full text-primary-hover rounded-b-lg py-4 px-2 lg:px-6 text-sm lg:text-base">
                        <table class="w-full">
                            <tbody>
                                <tr>
                                    <td>
                                        Tanggal Rilis
                                    </td>
                                    <td class="font-medium">
                                        23 Januari 2024
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lampiran
                                    </td>
                                    <td>
                                        <a href="./download/example.pdf" target="_blank"
                                            download="Hasil Sensus ST2023">
                                            <div
                                                class="bg-primary-hover rounded-full text-body-white pl-4 pr-6 py-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer">
                                                <span class="iconify text-2xl"
                                                    data-icon="heroicons-solid:document-download"></span>
                                                <span class="ml-1 text-sm font-semibold">
                                                    Unduh
                                                </span>

                                            </div>
                                        </a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Abstrak</p>
                        <p class="text-text-color mt-1 text-justify">
                            Sensus Pertanian
                            2023 Mencatat Jumlah Rumah Tangga Usaha Tanaman Padi mencapai angka
                            76.872.728 rumah tangga. Dibandingkan Dengan Sensus Pertanian
                            Sebelumnya ...
                        </p>
                        <div class="relative mt-2 h-9">
                            <button onclick="showHasil1(true)"
                                class="absolute right-4 bottom-0 py-2 px-4 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-300 text-primary-hover transition">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        `
    }
}
customElements.define('modal-tabel1', ModalTabel1)

class ModalTabel2 extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <div
            class="w-full h-full bg-gray-900 bg-opacity-80 top-0 inset-0 fixed sticky-0 z-50">
            <div class="2xl:container  2xl:mx-auto py-36 px-4 md:px-28 flex justify-center items-center">
                <div
                    class="w-96 relative flex flex-col justify-center items-center bg-primary-hover text-text-color rounded-xl">
                    <div
                        class="bg-primary-hover flex items-center text-body-white w-full justify-center rounded-t-xl py-1 md:py-3 pr-4">
                        <h2 class="font-semibold md:text-lg text-center py-2">Hasil ST 2023 Provinsi Aceh</h2>
                        <button onclick="showHasil2(true)" class="absolute md:top-4 right-4 xl:right-8"
                            aria-label="close">
                            <span class="iconify text-xl" data-icon="heroicons-solid:x"></span>
                        </button>
                    </div>
                    <div
                        class="bg-body-white w-full text-primary-hover rounded-b-lg py-4 px-2 lg:px-6 text-sm lg:text-base">
                        <table class="w-full">
                            <tbody>
                                <tr>
                                    <td>
                                        Tanggal Rilis
                                    </td>
                                    <td class="font-medium">
                                        23 Januari 2024
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lampiran
                                    </td>
                                    <td>
                                        <a href="./download/example.pdf" target="_blank"
                                            download="Hasil Sensus ST2023">
                                            <div
                                                class="bg-primary-hover rounded-full text-body-white pl-4 pr-6 py-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer">
                                                <span class="iconify text-2xl"
                                                    data-icon="heroicons-solid:document-download"></span>
                                                <span class="ml-1 text-sm font-semibold">
                                                    Unduh
                                                </span>

                                            </div>
                                        </a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Abstrak</p>
                        <p class="text-text-color mt-1 text-justify">
                            Sensus Pertanian
                            2023 Mencatat Jumlah Rumah Tangga Usaha Tanaman Padi mencapai angka
                            76.872.728 rumah tangga. Dibandingkan Dengan Sensus Pertanian
                            Sebelumnya ...
                        </p>
                        <div class="relative mt-2 h-9">
                            <button onclick="showHasil2(true)"
                                class="absolute right-4 bottom-0 py-2 px-4 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-300 text-primary-hover transition">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        `
    }
}
customElements.define('modal-tabel2', ModalTabel2)

class ModalTabel3 extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <div
            class="w-full h-full bg-gray-900 bg-opacity-80 top-0 inset-0 fixed sticky-0 z-50">
            <div class="2xl:container  2xl:mx-auto py-36 px-4 md:px-28 flex justify-center items-center">
                <div
                    class="w-96 relative flex flex-col justify-center items-center bg-primary-hover text-text-color rounded-xl">
                    <div
                        class="bg-primary-hover flex items-center text-body-white w-full justify-center rounded-t-xl py-1 md:py-3 pr-4">
                        <h2 class="font-semibold md:text-lg text-center py-2 px-4">Hasil ST 2023 Provinsi
                            Sumatera Utara</h2>
                        <button onclick="showHasil3(true)" class="absolute md:top-4 right-4 xl:right-8"
                            aria-label="close">
                            <span class="iconify text-xl" data-icon="heroicons-solid:x"></span>
                        </button>
                    </div>
                    <div
                        class="bg-body-white w-full text-primary-hover rounded-b-lg py-4 px-2 lg:px-6 text-sm lg:text-base">
                        <table class="w-full">
                            <tbody>
                                <tr>
                                    <td>
                                        Tanggal Rilis
                                    </td>
                                    <td class="font-medium">
                                        23 Januari 2024
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lampiran
                                    </td>
                                    <td>
                                        <a href="./download/example.pdf" target="_blank"
                                            download="Hasil Sensus ST2023">
                                            <div
                                                class="bg-primary-hover rounded-full text-body-white pl-4 pr-6 py-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer">
                                                <span class="iconify text-2xl"
                                                    data-icon="heroicons-solid:document-download"></span>
                                                <span class="ml-1 text-sm font-semibold">
                                                    Unduh
                                                </span>

                                            </div>
                                        </a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Abstrak</p>
                        <p class="text-text-color mt-1 text-justify">
                            Sensus Pertanian
                            2023 Mencatat Jumlah Rumah Tangga Usaha Tanaman Padi mencapai angka
                            76.872.728 rumah tangga. Dibandingkan Dengan Sensus Pertanian
                            Sebelumnya ...
                        </p>
                        <div class="relative mt-2 h-9">
                            <button onclick="showHasil3(true)"
                                class="absolute right-4 bottom-0 py-2 px-4 rounded-md text-sm font-medium bg-gray-100 hover:bg-gray-300 text-primary-hover transition">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('modal-tabel3', ModalTabel3)