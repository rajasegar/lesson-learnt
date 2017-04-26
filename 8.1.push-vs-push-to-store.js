
Scenerio:-
Say you fetch conversation for a ticket through API action

1. PushPayload:-

Push some raw data into the store.
let pushData = {
  ticket: [
    { id: 2, responder_id: 1 }
  ]
}
get(this, 'store').pushPayload(pushData);  // return nothing

---------------------------------------------------------------------------------------------------------------
2. push:-

1. This method expects normalized JSON API document

let pushData = {
  ticket: [
    { id: 2, responder_id: 1 }
  ]
}
let data = get(this, 'store').normalize('ticket', pushData);
var result = get(this, 'store').push(data); // return the pushed record
