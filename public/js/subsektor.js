class LabelHijau extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div>
            <ul class="flex space-x-4 justify-center">
            <li>
                <a href="./belumtersedia.html"
                class="bg-emerald-100 rounded-md text-emerald-700 flex text-xs w-min px-2 py-1 items-center font-semibold hover:bg-emerald-200">
                <span class="iconify" data-icon="heroicons-outline:document-duplicate"></span>
                Copy
                </a>
            </li>
            <li>
                <a href="./belumtersedia.html"
                class="bg-emerald-100 rounded-md text-emerald-700 flex text-xs w-min px-2 py-1 items-center font-semibold hover:bg-emerald-200">
                <span class="iconify" data-icon="heroicons-outline:document-duplicate"></span>
                PDF
                </a>
            </li>
            <li>
                <a href="./belumtersedia.html"
                class="bg-emerald-100 rounded-md text-emerald-700 flex text-xs w-min px-2 py-1 items-center font-semibold hover:bg-emerald-200">
                <span class="iconify" data-icon="heroicons-outline:document-duplicate"></span>
                Excel
                </a>
            </li>
            <li>
                <a href="./belumtersedia.html"
                class="bg-emerald-100 rounded-md text-emerald-700 flex text-xs w-min px-2 py-1 items-center font-semibold hover:bg-emerald-200">
                <span class="iconify" data-icon="heroicons-outline:printer"></span>
                Print
                </a>
            </li>
            </ul>
        </div>
        `
    }
}
customElements.define('label-hijau', LabelHijau)

class TabelPertama extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div
            class="overflow-auto max-w-3xl mx-auto rounded-md border mt-3 border-text-color scrollbar-thin scrollbar-thumb-text-body scrollbar-rounded pt-1 pb-2 px-2">
            <table class="text-text-color w-full whitespace-nowrap text-sm md:text-base divide-y divide-text-body">
            <thead class="px-1">
                <tr class="items-center">
                <th class="px-2 py-1">Jenis Tanaman</th>
                <th class="px-2 py-1">Rumah Tangga</th>
                <th class="px-2 py-1">Luas Tanam (m<span class="align-super text-[8px]">2</span>)</th>
                <th class="px-2 py-1 whitespace-normal min-w-[150px]">Rata-rata Luas Tanam (m<span
                    class="align-super text-[8px]">2</span>)</th>
                </tr>
            </thead>
            <tbody class="px-1">
                <tr class="bg-slate-200 hover:bg-slate-300">
                <td class="px-1 py-2">Tanaman Pangan</td>
                <td class="text-right">17.728.185</td>
                <td class="text-right">131.316.116.708</td>
                <td class="text-right px-1">7.407</td>
                </tr>
                <tr class="py-1 hover:bg-slate-300">
                <td class="px-1 py-2">Padi</td>
                <td class="text-right">14.442.566</td>
                <td class="text-right">94.478.528.364</td>
                <td class="text-right px-1">6.678</td>
                </tr>
                <tr class="bg-slate-200 hover:bg-slate-300">
                <td class="pl-5 py-2">Padi Sawah</td>
                <td class="text-right">12.936.427</td>
                <td class="text-right">86.858.754.336</td>
                <td class="text-right px-1">6.714</td>
                </tr>
                <tr class="py-1 hover:bg-slate-300">
                <td class="pl-5 py-2">Padi Ladang</td>
                <td class="text-right">1.506.139</td>
                <td class="text-right">7.619.774.028</td>
                <td class="text-right px-1">5.059</td>
                </tr>
                <tr class="bg-slate-200 px-1 hover:bg-slate-300">
                <td class="px-1 py-2">Palawija</td>
                <td class="text-right">8.624.243</td>
                <td class="text-right">36.837.588.344</td>
                <td class="text-right px-1">4.271</td>
                </tr>
                <tr class="py-1 hover:bg-slate-300">
                <td class="pl-5 py-2">Jagung</td>
                <td class="text-right">5.057.532</td>
                <td class="text-right">21.614.905.939</td>
                <td class="text-right px-1">4.274</td>
                </tr>
                <tr class="bg-slate-200 hover:bg-slate-300">
                <td class="pl-5 py-2">Kedelai</td>
                <td class="text-right">671.774</td>
                <td class="text-right">1.862.657.441</td>
                <td class="text-right px-1">2.773</td>
                </tr>
            </tbody>
            </table>
        </div>
        `
    }
}
customElements.define('tabel-pertama', TabelPertama)

