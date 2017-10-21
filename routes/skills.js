const Skills = require('../controllers/skillController');


module.exports= app =>{
	app.get('/skills',Skills.getSkills);
	app.post('/skills',Skills.addSkill);
	app.put('/skills/:id',Skills.editSkill);
}