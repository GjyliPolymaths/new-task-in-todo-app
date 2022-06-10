Feature: Filter Todos via categories

As a user I want to filter tasks via Categories so I can see categorised tasks.


Scenario: Tasks must have categories selected
    Given I am in the page todos 
    When I add a new task and select categories
    Then I can categorize it based on what needs to be done

#Scenario: There must be at least one task exisiting
    #Given I load the todos app
    #And there are existing tasks
    #When I want to filter category "Food"
    #Then I can finish it and mark as done


#Scenario: Can filter more than one category at once
    #Given I addd some tasks
    #When I want to filter tasks in different categories 
    #Then I can filter which category I want
