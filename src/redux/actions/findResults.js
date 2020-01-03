export const type = 'findResults';

const findResults = texto => {
    return {
        type,
        payload: texto
    };
};

export default findResults;