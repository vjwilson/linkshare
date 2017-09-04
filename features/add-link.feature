Feature: Add a link
  As a user of Linkshare
  I want to add a link
  So that others can enjoy new content

  Scenario: Showing the Add Link dialog
    Given I am on the Linkshare homepage
    When I click the Add Link button
    Then I should see a dialog to add a link
