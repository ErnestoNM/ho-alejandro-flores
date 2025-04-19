import './index.css';
import { Map, Marker } from "pigeon-maps";
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';


const Contact = () => {
  return (
    <div id="contact">
      <h2>Contacto</h2>
      <div className='container-contact'>
        <div className='telephones'>
          <p>Agenda tu cita</p>
          <a href='tel:9994155503'>9994155503</a>
        </div>  
        <div className='social-networks'>
          <p>Redes sociales</p>
          <ul>
            <li><a href='https://wa.me/+529994155503 '><FaWhatsapp className='icon' size={30} /></a></li>
            <li><a href='https://www.instagram.com/dr.alejandrofn/'><FaInstagram className='icon' size={30} /></a></li>
            <li><a href='https://www.facebook.com/dralejandrofloresnovelo'><FaFacebookF className='icon' size={30} /></a></li>
          </ul>
        </div>
      </div>
      <div className='container-locations'>
        <p>Puedo atenderte en dos ubicaciones:</p>
        <div className='locations'>
          <div className='location'>
            <h3>Clínica Peninsular</h3>
            <p>Consultorio 2. Calle 18 #185. Col. México Oriente, Mérida, Yucatán, 97137.</p>
            <p>Horarios: Lunes, viernes y sábado 8 a 1 pm</p>
            <Map height={300} defaultCenter={[21.002265492997772, -89.60347715767034]} defaultZoom={16}>
              <Marker width={50} anchor={[21.002265492997772, -89.60347715767034]} />
            </Map>
          </div>
          <div className='location'>
            <h3>Clinica Santa María</h3>
            <p>Consultorio 23, piso 2. Calle 69 #430, Centro, Mérida, Yucatán, 97000.</p>
            <p>Horarios: De lunes a viernes de 4 a 8 pm</p>
            <Map height={300} defaultCenter={[20.960772977357376, -89.61629387955867]} defaultZoom={16}>
              <Marker width={50} anchor={[20.960772977357376, -89.61629387955867]} />
            </Map>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
