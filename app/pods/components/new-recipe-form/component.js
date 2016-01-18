import Ember from 'ember';

export default Ember.Component.extend({
    recipes: Ember.Object.create(),
    hasErrors: false,
    
    actions: {
        submit() {

            if (!this.validate()) {
                return;
            }

            this.get('onSave')({
                name: this.$('#name').val(),
                description: this.$('#description').val(),
                ingredients: this.$('#ingredients').val(),
            });
            
        }
    },
    
    validate() {
        var name = this.$('#name').val();
        var description = this.$('#description').val();
        
        this.set('recipes.location', name === '' ? 'Név kötelező' : '');
        this.set('recipes.description', description === '' ? 'Leírás kötelező' : '');

        return this.get('recipes.location') === '' &&
               this.get('recipes.description') === '';
    }
});
