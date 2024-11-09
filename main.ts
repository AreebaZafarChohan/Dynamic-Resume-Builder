// Selecting the hamburger menu, navbar, and nav links
const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
const navMenu = document.querySelector('nav ul') as HTMLElement | null;

// Toggle class on click for responsive navigation
hamburger?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
}); 


// Function to add new skill fields
function addSkill(): void {
  const container = document.getElementById("skills-container")!;
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-entry"); // Added class for easier access
  skillDiv.innerHTML = `
        <input type="text" class="skill-input" placeholder="Enter a skill">
        <button type="button" class="remove-btn">_</button>
    `;
  container.appendChild(skillDiv);

  // Add event listener to remove button
  const removeBtn = skillDiv.querySelector(".remove-btn") as HTMLButtonElement;
  removeBtn.addEventListener("click", () => {
    container.removeChild(skillDiv);
  });
}

// Function to add new education fields
function addEducation(): void {
  const container = document.getElementById("education-container")!;
  const educationDiv = document.createElement("div");
  educationDiv.classList.add("education-entry"); // Added class for easier access
  educationDiv.innerHTML = `
        <input type="text" class="education-input" placeholder="Enter degree">
        <input type="text" class="education-input" placeholder="Enter institution">
        <input type="date" class="education-input">
        <button type="button" class="remove-btn">_</button>
    `;
  container.appendChild(educationDiv);

  // Add event listener to remove button
  const removeBtn = educationDiv.querySelector(
    ".remove-btn"
  ) as HTMLButtonElement;
  removeBtn.addEventListener("click", () => {
    container.removeChild(educationDiv);
  });
}

// Function to add new work experience fields
function addWorkExperience(): void {
  const container = document.getElementById("work-container")!;
  const workDiv = document.createElement("div");
  workDiv.classList.add("work-entry"); // Added class for easier access
  workDiv.innerHTML = `
        <input type="text" class="work-input" placeholder="Enter job title">
        <input type="text" class="work-input" placeholder="Enter company">
        <input type="date" class="work-input" placeholder="Enter start date">
        <input type="date" class="work-input" placeholder="Enter end date">
        <button type="button" class="remove-btn">_</button>
    `;
  container.appendChild(workDiv);

  // Add event listener to remove button
  const removeBtn = workDiv.querySelector(".remove-btn") as HTMLButtonElement;
  removeBtn.addEventListener("click", () => {
    container.removeChild(workDiv);
  });
}

// Add event listeners to the Add buttons
document.getElementById("add-skill")?.addEventListener("click", addSkill);
document.getElementById("add-education")?.addEventListener("click", addEducation);
document.getElementById("add-work")?.addEventListener("click", addWorkExperience);


// Function to get selected gender
function getSelectedGender(): string {
  const male = document.getElementById("male") as HTMLInputElement;
  const female = document.getElementById("female") as HTMLInputElement;
  return male.checked ? "Male" : female.checked ? "Female" : "";
}

// Function to collect skills from the skills container
function collectSkills(): string[] {
  const skillElements = document.querySelectorAll("#skills-container input");
  const skills: string[] = [];
  skillElements.forEach((skillInput) => {
    skills.push((skillInput as HTMLInputElement).value);
  });
  return skills;
}

// Collect education entries with degree name, institution, and year
function collectEducation(): { degree: string; institution: string; year: string }[] {
  const educationEntries: { degree: string; institution: string; year: string }[] = [];
  const educationContainers = document.querySelectorAll(".education-entry");

  educationContainers.forEach((container) => {
    const degree = (container.querySelector(".education-input:nth-of-type(1)") as HTMLInputElement).value;
    const institution = (container.querySelector(".education-input:nth-of-type(2)") as HTMLInputElement).value;
    const year = (container.querySelector(".education-input:nth-of-type(3)") as HTMLInputElement).value;

    educationEntries.push({ degree, institution, year });
  });

  return educationEntries;
}



