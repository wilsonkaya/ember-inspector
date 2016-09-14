import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  // sets classname for the compoent
  value: '',
  // default value is set to zero

  init() {
    // runs first
    this._super(...arguments);
    // grabs all parent arguents
    this.get('filter')('').then((results) => this.set('results', results));
    // sets filter to nothing, then sets the results to 'results'
  },

  actions: {
    // runs after init w/ user interaction
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
      // sets filter to the value inputted, then filters results and sets the
      // filterResults as 'results'
    }
  }
});
