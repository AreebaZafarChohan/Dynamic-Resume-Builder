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


// Updated generateCV function to handle the profile picture

function generateCV() {
  // Get form values
  const fName = (document.getElementById("fName") as HTMLInputElement).value;
  const lName = (document.getElementById("lName") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const gender = getSelectedGender();
  const religion = (document.getElementById("religion") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
  const github = (document.getElementById("github") as HTMLInputElement).value;
  const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
  const occupation = (document.getElementById("occupation") as HTMLInputElement).value;
  
  // Collect skills, education, and work experience
  const skills = collectSkills();
  const educationEntries = collectEducation();
  const workEntries = collectWorkExperience();

  const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;

  // Use FileReader to load the profile picture, if provided
  if (profilePicInput.files && profilePicInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const profilePicSrc = e.target?.result as string;
      renderCV(fName, lName, dob, gender, religion, address, email, phone, linkedin, github, objective, occupation, skills, educationEntries, workEntries, profilePicSrc);
    };
    reader.readAsDataURL(profilePicInput.files[0]);
  } else {
    // If no profile picture is provided, call renderCV without profile picture
    renderCV(fName, lName, dob, gender, religion, address, email, phone, linkedin, github, objective, occupation, skills, educationEntries, workEntries, null);
  }
}

// Separate function to render the CV layout with all collected data
function renderCV(
  fName: string, lName: string, dob: string, gender: string, religion: string,
  address: string, email: string, phone: string, linkedin: string, github: string,
  objective: string, occupation: string, skills: string[],
  educationEntries: { degree: string; institution: string; year: string }[],
  workEntries: { company: string; jobTitle: string; startDate: string; endDate: string }[],
  profilePicSrc: string | null
) {
  const cvHTML = `
  <div class="resume-container">
      <div class="cv-container">
            <div class="profile-section">
                <div class="quote-section">
                    <p> <span>“</span>${objective}</p>
                </div>
               <div class="profile-left">
                <div class="profile-image"> ${profilePicSrc ? `<img src="${profilePicSrc}" alt="Profile Picture" class="profile-image">` : ''}</div>
               <div class="profile-text">
                <h1>${fName}</h1>
                <h2>${lName}</h2>
                <p class="job-title"> ${occupation}<br> ${address}</p>
               </div>
               </div>
            </div>
            <div class="sub-container">
            <div class="cv-left">
                <div class="contact-section">
                    <h3>Contact Info</h3>
                    <p>• <a href="mailto:${ email}">${ email}</a></p>
                    <p>• ${ phone}</p>
                    <p>• <a href="${ linkedin}" target="_blank">LinkedIn Profile</a></p>
                    <p>• GitHub: <a href="${ github}" target="_blank">GitHub Profile</a></p>
                </div>
                <div class="personal-section">
                    <h3>Personal Information</h3>
                  <p>• Date-of-birth: ${ dob}
                    </p>
                  <p>• Religion: ${ religion} 
                    </p>
                  <p>• Gender: ${ gender} 
                    </p>
                </div>
        
                <div class="skills-section">
                    <h2>Skills</h2>
                    <h3>Professional</h3>
                    <ul>
                         ${ skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
        <hr>
            <div class="cv-right">

                <div class="education-section">
                    <h2>Education</h2>
                <ul>
                     ${ educationEntries
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
                        ${workEntries
                          .map(
                            (entry) => `
                          <li>
                            <p>${entry.startDate} - ${entry.endDate}</p>
                              <strong>${entry.company}</strong>
                                  <p>${entry.jobTitle}</p>
                          </li>`
                          )
                          .join('')}
                    </ul> 
                </div>
            </div>
            </div>
        </div>
  `;

  // Hide the form and display the CV
  const formContainer = document.querySelector(".container") as HTMLElement;
  formContainer.style.display = "none"; // Hide the form
  const cvContainer = document.querySelector(".resume-output") as HTMLElement;
  cvContainer.innerHTML = cvHTML; // Display the CV
}

// Event listener for the Generate CV button
const generateCVBtn = document.querySelector(".generate-cv-btn") as HTMLButtonElement;
generateCVBtn.addEventListener("click", generateCV);