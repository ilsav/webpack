export default (text = '111234 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};
