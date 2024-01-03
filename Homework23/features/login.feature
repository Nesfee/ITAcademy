Feature: The Internet Guinea Pig Website

  Scenario Outline: Make search 

    Given User navigate on the 'https://webdriver.io/' page
    When User click on "Main Page > Search Button" button
    And User input field "Main Page > Search Field" with text "Async"
    And User choose section number {1} and list number {1} and make click
    Then User see text "From Sync to Async " in element "Main Page > Search Result Header"

    # Examples:
    #   | text     | title                   |
    #   | Async    | From Sync to Async      | 
    #   | Hello    | Light Reporter Reporter | 
