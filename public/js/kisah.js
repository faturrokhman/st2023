class Kisah extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
        <div class="2xl:container 2xl:mx-auto py-24 px-4 md:px-28 flex justify-center items-center">
            <div
                class="w-auto max-w-3xl relative flex flex-col items-center bg-white text-text-color rounded-xl py-4 px-4 md:px-10 xl:py-8 xl:px-12 h-[450px] overflow-auto touch-pan-x touch-pan-y scrollbar-thin scrollbar-thumb-primary-hover scrollbar-track-emerald-600 transition-all space-y-4">
                <img src="./img/kisah.webp" loading="lazy" alt="Kisah Sensus" class="w-48 md:w-64 lg:w-80 rounded-lg shadow-lg">
                <div class="leading-none lg:leading-5 space-y-1">
                    <h3 class="font-medium lg:text-lg text-center">Gladi Bersih Sensus Pertanian 2023 di Kabupaten Kebumen</h3>
                    <div class="flex gap-2 justify-center">
                        <span class="iconify text-sm" data-icon="heroicons-outline:calendar"></span>
                        <p class="text-xs">3 Mei 2022</p>
                    </div>
                    <p class="font-light text-sm text-justify">Kab. Kebumen - 1 Mei 2022, Gladi bersih Sensus Pertanian 2023 mulai dilaksanakan di Kabupaten Kebumen. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsa? Tempora doloribus molestias nesciunt vel optio aspernatur! Nulla at ipsam laboriosam odio. Dolorum commodi deserunt eveniet voluptate facere quae ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus distinctio, neque ullam minus nesciunt obcaecati ut quasi possimus culpa perspiciatis quisquam a placeat architecto debitis perferendis dolorem mollitia dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum doloremque animi ducimus consectetur tempora sunt enim ad praesentium blanditiis! Ipsam veniam iste quam magni ab, harum cupiditate sunt dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis inventore sapiente nihil omnis qui!  </p>
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
                <h3 class="font-medium text-sm lg:text-base">Gladi Bersih Sensus Pertanian 2023 di Kabupaten Kebumen</h3>
                <div class="flex gap-2">
                    <span class="iconify text-sm" data-icon="heroicons-outline:calendar"></span>
                    <p class="text-xs">3 Mei 2022</p>
                </div>
                <p class="font-thin text-xs lg:text-sm">Kab. Kebumen - 1 Mei 2022, Gladi bersih Sensus Pertanian 2023 mulai dilaksanakan di Kabupaten Kebumen... </p>
            </div>  
        </div>
        `
    }
}
customElements.define('tab-kisah', TabKisah)