// Collect work experience entries with company name, job title, and dates
function collectWorkExperience(): { company: string; jobTitle: string; startDate: string; endDate: string }[] {
  const workEntries: { company: string; jobTitle: string; startDate: string; endDate: string }[] = [];
  const workContainers = document.querySelectorAll(".work-entry");

  workContainers.forEach((container) => {
    const jobTitle = (container.querySelector(".work-input:nth-of-type(1)") as HTMLInputElement).value;
    const company = (container.querySelector(".work-input:nth-of-type(2)") as HTMLInputElement).value;
    const startDate = (container.querySelector(".work-input:nth-of-type(3)") as HTMLInputElement).value;
    const endDate = (container.querySelector(".work-input:nth-of-type(4)") as HTMLInputElement).value;

    workEntries.push({ company, jobTitle, startDate, endDate });
  });

  return workEntries;
}


// Collect form data
let formData: Object | undefined = {
  fName: (document.getElementById("fName") as HTMLInputElement).value,
  lName: (document.getElementById("lName") as HTMLInputElement).value,
  dob: (document.getElementById("dob") as HTMLInputElement).value,
  gender: getSelectedGender(),
  religion: (document.getElementById("religion") as HTMLInputElement).value,
  address: (document.getElementById("address") as HTMLInputElement).value,
  email: (document.getElementById("email") as HTMLInputElement).value,
  phone: (document.getElementById("phone") as HTMLInputElement).value,
  linkedin: (document.getElementById("linkedin") as HTMLInputElement).value,
  github: (document.getElementById("github") as HTMLInputElement).value,
  objective: (document.getElementById("objective") as HTMLTextAreaElement).value,
  occupation: (document.getElementById("occupation") as HTMLInputElement).value,
  fileInput: (document.getElementById('fileInput') as HTMLInputElement).value,

  // Collect skills, education, and work experience
  skills: collectSkills(),
  educationEntries: collectEducation(),
  workEntries: collectWorkExperience(),
};

// Function to render the resume based on the selected template and form data

