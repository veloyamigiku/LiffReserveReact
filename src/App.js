//import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
//import { dateformat } from './lib/utils';
//import { ocopy } from './lib/utils';
//import { now } from './lib/utils';
//import { useTranslation } from 'react-i18next';
//import { openMapApp } from './lib/utils';
//import { englishMonth } from './lib/utils';
//import { UseWeekdayName } from './lib/custom_hook';
//import { isAndroid } from './lib/utils';
//import { isIOS } from './lib/utils';

import { decrease, increase } from './redux/counterSlice';
import { error } from './redux/axiosSlice';

function App() {

  //const weekdayName = UseWeekdayName();
  
  //const { t } = useTranslation();
  
  useEffect(() => {
    /*let res = ocopy({'hoge': 1, 'test': 'sample'});
    console.log(res)*/
    /*let d = new Date();
    let res = dateformat(d, 'yyyymmdd_hhmiss');*/
    //let res = now('yyyymmdd_hhmiss', 0);
    /*let res = weekdayName(0);
    console.log(res);*/
    //console.log(englishMonth('12'));
    //console.log(isIOS());
    //console.log(isAndroid());
    //openMapApp(35.85963087, 139.54838276, 15);
    dispatch(error('hogehoge'));
    console.log('LIFF_ID:', process.env.REACT_APP_LIFF_ID);
  }, []);

  const count = useSelector((state) => state.counter.count);
  const axiosError = useSelector((state) => state.axios.error);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <h3>AxiosError: {axiosError}</h3>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
    </div>
  );
}

export default App;
