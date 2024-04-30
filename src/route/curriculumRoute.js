import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {

    try {
        const curriculums = await req.context.models.Curriculum.findAll();

        if(curriculums.length === 0) {
            return res.status(404).send('No curriculums found');
        } 
        
        return res.send(curriculums);

       
    } catch (err) {
        return res.status(500).send('Error on search. ' + err.message);
    }
});

router.get('/:curriculumId', async (req, res) => {
    try {
        const curriculum = await req.context.models.Curriculum.findByPk(req.params.curriculumId);

        if(!curriculum) {
            return res.status(404).send('Curriculum not found');
        }

        return res.send(curriculum);
    } catch (err) {
        return res.status(500).send('Error on search. ' + err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const curriculum = await req.context.models.Curriculum.create(req.body);

        return res.send(curriculum);
    } catch (err) {
        return res.status(500).send('Error on create. ' + err.message);
    }
});

router.put('/:curriculumId', async (req, res) => {
    try {
        const curriculum = await req.context.models.Curriculum.findByPk(req.params.curriculumId);

        if(!curriculum) {
            return res.status(404).send('curriculum not found');
        }

        await curriculum.update(req.body);

        return res.send(curriculum);
    } catch (err) {
        return res.status(500).send('Error on update. ' + err.message);
    }
});

router.delete('/:curriculumId', async (req, res) => {
    try {
        const curriculum = await req.context.models.Curriculum.findByPk(req.params.curriculumId);

        if(!curriculum) {
            return res.status(404).send('curriculum not found');
        }

        await curriculum.destroy();

        return res.send('curriculum deleted');
    } catch (err) {
        return res.status(500).send('Error on delete. ' + err.message);
    }
});

export default router;