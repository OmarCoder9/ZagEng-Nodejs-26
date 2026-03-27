use("library")
db.users.insertMany([
    {_id:1, name: "Omar", age:19, role:"Owner"},
    {_id:2, name: "Zeyad", age:24, role:"Supervisor"},
    {_id:3, name:"Yassin", age:16, role:"Visitor"},
    {_id:4, name:"Youssef", age:21, role:"Admin"},
    {_id:5, name:"Abdullah", age:22}
]);

db.books.insertMany([
    {_id:1, title:"Elden Rings", pageCount:160},
    {_id:2, title:"Harry Potter and the Chambre of Secrets", pageCount:300},
    {_id:3, title:"Mongo Basics", pageCount:100},
    {_id:4, title:"Differential Equations", pageCount:500}
])
// Write a query to find all users who are older than 21.
db.users.find({age:{$gt:21}})

//Find users who are either: admins OR younger than 20
db.users.find({$or:[{role:"Admin"},{age:{$lt:20}}]})

//Find users whose age is between 20 and 30.
db.users.find({age:{$gte:20, $lte:30}})

//Write a query to find users who don't have role field
db.users.find({role:{$exists:false}})

//Write a query to find all books with more than 200 pages.
db.books.find({pageCount:{$gt:200}})

//Find books where: title is "Mongo Basics" OR pages are less than 180
db.books.find({$or:[{title:"Mongo Basics"}, {pageCount:{$lt:180}}]})

//Write a query to return the top 2 longest books (based on pages).
db.books.find({}, {title:1, pageCount:1,_id:0}).sort({pageCount:-1}).limit(2)

// Update all users younger than 21 by increasing their age by 1.
db.users.updateMany({age:{$lt:21}}, {$inc:{age:1}})

//Add a new field isActive: true to all admins.
db.users.updateMany({role:"Admin"}, {$set:{isActive:true}})

//Delete all users younger than 18.
db.users.deleteMany({age:{$lt:18}})

//Delete books that have less than 150 pages.
db.books.deleteMany({pageCount:{$lt:150}})