const express = require('express')

module.exports = {
    inicio: (req, res) => {
        res.render('index')
    }
}