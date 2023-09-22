import md5 from 'md5';

export default ({ timeStamp, PUBLIC_KEY, PRIVATE_KEY }) => {
  return md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
};

//Основна мета такого процесу - забезпечити унікальний ідентифікатор для вхідних даних
//(повідомлення) незалежно від їхнього розміру.
