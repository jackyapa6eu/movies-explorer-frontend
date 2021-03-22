function findMovies(searchReq) {
  // eslint-disable-next-line no-useless-escape
  const clearedString = searchReq.replace(/[»«.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const wordsArr = clearedString.replace(/\s{2,}/g, ' ').split(' ');
  let result = '';
  for (let i = 0; i < wordsArr.length;) {
    result += `(${wordsArr[i]}){1}.?`;
    i += 1;
  }
  const regExp = new RegExp(result, 'gmi');
  return regExp;
}

export default findMovies;
