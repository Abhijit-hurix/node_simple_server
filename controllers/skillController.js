const mongoose = require("mongoose");
const SkillModel = mongoose.model("skills");

exports.addSkill = function(req,res,next){
	const name = req.body.name;
	const status = req.body.status;

	SkillModel.findOne({ name: name}).then(existingSkill=>{
		if(existingSkill){
			return res.status(422).send({error:'Provided skill is allready avaiable.'});
		}else{
			const currentSkill =new SkillModel({
			name: name,
			status: status

		});
		currentSkill.save(function(err){
			if(err){
				return next(err);
			}
			res.send([{currentSkill:currentSkill}]);

		});


		}
	});
};

exports.editSkill = function(req,res,next){
	SkillModel.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
		SkillModel.findOne({_id:req.params.id}).then(editedSkill=>{
			res.send(editedSkill);
		})
	});
};

exports.getSkills = function(req,res,next){
	SkillModel.find({}).then(skills => {
		res.send(skills);
	});
};
