class Presenter {

    constructor(view) {
        this._view = view;
    }

    view() {
        return this._view;
    }

    model(model) {
        this._view.model = model;
    }
}

export default Presenter;
