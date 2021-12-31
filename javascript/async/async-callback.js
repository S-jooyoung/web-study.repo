function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
class UserStorage {
  async loginUser(id, password) {
    await delay(2000);

    if (
      (id === "ellie" && password === "dream") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      reject(new Error("no access"));
    }
  }
  async getRoles(user) {
    await delay(1000);
    if (user === "ellie") {
      return { name: "ellie", role: "admin" };
    } else {
      reject(new Error("no access"));
    }
  }
}

// callback prettier

const userStorage = new UserStorage();
const id = prompt("아이디를 입력하세요");
const password = prompt("비밀번호를 입력하세요");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you hava a ${user.role} role`))
  .catch(console.log);
