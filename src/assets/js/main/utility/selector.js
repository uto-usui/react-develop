const Selector = (() => {

  class Selector  {

    constructor(selector) {

      this.selector = selector;
      return this._getEl();

    }

    _getEl() {

      const method = this._selectMethod();

      const el = document[method](this.selector.slice(1));

      return !el.length ? el : [...el];

    }

    _selectMethod() {

      const matches = {
        '#': 'getElementById',
        '.': 'getElementsByClassName',
        '*': 'querySelectorAll'
      }[this.selector[0]];

      return matches;

    }

  }

  const omitNew = (target) => new Selector(target);

  return omitNew;

})();

export default Selector;
