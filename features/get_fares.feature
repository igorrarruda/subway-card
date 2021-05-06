Feature: Get fares from zone
    In order to pass card in station
    I want to get fares from zone

    Scenario Outline: To get zone fares
        Given The fare is "<fare>"
        When I pass the card
        Then I should be pay <unique> as unique
        And <day> per day
        And <week> per week
        And <month> per month
        Examples:
            | fare | unique | day | week | month |
            | A    | 6      | 10  | 30   | 130   |
            | B    | 7      | 12  | 45   | 170   |
