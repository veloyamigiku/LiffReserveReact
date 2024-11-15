import liff from '@line/liff';

export const ocopy = (obj) => {
  let ret = null;
  if (obj != null) {
    ret = JSON.parse(JSON.stringify(obj));
  }
  return ret;
};

export const dateformat = (date, format) => {
  const yyyy = date.getFullYear();
  const mm = ('00' + (date.getMonth() + 1)).slice(-2);
  const dd = ('00' + (date.getDate() + 1)).slice(-2);
  const hh = ('00' + (date.getHours() + 1)).slice(-2);
  const mi = ('00' + (date.getMinutes() + 1)).slice(-2);
  const ss = ('00' + (date.getSeconds() + 1)).slice(-2);

  let ret = `${yyyy}/${mm}/${dd} ${hh}:${mi}:${ss}`;
  if (format !== undefined) {
    let strFormat = format.toLowerCase();
    strFormat = strFormat.replace('yyyy', yyyy);
    strFormat = strFormat.replace('mm', mm);
    strFormat = strFormat.replace('dd', dd);
    strFormat = strFormat.replace('hh', hh);
    strFormat = strFormat.replace('mi', mi);
    strFormat = strFormat.replace('ss', ss);
    ret = strFormat;
  }

  return ret;
};

export const now = (format, addMonths) => {
  let date = new Date();
  if (typeof(addMonths) == 'number') {
    const endDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + addMonths + 1,
      0);
    date.setMonth(date.getMonth() + addMonths);
    if (date.getTime() > endDayOfMonth.getTime()) {
      date = endDayOfMonth;
    }
  }
  return dateformat(date, format);
};

export const englishMonth = (month) => {
  let engMonth = null;
  switch (parseInt(month, 10)) {
    case 1: engMonth = 'Jan.'; break;
    case 2: engMonth = 'Feb.'; break;
    case 3: engMonth = 'Mar.'; break;
    case 4: engMonth = 'Apr.'; break;
    case 5: engMonth = 'May.'; break;
    case 6: engMonth = 'Jun.'; break;
    case 7: engMonth = 'Jul.'; break;
    case 8: engMonth = 'Aug.'; break;
    case 9: engMonth = 'Sep.'; break;
    case 10: engMonth = 'Oct.'; break;
    case 11: engMonth = 'Nov.'; break;
    case 12: engMonth = 'Dec.'; break;
  }
  return engMonth;
}

export const isIOS = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    userAgent.indexOf('iphone') >= 0 ||
    userAgent.indexOf('ipad') >= 0 ||
    userAgent.indexOf('ipod') >= 0);
}

export const isAndroid = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    userAgent.indexOf('android') >= 0
  );
}

export const openMapApp = (latitude, longitude, zoom, markered=true) => {
  let params = `ll=${latitude},${longitude}&z=${zoom}`;
  if (markered) {
    params += `&q=${latitude},${longitude}`;
  }

  if (isIOS()) {
    liff.openWindow({
      url: `https://maps.apple.com/maps?${params}`,
      external: true
    });
  } else if (isAndroid()) {
    liff.openWindow({
      url: `https://maps.apple.com/maps?${params}`,
      external: true
    });
  } else {
    window.open(`https://maps.apple.com/maps?${params}`, '_blank');
  }
};

export const openLineOA = (line) => {
  if (isIOS()) {
    location.href = line;
  } else if (isAndroid()) {
    location.href = line;
  } else {
    window.open(line, '_blank');
  }
};

