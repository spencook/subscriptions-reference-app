// just a function from a library
// https://github.com/Shopify/shopify-app-js/tree/152fae88946abafe31cbafd23b5bcb65679ed3f4
// this subpackage is in the readme
// cant find much excep "A class that represents a set of access token scopes."
import {AuthScopes} from '@shopify/shopify-api';

// this is simple. remember in TS you have to define the type
// so this first line just defines a function
export function missingApprovedScopes(): string[] {
  // this part creates a constant variable. value cannot be reassigned, it's named scopes
  // new is a js keyword for creating a new object from a class
  // process is a node.js concept. it allows you to access the environ variables
  const scopes = new AuthScopes(process.env.SCOPES ?? []);

  // The .reduce() method collects all the scopes from the required list that are not found in the scopes object.
  // if

If no scopes are missing, it will return an empty list ([]).
  return [
    'read_all_orders',
    'write_own_subscription_contracts',
    'read_customer_payment_methods',
    'write_customers',
  ].reduce(
    (acc, scope) => (scopes.has(scope) ? acc : acc.concat([scope])),
    [] as string[],
  );
}


// by the way, this only tells you which ones are missing. doesn't redirect
