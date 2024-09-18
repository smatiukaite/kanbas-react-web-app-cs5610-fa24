export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>2.6 Heading Tags</h4>
                <p id="wd-p-1">
                    Text documents are often broken up into several sections and subsections.
                    Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes.
                    For instance this paragraph is preceded by the heading Heading Tags.
                    The font of the section headings are usually larger and bolder than their subsection headings.
                    This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc.
                    HTML heading tags can be used to format plain text so that it renders in a browser as large headings.
                    There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6.
                    Tag h1 is the largest heading and h6 is the smallest heading.
                </p>
            </div>
            <div id="wd-p-tag">
                <h4>2.7 Paragraph Tag</h4>
                <p id="wd-p-1">...</p>
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.

                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.

                This is the third paragraph. Wrap each paragraph with the paragraph
                tag to tell browsers to render the gaps.
            </div>

            {/* Paragraph layout */}
            <p id="wd-p-2">
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
            </p>
            <p id="wd-p-3">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.
            </p>
            <p id="wd-p-4">
                This is the third paragraph. Wrap each paragraph with the paragraph
                tag to tell browsers to render the gaps.
            </p>

            {/* Ordered List elements */}
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>2.8.1 Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
            </div>

            <div>
                <h5>My favorite recipe:</h5>
                <ol id="wd-your-favorite-recipe">
                    <li>1. Pour 2 cups of flour</li>
                    <li>2. Add 1 tbs of baking powder</li>
                    <li>3. Add 1 tbs of sugar</li>
                    <li>4. Add 1 tspn of salt</li>
                    <li>5. Mix all dry ingredients</li>
                    <li>6. In a separate bowl mix 2 eggs, 3/4 cup of butter, 1 cup of milk and 1 tspn of vanilla extract</li>
                    <li>7. Mix the content of both bowls, preheat a pan and pour 4 tbs of dough to a hot pan.</li>
                    <li>8. Enjoy your pancakes with your favorite jam!</li>
                </ol>
            </div>

            <h5>2.8.2 Unordered List Tag</h5>
            My favorite books (in no particular order)
            <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender's Game</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
            </ul>
            Your favorite books (in no particular order)
            <ul id="wd-your-books">
                <li>Zadig</li>
                <li>Metamorphosis</li>
                <li>A wild sheep chase</li>
                <li>Master and Margarita</li>
                <li>Heaven has no Favorites</li>
            </ul>

            <div id="wd-tables">
                <h4>2.9 Table Tag</h4>
                <table border={1} width="90%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>Cloud</td>
                            <td>4/11/21</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>Java</td>
                            <td>1/10/21</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Python</td>
                            <td>4/7/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>C++</td>
                            <td>12/12/21</td>
                            <td>96</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Cloud</td>
                            <td>6/17/21</td>
                            <td>97</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Network</td>
                            <td>9/01/21</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>AI</td>
                            <td>6/18/21</td>
                            <td>99</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>

                <div id="wd-images">
                    <h4>2.10 Image tag</h4>
                    Loading an image from the internet:
                    <br />
                    <img id="wd-starship"
                        width="400px"
                        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                        alt="Starship"
                    />
                    <br />

                    Loading a local image:
                    <br />
                    <img id="wd-teslabot" src="images/teslabot.jpg" alt="Teslabot" height="300px" />
                </div>

                <div id="wd-forms">
                    <h4>2.11.1 Form Elements</h4>
                    <form id="wd-text-fields">
                        <h5>Text Fields</h5>
                        <label htmlFor="wd-text-fields-username">Username:</label>
                        <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
                        <label htmlFor="wd-text-fields-password">Password:</label>
                        <input type="password" id="wd-text-fields-password" value="123@#$asd" />
                        <br />
                        <label htmlFor="wd-text-fields-first-name">First name:</label>
                        <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
                        <label htmlFor="wd-text-fields-last-name">Last name:</label>
                        <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
                            value="Wonderland" title="The last name" />

                        <h5>2.11.2 Text boxes</h5>
                        <label>Biography:</label><br />
                        <textarea id="wd-textarea" cols={50} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </textarea>

                        <h5 id="wd-buttons">2.11.3 Buttons</h5>
                        <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                            Hello World!
                        </button>

                        <h5>2.11.4 File upload</h5>
                        <input id="wd-upload" type="file" />

                        <h5 id="wd-radio-buttons">2.11.5 Radio buttons</h5>
                        <label>Favorite movie genre:</label>

                        <input type="radio" name="radio-genre" id="wd-radio-comedy" />
                        <label htmlFor="wd-radio-comedy">Comedy</label><br />

                        <input type="radio" name="radio-genre" id="wd-radio-drama" />
                        <label htmlFor="wd-radio-drama">Drama</label><br />

                        <input type="radio" name="radio-genre" id="wd-radio-scifi" />
                        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

                        <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
                        <label htmlFor="wd-radio-fantasy">Fantasy</label>


                        <h5 id="wd-checkboxes">2.11.6 Checkboxes</h5>
                        <label>Favorite movie genre:</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
                        <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                        <label htmlFor="wd-chkbox-drama">Drama</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                        <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>


                        <h4 id="wd-dropdowns">Dropdowns</h4>

                        <h5>2.11.7 Select one</h5>
                        <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
                        <select id="wd-select-one-genre">
                            <option value="COMEDY">Comedy</option>
                            <option value="DRAMA">Drama</option>
                            <option selected value="SCIFI">
                                Science Fiction</option>
                            <option value="FANTASY">Fantasy</option>
                        </select>

                        <h5>Select many</h5>
                        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
                        <select id="wd-select-many-genre" multiple>
                            <option selected value="COMEDY">Comedy</option>
                            <option value="DRAMA">Drama</option>
                            <option selected value="SCIFI">
                                Science Fiction</option>
                            <option value="FANTASY">Fantasy</option>
                        </select>

                        <h4>2.11.8 Other HTML field types</h4>
                        <label htmlFor="wd-text-fields-email"> Email: </label>
                        <input type="email"
                            placeholder="jdoe@somewhere.com"
                            id="wd-text-fields-email" /><br />

                        <label htmlFor="wd-text-fields-salary-start"> Starting salary:
                        </label>
                        <input type="number"
                            id="wd-text-fields-salary-start"
                            placeholder="100"
                            max={100}
                            min={0}
                            value="100" /><br />

                        <label htmlFor="wd-text-fields-rating"> Rating: </label>
                        <input type="range" id="wd-text-fields-rating"
                            placeholder="Doe"
                            max="5"
                            min="0"
                            value="3" /><br />

                        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                        <input type="date"
                            id="wd-text-fields-dob"
                            value="2024-09-14" /><br />

                        <h4>2.12 Anchor tag</h4>
                        <a href="aa.com">
                            American Airlines</a><br />

                        Please
                        <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a>
                        to get dummy text<br /><br></br>

                        To see my code in GitHub repository
                        <a id="wd-github" href="https://github.com/smatiukaite/kanbas-react-web-app-cs5610-fa24.git"> click here </a><br />
                    </form>
                </div>
            </div>
        </div>
    )
}