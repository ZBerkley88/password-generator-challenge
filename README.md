# Password Generator Challenge

## Description

The purpose of this project was to generate a password based on parameters selected by the user.

There were two major issues I encountered while working on this project.

The first hurdle was finding a way to consolidate the character types the user wanted to be included in the final password. The user must initially choose which characters they want included in their password - special characters, numbers, uppercase characters, and lowercase characters. Each of these characters is contained within their own respective array. The initially thought that I would have to write code that could not only choose a random element from an array, but also choose a random array to draw from.

I eventually found that `.concat()` could solve this issue by taking only the character types selected by the user and concatenating them into a single array, thereby removing the need to randomly choose an array.

The second major hurdle was writing the `for loop` to actually build out the password. After hours of Googling and working with other students, I figured out that I had been referencing a variable which had not yet been declared in the `for loop`. I had not practiced enough with the `for loop` to know how to write one correctly. 

I am pleased with the final product, though I think I would have prefered the password parameters to be expressed as checkboxes rather than pop up windows. 

![Password Generator Website Preview](/assets/webapp-preview.jpg)

[Password Generator Website](https://zberkley88.github.io/password-generator-challenge/)

## Installation

n/a 

## Usage

n/a

## Credits

n/a

## License

Please refer to the LICENSE in the repo.