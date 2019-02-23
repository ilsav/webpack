export default (text = 'test 🎉🎉🎉') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};
