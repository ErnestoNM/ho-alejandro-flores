import './index.css';
import services from './services.json';
import Accordion from '../Accordion';


const Services = () => {
  return (
    <div id='services'>
      <h2>Servicios</h2>
      <ul>
        {
          services.map((item, index) => (
            <li key={index}>
              <Accordion name={item.name} description={item.description} />
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Services;
