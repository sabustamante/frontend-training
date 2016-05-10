class View {

    constructor(template) {
        this._template = template;
    }

    model(model) {
        this._model = model;
    }

    render() {
        let data = this._model.data();

        return this._template(data);
    }
}

export default View;
