import React, {useState, useEffect }from 'react'
import { SlimData } from '../data/slimdata';
import { SlimStyle, StyledLink } from '../style/compStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slim = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade]=useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        rotateCartillas();
        setFade(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, [startIndex]);

  const rotateCartillas = () => {
    setStartIndex((startIndex + 3) % SlimData.cartillas.length);
  }

  return (
    <SlimStyle>
      <article>
        <p>
          El SLIM
        </p>
        <div>
          {SlimData.cartillas.slice(startIndex, startIndex + 3).map((cartilla, index)=>(
            <div key={cartilla.titulo}>
              <StyledLink to={`/documentoslim/${index}`} className={`documentoslim ${fade ? 'fade' : ''}`}>
                <div>
                  <p>{`${cartilla.titulo}`}</p>
                  <FontAwesomeIcon icon={cartilla.imagen} color={cartilla.color} fontSize={'5rem'}/>
                </div>
              </StyledLink>
            </div>
          ))}
        </div>
        <button onClick={rotateCartillas}>Cambiar cartillas</button>
      </article>
    </SlimStyle>
  );
};

export default Slim;