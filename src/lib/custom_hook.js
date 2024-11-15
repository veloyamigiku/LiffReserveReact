import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { error } from '../redux/axiosSlice';

export const UseWeekdayName = () => {
  const { t } = useTranslation();
  const weekdayName = (weekday) => {
    let name = '';

    switch (parseInt(weekday, 10)) {
      case 0: name = t('utils.sun'); break;
      case 1: name = t('utils.mon'); break;
      case 2: name = t('utils.tue'); break;
      case 3: name = t('utils.wed'); break;
      case 4: name = t('utils.thu'); break;
      case 5: name = t('utils.fri'); break;
      case 6: name = t('utils.sat'); break;
    }

    return name;
  };
  return weekdayName;
};

export const useShowHttpError = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const showHttpError = (errorObj) => {
    if (errorObj.response && errorObj.response.status >= 400) {
      if (errorObj.response.status == 403) {
        const errmsg = errorObj.response.data ? errorObj.response.data : t('error.msg005');
        window.alert(errmsg);
        window.location = `https://liff.line.me/${process.env.REACT_APP_LIFF_ID}`;
        return true;
      }

      const response = errorObj.response;
      setTimeout(() => {
        dispatch(error(`status=${response.status} ${response.statusText} ${response.data}`));
      }, 500);
      return true;
    }
  }
  return showHttpError;
}