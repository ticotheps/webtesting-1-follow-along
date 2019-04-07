# Testing

## Step-by-Step Instructions 

1) Create an empty folder in the terminal using 'mkdir webtesting-1-follow-along'.

2) Open this folder in VS code.

3) Run the 'git init' command in the terminal to create a git repository for this new folder.

4) Run the 'npx gitignore node' command in the terminal to create a .gitignore file.

5) Run the 'npm init -y' command in the terminal to create a package.json file to configure your dependencies.

6) Run the 'yarn add jest --dev' command in the terminal to install 'jest' as a devDependency.

7) Change the value for the 'test' script (inside package.json) to 'jest --watch', which will keep the Jest tests running (like nodemon does for our server)"
[master c6360b0] Changes the value for the 'test' script (inside package.json) to 'jest --watch', which will execute Jest and also KEEP the Jest tests running (like nodemon does for our server). 

8) You can now execute Jest with the 'yarn test' command.

9) Create a new "__tests__" folder in the root directory to store your new tests in. Jest will check this folder for tests to run. 
    -This is one way that Jest will know HOW to identify WHICH tests to execute.
    -Jest will try to execute ANY files in the '__tests__' folder with an extension of '.js'.

10) Create two new files ('math.js' and 'strings.js') inside the '__tests__' folder.

11) Create two new files ('math.test.js' and "math.spec.js') inside the root directory. 
    -This is another way that Jest will know HOW to identify WHICH tests to execute---by looking for files with an extension of '.spec.js' or '.test.js'.

12) Writes a test suite in the 'math.spec.js' file and writes the corresponding functions inside the 'math.js' file.