// Function to add new skill fields
function addSkill(): void {
  const container = document.getElementById("skills-container")!;
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-entry"); // Added class for easier access
  skillDiv.innerHTML = `
        <input type="text" class="skill-input" placeholder="Enter a skill">
        <button type="button" class="remove-btn">Remove</button>
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
        <button type="button" class="remove-btn">Remove</button>
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
        <button type="button" class="remove-btn">Remove</button>
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

// Function to generate the CV
function generateCV() {
  // Get form values
  const fName = (document.getElementById("fName") as HTMLInputElement).value;
  const lName = (document.getElementById("lName") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const gender = getSelectedGender();
  const religion = (document.getElementById("religion") as HTMLInputElement)
    .value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
    .value;
  const github = (document.getElementById("github") as HTMLInputElement).value;
  const objective = (
    document.getElementById("objective") as HTMLTextAreaElement
  ).value;
  const occupation = (document.getElementById("occupation") as HTMLInputElement)
    .value;

  // Collect skills, education, and work experience
  const skills = collectSkills();
  const educationEntries = collectEducation();
  const workEntries = collectWorkExperience();

  // Create the CV layout
  const cvHTML = `
  <div class="resume-container">
      <header class="header">
          <h1>${fName} ${lName}</h1>
          <p>${occupation} | ${address}</p>
      </header>

      <div class="resume-content">
          <div class="left-side">
              <section class="contact-info">
                  <h2>Contact Information</h2>
                  <p>Email: <a href="mailto:${email}">${email}</a></p>
                  <p>Phone: ${phone}</p>
                  <p>LinkedIn: <a href="${linkedin}" target="_blank">LinkedIn Profile</a></p>
                  <p>GitHub: <a href="${github}" target="_blank">GitHub Profile</a></p>
              </section>

              <section class="personal-info">
                  <h2>Personal Information</h2>
                  <p>Date-of-birth: ${dob}</p>
                  <p>Religion: ${religion}</p>
                  <p>Gender: ${gender}</p>
              </section>

              <section class="objective">
                  <h2>Objective</h2>
                  <p>${objective}</p>
              </section>
          </div>

          <div class="right-side">
              <section class="skills">
                  <h2>Skills</h2>
                  <ul>
                      ${skills.map(skill => `<li>${skill}</li>`).join('')}
                  </ul>
              </section>

               <section class="education">
                    <h2>Education</h2>
                    <ol>
                        ${educationEntries
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
                        ${workEntries
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
          <p>Find me on <a href="mailto:${email}">Email</a> | <a href="${github}" target="_blank">GitHub</a></p>
      </footer>
  </div>`;

  // Hide the form and display the CV
  const formContainer = document.querySelector(".container") as HTMLElement;
  formContainer.style.display = "none"; // Hide the form
  const cvContainer = document.querySelector(".resume-container") as HTMLElement;
  cvContainer.innerHTML = cvHTML; // Display the CV

}

const generateCVBtn = document.querySelector(".generate-cv-btn") as HTMLButtonElement;
  generateCVBtn.addEventListener("click", generateCV);