//Updated routes for user profile service

module.exports = app =>  {
	
	//initialize router
	var router = require("express").Router();
	
	const userProfile = require("../controllers/user.profile.controller.js");

	//------------------------------------------------
	//create user profile
	router.post("/user", userProfile.create);
	
	//retrieve all user profiles
	router.get("/users", userProfile.findAll);
	
	//retrieve single user profile with id
	router.get("/user/:id", userProfile.findOne);
	
	//retrieve user profile with email
	router.get("/userprofile", userProfile.findByEmail);
	
	//update user profile by id
	router.put("/user/:id", userProfile.update);
	
	//delete user profile by id
	router.delete("/user/:id", userProfile.delete);
	
	//delete all user profiles
	router.delete("/users", userProfile.deleteAll);
	
	//------------------------------------------------
	//register endpoint
	app.use('/api', router);
};