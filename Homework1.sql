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








