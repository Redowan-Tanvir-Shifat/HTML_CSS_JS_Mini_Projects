let names = [
  "English I",
  "English II",
  "History of the Emergence of Bangladesh",
  "Introduction to Computer Systems",
  "Discrete Mathematics",
  "Structured Programming Language",
  "Structured Programming Language Laboratory",
  "Fundamental Calculus",
  "Calculus and Linear Algebra",
  "Digital Logic Design",
  "Digital Logic Design Laboratory",
  "Object Oriented Programming",
  "Object Oriented Programming Laboratory",
  "Coordinate Geometry and Vector Analysis",
  "Physics",
  "Physics Laboratory",
  "Advanced Object Oriented Programming laboratory",
  "Electrical Circuits",
  "Probability and Statistics",
  "Society, Environment and Engineering Ethics",
  "Data Structure and Algorithms I",
  "Data Structure and Algorithms I Laboratory",
  "Theory of Computation",
  "Computer Architecture",
  "Data Structure and Algorithms II",
  "Data Structure and Algorithms II Laboratory",
  "Electronics",
  "Electronics Laboratory",
  "Database Management Systems",
  "Database Management Systems Laboratory",
  "System Analysis and Design",
  "System Analysis and Design Laboratory",
  "Artificial Intelligence",
  "Artificial Intelligence Laboratory",
  "Microprocessors and Microcontrollers",
  "Microprocessors and Microcontrollers Laboratory",
  "System Analysis and Design",
  "System Analysis and Design Laboratory",
  "Computer Networks",
  "Computer Networks Laboratory",
  "Biology for Engineers",
  "Software Engineering",
  "Software Engineering Laboratory",
  "Programming Optional",
  "Web Programming",
  "Mobile Application Development",
  "Project Management",
  "General Education Optional I",
  "Economics",
  "Introduction to Sociology",
  "Financial and Managerial Accounting",
  "Industrial and Operational Management",
  "Technology Entrepreneurship",
  "Psychology",
  "Bangladesh Studies",
  "Bangla",
  "Final Year Design Project I",
  "General Education Optional II",
  "Elective I",
  "Elective II",
  "Elective III",
  "Final Year Design Project II",
  "Computer Security",
  "Final Year Design Project III",
  "Green Computing",
  "Elective IV",
  "Elective V",
  "Mathematical Analysis for Computer Science",
  "Basic Graph Theory",
  "Algorithm Engineering",
  "Compiler Design",
  "Computational Geometry",
  "Computer Graphics",
  "Data Communication",
  "Wireless and Cellular Communication",
  "Advanced Network Services and Management",
  "Cryptography",
  "Networks Security",
  "Electronic Business",
  "Multimedia Systems Design",
  "Distributed Systems",
  "Simulation and Modeling",
  "Computer Graphics",
  "Cloud Computing",
  "Advanced Database Management Systems",
  "Machine Learning",
  "	Data Mining",
  "Introduction to Bioinformatics",
  "Digital Image Processing",
  "Big Data Analytics",
  "Human Computer Interaction",
  "Software Architecture",
  "Web Programming",
  "Mobile Application Development",
  "Software Testing and Quality Assurance",
  "Game Design and Development",
  "Digital System Design",
  "Real-time Embedded Systems",
  "VLSI Design",
  "Robotics",
  "Interfacing",
  "Enterprise Systems: Concepts and Practice",
  "Web Application Security",
  "Electronic Business",
  "Web Programming",
  "Mobile Application Development",
  "UI: Concepts and Design",
  "IT Audit: Concepts and Practice",
  "Cloud Computing",
  "Software Testing and Quality Assurance",
];

// Sort names in ascending order
let sortedNames = names.sort();

// Reference to input
let input = document.getElementById("input");

// Execute function on keyup
input.addEventListener("keyup", (e) => {
  // Remove all elements first
  removeElements();

  // Convert input to lowercase and split it into characters
  let query = input.value.toLowerCase();
  if (query === "") return;

  for (let name of sortedNames) {
    // Split the course name into words and check the first letter of each word
    const words = name.split(" ");
    const firstLetters = words.map(word => word[0].toLowerCase()).join("");
    
    // Check both conditions:
    // 1. If the first letters of the course name match the query
    // 2. If the course name starts with the query
    if (
      firstLetters.startsWith(query) || name.toLowerCase().startsWith(query)
    ) {
      // Create li element
      let listItem = document.createElement("li");
      // One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + name + "')");

      // Highlight the matching part
      let highlightedName = words
        .map((word, index) => {
          const wordStart = query[index] ? word[0].toLowerCase() === query[index] : false;
          return wordStart
            ? "<b>" + word[0] + "</b>" + word.slice(1)
            : word;
        })
        .join(" ");

      // Display the value in the list
      listItem.innerHTML = highlightedName;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});

function displayNames(value) {
  input.value = value;
  removeElements();
}

function removeElements() {
  // Clear all items
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}