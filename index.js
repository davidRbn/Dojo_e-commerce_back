const express = require('express')
const app = express()
const connection = require('./conf')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({
        extended: true
}));

app.get('/', (req,res)  => {
    res.send('home')
})


// Affiche all users :
app.get('/users', (req,res) => {
    connection.query(`SELECT * FROM user`, (err, results) => {
        if (err) {
            res.send(`erreur durant l'affichage des users`)
        } else {
            res.send(results)
        }
    })
})

// Affiche all products :
app.get('/products', (req,res) => {
    connection.query(`SELECT * FROM product`, (err, results) => {
        if (err) {
            res.send(`erreur durant l'affichage des produits`)
        } else {
            res.send(results)
        }
    })
})

//Récupérer un user :

app.get('/users/:id', (req,res) => {
    const id = req.params.id
    connection.query(`SELECT * FROM user WHERE iduser=${id}`, (err, results) => {
        if (err) {
            res.send(`erreur durant l'affichage du user`)
        } else {
            res.send(results)
        }
    })
})

//Ajouter un user :

app.post('/users',(req,res) =>{
    const userData = req.body
    connection.query(`INSERT INTO user SET ?`,userData,(err,results) =>{
        if (err) {
            res.send(`erreur durant l'ajout du user`)
        } else {
            res.send(results)
        }
    })
})

//Modifier un user:
app.put('/users/:email', (req, res) => {
    const userData = req.body
    const userEmail = req.params.email
    console.log(userEmail)
    connection.query(`UPDATE user SET ? WHERE email=?`, [userData, userEmail], (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.send('modification effectuée')
        }
    })
})

// Delete a user :
app.delete('/users',(req,res) => {
    const userData = req.body
    connection.query(`DELETE FROM user WHERE email=?`,userData, (err,results) => {
        if (err) {
            res.send('erreur lors de la modification des données')
        } else {
            res.send('modification effectuée')
        } 
    }) 
})

//Ajouter un produit :

app.post('/products',(req,res) =>{
    const productData = req.body
    connection.query(`INSERT INTO product SET ?`,productData,(err,results) =>{
        if (err) {
            res.send(`erreur durant l'ajout du produit`)
        } else {
            res.send(`nouveau produit ajouté avec succès`)
        }
    })
})

//Modifier un produit:
app.put('/products/:name', (req, res) => {
    const productData = req.body
    const productName = req.params.name
    connection.query(`UPDATE product SET ? WHERE name=?`, [productData, productName], (err, results) => {
        if (err) {
            res.send('erreur lors de la modification des données')
        } else {
            res.send('modification effectuée')
        }
    })
})

// Supprimer un produit

app.delete('/products',(req,res) => {
    const productData = req.body.name
    connection.query(`DELETE FROM product WHERE name=?`,productData, (err,results) => {
        if (err) {
            res.send(err)
        } else {
            res.send('suppression effectuée')
        } 
    }) 
})

// Affiche des produits en fonction d' une catégorie :
app.get('/products/:category', (req,res) => {
    const category = req.params.category
    connection.query(`SELECT name FROM product WHERE category=?`,category, (err, results) => {
        if (err) {
            res.send(`erreur durant l'affichage des produits`)
        } else {
            res.send(results)
        }
    })
})


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`evertything is alright on port ${port}`)
    }
})