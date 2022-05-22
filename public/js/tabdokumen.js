class TabLeaflet extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <h1 class="text-lg font-bold md:text-2xl mb-2 md:mb-4 text-primary-hover">Leaflet & Buletin</h1>
        <!-- Table -->
        <div
            class="overflow-auto mb-4" data-aos="fade-up">
            <div class="rounded-md border bg-body-white border-text-color text-text-color scrollbar-thin scrollbar-thumb-text-body scrollbar-rounded pt-1 pb-2 px-2">
                <table class="w-full whitespace-nowrap divide-y divide-text-color md:px-2">
                <thead class="px-1">
                    <tr class="items-center divide-x divide-text-color/30">
                        <th class="px-2 py-1">Judul</th>
                        <th class="px-2 py-1">Tanggal</th>
                        <th class="px-2 py-1">File</th>
                        <th class="px-2 py-1">Bagikan</th>
                    </tr>
                </thead>
                <tbody class="px-1 align-top whitespace-normal divide-y divide-text-color/30">
                    <tr class="hover:bg-slate-300 divide-x divide-text-color/30">
                        <td class="px-1 py-2 font-semibold">Buletin ST2023 Edisi 1</td>
                        <td class="px-1 py-2">31 Desember 2021</td>
                        <td class="px-1 py-2">
                            <a href="javascript:void(0)" onclick="location.href='https://sensus.bps.go.id/st2023/download/?q=leaflet&doc=Buletin%20ST2023%20Edisi%2031%20Desember%202021'">
                                <div
                                    class="mx-auto bg-primary-hover rounded-full text-body-white sm:pl-4 sm:pr-6 p-2 sm:p-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer transition-all">
                                    <span class="iconify text-xl"
                                        data-icon="heroicons-solid:document-download"></span>
                                    <span class="ml-1 text-sm font-semibold hidden sm:block">
                                        Unduh
                                    </span>
                                </div>
                            </a>
                        </td>
                        <td class="px-1 py-2">
                            <bagikan-ke class="text-primary-hover"></bagikan-ke>
                        </td>
                    </tr>
                    <tr class="hover:bg-slate-300 divide-x divide-text-color/30">
                        <td class="px-1 py-2 font-semibold">Buletin ST2023 Edisi 2</td>
                        <td class="px-1 py-2">31 Januari 2022</td>
                        <td class="px-1 py-2">
                            <a href="javascript:void(0)" onclick="location.href='https://sensus.bps.go.id/st2023/download/?q=leaflet&doc=Buletin%20ST2023%20Edisi%2031%20Januari%202022'">
                                <div
                                    class="mx-auto bg-primary-hover rounded-full text-body-white sm:pl-4 sm:pr-6 p-2 sm:p-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer transition-all">
                                    <span class="iconify text-xl"
                                        data-icon="heroicons-solid:document-download"></span>
                                    <span class="ml-1 text-sm font-semibold hidden sm:block">
                                        Unduh
                                    </span>
                                </div>
                            </a>
                        </td>
                        <td class="px-1 py-2">
                            <bagikan-ke class="text-primary-hover"></bagikan-ke>
                        </td>
                    </tr>
                    <tr class="hover:bg-slate-300 divide-x divide-text-color/30">
                        <td class="px-1 py-2 font-semibold">Buletin ST2023 Edisi 3</td>
                        <td class="px-1 py-2">28 Februari 2022</td>
                        <td class="px-1 py-2">
                            <a href="javascript:void(0)" onclick="location.href='https://sensus.bps.go.id/st2023/download/?q=leaflet&doc=Buletin%20ST2023%20Edisi%2028%20Februari%202022'">
                                <div
                                    class="mx-auto bg-primary-hover rounded-full text-body-white sm:pl-4 sm:pr-6 p-2 sm:p-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer transition-all">
                                    <span class="iconify text-xl"
                                        data-icon="heroicons-solid:document-download"></span>
                                    <span class="ml-1 text-sm font-semibold hidden sm:block">
                                        Unduh
                                    </span>
                                </div>
                            </a>
                        </td>
                        <td class="px-1 py-2">
                            <bagikan-ke class="text-primary-hover"></bagikan-ke>
                        </td>
                    </tr>
                    <tr class="hover:bg-slate-300 divide-x divide-text-color/30">
                        <td class="px-1 py-2 font-semibold">Leaflet Sensus Pertanian 2023 (Trifold)</td>
                        <td class="px-1 py-2">30 April 2022</td>
                        <td class="px-1 py-2">
                            <a href="javascript:void(0)" onclick="location.href='https://sensus.bps.go.id/st2023/download/?q=leaflet&doc=Leaflet%20ST2023'">
                                <div
                                    class="mx-auto bg-primary-hover rounded-full text-body-white sm:pl-4 sm:pr-6 p-2 sm:p-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer transition-all">
                                    <span class="iconify text-xl"
                                        data-icon="heroicons-solid:document-download"></span>
                                    <span class="ml-1 text-sm font-semibold hidden sm:block">
                                        Unduh
                                    </span>
                                </div>
                            </a>
                        </td>
                        <td class="px-1 py-2">
                            <bagikan-ke class="text-primary-hover"></bagikan-ke>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        </div>
        `
    }
}
customElements.define('tab-leaflet', TabLeaflet)

class TabTerkait extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <h1 class="text-lg font-bold md:text-2xl mb-2 text-primary-hover">Dokumen Terkait
        </h1>
        <div
            class="overflow-auto mb-4" data-aos="fade-up">
            <div class="rounded-md border bg-body-white border-text-color text-text-color scrollbar-thin scrollbar-thumb-text-body scrollbar-rounded pt-1 pb-2 px-2">
                <table class="w-full whitespace-nowrap divide-y divide-text-color md:px-2">
                <thead class="px-1">
                    <tr class="items-center divide-x divide-text-color/30">
                        <th class="px-2 py-1 min-w-[250px]">Judul</th>
                        <th class="px-2 py-1">Tanggal</th>
                        <th class="px-2 py-1">File</th>
                        <th class="px-2 py-1">Bagikan</th>
                    </tr>
                </thead>
                <tbody class="px-1 align-top whitespace-normal divide-y divide-text-color/30">
                    <tr class="hover:bg-slate-300 divide-x divide-text-color/30">
                        <td class="px-1 py-2">
                            <h2 class="font-semibold">Informasi kegiatan Sensus Pertanian 2023 selama Bulan Mei 2022</h2>
                            <p class="text-xs md:text-sm">BPS telah melaksanakan salah satu rangkaian panjang kegiatan Sensus Pertanian 2023</p>
                        </td>
                        <td class="px-1 py-2">30 Mei 2022</td>
                        <td class="px-1 py-2">
                            <a href="./download/example.pdf" target="_blank"
                                download="Hasil Sensus ST2023">
                                <div
                                    class="mx-auto bg-primary-hover rounded-full text-body-white sm:pl-4 sm:pr-6 p-2 sm:p-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer transition-all">
                                    <span class="iconify text-xl"
                                        data-icon="heroicons-solid:document-download"></span>
                                    <span class="ml-1 text-sm font-semibold hidden sm:block">
                                        Unduh
                                    </span>
                                </div>
                            </a>
                        </td>
                        <td class="px-1 py-2">
                            <bagikan-ke class="text-primary-hover"></bagikan-ke>
                        </td>
                    </tr>
                    <tr class="hover:bg-slate-300 divide-x divide-text-color/30">
                        <td class="px-1 py-2">
                            <h2 class="font-semibold">Surat Edaran Dukungan Pelaksaan Sensus Pertanian 2023</h2>
                            <p class="text-xs md:text-sm">Surat Edaran Guberneur Provinsi X ini terkait dukungan pelaksanaan Sensus Pertanian 2023</p>
                        </td>
                        <td class="px-1 py-2">31 Mei 2022</td>
                        <td class="px-1 py-2">
                            <a href="./download/example.pdf" target="_blank"
                                download="Hasil Sensus ST2023">
                                <div
                                    class="mx-auto bg-primary-hover rounded-full text-body-white sm:pl-4 sm:pr-6 p-2 sm:p-1 flex items-center justify-center w-min border-2 border-primary-hover hover:text-primary-hover hover:bg-body-white cursor-pointer transition-all">
                                    <span class="iconify text-xl"
                                        data-icon="heroicons-solid:document-download"></span>
                                    <span class="ml-1 text-sm font-semibold hidden sm:block">
                                        Unduh
                                    </span>
                                </div>
                            </a>
                        </td>
                        <td class="px-1 py-2">
                            <bagikan-ke class="text-primary-hover"></bagikan-ke>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        `
    }
}
customElements.define('tab-terkait', TabTerkait)