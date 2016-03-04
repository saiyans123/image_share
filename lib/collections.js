Images = new Mongo.Collection("images");

//set up security on Images Collection
Images.allow({
	insert:function(userId, doc){
		console.log("testing security on image insert");
		if (Meteor.user()){
			if(userId != doc.createdBy){//the user is messing about
				return false;
			}
			else {// the user is logged in, the image is correct
				return true;
			}
		}
		else {// user not logged in
			return false;
		}
	},
	remove:function(userId, doc){
		return true;
	}
})