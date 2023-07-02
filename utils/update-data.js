export const updateData = (
  type,
  data,
  payload,
  primaryKey = "id",
) => {
  const items = [...data];
  console.log({ payload });
  let payloadIndex;
  let newItems = [];
  switch (type) {
    case "add":
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
