# 10-logo-generator



Deliverables: 15%
At least one sample SVG file generated using the application must be submitted.
Your GitHub repository containing your application code.

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:
Uses the Inquirer packageLinks to an external site.
Uses the Jest packageLinks to an external site. for a suite of unit tests.
The application must have Triangle, Square, and Circle classes.


User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

Acceptance Criteria
GIVEN a command-line application that accepts user input

WHEN I am prompted for text
THEN I can enter up to three characters

WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

TODO:
sans serif font

TODO: 
writing tests