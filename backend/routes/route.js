const router = require('express').Router();

// Importing controllers
const {
    adminRegister,
    adminLogIn,
    getAdminDetail
} = require('../controllers/admin-controller.js');

const {
    sclassCreate,
    sclassList,
    deleteSclass,
    deleteSclasses,
    getSclassDetail,
    getSclassStudents
} = require('../controllers/class-controller.js');

const {
    complainCreate,
    complainList
} = require('../controllers/complain-controller.js');

const {
    noticeCreate,
    noticeList,
    deleteNotices,
    deleteNotice,
    updateNotice
} = require('../controllers/notice-controller.js');

const {
    studentRegister,
    studentLogIn,
    getStudents,
    getStudentDetail,
    deleteStudents,
    deleteStudent,
    updateStudent,
    studentAttendance,
    deleteStudentsByClass,
    updateExamResult,
    clearAllStudentsAttendanceBySubject,
    clearAllStudentsAttendance,
    removeStudentAttendanceBySubject,
    removeStudentAttendance
} = require('../controllers/student_controller.js');

const {
    subjectCreate,
    classSubjects,
    deleteSubjectsByClass,
    getSubjectDetail,
    deleteSubject,
    freeSubjectList,
    allSubjects,
    deleteSubjects
} = require('../controllers/subject-controller.js');

const {
    teacherRegister,
    teacherLogIn,
    getTeachers,
    getTeacherDetail,
    deleteTeachers,
    deleteTeachersByClass,
    deleteTeacher,
    updateTeacherSubject,
    teacherAttendance
} = require('../controllers/teacher-controller.js');

// Test endpoint
router.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Admin
router.post('/AdminReg', adminRegister);
router.options('/AdminReg', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

router.post('/AdminLogin', adminLogIn);
router.options('/AdminLogin', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

router.get("/Admin/:id", getAdminDetail);

// Student
router.post('/StudentReg', studentRegister);
router.options('/StudentReg', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

router.post('/StudentLogin', studentLogIn);
router.options('/StudentLogin', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

// Additional student routes...

// Teacher
router.post('/TeacherReg', teacherRegister);
router.options('/TeacherReg', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

router.post('/TeacherLogin', teacherLogIn);
router.options('/TeacherLogin', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

// Additional teacher routes...

// Notice
router.post('/NoticeCreate', noticeCreate);
router.options('/NoticeCreate', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

// Additional notice routes...

// Complain
router.post('/ComplainCreate', complainCreate);
router.options('/ComplainCreate', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

// Additional complain routes...

// Sclass
router.post('/SclassCreate', sclassCreate);
router.options('/SclassCreate', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

// Additional Sclass routes...

// Subject
router.post('/SubjectCreate', subjectCreate);
router.options('/SubjectCreate', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://sams-frontend-on-versel--mocha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(200);
});

// Additional subject routes...

module.exports = router;
