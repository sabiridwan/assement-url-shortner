// import { nanoid } from 'nanoid';

export const validateUrl = (url: string): boolean => {
  return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
    url,
  );
};

export const generateId = (): string => {
  // return nanoid(5);
  return Date.now().toString();
};
