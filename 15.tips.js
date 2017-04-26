1. each helper has a else block which take care of empty scenerio

{{#each agents as |agent|}}

{{else}}
  // No agent
{{/each}}

2. User ember truth helper in templates
3. Use ember-concurrency for async operations
4. push vs pushObject in Array

Things to be notes across all features:-
1. Test cases
2. zero vs max condition
