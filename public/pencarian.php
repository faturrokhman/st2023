<!DOCTYPE html>
<html lang="id" class="">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
    <title>Laman Belum Tersedia</title>
    <link rel="icon" href="./img/bps.png">
</head>

<body class="bg-primary">
    <header id="page-header">
        <div class="navbar bg-primary text-body-white w-full h-min p-3 pb-0 sticky top-0 shadow-lg" id="navbar">
            <div class="max-w-6xl mx-auto">
                <!-- Logo -->
                <my-logo></my-logo>
                <!-- Search Bar dan Lokasi dan Navbar Top -->
                <div class="flex justify-between mx-5 sm:mx-10 mr-2 pt-1 pb-3">
                    <!-- Pencarian dan Lokasi -->
                    <pencarian-lokasi></pencarian-lokasi>
                    <modal-lokasi id="lokasi"
                        class="w-full h-full bg-gray-900 bg-opacity-80 top-0 inset-0 fixed sticky-0 hidden">
                    </modal-lokasi>
                    <script>
                        let lokasi = document.getElementById("lokasi");
                        const showLocation = (flag) => {
                            lokasi.classList.toggle("hidden");
                        };
                    </script>
                    <!-- Navbar Top -->
                    <nav class="w-min hidden md:block ml-2">
                        <ul class="w-full flex space-x-3 justify-between text-xs lg:text-sm font-medium uppercase">
                            <li
                                class="w-full py-1 px-2 lg:px-4 bg-primary-hover rounded-md border-2 border-primary-hover transition duration-300 hover:bg-body-white hover:text-primary-hover">
                                <a href="./index.html">Beranda</a>
                            </li>
                            <li
                                class="w-full py-1 px-2 lg:px-4 bg-primary-hover rounded-md border-2 border-primary-hover transition duration-300 hover:bg-body-white hover:text-primary-hover">
                                <a href="./subsektor.html" class="">
                                    Subsektor
                                </a>
                            </li>
                            <li
                                class="w-full dropdown py-1 px-2 lg:px-4 bg-primary-hover rounded-md border-2 border-primary-hover transition duration-300 hover:bg-body-white hover:text-primary-hover">
                                <a href="#" class="">
                                    Tentang
                                </a>
                                <div id="menu_tentang"
                                    class="dropdown-content w-max text-xs top-full left-0 rounded-md border border-body-white">
                                    <a href="./metadata.html" class="rounded-t-md">Metadata</a>
                                    <a href="./galeri.html" class="rounded-b-md">Galeri</a>
                                </div>
                            </li>
                            <li
                                class="w-full dropdown py-1 px-2 lg:px-4 bg-primary-hover rounded-md border-2 border-primary-hover transition duration-300 hover:bg-body-white hover:text-primary-hover">
                                <a href="#" class="">
                                    Produk
                                </a>
                                <div id="menu_produk"
                                    class="dropdown-content w-max text-xs top-full right-0 lg:left-0 rounded-md border border-body-white">
                                    <a href="./brs.html" class="rounded-t-md">Berita Resmi Statistik</a>
                                    <a href="./publikasi.html" class="rounded-b-md">Publikasi</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    </header>
    <main class="bg-primary mt-10 pt-10 w-full">
        <!-- Content -->
        <?php
        $cari = $_REQUEST['cari'];
        ?>
        <div class="max-w-6xl mx-auto items-center text-center p-5 space-x-4 flex">
            <img src="./img/pencarian.png" alt="Pencarian" class="mx-auto w-1/2" data-aos="zoom-in">
            <h1>Hasil Pencarian '<?php $item ?>'</h1>
        </div>
        <!-- Tab -->
        <div class="flex flex-wrap max-w-6xl mx-auto md:px-10" id="tabs-id">
            <div class="w-full">
                <!-- Tab List -->
                <ul
                    class="flex items-center mb-0 list-none pt-3 pb-4 flex-row overflow-y-auto space-x-2 whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-rounded text-xs md:text-sm font-semibold uppercase">
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-body-white text-primary-hover hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-brs')">
                            Berita Resmi Statistik
                        </a>
                    </li>
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-primary-hover text-body-white hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-publikasi')">
                            publikasi
                        </a>
                    </li>
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-primary-hover text-body-white hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-infografis')">
                            infografis
                        </a>
                    </li>
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-primary-hover text-body-white hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-leaflet')">
                            leaflet
                        </a>
                    </li>
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-primary-hover text-body-white hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-dokumen-terkait')">
                            dokumen terkait
                        </a>
                    </li>
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-primary-hover text-body-white hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-tabel')">
                            tabel
                        </a>
                    </li>
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-primary-hover text-body-white hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-foto')">
                            foto
                        </a>
                    </li>
                    <li class="-mb-px flex-auto text-center cursor-pointer">
                        <a class=" px-3 py-2 shadow-lg rounded block bg-primary-hover text-body-white hover:text-primary-hover hover:bg-body-white"
                            onclick="changeAtiveTab(event,'tab-video')">
                            video
                        </a>
                    </li>
                </ul>
                <!-- Content Tab -->
                <div
                    class="relative flex flex-col min-w-0 break-words bg-body-white w-full mb-6 shadow-lg rounded text-primary-hover">
                    <div class="px-4 py-5 flex-auto">
                        <div class="tab-content tab-space">
                            <div class="block" id="tab-brs">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2">
                                    Berita Resmi Statistik
                                </h1>
                                <div
                                    class="overflow-auto max-w-5xl mx-auto rounded-md border bg-body-white border-text-color text-text-color scrollbar-thin scrollbar-thumb-text-body scrollbar-rounded pt-1 pb-2 px-2">
                                    <table class="w-full whitespace-nowrap text-sm divide-y divide-text-color">
                                        <thead class="px-1">
                                            <tr class="items-center divide-x divide-text-color/30">
                                                <th class="px-2 py-1">Judul</th>
                                                <th class="px-2 py-1">Wilayah</th>
                                                <th class="px-2 py-1">Abstrak</th>
                                                <th class="px-2 py-1">Tanggal Rilis</th>
                                                <th class="px-2 py-1">Lampiran</th>
                                            </tr>
                                        </thead>
                                        <tbody class="px-1 align-top whitespace-normal">
                                            <tr class="bg-slate-200 hover:bg-slate-300 divide-x divide-text-color/30">
                                                <td class="px-1 py-2">Hasil Sensus Pertanian 2023</td>
                                                <td class="px-1 py-2">Indonesia</td>
                                                <td class="px-1 py-2 whitespace-normal min-w-[300px]">Sensus Pertanian
                                                    2023 Mencatat Jumlah Rumah Tangga Usaha Tanaman Padi mencapai angka
                                                    76.872.728 rumah tangga. Dibandingkan Dengan Sensus Pertanian
                                                    Sebelumnya ...</td>
                                                <td class="px-1 py-2">23 Januari 2024</td>
                                                <td>
                                                    <a href="./Hasil Sensus ST2023 (example).pdf" target="_blank"
                                                        download="Hasil Sensus ST2023">
                                                        <div
                                                            class="mx-auto bg-primary-hover rounded-full text-body-white px-1 sm:pl-4 sm:pr-6 py-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer transition-all">
                                                            <span class="iconify text-2xl"
                                                                data-icon="heroicons-solid:document-download"></span>
                                                            <span class="ml-1 text-sm font-semibold hidden sm:block">
                                                                Unduh
                                                            </span>
                                                        </div>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="hidden" id="tab-publikasi">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2">
                                    Publikasi
                                </h1>
                            </div>
                            <div class="hidden" id="tab-infografis">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2 capitalize">
                                    infografis
                                </h1>
                            </div>
                            <div class="hidden" id="tab-leaflet">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2 capitalize">
                                    leaflet
                                </h1>
                            </div>
                            <div class="hidden" id="tab-dokumen-terkait">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2 capitalize">
                                    dokumen terkait
                                </h1>
                            </div>
                            <div class="hidden" id="tab-tabel">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2 capitalize">
                                    tabel
                                </h1>
                            </div>
                            <div class="hidden" id="tab-foto">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2 capitalize">
                                    foto
                                </h1>
                            </div>
                            <div class="hidden" id="tab-video">
                                <h1 class="font-bold md:text-lg max-w-5xl mx-auto mb-2 capitalize">
                                    video
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navigasi Bottom (Mobile) -->
        <nav
            class="fixed bottom-0 inset-x-0 max-w-6xl mx-auto h-min p-0 my-0 bg-primary text-body-white text-xs font-medium uppercase border-t-2 md:hidden">
            <ul class="flex justify-between">
                <li class="w-full">
                    <a href="./index.html"
                        class="w-full block px-2 py-4 text-center transition duration-300 hover:bg-body-white hover:text-primary-hover font-bold">
                        <span class="iconify w-6 h-6 mx-auto" data-icon="heroicons-outline:home"></span>
                        <span class="hidden sm:block">
                            Beranda
                        </span>
                    </a>
                </li>
                <li class="w-full">
                    <a href="./subsektor.html"
                        class="w-full block px-2 py-4 text-center hover:bg-body-white hover:text-primary-hover transition duration-300">
                        <span class="iconify w-6 h-6 mx-auto" data-icon="heroicons-outline:server"></span>
                        <span class="hidden sm:block">
                            subsektor
                        </span>
                    </a>
                </li>
                <li class="w-full">
                    <a href="./metadata.html"
                        class="w-full block px-2 py-4 text-center hover:bg-body-white hover:text-primary-hover transition duration-300">
                        <span class="iconify w-6 h-6 mx-auto" data-icon="heroicons-outline:database"></span>
                        <span class="hidden sm:block">
                            metadata
                        </span>
                    </a>
                </li>
                <li class="w-full">
                    <a href="./galeri.html"
                        class="w-full block px-2 py-4 text-center hover:bg-body-white hover:text-primary-hover transition duration-300">
                        <span class="iconify w-6 h-6 mx-auto" data-icon="heroicons-outline:photograph"></span>
                        <span class="hidden sm:block">
                            galeri
                        </span>
                    </a>
                </li>
                <li class="w-full">
                    <button id="produkButton" data-dropdown-toggle="produkDropdown"
                        class="w-full flex-row px-2 py-4 text-center hover:bg-body-white hover:text-primary-hover transition duration-300"
                        type="button">
                        <span class="iconify w-6 h-6 mx-auto" data-icon="heroicons-outline:chart-bar"></span>
                        <span class="hidden uppercase font-medium sm:block">
                            Produk
                        </span>
                    </button>
                    <div id="produkDropdown"
                        class="hidden w-1/2 sm:w-1/3 rounded-md dropup-content border border-body-white">
                        <ul class="" aria-labelledby="dropdownButton">
                            <li>
                                <a href="./brs.html" class="rounded-t-md">Berita Resmi Statistik</a>
                            </li>
                            <li>
                                <a href="./publikasi.html" class="rounded-b-md">Publikasi</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </main>
    <my-footer></my-footer>
</body>
<script src="./js/navbar.js"></script>
<script src="./js/upButton.js"></script>
<script src="./js/common.js"></script>
<script src="./js/footer.js"></script>
<script src="./js/tab.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    AOS.init({
        duration: 1200,
        once: false,
    });
</script>

</html>