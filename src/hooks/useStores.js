import React from 'react';
import storesContext from '../store';

const useStores = () => React.useContext(storesContext);

export default useStores;
