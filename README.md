Production youtube demo link: https://youtu.be/nrBThh5nfCk

# Service Sunset Announcement:

### Due to lack of adoption and high cost of maintainace (AWS cloud + Full Bytom Nodes) we decided to sunset PayPaw payments (2021 Sept)

--

### PayPaw.org 💰🐶🐾 PayPaw - It is too easy.

https://paypaw.org

Accept BTM payment with paypaw checkout!
Take a look at this sample page
Note: user_id is recipient's paypaw user id


    1. Sign up with your BTM Vapor wallet address and become a recipient
    2. Get your Recipient ID (User ID) from Main menu -> Dashboard
    3. Add and modify the following code to your web-app
    
```html
<html>
  <head>
    <title>PayPaw Demo</title>
  </head>

  <body>
    <!-- i. Place the button somewhere in your HTML -->
    <div id='paypaw-btn'></div>

    <!-- ii. Add the PayPaw script -->
    <script src="https://paypaw.org/js/paypaw.js"></script>

    <!-- iii. Render the button -->
    <script>
      payPaw.render({

        // Payment info
        payment: {
          "user_id": 6,
          "email": "paypaw.org@gmail.com",
          "currency": "BTM",
          "currency_amount": 50,
          "message": "hello paw"
        },

        // Your callback method or API request here
        afterPayment: function(data) {
          alert('Payment received! Your callback method or API request here');
          // payment data
          console.log(data);
        }

      }, 'paypaw-btn');
    </script>
  </body>
</html>
```
