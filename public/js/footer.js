class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer class="bg-primary">
        <!-- Footer -->
        <div class="w-full border-t-2 border-primary-hover text-body-white">
            <div class="max-w-6xl mx-auto p-5 lg:px-2 mb-20 md:mb-5">
                <div class="flex flex-col sm:flex-row space-y-5 sm:space-y-2 sm:justify-between">
                    <div class="flex-col space-y-3">
                        <div class="flex justify-start">
                            <img src="./img/bps.png" alt="Logo BPS" class="w-8 h-min">
                            <p class="ml-2 font-bold italic uppercase">Badan Pusat Statistik</p>
                        </div>
                        <div class="items-center">
                            <img src="./img/st2023-putih.svg" alt="Logo Sensus Pertanian 2023" class="w-24 sm:w-32">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <p class="font-semibold uppercase">Kontak BPS</p>
                        <p class="text-sm">Jalan Dr. Sutomo 6-8 Jakarta, 10710 Indonesia</p>
                        <div class="flex">
                            <span class="iconify text-lg" data-icon="bxs:phone" style="color: white;"></span>
                            <p class="text-sm ml-2">(62-21) 3841195, 3842508, 3810291</p>
                        </div>
                        <div class="flex">
                            <span class="iconify" data-icon="fa:fax"></span>
                            <p class="text-sm ml-2">(62-21) 3857046</p>
                        </div>
                        <div class="flex">
                            <span class="iconify text-lg mt-0.5" data-icon="ic:baseline-email"></span>
                            <p class="text-sm ml-2">bpshq@bps.go.id</p>
                        </div>
                    </div>
                    <div class="">
                        <p class="font-semibold uppercase mb-2">Kontak Markas Besar ST2023</p>
                        <div class="flex">
                            <span class="iconify text-lg mt-0.5" data-icon="ic:baseline-email"></span>
                            <p class="text-sm ml-2">st2023@bps.go.id</p>
                        </div>
                        <div class="mt-5">
                            <p class="font-semibold mb-2">Media Sosial BPS</p>
                            <div class="flex">
                                <ul class="space-x-2 flex">
                                    <li>
                                        <a href="https://instagram.com/bps_statistics" target="_blank"
                                            data-tooltip-target="ig">
                                            <span class="iconify text-2xl sm:text-3xl"
                                                data-icon="ant-design:instagram-filled"></span>
                                        </a>
                                        <div id="ig" role="tooltip"
                                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-body-white bg-primary-hover rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                                            bps_statistics
                                            <div class="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/bps_statistics" target="_blank"
                                            data-tooltip-target="ig">
                                            <span class="iconify text-2xl sm:text-3xl"
                                                data-icon="ant-design:twitter-outlined"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/bpsstatistics" target="_blank"
                                            data-tooltip-target="fb">
                                            <span class="iconify text-2xl sm:text-3xl"
                                                data-icon="ant-design:facebook-filled"></span>
                                        </a>
                                        <div id="fb" role="tooltip"
                                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-body-white bg-primary-hover rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                                            Badan Pusat Statistik
                                            <div class="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/c/BPSStatistics/videos target=" _blank"
                                            data-tooltip-target="fb">
                                            <span class="iconify text-2xl sm:text-3xl"
                                                data-icon="ant-design:youtube-filled"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text-sm space-y-2 hidden md:block">
                        <p class="text-base font-semibold uppercase">produk statistik</p>
                        <ul class="space-y-2">
                            <li>
                                <a href="./brs.html">Berita Resmi Statistik</a>
                            </li>
                            <li>
                                <a href="./publikasi.html">Publikasi</a>
                            </li>
                        </ul>


                    </div>
                </div>

                <p class="text-xs text-center my-2">Copyright &copy; 2022 - Faturrokhman (221810300)</br>Diseminasi
                    Sensus Pertanian 2023</p>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('my-footer', Footer)