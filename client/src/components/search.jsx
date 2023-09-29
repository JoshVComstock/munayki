import React from 'react'
import { ContainerSearch } from '../style/searchStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <ContainerSearch>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" />
    </ContainerSearch>
  )
}

export default Search;