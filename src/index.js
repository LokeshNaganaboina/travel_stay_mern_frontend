import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CategoryProvider,DateProvider, FilterProvider, AuthProvider, AlertProvider,WishlistProvider, HotelProvider} from './context';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider> 
        <DateProvider>
          <FilterProvider> 
            <AuthProvider>
              <AlertProvider>
                <WishlistProvider>
                  <HotelProvider>
                    <App />
                  </HotelProvider>
                </WishlistProvider>
              </AlertProvider>
            </AuthProvider>
          </FilterProvider>
        </DateProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);

