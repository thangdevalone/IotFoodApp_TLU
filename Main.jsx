import React, { useEffect } from 'react';
import { persistor, store } from './src/app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import Orientation from 'react-native-orientation-locker';

function Main() {
  useEffect(() => {
    Orientation.lockToPortrait();

    // Đảm bảo mở khóa hướng màn hình khi component bị hủy
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  );
}

export default Main;
