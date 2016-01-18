import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteRecipe(recipe) {
            recipe.deleteRecord();
            recipe.save();
        }
    }
});
