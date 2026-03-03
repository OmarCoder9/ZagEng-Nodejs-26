CREATE TABLE depatments(
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL,
);

CREATE TABLE doctors(
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_name VARCHAR(80) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    dept_id INT NOT NULL,
    Foreign Key (dept_id) REFERENCES depatments(dept_id)
);

ALTER TABLE depatments
ADD head_doctor_id INT,
ADD FOREIGN KEY(head_doctor_id) REFERENCES doctors(doctor_id);

CREATE TABLE patients(
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_name VARCHAR(80) NOT NULL,
    date_of_birth DATE NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

CREATE TABLE appointments(
    appintment_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    diagnosis VARCHAR(255),
    fee INT NOT NULL,
    Foreign Key (doctor_id) REFERENCES doctors(doctor_id),
    Foreign Key (patient_id) REFERENCES patients(patient_id)
);

INSERT INTO depatments (dept_name) VALUES
('Cardiology'),
('Neurology'),
('Orthopedics');

INSERT INTO doctors (doctor_name, specialization, dept_id) VALUES
('Ahmed Salah', 'Cardiologist', 1),
('Hossam Ali', 'Cardiologist', 1),
('Omar Tamer', 'Neurologist', 2),
('Ziad Fathy', 'Orthopedic Surgeon', 3);

UPDATE depatments
SET head_doctor_id = 1 WHERE dept_id = 1;

UPDATE depatments
SET head_doctor_id = 3 WHERE dept_id = 2;

UPDATE depatments
SET head_doctor_id = 4 WHERE dept_id = 3;

INSERT INTO patients (patient_name, date_of_birth, phone_number) VALUES
('Ali Hassan', '1985-05-12', '01011112222'),
('Sara Mahmoud', '1990-08-20', '01033334444'),
('Mona Fathy', '1978-03-15', '01055556666');

INSERT INTO appointments (doctor_id, patient_id, appointment_date, diagnosis, fee) VALUES
(1, 1, '2026-03-01', 'High blood pressure', 500),
(1, 2, '2026-03-02', 'Checkup', 450),
(2, 3, '2026-03-03', 'Heart disease follow-up', 600),
(3, 1, '2026-03-01', 'Migraine', 400),
(4, 2, '2026-03-02', 'Knee pain', 350);

SELECT d.dept_id, d.dept_name, doc.doctor_id, doc.doctor_name
FROM depatments d LEFT JOIN doctors doc
ON d.head_doctor_id = doc.doctor_id

SELECT doc.doctor_name, SUM(a.fee)
FROM doctors doc JOIN appointments a
ON doc.doctor_id = a.doctor_id
GROUP BY doc.doctor_name;

SELECT AVG(a.fee)
FROM doctors doc JOIN appointments a
ON doc.doctor_id = a.doctor_id
WHERE doc.dept_id = (SELECT dept_id FROM depatments WHERE dept_name = "Cardiology");