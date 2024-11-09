var _a, _b, _c;
// Selecting the hamburger menu, navbar, and nav links
var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('nav ul');
// Toggle class on click for responsive navigation
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener('click', function () {
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.toggle('active');
});
// Function to add new skill fields
function addSkill() {
    var container = document.getElementById("skills-container");
    var skillDiv = document.createElement("div");
    skillDiv.classList.add("skill-entry"); // Added class for easier access
    skillDiv.innerHTML = "\n        <input type=\"text\" class=\"skill-input\" placeholder=\"Enter a skill\">\n        <button type=\"button\" class=\"remove-btn\">_</button>\n    ";
    container.appendChild(skillDiv);
    // Add event listener to remove button
    var removeBtn = skillDiv.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
        container.removeChild(skillDiv);
    });
}
// Function to add new education fields
function addEducation() {
    var container = document.getElementById("education-container");
    var educationDiv = document.createElement("div");
    educationDiv.classList.add("education-entry"); // Added class for easier access
    educationDiv.innerHTML = "\n        <input type=\"text\" class=\"education-input\" placeholder=\"Enter degree\">\n        <input type=\"text\" class=\"education-input\" placeholder=\"Enter institution\">\n        <input type=\"date\" class=\"education-input\">\n        <button type=\"button\" class=\"remove-btn\">_</button>\n    ";
    container.appendChild(educationDiv);
    // Add event listener to remove button
    var removeBtn = educationDiv.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
        container.removeChild(educationDiv);
    });
}
// Function to add new work experience fields
function addWorkExperience() {
    var container = document.getElementById("work-container");
    var workDiv = document.createElement("div");
    workDiv.classList.add("work-entry"); // Added class for easier access
    workDiv.innerHTML = "\n        <input type=\"text\" class=\"work-input\" placeholder=\"Enter job title\">\n        <input type=\"text\" class=\"work-input\" placeholder=\"Enter company\">\n        <input type=\"date\" class=\"work-input\" placeholder=\"Enter start date\">\n        <input type=\"date\" class=\"work-input\" placeholder=\"Enter end date\">\n        <button type=\"button\" class=\"remove-btn\">_</button>\n    ";
    container.appendChild(workDiv);
    // Add event listener to remove button
    var removeBtn = workDiv.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
        container.removeChild(workDiv);
    });
}
// Add event listeners to the Add buttons
(_a = document.getElementById("add-skill")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addSkill);
(_b = document.getElementById("add-education")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", addEducation);
(_c = document.getElementById("add-work")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", addWorkExperience);
// Function to get selected gender
function getSelectedGender() {
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    return male.checked ? "Male" : female.checked ? "Female" : "";
}
// Function to collect skills from the skills container
function collectSkills() {
    var skillElements = document.querySelectorAll("#skills-container input");
    var skills = [];
    skillElements.forEach(function (skillInput) {
        skills.push(skillInput.value);
    });
    return skills;
}
// Collect education entries with degree name, institution, and year
function collectEducation() {
    var educationEntries = [];
    var educationContainers = document.querySelectorAll(".education-entry");
    educationContainers.forEach(function (container) {
        var degree = container.querySelector(".education-input:nth-of-type(1)").value;
        var institution = container.querySelector(".education-input:nth-of-type(2)").value;
        var year = container.querySelector(".education-input:nth-of-type(3)").value;
        educationEntries.push({ degree: degree, institution: institution, year: year });
    });
    return educationEntries;
}
// Collect work experience entries with company name, job title, and dates
function collectWorkExperience() {
    var workEntries = [];
    var workContainers = document.querySelectorAll(".work-entry");
    workContainers.forEach(function (container) {
        var jobTitle = container.querySelector(".work-input:nth-of-type(1)").value;
        var company = container.querySelector(".work-input:nth-of-type(2)").value;
        var startDate = container.querySelector(".work-input:nth-of-type(3)").value;
        var endDate = container.querySelector(".work-input:nth-of-type(4)").value;
        workEntries.push({ company: company, jobTitle: jobTitle, startDate: startDate, endDate: endDate });
    });
    return workEntries;
}
// Updated generateCV function to handle the profile picture
function generateCV() {
    // Get form values
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var dob = document.getElementById("dob").value;
    var gender = getSelectedGender();
    var religion = document.getElementById("religion").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin").value;
    var github = document.getElementById("github").value;
    var objective = document.getElementById("objective").value;
    var occupation = document.getElementById("occupation").value;
    // Collect skills, education, and work experience
    var skills = collectSkills();
    var educationEntries = collectEducation();
    var workEntries = collectWorkExperience();
    var profilePicInput = document.getElementById('profilePic');
    // Use FileReader to load the profile picture, if provided
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var profilePicSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            renderCV(fName, lName, dob, gender, religion, address, email, phone, linkedin, github, objective, occupation, skills, educationEntries, workEntries, profilePicSrc);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    else {
        // If no profile picture is provided, call renderCV without profile picture
        renderCV(fName, lName, dob, gender, religion, address, email, phone, linkedin, github, objective, occupation, skills, educationEntries, workEntries, null);
    }
}
// Separate function to render the CV layout with all collected data
function renderCV(fName, lName, dob, gender, religion, address, email, phone, linkedin, github, objective, occupation, skills, educationEntries, workEntries, profilePicSrc) {
    var cvHTML = "\n  <div class=\"resume-container\">\n      <div class=\"cv-container\">\n            <div class=\"profile-section\">\n                <div class=\"quote-section\">\n                    <p> <span>\u201C</span>".concat(objective, "</p>\n                </div>\n               <div class=\"profile-left\">\n                <div class=\"profile-image\"> ").concat(profilePicSrc ? "<img src=\"".concat(profilePicSrc, "\" alt=\"Profile Picture\" class=\"profile-image\">") : '', "</div>\n               <div class=\"profile-text\">\n                <h1>").concat(fName, "</h1>\n                <h2>").concat(lName, "</h2>\n                <p class=\"job-title\"> ").concat(occupation, "<br> ").concat(address, "</p>\n               </div>\n               </div>\n            </div>\n            <div class=\"sub-container\">\n            <div class=\"cv-left\">\n                <div class=\"contact-section\">\n                    <h3>Contact Info</h3>\n                    <p>\u2022 <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                    <p>\u2022 ").concat(phone, "</p>\n                    <p>\u2022 <a href=\"").concat(linkedin, "\" target=\"_blank\">LinkedIn Profile</a></p>\n                    <p>\u2022 GitHub: <a href=\"").concat(github, "\" target=\"_blank\">GitHub Profile</a></p>\n                </div>\n                <div class=\"personal-section\">\n                    <h3>Personal Information</h3>\n                  <p>\u2022 Date-of-birth: ").concat(dob, "\n                    </p>\n                  <p>\u2022 Religion: ").concat(religion, " \n                    </p>\n                  <p>\u2022 Gender: ").concat(gender, " \n                    </p>\n                </div>\n        \n                <div class=\"skills-section\">\n                    <h2>Skills</h2>\n                    <h3>Professional</h3>\n                    <ul>\n                         ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                    </ul>\n                </div>\n            </div>\n        <hr>\n            <div class=\"cv-right\">\n\n                <div class=\"education-section\">\n                    <h2>Education</h2>\n                <ul>\n                     ").concat(educationEntries
        .map(function (entry) { return "\n                      <li>\n                          <strong>".concat(entry.degree, "</strong>\n                           <p>").concat(entry.year, "</p>\n                              <p>").concat(entry.institution, "</p>\n                      </li>"); })
        .join(''), " \n                </ul>\n                </div>\n\n                <div class=\"experience-section\">\n                    <h2>Experience</h2>\n                      <ul>\n                        ").concat(workEntries
        .map(function (entry) { return "\n                          <li>\n                            <p>".concat(entry.startDate, " - ").concat(entry.endDate, "</p>\n                              <strong>").concat(entry.company, "</strong>\n                                  <p>").concat(entry.jobTitle, "</p>\n                          </li>"); })
        .join(''), "\n                    </ul> \n                </div>\n            </div>\n            </div>\n        </div>\n  ");
    // Hide the form and display the CV
    var formContainer = document.querySelector(".container");
    formContainer.style.display = "none"; // Hide the form
    var cvContainer = document.querySelector(".resume-output");
    cvContainer.innerHTML = cvHTML; // Display the CV
}
// Event listener for the Generate CV button
var generateCVBtn = document.querySelector(".generate-cv-btn");
generateCVBtn.addEventListener("click", generateCV);
