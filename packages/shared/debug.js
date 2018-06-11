export const logEnter = (defClz = '', defFn = '', enterFn = '') => {
  console.log(
    `${defClz.padEnd(30)}:${defFn.padEnd(30)} ==> ${enterFn.padEnd(30)}`,
  );
};
