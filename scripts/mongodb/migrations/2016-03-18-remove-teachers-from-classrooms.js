// Usage: copy and paste into mongo

var teacherRoles = ['teacher', 'technology coordinator', 'advisor', 'principal', 'superintendent'];

db.users.find({'role': {$in: teacherRoles}}, {_id: 1, name: 1, email: 1, role: 1}).forEach(function(user) {
    print('Updating user', JSON.stringify(user));
    print(db.classrooms.find({members: user._id}, {name: 1}).toArray().length);
    print(db.classrooms.update({members: user._id}, {$pull: {members: user._id}}, {multi: true}));
});

