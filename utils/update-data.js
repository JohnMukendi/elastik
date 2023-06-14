export const updateData = (
    data,
    payload,
    type = "post",
    primaryKey = "id",updateData
  ) => {
    const items = [...data];
    console.log({payload})
    let payloadIndex;
    let newItems = []
    switch (type) {
      case "post":
        payloadIndex = items.findIndex(
          (item) => item[primaryKey] === payload[primaryKey]
        );
        if (payloadIndex !== -1) {
          items[payloadIndex] = payload;
          return items;
        } else {
          items.unshift(payload);
          return items;
        }
  
      case "delete":
        newItems = items.filter(
          (item) => item[primaryKey] !== payload[primaryKey]
        );
        return newItems;
      
      default:
        return data;
    }
  };
  