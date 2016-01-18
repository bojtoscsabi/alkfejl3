import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newRecipe(formData) {

            formData.date = Date.now();
            var ingredient_names = formData.ingredients.split(",");
            formData.ingredients = [];
            
            var store = this.store;
            
            var recipe = store.createRecord(
                'recipe', 
                Object.assign(
                    {
                        date: Date.now(),
                        name: '-',
                        description: '-',
                        ingredients: []
                    }, 
                    formData
                )
            );
            
            recipe.save().then(() => {
                
                // Save ingredients
            
                for (var i = 0; i < ingredient_names.length; i++) {
                    
                    store.createRecord(
                        'ingredient',
                        { name: ingredient_names[i].trim(), recipe: recipe }
                    ).save();
                    
                }
                
                this.transitionToRoute('recipes.list');
                
            });
            
        }
    }
});
