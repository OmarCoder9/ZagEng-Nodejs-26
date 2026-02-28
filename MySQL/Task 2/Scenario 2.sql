CREATE TABLE DOCTOR (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    hire_date DATE NOT NULL,
    salary DECIMAL(10,2) NOT NULL CHECK (salary > 0),
    consultations_count INT CHECK (consultations_count >= 0)
);

CREATE TABLE PATIENT (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL CHECK (age > 0),
    gender VARCHAR(10),
    admission_date DATE NOT NULL,
    room_type VARCHAR(50),
    bill_amount INT CHECK (bill_amount >= 0),
    status VARCHAR(50)
);

INSERT INTO DOCTOR (name, specialization, hire_date, salary, consultations_count) VALUES
('Ahmed Hassan', 'Cardiology', '2023-03-15', 25000, 320),
('Sara Mohamed', 'Neurology', '2025-07-10', 22000, 210),
('Omar Ali', 'Orthopedics', '2017-01-20', 27000, 400),
('Mona Ibrahim', 'Pediatrics', '2020-11-05', 20000, 280),
('Khaled Youssef', 'Dermatology', '2025-06-01', 18000, 150);

INSERT INTO PATIENT (name, age, gender, admission_date, room_type, bill_amount, status) VALUES
('Ali Mahmoud', 45, 'Male', '2026-02-10', 'Private', 15000, 'Admitted'),
('Nour Ahmed', 30, 'Female', '2026-02-12', 'General', 8000, 'Discharged'),
('Youssef Adel', 60, 'Male', '2026-02-14', 'ICU', 25000, 'Admitted'),
('Hana Samir', 25, 'Female', '2026-02-16', 'Private', 12000, 'Discharged'),
('Karim Tarek', 50, 'Male', '2026-02-18', 'General', 9000, 'Admitted');

--TASK 1
SELECT name, specialization, salary
FROM doctor
WHERE hire_date > '2022-01-01'
ORDER BY salary DESC
LIMIT 5;

--TASK 2
SELECT room_type, COUNT(*), MAX(bill_amount), MIN(bill_amount), SUM(bill_amount)
FROM patient
GROUP BY room_type
HAVING SUM(bill_amount) > 5000;

--TASK 3
SELECT name, LENGTH(name), DATEDIFF(CURDATE(), admission_date)
FROM patient;
SELECT specialization, LOWER(specialization)
FROM doctor;


--TASK 4
ALTER TABLE doctor
ADD email VARCHAR(255);

UPDATE doctor 
SET salary = salary + salary * 0.1 
WHERE specialization = 'Cardiology';

DELETE FROM patient
WHERE status = 'discharged';

ALTER TABLE patient
MODIFY bill_amount DECIMAL(10,2)



