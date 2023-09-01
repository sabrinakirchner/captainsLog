const express = require('express'); 
const router = express.Router(); 
const Log = require('../models/logs');
const mongoose = require('mongoose');  


//route
router.post('/Log', async (req, res)=> {
    const { title, entry, shipIsBroken } = req.body;
    const log = new log({
        title,
        entry, 
        shipIsBroken: shipIsBroken === 'true', 
    }); 
    await log.save();
    res.send('received')
    //localStorage.push(log); 
    //res.redirect('/logs/new'); 
    
});


//Index
router.get('/logs', async(req, res) =>{
    const logs = await Log.find();
    res.render('Index', { logs});
});


//new
router.get('/logs/new', (req, res) => {
    res.render('New');
});


//delete 
router.delete('/logs/:id', async (req, res) =>{
    try{
        const deletedLog = await Log.findByIdAndDelete(req.params.id);
        if(!deletedLog){
            return res.status(404).send('Log not found'); 
        }
        res.redirect('/logs');
    }catch (error){
        res.status(500).send('error deleting log'); 
    }
});


//update 
router.put('/logs/:id', async (req,res) =>{
    try{
        const updateLog = await Log.findByIdAndUpdate(req.params.id.body, {new: tru});
        if(!updatedLog){
            return res.status(404).send('log not found');
        }
        res.redirect('/log/${updatedLog._id}');
    } catch(error){
        res.status(500).send('Error updating log'); 
    }
}); 



//create 
router.post('/logs', (req, res) => {
    const { title, entry, shipIsBroken } =req.body; 
    const log = {
        title, 
        entry, 
        shipIsBroken: shipIsBroken === 'true', 
    };
    log.push(log);

    res.send('received'); 
})

const logSchema = new mongoose.Schema({
    title:String, 
    entry:String, 
    schipIsBronken: {type: Boolean, default: true}, 

}, { timestamps: true }); 


//edit 
router.get('/logs/:id/edit', async(req,res) =>{
    try{
        const log = await Log.findById(req.params.id);
        if(!log){
            return res.status(404).send('Log not found');
        }
        res.render('Edit', { log }); 
    }catch (error){
        res.status(500).send('Error fetching log'); 
    }
});


//show 
router.get('/logs/:id', async (req,res) =>{
    try{
    const log = await log.findById(req.params.id); 
    if(!log){
        return res.status(404).send('Log not found')
    }
    res.render('show', { log });
    }catch (error) {
        res.status(500).send('Error fetching log'); 
    }
}); 

module.exports = router;