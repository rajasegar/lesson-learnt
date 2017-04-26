Ember components:-

1. Use "/" instead of "."
---------------------------------------------------------------------------------------------------------------

2. Blockless component:

{{app/random-component prop="prop"}}

---------------------------------------------------------------------------------------------------------------
3. Block Component:

{{#app.random-component}}
  some markup here..
{{/app.random-component}}

// In component definition template
{{yield}}

---------------------------------------------------------------------------------------------------------------
4. Else block for component

{{#app.random-component}}
  some markup here..
{{else}}
  else block here
{{/app.random-component}}

// In component definition template
{{yield}}
{{yield to="inverse"}}

---------------------------------------------------------------------------------------------------------------
5. classNameBindings vs attributeBindings

Note:- both classNameBindings and attributeBindings will not work for tagless component
