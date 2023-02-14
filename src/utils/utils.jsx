export const dateParser = (num) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const date = new Date(num).toLocaleDateString('fr-FR', options)

    return date;
};