var _a, _b, _c;
// Function to add new skill fields
function addSkill() {
    var container = document.getElementById("skills-container");
    var skillDiv = document.createElement("div");
    skillDiv.classList.add("skill-entry"); // Added class for easier access
    skillDiv.innerHTML = "\n        <input type=\"text\" class=\"skill-input\" placeholder=\"Enter a skill\">\n        <button type=\"button\" class=\"remove-btn\">Remove</button>\n    ";
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
    educationDiv.innerHTML = "\n        <input type=\"text\" class=\"education-input\" placeholder=\"Enter degree\">\n        <input type=\"text\" class=\"education-input\" placeholder=\"Enter institution\">\n        <input type=\"date\" class=\"education-input\">\n        <button type=\"button\" class=\"remove-btn\">Remove</button>\n    ";
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
    workDiv.innerHTML = "\n        <input type=\"text\" class=\"work-input\" placeholder=\"Enter job title\">\n        <input type=\"text\" class=\"work-input\" placeholder=\"Enter company\">\n        <input type=\"date\" class=\"work-input\" placeholder=\"Enter start date\">\n        <input type=\"date\" class=\"work-input\" placeholder=\"Enter end date\">\n        <button type=\"button\" class=\"remove-btn\">Remove</button>\n    ";
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
// Function to generate the CV
function generateCV() {
    // Get form values
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var dob = document.getElementById("dob").value;
    var gender = getSelectedGender();
    var religion = document.getElementById("religion")
        .value;
    var address = document.getElementById("address")
        .value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin")
        .value;
    var github = document.getElementById("github").value;
    var objective = document.getElementById("objective").value;
    var occupation = document.getElementById("occupation")
        .value;
    // Collect skills, education, and work experience
    var skills = collectSkills();
    var educationEntries = collectEducation();
    var workEntries = collectWorkExperience();
    // Create the CV layout
    var cvHTML = "\n  <div class=\"resume-container\">\n      <header class=\"header\">\n          <h1>".concat(fName, " ").concat(lName, "</h1>\n          <p>").concat(occupation, " | ").concat(address, "</p>\n      </header>\n\n      <div class=\"resume-content\">\n          <div class=\"left-side\">\n              <section class=\"contact-info\">\n                  <h2>Contact Information</h2>\n                  <p>Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                  <p>Phone: ").concat(phone, "</p>\n                  <p>LinkedIn: <a href=\"").concat(linkedin, "\" target=\"_blank\">LinkedIn Profile</a></p>\n                  <p>GitHub: <a href=\"").concat(github, "\" target=\"_blank\">GitHub Profile</a></p>\n              </section>\n\n              <section class=\"personal-info\">\n                  <h2>Personal Information</h2>\n                  <p>Date-of-birth: ").concat(dob, "</p>\n                  <p>Religion: ").concat(religion, "</p>\n                  <p>Gender: ").concat(gender, "</p>\n              </section>\n\n              <section class=\"objective\">\n                  <h2>Objective</h2>\n                  <p>").concat(objective, "</p>\n              </section>\n          </div>\n\n          <div class=\"right-side\">\n              <section class=\"skills\">\n                  <h2>Skills</h2>\n                  <ul>\n                      ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                  </ul>\n              </section>\n\n               <section class=\"education\">\n                    <h2>Education</h2>\n                    <ol>\n                        ").concat(educationEntries
        .map(function (entry) { return "\n                          <li>\n                              <strong>".concat(entry.degree, "</strong>\n                              <ul>\n                                  <li>").concat(entry.institution, "</li>\n                          <li>").concat(entry.year, "</li>\n                              </ul>\n                          </li>"); })
        .join(''), "\n                    </ol>\n                    <br> \n                </section>\n\n               <section class=\"experience\">\n                    <h2>Experience</h2>\n                     <ol>\n                        ").concat(workEntries
        .map(function (entry) { return "\n                          <li>\n                              <strong>".concat(entry.company, "</strong>\n                              <ul>\n                                  <li>").concat(entry.jobTitle, "</li>\n                                  <li>Start Date: ").concat(entry.startDate, "</li>\n                                  <li>End Date: ").concat(entry.endDate, "</li>\n                              </ul>\n                          </li>"); })
        .join(''), "\n                    </ol>\n                </section>\n\n          </div>\n      </div>\n\n      <footer class=\"footer\">\n          <p>Find me on <a href=\"mailto:").concat(email, "\">Email</a> | <a href=\"").concat(github, "\" target=\"_blank\">GitHub</a></p>\n      </footer>\n  </div>");
    // Hide the form and display the CV
    var formContainer = document.querySelector(".container");
    formContainer.style.display = "none"; // Hide the form
    var cvContainer = document.querySelector(".resume-container");
    cvContainer.innerHTML = cvHTML; // Display the CV
}
var generateCVBtn = document.querySelector(".generate-cv-btn");
generateCVBtn.addEventListener("click", generateCV);
