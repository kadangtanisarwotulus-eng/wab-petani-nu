import Image from "next/image";

export default function Page() {
  return (
    <div style={{minHeight:"100vh", background:"#1a6b3c"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap');
        *{font-family:"Plus Jakarta Sans",system-ui,sans-serif}
        .font-amiri{font-family:"Amiri",serif}
        .emas-berkilau{background:linear-gradient(180deg,#FFF8A0 0%,#FFD700 20%,#FFC300 40%,#FFD700 60%,#FFF1A0 85%,#D4AF37 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-stroke:1.5px #000;text-shadow:0 1px 0 #000,0 2px 0 #000,0 0 8px rgba(255,215,0,0.9),0 0 18px rgba(255,215,0,0.6),2px 2px 0 #000;filter:drop-shadow(0 2px 2px rgba(0,0,0,0.9))}
        .badge-kontras{background:#fff;color:#000;border:2.5px solid #000;box-shadow:3px 3px 0 #000;font-weight:900}
        .border-emas{border:4px solid #FFD700;box-shadow:0 0 0 3px #000,0 0 25px rgba(255,215,0,0.7),6px 6px 0 #000}
        .cover-hijau-emas{background:radial-gradient(ellipse at top,#1fbf4a 0%,#0a8a2a 45%,#065a1c 100%)}
      `}</style>

      <header style={{position:"sticky",top:0,zIndex:9999,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)",borderBottom:"3px solid #000",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 20px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <img src="/logo-ktst.png" alt="logo" style={{height:"40px",width:"40px",borderRadius:"50%",border:"2px solid #000",background:"#fff",objectFit:"contain"}} />
          <div><div style={{fontSize:"10px",fontWeight:900,letterSpacing:"0.18em"}}>PWNU • LPPNU • KTST</div><div className="font-amiri" style={{fontWeight:700,color:"#0a5a1e"}}>KTST JAWA TENGAH</div></div>
        </div>
        <div className="badge-kontras" style={{borderRadius:"999px",padding:"6px 14px",fontSize:"11px"}}>🔒 FINAL 100% SEMPURNA 2026 - ASLI MANGGISAN</div>
      </header>
      <div style={{height:"4px",background:"linear-gradient(to right,#000,#FFD700,#000)"}}></div>

      <section className="cover-hijau-emas" style={{padding:"40px 20px",textAlign:"center",color:"#fff"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <div className="badge-kontras" style={{display:"inline-flex",borderRadius:"999px",padding:"6px 14px",fontSize:"12px",marginBottom:"16px"}}>🌾 WAB PETANI NU • FINAL 100% SEMPURNA</div>
          <div style={{background:"#fff",borderRadius:"20px",padding:"18px",display:"inline-block",border:"4px solid #000",boxShadow:"6px 6px 0 #000",marginBottom:"18px"}}>
            <h1 className="font-amiri emas-berkilau" style={{margin:0,fontSize:"48px",fontWeight:900,lineHeight:"0.95"}}>WAB KTST PWNU JATENG</h1>
          </div>
          <h2 style={{color:"#FFD700",WebkitTextStroke:"1px #000",textShadow:"2px 2px 0 #000",margin:"10px 0",fontSize:"18px",letterSpacing:"0.2em"}}>HIERARKI ORGANISASI • SISTEM DIGITAL TERPADU</h2>
          <div style={{margin:"20px auto",width:"100%",maxWidth:"900px"}}>
            <img src="/KTST_JAWA_TENGAH.jpg" alt="KTST JAWA TENGAH HIERARKI FINAL" className="border-emas" style={{width:"100%",borderRadius:"16px",background:"#fff",objectFit:"contain"}} />
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",maxWidth:"900px",margin:"24px auto"}}>
            <div style={{background:"#fff",border:"3px solid #000",borderRadius:"16px",padding:"14px",boxShadow:"4px 4px 0 #000"}}><div style={{fontWeight:900,color:"#000"}}>PWNU</div><div style={{fontSize:"12px",fontWeight:800,background:"#065a1c",color:"#fff",borderRadius:"999px",padding:"2px 8px",marginTop:"4px",display:"inline-block"}}>JAWA TENGAH</div><div style={{fontSize:"10px",marginTop:"6px",color:"#000",fontWeight:700}}>Pengurus Wilayah Nahdlatul Ulama</div></div>
            <div style={{background:"#fff",border:"3px solid #000",borderRadius:"16px",padding:"14px",boxShadow:"4px 4px 0 #000"}}><div style={{fontWeight:900,color:"#000"}}>LPPNU</div><div style={{fontSize:"12px",fontWeight:800,background:"#065a1c",color:"#fff",borderRadius:"999px",padding:"2px 8px",marginTop:"4px",display:"inline-block"}}>JAWA TENGAH</div><div style={{fontSize:"10px",marginTop:"6px",color:"#000",fontWeight:700}}>Lembaga Pengembangan Pertanian NU</div></div>
            <div style={{background:"#fff",border:"3px solid #000",borderRadius:"16px",padding:"14px",boxShadow:"4px 4px 0 #000"}}><div style={{fontWeight:900,color:"#000"}}>KTST</div><div style={{fontSize:"11px",fontWeight:800,background:"#FFD700",color:"#000",border:"2px solid #000",borderRadius:"999px",padding:"2px 8px",marginTop:"4px",display:"inline-block"}}>SARWOTULUS</div><div style={{fontSize:"10px",marginTop:"6px",color:"#000",fontWeight:700}}>Kadang Tani Sarwotulus - Gerakan Petani Nahdliyin</div></div>
            <div style={{background:"#fff",border:"3px solid #000",borderRadius:"16px",padding:"14px",boxShadow:"4px 4px 0 #000"}}><div style={{fontWeight:900,color:"#000"}}>ORGANIK</div><div style={{fontSize:"12px",fontWeight:800,background:"#000",color:"#FFD700",borderRadius:"999px",padding:"2px 8px",marginTop:"4px",display:"inline-block"}}>INDONESIA</div><div style={{fontSize:"10px",marginTop:"6px",color:"#000",fontWeight:700}}>Pertanian Organik sebagai Ideologi</div></div>
          </div>

          <div style={{background:"#fff",border:"3px solid #000",borderRadius:"16px",padding:"18px",maxWidth:"900px",margin:"20px auto",boxShadow:"6px 6px 0 #000",color:"#000",textAlign:"left"}}>
            <h3 style={{margin:0,fontSize:"20px",fontWeight:900}}>🌾 Tentang KTST - Asli Manggisan</h3>
            <p style={{lineHeight:"1.7",fontSize:"14px",marginTop:"10px"}}><b>Lahir 22 November 2020</b> di <b>Madin Miftahul Huda Manggisan Limpung Batang</b> dalam <b>Halaqoh dan Ngopi Bareng LPP PWNU bersama PWNU Jawa Tengah</b>, dihadiri Pengurus PWNU Jawa Tengah, LPP PWNU Jawa Tengah, dan LPP PCNU se-Jawa Tengah kurang lebih <b>70 orang</b>. KTST adalah wadah kemandirian petani NU di ranting NU, kelompok kerja akar rumput produksi pangan penjaga kesehatan tanah, tanaman, buah untuk kesehatan manusia dan bumi. Bertani organik yang rahmatan lil alamin. Setiap benih adalah amanah, merawat tanaman menjaga kelestarian alam, setiap panen adalah ibadah. <b>Bertani dengan Ilmu - Berjamaah dalam NU - Mandiri - Sejahtera.</b></p>
            <div style={{background:"#fff9c4",border:"2px solid #000",padding:"10px",borderRadius:"10px",marginTop:"12px",fontWeight:800,fontSize:"12px"}}>📍 Lokasi Lahir: Madin Miftahul Huda Manggisan Limpung Batang • 22 Nov 2020 • 70 Peserta • PWNU Jateng + LPP PWNU Jateng + LPP PCNU se-Jateng • Ngopi Kentel Bareng</div>
          </div>
        </div>
      </section>

      <footer style={{background:"#000",color:"#fff",borderTop:"5px solid #000",padding:"24px 20px",textAlign:"center"}}>
        <div style={{color:"#FFD700",fontWeight:900}}>WAB KTST PWNU JATENG • FINAL 100% SEMPURNA 2026 • ASLI MANGGISAN</div>
        <div style={{fontSize:"11px",color:"#aaa",marginTop:"6px"}}>wab-petani-nu.vercel.app • FINAL DIKUNCI • TIDAK FETCH DB • TIDAK MUTER • Madin Miftahul Huda Manggisan Limpung Batang • 22 Nov 2020 • PWNU JATENG • LPPNU JATENG • 70 Orang • Ngopi Kentel</div>
        <div style={{marginTop:"10px",height:"2px",background:"linear-gradient(to right,transparent,#FFD700,transparent)"}}></div>
        <div style={{fontSize:"10px",color:"#666",marginTop:"8px"}}>Cover hijau emas super berkilau • Narasi Asli Manggisan • 60 Form Master • Alur PWNU→LPPNU→KTST→ORGANIK • AI Offline • Keuangan Syariah • Bertani dengan Ilmu - Berjamaah dalam NU - Mandiri - Sejahtera</div>
      </footer>
    </div>
  );
}

