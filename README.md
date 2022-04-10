# **NOUGHTS &amp; CROSSES**

**CONTENTS**

1. Game Link
2. Instructions
3. Design
4. Features
5. Testing
6. Deployment
7. Credits &amp; References

**GAME-LINK**

Link to live gaming webpage can be found here: [https://miriampayne.github.io/tic-tac-toe/](https://miriampayne.github.io/tic-tac-toe/)

**INSTRUCTIONS**

Start the game by clicking on any cell, you&#39;ll see timer will start and the first player&#39;s turn is recorded, whilst the second player has their go.

Click on another random cell, aiming to get three in a row.

Try to block the other player&#39;s moves from getting three in a row whilst simultaneously aiming to get three in a row yourself.

Keep playing! Start a new game by hitting refresh, or, if you&#39;ve finished, by hitting the OK button in the congratulations notification.

**UX/UI DESIGN**

Final Design

Initial Idea Concept

Wireframe

[https://balsamiq.cloud/scqmgj2/ptuxb51](https://balsamiq.cloud/scqmgj2/ptuxb51)

Flowchart

[https://lucid.app/lucidchart/22f429cd-bd8c-4e90-8487-33c7f7a7695f/edit?invitationId=inv\_1060920e-d805-4252-85aa-a0b139a1b5e2](https://lucid.app/lucidchart/22f429cd-bd8c-4e90-8487-33c7f7a7695f/edit?invitationId=inv_1060920e-d805-4252-85aa-a0b139a1b5e2)

Fonts

For the Heading I used Rubik Glitch: [https://fonts.google.com/specimen/Rubik+Glitch?category=Display&amp;preview.text=XO&amp;preview.size=38&amp;preview.text\_type=custom](https://fonts.google.com/specimen/Rubik+Glitch?category=Display&amp;preview.text=XO&amp;preview.size=38&amp;preview.text_type=custom)

For the cells input I used Fredoka One: [https://fonts.google.com/specimen/Fredoka+One?query=fredoka&amp;category=Display&amp;preview.text=XO&amp;preview.size=38&amp;preview.text\_type=custom](https://fonts.google.com/specimen/Fredoka+One?query=fredoka&amp;category=Display&amp;preview.text=XO&amp;preview.size=38&amp;preview.text_type=custom)

Colours

Foofighters Medicine At Midnight theme in honour of Taylor Hawkins.

[https://webplatform.github.io/docs/tutorials/manipulating\_css\_with\_javascript/](https://webplatform.github.io/docs/tutorials/manipulating_css_with_javascript/)

String fontcolor() is deprecated in JavaScript: [https://www.w3schools.com/jsref/jsref\_fontcolor.asp](https://www.w3schools.com/jsref/jsref_fontcolor.asp)

Target Audience

User Stories

**FEATURES**

**Existing**

Game Status - advising whose turn it is, who has won, if it&#39;s a tie-breaker

Restart Button - restart button allows the player to reset the game board, the timer, and the moves counter.

**Future**

Timer - When the player starts a game, a displayed timer should start. Once the player wins the game, the timer stops.

Move Counter - Game displays the current number of moves a user has made.

Score Board - The game displays a score that reflects the player&#39;s performance. At the beginning of a game, it should display 0. After some number of game matches, it should increase depending on players performance/wins.

Tie Breaker - How many games resulted in a tie-breaker

Game Over Popup - When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

A separate restart to refresh the score-board

Animation where lines of grid draw on as page opens

**TESTING**

Tested initial file connections using console.log for JS and background color for css prior to initial commit.

Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&amp;profile=css3svg&amp;usermedium=all&amp;warning=1&amp;vextwarning=&amp;lang=en#css)
- JS
  - No errors were returned when passing through the official JS validator

Lighthouse

[https://googlechrome.github.io/lighthouse/viewer/](https://googlechrome.github.io/lighthouse/viewer/)

Accessibility

[https://developers.google.com/web/fundamentals/accessibility?utm\_source=lighthouse&amp;utm\_medium=devtools](https://developers.google.com/web/fundamentals/accessibility?utm_source=lighthouse&amp;utm_medium=devtools)

Fixed Bugs

- Responsiveness: Mobile first design, absolute positioning, stop game grid from landing on top of score board and header
- Heading font stopped working as I had changed html to say heading instead of header, fixed by updating CSS
- Make grid larger
- Nothing Happens on cell-click

Unfixed Bugs

- Timer broke cell click function so removed timer due to time constraints

**DEPLOYMENT**

To create this project I used the Code Institute Gitpod Full Template by clicking the button labelled &#39;Use this template&#39; within Github. Next i was directed to the &#39;create new repository from template page&#39;, choosing a repo name and finally created repository from template button. The commands used for commits throughout the project: &#39;git add . &#39; - This command was used to add changes to files to the staging area before committing git commit -m &quot;commit message explaining the updates&quot;&#39; - This command was used to to commit changes to the local repository. git push - This command is used to push all committed changes to the GitHub repository.

I used python3 -m http.server to view the live preview

**Git Hub Pages**

1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (NOT at the top of page), locate the &quot;Settings&quot; Button on the menu.
3. Scroll down the Settings page until you locate the &quot;GitHub Pages&quot; Section.
4. Under &quot;Source&quot;, click the dropdown called &quot;None&quot; and select &quot;Master Branch&quot;.
5. Click Save and the page will automatically refresh.
6. Scroll back down through the page to locate the now published site link in the &quot;GitHub Pages&quot; section.

**Forking a repo**

Forks are used to either propose changes to someone else&#39;s project or to use someone else&#39;s project as a starting point for your own idea. - This is the definition from Github Docs.

1. Navigate to the GitHub Repository you want to fork.
2. On the top right of the page under the header, click the fork button.
3. Fork
4. This will create a duplicate of the full project in your GitHub Repository.

**Cloning a repo**

1. Navigate to the Github Repository you want to clone.
2. Click the drop down menu labelled &quot;Clone&quot;.
3. Either Download the ZIP file, unpackage locally and open with IDE (This route ends here) OR Copy Git URL from the HTTPS dialogue box.
4. Open your developement editor and open a terminal window in a directory of your choice.
5. Use the &#39;git clone&#39; command in terminal followed by the copied git URL.
6. A clone of the project will be created locally on your local machine.

**CREDITS &amp; REFERENCES**

Content

- [https://playtictactoe.org/](https://playtictactoe.org/)

Media

Logo design: [freelogodesign.org](http://freelogodesign.org/)

Image of logo: /assets/images/logo.png

Code

- [https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn](https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn)
- [https://www.codebrainer.com/blog/tic-tac-toe-javascript-game](https://www.codebrainer.com/blog/tic-tac-toe-javascript-game)
- [https://www.webtips.dev/tic-tac-toe-in-javascript](https://www.webtips.dev/tic-tac-toe-in-javascript)
- [https://github.com/satyapavan/tic-tac-toe](https://github.com/satyapavan/tic-tac-toe)
- CSS colors: [https://www.colorhexa.com/000000](https://www.colorhexa.com/000000)
-

Acknowledgements

[Borna Šepić](https://dev.to/bornasepic) for https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn

Mentor Ben Kavanagh

Coding Buddy Dan Culley for motivation