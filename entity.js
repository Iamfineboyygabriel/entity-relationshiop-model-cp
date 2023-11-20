// Gymnasium:
//   - GymnasiumName (string)
//   - Address (string)
//   - TelephoneNumber (string)

// Member:
//   - MemberID (string)
//   - LastName (string)
//   - FirstName (string)
//   - Address (string)
//   - DateOfBirth (date)
//   - Gender (string)

// Session:
//   - SessionID (string)
//   - SportType (string)
//   - Schedule (datetime)

// Coach:
//   - CoachID (string)
//   - LastName (string)
//   - FirstName (string)
//   - Age (integer)
//   - Specialty (string)

// RegistersAt (relationship between Gymnasium and Member):
//   - Many Members can register at one Gymnasium.

// TakesPlaceAt (relationship between Gymnasium and Session):
//   - Many Sessions can take place at one Gymnasium.

// Attends (relationship between Member and Session):
//   - Many Members can attend one Session.
//   - A Session can be attended by many Members.

// Leads (relationship between Coach and Session):
//   - Many Coaches can lead one Session.
//   - A Session can be led by many Coaches.



// -- Creating Gymnasium table
// CREATE TABLE Gymnasium (
//     GymnasiumID INT PRIMARY KEY AUTO_INCREMENT,
//     GymnasiumName VARCHAR(255) NOT NULL,
//     Address VARCHAR(255) NOT NULL,
//     TelephoneNumber VARCHAR(20) NOT NULL
// );

// -- Creating Member table
// CREATE TABLE Member (
//     MemberID INT PRIMARY KEY AUTO_INCREMENT,
//     LastName VARCHAR(255) NOT NULL,
//     FirstName VARCHAR(255) NOT NULL,
//     Address VARCHAR(255) NOT NULL,
//     DateOfBirth DATE NOT NULL,
//     Gender VARCHAR(10) NOT NULL
// );

// -- Creating Session table
// CREATE TABLE Session (
//     SessionID INT PRIMARY KEY AUTO_INCREMENT,
//     SportType VARCHAR(255) NOT NULL,
//     Schedule DATETIME NOT NULL
// );

// -- Creating Coach table
// CREATE TABLE Coach (
//     CoachID INT PRIMARY KEY AUTO_INCREMENT,
//     LastName VARCHAR(255) NOT NULL,
//     FirstName VARCHAR(255) NOT NULL,
//     Age INT NOT NULL,
//     Specialty VARCHAR(255) NOT NULL
// );

// -- Creating relationship tables

// -- RegistersAt relationship table
// CREATE TABLE RegistersAt (
//     MemberID INT,
//     GymnasiumID INT,
//     PRIMARY KEY (MemberID, GymnasiumID),
//     FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
//     FOREIGN KEY (GymnasiumID) REFERENCES Gymnasium(GymnasiumID)
// );

// -- TakesPlaceAt relationship table
// CREATE TABLE TakesPlaceAt (
//     SessionID INT,
//     GymnasiumID INT,
//     PRIMARY KEY (SessionID, GymnasiumID),
//     FOREIGN KEY (SessionID) REFERENCES Session(SessionID),
//     FOREIGN KEY (GymnasiumID) REFERENCES Gymnasium(GymnasiumID)
// );

// -- Attends relationship table
// CREATE TABLE Attends (
//     MemberID INT,
//     SessionID INT,
//     PRIMARY KEY (MemberID, SessionID),
//     FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
//     FOREIGN KEY (SessionID) REFERENCES Session(SessionID)
// );

// -- Leads relationship table
// CREATE TABLE Leads (
//     CoachID INT,
//     SessionID INT,
//     PRIMARY KEY (CoachID, SessionID),
//     FOREIGN KEY (CoachID) REFERENCES Coach(CoachID),
//     FOREIGN KEY (SessionID) REFERENCES Session(SessionID)
// );
