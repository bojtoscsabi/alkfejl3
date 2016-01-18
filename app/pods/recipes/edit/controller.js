import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyRecipe(formData) {
            
            var recipe = this.get('model');
            
            formData.date = Date.now();
            var ingredient_names = formData.ingredients.split(",");
            
            return Ember.RSVP.all(recipe.get('ingredients').invoke('destroyRecord')).then(() => {
            
                formData.ingredients = [];
    
                recipe.setProperties(formData);
                
                var store = this.store;
                
                return recipe.save().then(() => {
                
                    // Save new ingredients
                
                    for (var i = 0; i < ingredient_names.length; i++) {
                        
                        store.createRecord(
                            'ingredient',
                            { name: ingredient_names[i].trim(), recipe: recipe }
                        ).save();
                        
                    }
                    
                    this.transitionToRoute('recipes.list');
                    
                });
                
            });
            
        }
    }
});
