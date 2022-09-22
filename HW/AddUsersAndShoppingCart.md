Design link (https://www.figma.com/file/FlbG7J2VyBejAYtOM9MTEr/Untitled?node-id=1%3A2)

## Create the user page

- Create a log in page.
- the route should be "/sign-in"
- Your log in page should ask for email, password, user image url. 
- When the users clicks the sign in button the application state should update;
- Use the "useState" hook in app.js to store the user state.
- Send a callback that changes the state to your user log in page. (put the user data in the mock data file in the state)
- When the user is logged in the sign-in page should only show a log out button.
- when the use signs in the header should show the user profile picture instead of the icon.


## Create cart page

The shopping cart is just a method to keep track of the items the user would like to order. We can use state to store this information and make all components aware of when it changes.

- use the "useState" hook to keep track of the shoppingCart in app.js
-- const [shoppingCart, setShoppingCart] = useState();



- Send a callback to your home page from App.js that can be used to add the items to the shopping cart.

- Create a cart page (The path should be "/cart")
- Send the shopping cart state to the cart page and display each item in the cart.

- The empty cart button should empty the cart

- the go back home button should redirect us back home.

- When the add to cart button is clicked on the Home Page the item should be added to the shoppingCart(added to the shopping cart state).

- When adding products to the shopping cart state remember to add a way to uniquely identify each cart item. which will be useful when we want to filter out items and delete them from the cart.

- Each cart element should have a remove button.


