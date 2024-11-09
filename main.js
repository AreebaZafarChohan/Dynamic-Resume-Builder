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
// Collect form data
var formData = {
    fName: document.getElementById("fName").value,
    lName: document.getElementById("lName").value,
    dob: document.getElementById("dob").value,
    gender: getSelectedGender(),
    religion: document.getElementById("religion").value,
    address: document.getElementById("address").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    linkedin: document.getElementById("linkedin").value,
    github: document.getElementById("github").value,
    objective: document.getElementById("objective").value,
    occupation: document.getElementById("occupation").value,
    fileInput: document.getElementById('fileInput').value,
    // Collect skills, education, and work experience
    skills: collectSkills(),
    educationEntries: collectEducation(),
    workEntries: collectWorkExperience(),
};
// Function to render the resume based on the selected template and form data
function renderTemplate(data, templateId) {
    var resumeOutput = document.getElementById('resume-output');
    // Clear any previous content
    resumeOutput.innerHTML = '';
    // Template rendering logic based on selected template
    if (templateId === 'template1') {
        resumeOutput.innerHTML =
            "\n  <div class=\"resume-container\">\n      <div class=\"cv-container\">\n            <div class=\"profile-section\">\n                <div class=\"quote-section\">\n                    <p> <span>\u201C</span>".concat(data.objective, "</p>\n                </div>\n               <div class=\"profile-left\">\n                <div class=\"profile-image\"></div>\n               <div class=\"profile-text\">\n                <h1>{data.fName}</h1>\n                <h2>{data.lName}</h2>\n                <p class=\"job-title\">{data.occupation}<br>{data.address}</p>\n               </div>\n               </div>\n            </div>\n            <div class=\"sub-container\">\n                  Left Column  \n            <div class=\"cv-left\">\n                \n                <div class=\"contact-section\">\n                    <h3>Contact Info</h3>\n                    <p>\u2022 <a href=\"mailto:").concat(data.email, "\">").concat(data.email, "</a></p>\n                    <p>\u2022 ").concat(data.phone, "</p>\n                    <p>\u2022 <a href=\"").concat(data.linkedin, "\" target=\"_blank\">LinkedIn Profile</a></p>\n                    <p>\u2022 GitHub: <a href=\"").concat(data.github, "\" target=\"_blank\">GitHub Profile</a></p>\n                </div>\n                <div class=\"personal-section\">\n                    <h3>Personal Information</h3>\n                  <p>\u2022 Date-of-birth: ").concat(data.dob, "\n                    </p>\n                  <p>\u2022 Religion: ").concat(data.religion, " \n                    </p>\n                  <p>\u2022 Gender: ").concat(data.gender, " \n                    </p>\n                </div>\n        \n                <div class=\"skills-section\">\n                    <h2>Skills</h2>\n                    <h3>Professional</h3>\n                    <ul>\n                         ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                    </ul>\n                </div>\n            </div>\n        <hr>\n              Right Column  \n            <div class=\"cv-right\">\n\n                <div class=\"education-section\">\n                    <h2>Education</h2>\n                <ul>\n                     ").concat(data.educationEntries
                .map(function (entry) { return "\n                      <li>\n                          <strong>".concat(entry.degree, "</strong>\n                           <p>").concat(entry.year, "</p>\n                              <p>").concat(entry.institution, "</p>\n                      </li>"); })
                .join(''), " \n                </ul>\n                </div>\n\n                <div class=\"experience-section\">\n                    <h2>Experience</h2>\n                      <ul>\n                        ").concat(data.workEntries
                .map(function (entry) { return "\n                          <li>\n                            <p>".concat(entry.startDate, " - {entry.endDate}</p>\n                              <strong>").concat(entry.company, "</strong>\n                                  <p>").concat(entry.jobTitle, "</p>\n                          </li>"); })
                .join(''), "\n                    </ul> \n                </div>\n            </div>\n            </div>\n        </div>");
    }
    else if (templateId === 'template2') {
        resumeOutput.innerHTML = "\n          <div class=\"template2 selected-template\">\n              <header>\n                  <h1>".concat(data.name, "</h1>\n                  <h3>").concat(data.jobTitle, "</h3>\n              </header>\n              <section>\n                  <h2>Contact Information</h2>\n                  <p>").concat(data.contact, "</p>\n              </section>\n              <section>\n                  <h2>Experience</h2>\n                  <p>").concat(data.experience, "</p>\n              </section>\n              <section>\n                  <h2>Education</h2>\n                  <p>").concat(data.education, "</p>\n              </section>\n              <section>\n                  <h2>Skills</h2>\n                  <p>").concat(data.skills, "</p>\n              </section>\n          </div>\n      ");
    }
    else if (templateId === 'template3') {
        resumeOutput.innerHTML = "\n          <div class=\"template3 selected-template\">\n              <header>\n                  <h1>".concat(data.name, "</h1>\n                  <p><strong>Job Title:</strong> ").concat(data.jobTitle, "</p>\n                  <p><strong>Contact:</strong> ").concat(data.contact, "</p>\n              </header>\n              <div class=\"content\">\n                  <div class=\"section\">\n                      <h3>Experience</h3>\n                      <p>").concat(data.experience, "</p>\n                  </div>\n                  <div class=\"section\">\n                      <h3>Education</h3>\n                      <p>").concat(data.education, "</p>\n                  </div>\n                  <div class=\"section\">\n                      <h3>Skills</h3>\n                      <p>").concat(data.skills, "</p>\n                  </div>\n              </div>\n          </div>\n        ");
    }
    else if (templateId === 'template4') {
        resumeOutput.innerHTML =
            "\n<div class=\"resume-container\">\n  <header class=\"header\">\n      <h1>".concat(data.fName, " ").concat(data.lName, "</h1>\n      <p>").concat(data.occupation, " | ").concat(data.address, "</p>\n  </header>\n\n  <div class=\"resume-content\">\n      <div class=\"left-side\">\n          <section class=\"contact-info\">\n              <h2>Contact Information</h2>\n              <p>Email: <a href=\"mailto:").concat(data.email, "\">").concat(data.email, "</a></p>\n              <p>Phone: ").concat(data.phone, "</p>\n              <p>LinkedIn: <a href=\"").concat(data.linkedin, "\" target=\"_blank\">LinkedIn Profile</a></p>\n              <p>GitHub: <a href=\"").concat(data.github, "\" target=\"_blank\">GitHub Profile</a></p>\n          </section>\n\n          <section class=\"personal-info\">\n              <h2>Personal Information</h2>\n              <p>Date-of-birth: ").concat(data.dob, "</p>\n              <p>Religion: ").concat(data.religion, "</p>\n              <p>Gender: ").concat(data.gender, "</p>\n          </section>\n\n          <section class=\"objective\">\n              <h2>Objective</h2>\n              <p>").concat(data.objective, "</p>\n          </section>\n      </div>\n\n      <div class=\"right-side\">\n          <section class=\"skills\">\n              <h2>Skills</h2>\n              <ul>\n                  ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n              </ul>\n          </section>\n\n           <section class=\"education\">\n                <h2>Education</h2>\n                <ol>\n                    ").concat(data.educationEntries
                .map(function (entry) { return "\n                      <li>\n                          <strong>".concat(entry.degree, "</strong>\n                          <ul>\n                              <li>").concat(entry.institution, "</li>\n                      <li>").concat(entry.year, "</li>\n                          </ul>\n                      </li>"); })
                .join(''), "\n                </ol>\n                <br> \n            </section>\n\n           <section class=\"experience\">\n                <h2>Experience</h2>\n                 <ol>\n                    ").concat(data.workEntries
                .map(function (entry) { return "\n                      <li>\n                          <strong>".concat(entry.company, "</strong>\n                          <ul>\n                              <li>").concat(entry.jobTitle, "</li>\n                              <li>Start Date: ").concat(entry.startDate, "</li>\n                              <li>End Date: ").concat(entry.endDate, "</li>\n                          </ul>\n                      </li>"); })
                .join(''), "\n                </ol>\n            </section>\n\n      </div>\n  </div>\n\n  <footer class=\"footer\">\n      <p>Find me on <a href=\"mailto:").concat(data.email, "\">Email</a> | <a href=\"").concat(data.github, "\" target=\"_blank\">GitHub</a></p>\n  </footer>\n</div>");
    }
    else {
        resumeOutput.innerHTML = "\n      Template not found ".concat(selectedTemplate);
    }
}
;
// Variables to store selected template and form data
var selectedTemplate = null;
// Get template options and set up click event for template selection
function handleTamplateSelection(buttonIds) {
    var selectedId;
    buttonIds.forEach(function (id) {
        var button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', function () {
                selectedId = id;
                renderTemplate(formData, selectedId);
                selectedTemplate = selectedId;
            });
        }
    });
    return selectedId;
}
// Reference to the submit button
var submitButton = document.getElementById('submit-button');
// Submit handler
submitButton.addEventListener('click', function (event) {
    if (!selectedTemplate) {
        alert("Please select a template before.");
        event.preventDefault(); // Stop form submission
        return;
    }
    var buttonIds = ['template-1', 'template-2', 'template-3', 'template-4'];
    handleTamplateSelection(buttonIds);
});
console.log('selected template', selectedTemplate);
