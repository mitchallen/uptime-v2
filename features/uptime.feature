Feature: Smoke Test

Background:
  Given the uptime-v2 package is required

Scenario: Use toHHMMSS method
  When the toHHMMSS method is called
  Then the response matches the HH:MM:SS format