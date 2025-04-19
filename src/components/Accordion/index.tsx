import './index.css';
import { useState } from 'react';
import { RxChevronDown } from 'react-icons/rx';


interface Props {
  name: string;
  description: string;
}

const Accordion: React.FC<Props> = ({ name, description }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id='accordion-head'>
        <h3>{name}</h3><button onClick={() => setIsOpen(!isOpen)}><RxChevronDown size={20} /></button>
      </div>
      <div id='accordion-body'>
        <div className={isOpen ? 'open' : ''}>{description}</div>
      </div>
    </>

  );
}

export default Accordion;