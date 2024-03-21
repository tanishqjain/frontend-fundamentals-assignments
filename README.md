## Overview
This repository is used for submitting assignments. Follow the instructions below to submit your assignment successfully.

## Steps to Submit Assignment

### 1. Clone this repository
First, clone this repository to your local machine using the following command:
```bash
git clone <repository_url>
```

### 2. Choose Your Development Branch
There are two development branches available:
- dev/dheeraj
- dev/cherishma

Choose the branch that corresponds to your assignment reviewer.

### 3. Create a Feature Branch
Create a feature branch from your chosen development branch using the following naming convention:
```bash
git checkout -b feature/<assignmentNumber> dev/dheeraj
```
Replace `<assignmentNumber>` with the number or identifier of your assignment.

### 4. Work on Your Assignment
Add your assignment submission files to your feature branch and make any necessary changes.

### 5. Place Solution Files (if required)
If your assignment requires solution files, place them in the "solutions" folder inside the assignment folder.

### 6. Commit Changes
Commit your changes to your feature branch using the following commands:
```bash
git add .
git commit -m "Add assignment submission"
```

### 7. Push Changes
Push your feature branch to the remote repository:
```bash
git push origin feature/<assignmentNumber>
```
Replace `<assignmentNumber>` with the number or identifier of your assignment.

### 8. Create a Pull Request
Once you have pushed your changes to your feature branch, go to the repository on GitHub and create a pull request from your feature branch to your chosen development branch (`dev/dheeraj` or `dev/cherishma`). Add me as a reviewer for your pull request.

### 9. Wait for Review
Wait for me to review your pull request. Make any necessary changes based on their feedback.

### 10. Merge Pull Request
Once your pull request is approved, merge it into the development branch.

## Additional Notes
- Make sure to follow the naming conventions for branches and commit messages specified by your team.
- If you encounter any issues during the submission process, reach out to me for assistance.

Happy coding!