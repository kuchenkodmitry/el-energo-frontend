import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Создаем контекст
const PreviousLocationContext = createContext(null);

// Хук для использования контекста
export const usePreviousLocation = () => useContext(PreviousLocationContext);

// Провайдер для предыдущего location
export const PreviousLocationProvider = ({ children }) => {
  const location = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    previousLocation.current = location;
  }, [location]);

  return (
    <PreviousLocationContext.Provider value={previousLocation.current}>
      {children}
    </PreviousLocationContext.Provider>
  );
};
