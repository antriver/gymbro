export const hydrate = (entity, data) => {
    Object.keys(data).forEach((key) => {
        if (entity.hasOwnProperty(key)) {
            entity[key] = data[key];
        }
    });
};
