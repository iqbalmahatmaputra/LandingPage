export default function Hero(){
    return (
        <>
        <div className="">

        
       <div className="flex justify-center items-center h-fit mx-auto max-w-7xl  sm:px-6 sm:py-32 lg:px-8 bg-[#F2F6FF] rounded-br-[250px]">
  <div className="w-1/2 p-6">
    <h1 className="text-4xl font-bold text-gray-800">Selamat Datang <br></br> Calon Siswa Baru!<br></br><span className="text-hijau">SMK LearningX</span></h1>
    <p className="text-gray-600 mt-4">Sekolah Menengah Kejuruan (SMK) adalah salah satu bentuk satuan pendidikan formal yang menyelenggarakan pendidikan kejuruan pada jenjang pendidikan menengah yang mempersiapkan peserta didik terutama untuk bekerja di bidang tertentu. Siswa dapat melanjutkan pendidikan SMK setelah menyelesaikan pendidikan di tingkat Sekolah Menengah Pertama atau sederajat. </p>
    <div className="inline-block items-center mx-auto mt-5 lg:mx-0 lg:flex justify-center lg:space-x-8 md:space-x-2 sm:space-x-3 space-x-0">
  <button className="outline outline-1 outline-hijau hover:outline-white hover:bg-hijau hover:text-white text-hijau py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 ">
    Try it free
  </button>
  <button className="font-normal bg-hijau text-white text-base py-4 px-6 rounded-xl hover:bg-white hover:text-hijau hover:outline-hijau outline outline-1">
    <div className="flex items-center">
    More Info
    </div>
  </button>
</div>

  </div>
  <div className="w-1/2 flex justify-center items-center">
    <div className="h-500 w-500 rounded-full overflow-hidden">
      <img src="src/assets/img/school.png" alt="Gambar Profil" className="object-cover w-full h-full hidden md:block" />
    </div>
  </div>
</div>

</div>

</>
    )
}