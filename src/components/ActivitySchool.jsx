export default function ActivitySchool(){
const items = [
{ name : "Family Gathering", desc : "sadasadadad ", src : "src/assets/img/activity/1.png", width: 150, height: 270},
{ name : "Kegiatan Bakti Anak", desc : "sadasadadad ", src : "src/assets/img/activity/2.png", width: 250, height: 400},
{ name : "Wisuda Murid 2023", desc : "sadasadadad ", src : "src/assets/img/activity/3.png", width: 350, height: 500},
{ name : "Kejuaraan Nasional", desc : "sadasadadad ", src : "src/assets/img/activity/4.png", width: 250, height: 400},
{ name : "Futsal 2023", desc : "sadasadadad ", src : "src/assets/img/activity/5.png", width: 150, height: 270},
]
return(
<>
    <div className="flex justify-center items-center h-screen mx-auto max-w-7xl  sm:px-6 sm:py-32 lg:px-8">

        <div className="title text-center">
            <h1 className="text-4xl font-semibold text-gray-800">Aktifitas Sekolah</h1>
            <hr className="border-t-7 border-hijau my-2 w-64 mx-auto">
            </hr>
            <h5 className="font-semibold text-gray-800 mt-5">Banyak aktifitas yang mendukung para siswa dalam kegiatan
                di sekolah.</h5>
            <div className="photos grid grid-cols-5 gap-4 mt-5 align-middle">
{items.map((item) => (

<div key={item.name} className={`card w-${item.width} h-${item.height} bg-base-100 shadow-xl mx-2`}>

                    <figure><img src={item.src} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                          
                        </h2>
                        <p>{item.desc}</p>
                        <div className="card-actions justify-end">
                        <button className="font-normal bg-hijau text-white text-base py-4 px-6 rounded-xl hover:bg-white hover:text-hijau hover:outline-hijau outline outline-1">
    <div className="flex items-center">
    More Info
    </div>
  </button>
                        </div>
                    </div>
                </div>
))}
            </div>

            
        </div>



    </div>


</>
)
}