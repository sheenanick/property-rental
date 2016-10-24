import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function(rental){
      if(confirm('Are you sure you want to delete this rental')){
        this.sendAction('destroyRental', rental)
      }
    }
  }
});
