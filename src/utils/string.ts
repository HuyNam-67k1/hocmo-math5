import { isValid } from 'date-fns';

export const getOrigin = (path: string) =>
  typeof window !== 'undefined' ? `${window.location.origin}${path}` : path;

export const toNonAccentVietnamese = (text: string) => {
  if (!text) {
    return '';
  }

  let stringConvert = text.toLowerCase();
  stringConvert = stringConvert.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  stringConvert = stringConvert.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  stringConvert = stringConvert.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  stringConvert = stringConvert.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  stringConvert = stringConvert.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  stringConvert = stringConvert.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  stringConvert = stringConvert.replace(/đ/g, 'd');
  stringConvert = stringConvert.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  stringConvert = stringConvert.replace(/\u02C6|\u0306|\u031B/g, '');
  stringConvert = stringConvert.replace(/ /g, '_');
  return stringConvert;
};

export const toCamel = (key: string) => {
  return key.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const isObject = (obj: any) => {
  return (
    obj === Object(obj) &&
    !Array.isArray(obj) &&
    typeof obj !== 'function' &&
    !(obj instanceof Date)
  );
};

export const keysToCamel: any = (
  obj: any,
  key?: string,
  withoutDateConvert = false,
) => {
  if (isObject(obj)) {
    const n: any = {};

    Object.keys(obj).forEach((k) => {
      n[toCamel(k)] = keysToCamel(obj[k], k, withoutDateConvert);
    });

    return n;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => {
      return keysToCamel(i, undefined, withoutDateConvert);
    });
  } else if (
    !withoutDateConvert &&
    key &&
    (key.toLowerCase().includes('date') ||
      ['from', 'to', 'createdAt', 'updatedAt'].includes(toCamel(key)))
  ) {
    return new Date(obj);
  }

  return obj;
};

export const getDate = (input: any) => {
  const date = new Date(input);
  if (input && isValid(date)) {
    return date;
  } else {
    return null;
  }
};

export function numberWithCommas(x: any = '') {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const formatBytes = (bytes: number, decimals?: number) => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const imageLinkReg = /\[((http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png))\]/g;

export const linkToImage = (url: string): string => {
  return (url ?? '').replace(
    imageLinkReg,
    '<img src="$1" alt="$1" style="margin-top:16px;" />',
  );
};
