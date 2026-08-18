
export default function Home(){
  return (
    <div className="min-h-screen bg-[#f2f7f2] text-zinc-900">
      <header className="bg-white border-b border-zinc-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3"><div className="w-9 h-9 bg-[#0f2a18] rounded-xl flex items-center justify-center text-white font-bold">W</div><div><p className="font-bold text-[#0f2a18] leading-none">WAB PETANI NU</p><p className="text-[11px] text-zinc-500">Ekosistem Kemandirian Petani - CORE 0.2 FINAL</p></div></div>
        <nav className="hidden md:flex gap-5 text-[13px] font-semibold"><a href="/">Beranda</a><a href="/petani">Petani</a><a href="/ktst">KTST</a><a href="/sekolah">Sekolah Petani</a><a href="/market">Market</a><a href="/dashboard" className="text-[#14532d]">Dashboard</a><a href="/login" className="bg-[#0f2a18] text-white px-4 py-1.5 rounded-full">Login WAB ID</a></nav>
      </header>
      <section className="px-6 md:px-20 py-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1"><div className="inline-block border border-zinc-300 rounded-full px-4 py-1 text-[11px] font-semibold">MASTER WAB • VERSI 0.2 FINAL - FARMER CENTRIC</div><h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[0.95] text-[#0f2a18]">Dari Petani.<br/>Bersama Petani.<br/><span className="text-[#3a8a56]">Untuk Kemandirian Petani.</span></h1><p className="mt-6 text-zinc-600 max-w-xl">WAB Petani NU adalah Sistem Operasi Petani NU yang menghubungkan petani, ilmu, kelembagaan, produksi, pasar, teknologi, data, pendidikan dan kaderisasi lintas generasi.</p><div className="mt-8 flex gap-3"><a href="/register" className="bg-[#0f2a18] text-white px-6 py-3 rounded-full text-sm font-semibold">Daftar WAB ID</a><a href="/dashboard" className="bg-white border border-zinc-300 px-6 py-3 rounded-full text-sm font-semibold">Masuk Dashboard</a></div></div>
        <div className="flex-1 flex justify-center"><div className="bg-white rounded-[24px] p-10 shadow-xl border border-zinc-100 w-full max-w-sm"><div className="text-6xl">🌱</div><h3 className="mt-6 font-bold">Jalan Tol WAB</h3><p className="mt-4 text-sm text-zinc-600 leading-relaxed">Petani → Data → Ilmu → Produksi → Pasar → Pendapatan → Kader → Generasi</p><div className="mt-6 bg-[#f2f7f2] rounded-xl p-3"><p className="text-[10px] text-zinc-500">PRINSIP SAKRAL</p><p className="text-xs font-semibold mt-1">Orang boleh berganti. Sistem tetap hidup.<br/>Sekali input, digunakan kembali.</p></div></div></div>
      </section>
      <section className="px-6 md:px-20 py-12 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 border"><h4 className="font-bold text-sm">🧑‍🌾 Petani</h4><p className="text-sm text-zinc-600 mt-2">Petani menjadi subjek utama layanan dan penguatan ekosistem.</p></div>
        <div className="bg-white rounded-2xl p-6 border"><h4 className="font-bold text-sm">🌱 Ekosistem</h4><p className="text-sm text-zinc-600 mt-2">Ilmu, produksi, pasar, teknologi dan kelembagaan saling terhubung.</p></div>
        <div className="bg-white rounded-2xl p-6 border"><h4 className="font-bold text-sm">🌍 Lintas Generasi</h4><p className="text-sm text-zinc-600 mt-2">Sistem dirancang agar tetap hidup ketika pengurus dan teknologi berganti.</p></div>
      </section>
      <section className="px-6 md:px-20 py-8 bg-white border-t"><h2 className="font-bold text-xl">CORE 0.2 FINAL - 5 Master Sakral Sudah Dikunci</h2><div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3 text-[11px]"><div className="bg-[#f2f7f2] p-3 rounded-xl"><b>USERS/WAB ID</b><br/>WAB-JT-... + NIK Hash SHA256</div><div className="bg-[#f2f7f2] p-3 rounded-xl"><b>WILAYAH</b><br/>Prov-Kab-Kec-Desa</div><div className="bg-[#f2f7f2] p-3 rounded-xl"><b>STRUKTUR NU</b><br/>PW→PC→MWC→Ranting</div><div className="bg-[#f2f7f2] p-3 rounded-xl"><b>KTST</b><br/>Wajib nempel Ranting NU</div><div className="bg-[#0f2a18] text-white p-3 rounded-xl"><b>PETANI</b><br/>Single Identity</div></div></section>
    </div>
  )
}
