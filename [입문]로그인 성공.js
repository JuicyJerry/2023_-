function solution(id_pw, db) {
  // db에서 아이디가 같은 원소만 남긴다
  let findId = db.filter((e) => e[0] === id_pw[0]);
  // 이때, 비밀번호가 같은 원소인지 판단
  let findPw = findId.filter((e) => e[1] === id_pw[1]);

  if (!!findPw.length) return 'login';
  // 비밀번호가 같으면 login, 아니면 wrong pw
  else if (!!findId.length) return 'wrong pw';
  // db에 아이디가 같은 원소가 없으면, fail
  return 'fail';
}

// 다른 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}