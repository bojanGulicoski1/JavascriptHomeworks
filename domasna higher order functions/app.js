/* Requirements
Using only async/await syntax fetch the students from this endpoing "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

After you have the data display the following informations in the HTML

ONLY USE HIGHER ORDER FUNCTIONS
DO NOT MUTATE OR CHANGE OR SORT THE ORIGINAL DATA

1 Show the average age and average grade of all students combidata +
2 Show the number of students that are over 60 and the number of students that are under 30 years old +
3 Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above +
4 Find the student named Artuh Cador and display all of his information
5 Find the oldest and youngest student and display their information on the screen
6 Show a list of the full names of students that have a last name longer than 8 characters
7 Show a list of the top 10 best students by average grade
8 Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18) */
const fetchedData = async () => {
  //Fetching data with async function
  const res = await fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  );
  const data = await res.json();

  //Ex.1 Show the average age and average grade of all students combidata
  const averageAgeAndGrade = data.reduce(
    (acc, curr) => acc + (curr.age + curr.averageGrade) / 200,
    0
  );
  console.log(averageAgeAndGrade);

  //Ex.2 Show the number of students that are over 60 and the number of students that are under 30 years old
  const studentsUnder30 = data.filter((student) => student.age <= 30);
  const studentsOver60 = data.filter((student) => student.age >= 60);
  console.log(studentsUnder30);
  console.log(studentsOver60);

  //Ex.3 Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
  const excersizeThree = data
    .filter((student) => student.age >= 30 && student.averageGrade >= 4)
    .map(
      (student) => `${student.firstName} ${student.lastName} - ${student.city}`
    );

  console.log(excersizeThree);

  //Ex.4 Find the student named Artuh Cador and display all of his information
  const findArthur = data.find((student) => student.firstName === "Arthur");
  console.log(findArthur);

  //Ex.5 Find the oldest and youngest student and display their information on the screen
  const oldestStudent = data.sort((a, b) => a.age - b.age);
  console.log(oldestStudent[0], oldestStudent[oldestStudent.length - 1]);

  //Ex.6 Show a list of the full names of students that have a last name longer than 8 characters
  const longLastName = data.filter(
    (student) => student.lastName && student.lastName.length > 8
  );

  console.log(longLastName);

  //Ex.7 Show a list of the top 10 best students by average grade
  const averageGradeTop10 = data
    .sort((a, b) => a.averageGrade - b.averageGrade)
    .slice(-10);
  console.log(averageGradeTop10);

  //Ex.8 Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
  const avgGrade = data.some((student) => student.averageGrade === 1);
  console.log(avgGrade);

  const allUsersAbove18 = data.every((student) => student.age >= 18);
  console.log(allUsersAbove18);
  return data;
};
fetchedData();
