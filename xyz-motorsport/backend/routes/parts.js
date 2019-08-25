const router = require('express').Router();
let Part = require("../models/parts.model");

router.route('/').get((req, res) => {
    Part.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ data });
      });
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    const type = req.body.type;
    const brand = req.body.brand;
    const picid = req.body.picid;

    const newPart = new Part({name, price, type, brand, picid});

    newPart.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
      });
});

router.route('/:id').get((req, res) => {
    Part.findById(req.params.id, (err, data) => {
        if (err) return res.json({success: false, err: err});
        return res.json({success: true, data: data});
    })
});

router.route('/:id').delete((req, res) => {
    Part.findByIdAndDelete(req.params.id, (err) => {
        if (err) return res.json({success: false, err: err});
        return res.json({success: true, data: "deleted"});
    })
});

router.route('/update/:id').post((req, res) => {
    Part.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) return res.json({success: false, err: err});
        return res.json({success: true, update: req.body});
    });
    
});

module.exports = router;