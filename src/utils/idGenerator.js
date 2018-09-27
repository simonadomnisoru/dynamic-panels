const getUniqueId = (outputs) => {
    let unique, id ;
    while (unique !== -1) {
        id = Date.now() + Math.random();
        unique = outputs.findIndex(item => {
            return item.id === id;
        });
    }
    return id;
};

export default { getUniqueId };