import "../style/style.css"
import image from "../aset/12817029-Farid.jpg"

// import $ from 'jquery'

export default function Home(){
    return(
    
    <div>
        <img src={image} alt="gambar"/>
        <h1 >FARID<br/>SURYADI</h1>
        <div className="foto">
        </div>
        <div className="container">
        <div className="about">
            BIODATA<br/>DIRI
            <div className="biodata"> 
            <li>Nama lengkap : Muhammad Farid Suryadi</li>
            <li>TTL : Laptop</li>
            <li>Alamat : Jalan jalan</li>
            <li>Agama : Islam</li>
            <li>Nomor telepon : 0823232323</li>
            <li>Jenis kelamin : Laki-Laki</li>
            <li>Kewarganegaraan : Indonesia</li>
    </div>
        </div>
        <div className="about1">
            PENDIDIKAN
    <div className="pendidikan">  
        <li>SMA : SMAI Al-Azhar 3</li>
        <li>Perguruan Tinggi : Institut Teknologi Bandung</li>
    </div>

            </div>
        <div className="about2">
            KEAHLIAN
    <div className="keahlian">
        <li>PYTHON </li>
        <li>JAVASCRIPT </li>
        <li>HTML </li>
        <li>CSS </li>
    </div>

            </div>
        <div className="about3">
            KONTAK
    <div className="kontak">
      <a href="https://wa.me/0827888788">whatsapp<br/></a>
      <a href="https://www.instagram.com/farid_suryadi/">instagram<br/></a>
      <a href="https://www.linkedin.com/in/muhammad-farid-suryadi-a30aa8228/">linkedin<br/></a>
      <a href="mailto: faridsuryadi27@gmail.com/">email<br/></a>
    </div>

            </div>
    
    </div>



    <div className="info">
        <p>Biodata  Muhammad Farid Suryadi <br/>Bandung, Indonesia</p>
    </div>
    <div className="email">
        <a href="mailto:faridsuryadi27@gmail.com"><strong> faridsuryadi27@gmail.com</strong></a>
    </div>
    </div>
    )
}