function renderTemplate(data, templateId) {
  const resumeOutput = document.getElementById('resume-output')!;
  // Clear any previous content
  resumeOutput.innerHTML = '';

  // Template rendering logic based on selected template
  if (templateId === 'template1') {
      resumeOutput.innerHTML = 
          `
  <div class="resume-container">
      <div class="cv-container">
            <div class="profile-section">
                <div class="quote-section">
                    <p> <span>“</span>${data.objective}</p>
                </div>
               <div class="profile-left">
                <div class="profile-image"></div>
               <div class="profile-text">
                <h1>{data.fName}</h1>
                <h2>{data.lName}</h2>
                <p class="job-title">{data.occupation}<br>{data.address}</p>
               </div>
               </div>
            </div>
            <div class="sub-container">
                  Left Column  
            <div class="cv-left">
                
                <div class="contact-section">
                    <h3>Contact Info</h3>
                    <p>• <a href="mailto:${data.email}">${data.email}</a></p>
                    <p>• ${data.phone}</p>
                    <p>• <a href="${data.linkedin}" target="_blank">LinkedIn Profile</a></p>
                    <p>• GitHub: <a href="${data.github}" target="_blank">GitHub Profile</a></p>
                </div>
                <div class="personal-section">
                    <h3>Personal Information</h3>
                  <p>• Date-of-birth: ${data.dob}
                    </p>
                  <p>• Religion: ${data.religion} 
                    </p>
                  <p>• Gender: ${data.gender} 
                    </p>
                </div>
        
                <div class="skills-section">
                    <h2>Skills</h2>
                    <h3>Professional</h3>
                    <ul>
                         ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
        <hr>
              Right Column  
            <div class="cv-right">

                <div class="education-section">
                    <h2>Education</h2>
                <ul>
                     ${data.educationEntries
                      .map(
                        (entry) => `
                      <li>
                          <strong>${entry.degree}</strong>
                           <p>${entry.year}</p>
                              <p>${entry.institution}</p>
                      </li>`
                      )
                      .join('')} 
                </ul>
                </div>

                <div class="experience-section">
                    <h2>Experience</h2>
                      <ul>
                        ${data.workEntries
                          .map(
                            (entry) => `
                          <li>
                            <p>${entry.startDate} - {entry.endDate}</p>
                              <strong>${entry.company}</strong>
                                  <p>${entry.jobTitle}</p>
                          </li>`
                          )
                          .join('')}
                    </ul> 
                </div>
            </div>
            </div>
        </div>`       
      ;
  } else if (templateId === 'template2') {
      resumeOutput.innerHTML = `
          <div class="template2 selected-template">
              <header>
                  <h1>${data.name}</h1>
                  <h3>${data.jobTitle}</h3>
              </header>
              <section>
                  <h2>Contact Information</h2>
                  <p>${data.contact}</p>
              </section>
              <section>
                  <h2>Experience</h2>
                  <p>${data.experience}</p>
              </section>
              <section>
                  <h2>Education</h2>
                  <p>${data.education}</p>
              </section>
              <section>
                  <h2>Skills</h2>
                  <p>${data.skills}</p>
              </section>
          </div>
      `;
  } else if (templateId === 'template3') {
      resumeOutput.innerHTML = `
          <div class="template3 selected-template">
              <header>
                  <h1>${data.name}</h1>
                  <p><strong>Job Title:</strong> ${data.jobTitle}</p>
                  <p><strong>Contact:</strong> ${data.contact}</p>
              </header>
              <div class="content">
                  <div class="section">
                      <h3>Experience</h3>
                      <p>${data.experience}</p>
                  </div>
                  <div class="section">
                      <h3>Education</h3>
                      <p>${data.education}</p>
                  </div>
                  <div class="section">
                      <h3>Skills</h3>
                      <p>${data.skills}</p>
                  </div>
              </div>
          </div>
        `;
     } else if (templateId === 'template4') {
      resumeOutput.innerHTML = 
      `
<div class="resume-container">
  <header class="header">
      <h1>${data.fName} ${data.lName}</h1>
      <p>${data.occupation} | ${data.address}</p>
  </header>

  <div class="resume-content">
      <div class="left-side">
          <section class="contact-info">
              <h2>Contact Information</h2>
              <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
              <p>Phone: ${data.phone}</p>
              <p>LinkedIn: <a href="${data.linkedin}" target="_blank">LinkedIn Profile</a></p>
              <p>GitHub: <a href="${data.github}" target="_blank">GitHub Profile</a></p>
          </section>

          <section class="personal-info">
              <h2>Personal Information</h2>
              <p>Date-of-birth: ${data.dob}</p>
              <p>Religion: ${data.religion}</p>
              <p>Gender: ${data.gender}</p>
          </section>

          <section class="objective">
              <h2>Objective</h2>
              <p>${data.objective}</p>
          </section>
      </div>

      <div class="right-side">
          <section class="skills">
              <h2>Skills</h2>
              <ul>
                  ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
              </ul>
          </section>

           <section class="education">
                <h2>Education</h2>
                <ol>
                    ${data.educationEntries
                      .map(
                        (entry) => `
                      <li>
                          <strong>${entry.degree}</strong>
                          <ul>
                              <li>${entry.institution}</li>
                      <li>${entry.year}</li>
                          </ul>
                      </li>`
                      )
                      .join('')}
                </ol>
                <br> 
            </section>

           <section class="experience">
                <h2>Experience</h2>
                 <ol>
                    ${data.workEntries
                      .map(
                        (entry) => `
                      <li>
                          <strong>${entry.company}</strong>
                          <ul>
                              <li>${entry.jobTitle}</li>
                              <li>Start Date: ${entry.startDate}</li>
                              <li>End Date: ${entry.endDate}</li>
                          </ul>
                      </li>`
                      )
                      .join('')}
                </ol>
            </section>

      </div>
  </div>

  <footer class="footer">
      <p>Find me on <a href="mailto:${data.email}">Email</a> | <a href="${data.github}" target="_blank">GitHub</a></p>
  </footer>
</div>`
  ;
     } else {
      resumeOutput.innerHTML = `
      Template not found ${selectedTemplate}`
     }
};

// Variables to store selected template and form data
let selectedTemplate: string | null = null;

// Get template options and set up click event for template selection
function handleTamplateSelection(buttonIds:string[]): string | undefined {
  let selectedId: string| undefined;

  buttonIds.forEach((id) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener('click', () => {
        selectedId = id;
        renderTemplate(formData, selectedId);
        selectedTemplate = selectedId;
      });
    }
  });
  return selectedId;
}


// Reference to the submit button
const submitButton = document.getElementById('submit-button') as HTMLButtonElement;

// Submit handler
submitButton.addEventListener('click', (event) => {

  if (!selectedTemplate) {
    alert("Please select a template before.");
    event.preventDefault(); // Stop form submission
    return;
  }

  const buttonIds = ['template-1','template-2','template-3','template-4'];
  handleTamplateSelection(buttonIds);
});

console.log('selected template', selectedTemplate);