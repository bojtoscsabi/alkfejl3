import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    click() {
        console.log(this.$().text());
        this.sendAction('onClick', this.$().text());
    }
});
