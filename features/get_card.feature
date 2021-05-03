Feature: Get a new card
  In order to do a travel
  As a passenger
  I want to get a card

  Scenario Outline: To get a card
    Given The user is "<userId>" and fare is "<fare>"
    When I create in the system
    # And I keep the JSON response at "id" as "ID"
    # And I keep the JSON response at "created" as "CREATED"
    Then I should be receive "<response>"
    Examples:
      | userId | fare   | response |
      | 1      | unique | unique   |
      | 1      | week   | week     |
      | 1      | month  | month    |

