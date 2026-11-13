

// Github actions:: 
/*
github/gitlab/bitbucket - all three are used for version control tool. 

version control tools are ued to manage the changes in the code and keep track the changes made to the code over time.

Github/bitbucket will be used by testing team. 
Gitlab - is mostly used by development team and devops team.

// Download the git from the official website and install it on your machine.
// Create a github account. 

:::: Assume there is no repository created in the github account.
 Pre-condition: Make sure you have crated  a github account and installed git on your machine.

 1. Login to Github >> create new reposoitory and provide the respoitory name and description.
 2. Open the terminal in vs code and perform below actions: 
 3. git init >> to initialize the git in your local machine.
 4. git add . >> to add all the files in the local repository.
 5. git commit -m "first commit" >> to commit the changes made in the local repository.
 6. git branch -M main >> to rename the default branch name from master to main.
 7. git remote add origin <repository url> >> to add the remote repository url.
 8. git push -u origin main >> to push the changes to the remote repository.

// You already have a repository created in the github account.
you also have main branch 
if we need to work on a new feature, we need to create a new branch from the main branch.
1. Clone the repository to your local machine using below command 
    git clone <repository url>.
    repository url can be copied from github >> code >> clone >> copy the url.
    https://github.com/roy95robin/AUGMORNINGBATCHFRAMEWORK.git
        git clone https://github.com/roy95robin/AUGMORNINGBATCHFRAMEWORK.git
2. Once the clone is completed , we need install node dependencies using below command
    npm install
    npm init playwright 
3. Create a new branch local branch from the main branch using below command
    ** you will never push the changes to the main branch. 
    create the local branch using below command
    git checkout -b <branch name>
4. check if the local branch is created using below command
    git branch -- it will give the list of branches. 
5. Make changes to the code and push the code to the repository. 
6. git status >> to check the status of the files in the local repository.
7. git add . >> to add the files to the local repository.
8. git commit -m "commit message" >> to commit the changes made in the local repository.
9. git push (it might give you some recommended command to execute.)

*/