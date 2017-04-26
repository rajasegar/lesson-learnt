Ember allow as to write our own computed

scenerio:-
search from a record, using the search query string

//  Below utils is used in assignto component
export default function search(dependentKey, propertyKey, searchQueryKey) {
  return computed(`${dependentKey}.@each.${propertyKey}`, searchQueryKey, function() {
    let items, query;
    if (!this.get(searchQueryKey)) {
      return A([]);
    }
    query = this.get(searchQueryKey);
    query = query.toLowerCase();
    items = this.get(dependentKey) || A([]);

    return items.filter(function(item) {
      if (item.get(propertyKey)) {
        return item.get(propertyKey).toLowerCase().indexOf(query) !== -1;
      }
    });
  });
}

How to use?
import computedSearch from 'freshdesk/utils/search';
export default Component.extend({
  searchText: "",
  resultGroups: computedSearch('groups', 'name', 'searchText'),
  actions: {
    updateSearch(text) {
      set(this, 'searchText', text)
    }
  }
});
