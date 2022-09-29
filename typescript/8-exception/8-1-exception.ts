// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🗒";
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = "not exist!💩";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    /**
     * catch안에서 못잡는 에러가 있거나 리턴이 된다면 try-catch 문 밑의 코드들
     * 이 실행되지 못하기때문에 꼭 마지막에 실행되어야 하는 것이라면 finally에
     * 실행시켜주는것이 좋습니다.
     */
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
