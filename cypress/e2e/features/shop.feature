Feature:Automate the shop



   Background: Log in pflegetech
      Given Users visits for the login
      When User enter email & passaword
       | Email                               | Passaword     |
       | mdullahpatwary.cse@gmail.com        | 123456        |

      Then Click on the login Button 

    Scenario: Verify that user can order product
      When Check that user succesfully log in
      Then Click on the shop button from nav
      Then Click on the product "Lenovo ThinkPad L15 Gen 4"
      Then Check the Product is "Lenovo ThinkPad L15 Gen 4"
      Then Check that Product count is one
      Then Click on the add to cart
      Then Click on add to card from Nav
      Then Check the product & Quantity
      Then Check out the product "Lenovo ThinkPad L15 Gen 4"
      Then Check that user can view the confirm order