class TabelKedua extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div
        class="overflow-auto max-w-3xl mx-auto rounded-md border mt-3 border-text-color scrollbar-thin scrollbar-thumb-text-body scrollbar-rounded pt-1 pb-2 px-2">
        <table class="text-text-color w-full  text-sm md:text-base divide-y divide-text-body">
          <thead class="px-1">
            <tr class="items-center">
              <th class="px-2 py-1">Jenis Tanaman</th>
              <th class="px-2 py-1">Dijual Seluruhnya</th>
              <th class="px-2 py-1">Dijual Sebagian</th>
              <th class="px-2 py-1">Tidak Dijual</th>
              <th class="px-2 py-1">Jumlah Rumah Tangga</th>
            </tr>
          </thead>
          <tbody class="px-1">
            <tr class="bg-slate-200 hover:bg-slate-300">
              <td class="px-1 py-2">Padi</td>
              <td class="text-right">1.097.895</td>
              <td class="text-right">7.952.279</td>
              <td class="text-right px-3">5.392.392</td>
              <td class="text-right px-1 font-semibold">14.442.566</td>
            </tr>
            <tr class="py-1 hover:bg-slate-300">
              <td class="pl-5 py-2">Padi Sawah</td>
              <td class="text-right">1.052.867</td>
              <td class="text-right">7.571.027</td>
              <td class="text-right px-3">4.312.533</td>
              <td class="text-right px-1">12.936.427</td>
            </tr>
            <tr class="bg-slate-200 hover:bg-slate-300">
              <td class="pl-5 py-2">Padi Ladang</td>
              <td class="text-right">45.028</td>
              <td class="text-right">381.252</td>
              <td class="text-right px-3">1.079.859</td>
              <td class="text-right px-1">1.506.139</td>
            </tr>
            <tr class="py-1 hover:bg-slate-300">
              <td class="px-1 py-2">Palawija</td>
              <td class="text-right">3.005.791</td>
              <td class="text-right">1.607.620</td>
              <td class="text-right px-3">1.115.895</td>
              <td class="text-right px-1 font-semibold">5.729.306</td>
            </tr>
            <tr class="bg-slate-200 hover:bg-slate-300">
              <td class="pl-5 py-2">Jagung</td>
              <td class="text-right">2.512.624</td>
              <td class="text-right">1.455.038</td>
              <td class="text-right px-3">1.089.870</td>
              <td class="text-right px-1">5.057.532</td>
            </tr>
            <tr class="py-1 hover:bg-slate-300">
              <td class="pl-5 py-2">Kedelai</td>
              <td class="text-right">493.167</td>
              <td class="text-right">152.582</td>
              <td class="text-right px-3">26.025</td>
              <td class="text-right px-1">671.774</td>
            </tr>
          </tbody>
        </table>
      </div>
        `
    }
}
customElements.define('tabel-kedua', TabelKedua)

class Keterangan extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="max-w-3xl mx-auto text-text-color">
            <h3 class="font-semibold text-base pt-3 pb-2 md:text-lg">Keterangan</h3>
            <p class="text-sm md:text-base text-justify whitespace-pre-line">Padi terdiri dari padi sawah dan padi ladang.
            Padi sawah adalah padi yang ditanam di lahan sawah.
            Padi ladang adalah padi yang ditanam di tegal/kebun/ladang atau huma.
            Palawija terdiri dari jagung, kedelai, dll.
            </p>
        </div>
        `
    }
}
customElements.define('my-keterangan', Keterangan)
