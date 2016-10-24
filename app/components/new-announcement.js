import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
    },
    saveAnnouncement(){
      var params={
        author: this.get('author') ? this.get('author') : "",
        title: this.get('title') ? this.get('title') : "",
        message: this.get('message') ? this.get('message') : ""
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
