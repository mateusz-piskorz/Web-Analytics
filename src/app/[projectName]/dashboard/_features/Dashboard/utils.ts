export const mapHelperFunc = (array: any[], objectName: string) => {
  const cos = array.reduce((cnt, cur) => {
    const rightIndex = cnt.findIndex((e: any) => e.name === cur[objectName]);
    if (rightIndex !== -1) {
      //@ts-ignore
      cnt[rightIndex] = {
        //@ts-ignore
        ...cnt[rightIndex],
        //@ts-ignore
        quantity: cnt[rightIndex].quantity + 1,
      };
    } else {
      //@ts-ignore
      cnt.push({ name: cur[objectName], quantity: 1 });
    }
    return cnt;
  }, []);
  return cos;
};
