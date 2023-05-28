-- Create Tables


CREATE TABLE Student (
	id  serial PRIMARY KEY NOT NULL,
	FirstName varchar(30) NULL,
	LastName varchar(30) NULL,
	DateOfBirth date NULL,
	EnrolledDate date NULL,
	Gender nchar(1) NULL,
	NationalIDNumber varchar(8) NULL,
	StudentCardNumber varchar(8) NULL
);

CREATE TABLE Course (
	id serial PRIMARY KEY NOT NULL,
	Name varchar(50) NULL,
	Credit varchar(50) NULL,
	AcademicYear varchar(4) NULL,
	Semester nchar(1) NULL
);

CREATE TABLE Teacher(
	id serial PRIMARY KEY NOT NULL,
	FirstName varchar(20) NULL,
	LastName varchar(20) NULL,
	DateOfBirth date NULL,
	AcademicRank varchar(20) NULL,
	HireDate date NULL
);

CREATE TABLE Grade(
	id serial PRIMARY KEY NOT NULL,
	StudentID integer NULL,
	CourseID integer NULL,
	TeacherID integer NULL,
	Grade smallint NULL,
	Comment varchar(100) NULL,
	CreatedDate date NULL
);

CREATE TABLE GradeDetails(
	id serial PRIMARY KEY NOT NULL,
	GradeID integer NULL,
	AchievementTypeID integer NULL,
	AchievementPoints varchar(20) NULL,
	AchievementMaxPoints varchar(20) NULL,
	AchievementDate date NULL
);

CREATE TABLE AchievementType(
	id serial PRIMARY KEY NOT NULL,
	Name varchar(50) NULL,
	Description varchar(100),
	ParticipationRate varchar(10) NULL
);


-- Inerst Dummy Data


INSERT INTO Student (FirstName, LastName, DateOfBirth, EnrolledDate, Gender, NationalIDNumber, StudentCardNumber)
VALUES
('John', 'Doe', '1995-08-15', '2020-09-01', 'M', '12345678', 'S1234567'),
('Jane', 'Smith', '1998-03-22', '2020-09-01', 'F', '87654321', 'S7654321'),
('Michael', 'Johnson', '1997-11-05', '2020-09-01', 'M', '54321678', 'S5432167');


INSERT INTO Course (Name, Credit, AcademicYear, Semester)
VALUES
('Mathematics', '3', '2022', '1'),
('English', '2', '2022', '1'),
('Physics', '4', '2022', '2');


INSERT INTO Teacher (FirstName, LastName, DateOfBirth, AcademicRank, HireDate)
VALUES
('Sarah', 'Wilson', '1980-07-10', 'Professor', '2015-09-01'),
('David', 'Lee', '1975-05-25', 'Associate Professor', '2010-02-15'),
('Jennifer', 'Brown', '1985-12-03', 'Assistant Professor', '2018-06-30');


INSERT INTO Grade (StudentID, CourseID, TeacherID, Grade, Comment, CreatedDate)
VALUES
(1, 1, 1, 8, 'Good job!', '2023-05-10'),
(1, 2, 2, 9, 'Excellent work!', '2023-05-15'),
(2, 1, 1, 7, 'Keep it up!', '2023-05-12');


INSERT INTO GradeDetails (GradeID, AchievementTypeID, AchievementPoints, AchievementMaxPoints, AchievementDate)
VALUES
(1, 1, '10', '15', '2023-05-10'),
(1, 2, '20', '20', '2023-05-10'),
(2, 1, '15', '15', '2023-05-15');


INSERT INTO AchievementType (Name, Description, ParticipationRate)
VALUES
('Attendance', 'Attendance record', '80%'),
('Homework', 'Homework assignments', '100%');


-- Homework requirement 1/3

-- 1

SELECT COUNT (*) AS grades_count
FROM grade

-- 2

SELECT t.id AS teacherid, t.firstname, t.lastname, COUNT(g.id) AS total_grades
FROM teacher t
LEFT JOIN grade g ON t.id = g.teacherid
GROUP BY t.id, t.FirstName, t.lastname;

-- 3

SELECT t.id AS teacherid, t.firstname, t.lastname, COUNT(g.id) AS total_grades
FROM teacher t
LEFT JOIN grade g ON t.id = g.teacherid
INNER JOIN student s ON g.studentid = s.id
WHERE s.id < 100
GROUP BY t.id, t.firstname, t.lastname;

-- 4

SELECT studentid, MAX(grade) AS max_grade, AVG(grade) AS average_grade
FROM grade
GROUP BY studentid;


-- Homework requirement 2/3

-- 1

SELECT t.id AS teacher_id, t.firstname, t.lastname, COUNT(g.id) AS total_grades
FROM teacher t
LEFT JOIN grade g ON t.id = g.teacherid
GROUP BY t.id, t.firstname, t.lastname
HAVING COUNT(g.id) > 200;

-- 2

SELECT t.id AS teacherid, t.firstname, t.lastname, COUNT(g.id) AS total_grades
FROM teacher t
LEFT JOIN grade g ON t.id = g.teacherid
INNER JOIN student s ON g.studentid = s.id
WHERE s.id < 100
GROUP BY t.id, t.firstname, t.lastname
HAVING COUNT(g.id) > 50;

-- 3

SELECT studentid, COUNT(*) AS grade_count, MAX(grade) AS max_grade, AVG(grade) AS average_grade
FROM grade
GROUP BY studentid
HAVING MAX(grade) = AVG(grade);

-- 4

SELECT s.firstname, s.lastname, g.grade_count, g.max_grade, g.average_grade
FROM (SELECT studentid, COUNT(*) AS grade_count, MAX(grade) AS max_grade, AVG(grade) AS average_grade
FROM grade
GROUP BY studentid
HAVING MAX(grade) = AVG(grade)) g
JOIN student s ON g.studentid = s.id;

-- Homework requirement 3/3

-- 1

CREATE VIEW vw_StudentGrades AS
SELECT studentid, COUNT(*) AS grade_count
FROM grade
GROUP BY studentid;

SELECT * FROM vw_StudentGrades;

-- 2

CREATE OR REPLACE VIEW vw_StudentGrades 
AS
SELECT s.firstname, s.lastname, COUNT(*) AS grade_count
FROM grade g
JOIN student s ON g.studentid = s.id
GROUP BY s.firstname, s.lastname;

-- 3

SELECT *
FROM vw_StudentGrades 
ORDER BY grade_count DESC;

-- 4

CREATE VIEW vw_StudentGradeDetails AS
SELECT s.firstname, s.lastname, COUNT(DISTINCT g.courseid) AS passed_courses_count
FROM student s
LEFT JOIN grade g ON s.id = g.studentid
WHERE g.grade >= 50
GROUP BY s.firstname, s.lastname;

SELECT * FROM vw_StudentGradeDetails;