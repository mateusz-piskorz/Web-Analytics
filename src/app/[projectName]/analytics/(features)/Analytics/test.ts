export const myFunction = (data: any) => {
  let myArray: any = [];
  data.forEach((item: any) => {
    const categoryIndex = myArray.findIndex(
      (e: any) => e.category === item.category
    );

    if (categoryIndex === -1) {
      myArray.push({
        category: item.category,
        value: 1,
        labels: [{ label: item.label, value: 1 }],
      });
    } else {
      myArray[categoryIndex].value = myArray[categoryIndex].value + 1;
      const labelIndex = myArray[categoryIndex].labels.findIndex(
        (e: any) => e.label === item.label
      );
      if (labelIndex === -1) {
        myArray[categoryIndex].labels = [
          ...myArray[categoryIndex].labels,
          { label: item.label, value: 1 },
        ];
      } else {
        myArray[categoryIndex].labels[labelIndex].value =
          myArray[categoryIndex].labels[labelIndex].value + 1;
      }
    }
  });

  return myArray;
};
