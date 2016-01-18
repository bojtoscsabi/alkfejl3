import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    name: DS.attr('string'),
    description: DS.attr('string'),
    ingredients: DS.hasMany('ingredient', {async: true}),
    ingredient_list: function() {
        
        var names = null;
        var _this = this;
        
        this.get('ingredients').then((ingredients) => {
            
            var ingredient_names = [];
            
            ingredients.forEach(function(ingredient) {
               ingredient_names.push(ingredient.get('name')); 
            });
            
            names = ingredient_names.join(', ');
            _this.set('ingredient_list', names);
            
        });
        
        return names;
        
    }.property('ingredients')
});
