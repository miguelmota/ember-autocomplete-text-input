App.AutocompleteTextInputComponent = Ember.Component.extend({
  tagName: 'div',
  classNames: ['autocomplete-text-input'],
  attributeBindings: [
    'value',
    'type',
    'data',
    'shadowValue',
    'shadowAfter'
  ],

  value: null,
  type: 'text',
  data: [],
  shadowValue: null,
  shadowAfter: null,

  keys: {
    ENTER: 13,
    TAB: 9
  },

  didInsertElement: function() {
    this.keyUp();
  },

  getDatum: function(val) {
    if (!val) return '';
    return this.get('data').filter(function(d) {
      return d.indexOf(val) === 0;
    })[0] || '';
  },

  keyDown: function(e) {
    e = e || {};

    var code = e.keyCode || e.which;
    var keys = this.get('keys');

    if (code === keys.TAB) {
      this.set('value', this.get('shadowValue'));
      this.sendAction('action', this.get('value'));
    }
  },

  keyUp: function(e) {
    e = e || {};

    var code = e.keyCode || e.which;
    var keys = this.get('keys');
    var value = this.get('value') || '';
    var shadowAfter = this.get('shadowAfter');
    var shadowValue = '';

    if (shadowAfter) {
      var re = new RegExp('(.*)(' + shadowAfter + ')(.*)', 'i');
      var parts = value.match(re);
      if (parts && parts[1] && parts[2] && parts[3]) {
        shadowValue = parts[1] + parts[2] + this.getDatum(parts[3]);
      }
    } else {
      shadowValue = this.getDatum(value);
    }

    this.set('shadowValue', shadowValue);

    if (code === keys.ENTER) {
      this.set('value', this.get('shadowValue'));
      this.sendAction('action', this.get('value'));
    }
  },

  actions: {
    keyPressed: function(value) {

    }
  }

});
