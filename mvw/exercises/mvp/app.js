import Model from "./model";
import View from "./view";
import Presenter from './presenter'

let model = new Model({
    title: 'Título',
    subtitle: 'Subtítulo',
    paragraph: 'Esto es un párrafo'
});

let view = new View((data) => {
    return `
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p>${data.paragraph}</p>
    `
});

let presenter = new Presenter(view);

presenter.model(model);

let html = presenter.view().render();

console.log(html);
